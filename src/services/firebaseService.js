import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { DEFAULT_PROJECTS_LIST, DEFAULT_JOURNAL_POSTS } from '../data/defaultData';

// Firebase configuration strictly from environment variables (No old Adobek-Interior fallbacks)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
};

// Check if valid Firebase credentials are provided
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  !firebaseConfig.apiKey.includes('your_') &&
  firebaseConfig.projectId !== 'adobek-interior' &&
  firebaseConfig.apiKey.trim().length > 0
);

// Initialize Firebase App
let app;
let db = null;
let auth = null;
let storage = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
  } catch (error) {
    console.warn('Firebase initialization error, using local storage fallback:', error);
  }
}

export { db, auth, storage };

// ----------------------------------------------------
// 0. IMAGE UPLOAD HELPER
// ----------------------------------------------------

/**
 * Upload an image file to Firebase Storage and return the download URL.
 * @param {File} file - The image file to upload
 * @param {string} folder - Storage folder (e.g. 'projects')
 * @returns {{ success: boolean, url?: string, error?: string }}
 */
export async function uploadImage(file, folder = 'images') {
  if (!file) return { success: false, error: 'No file provided' };

  if (isFirebaseConfigured && storage) {
    try {
      const timestamp = Date.now();
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const storageRef = ref(storage, `images/${folder}/${timestamp}_${safeName}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return { success: true, url: downloadURL };
    } catch (error) {
      console.error('Firebase Storage upload error:', error);
      return { success: false, error: error.message || 'Upload failed' };
    }
  }

  // Fallback: convert to data URL for offline/demo mode
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ success: true, url: reader.result });
    reader.onerror = () => resolve({ success: false, error: 'Failed to read file' });
    reader.readAsDataURL(file);
  });
}

// ----------------------------------------------------
// 1. LEAD & CONSULTATION INQUIRIES MANAGEMENT
// ----------------------------------------------------

/**
 * Save a new consultation booking enquiry
 */
export async function submitConsultation(inquiryData) {
  const payload = {
    ...inquiryData,
    createdAt: new Date().toISOString(),
    status: 'new' // 'new' | 'contacted' | 'completed'
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'consultations'), {
        ...payload,
        serverTimestamp: serverTimestamp()
      });
      return { success: true, id: docRef.id, isLive: true };
    } catch (error) {
      console.error('Firestore consultation error, saving locally:', error);
    }
  }

  // Local fallback storage for offline/demo development
  const localList = JSON.parse(localStorage.getItem('adobek_consultations') || '[]');
  const localId = 'lead_' + Date.now();
  const localLead = { ...payload, id: localId };
  localList.unshift(localLead);
  localStorage.setItem('adobek_consultations', JSON.stringify(localList));

  return { success: true, id: localId, isLive: false };
}

/**
 * Fetch all consultation inquiries for Admin Portal
 */
export async function getConsultations() {
  if (isFirebaseConfigured && db) {
    try {
      const q = query(collection(db, 'consultations'), orderBy('serverTimestamp', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (error) {
      console.warn('Could not fetch from Firestore, reading local leads:', error);
    }
  }

  return JSON.parse(localStorage.getItem('adobek_consultations') || '[]');
}

// ----------------------------------------------------
// 2. DYNAMIC PROJECTS CMS
// ----------------------------------------------------

/**
 * Get all studio projects (Firestore with fallback to PROJECTS_LIST)
 */
export async function getDynamicProjects() {
  if (isFirebaseConfigured && db) {
    try {
      const snapshot = await getDocs(collection(db, 'projects'));
      if (!snapshot.empty) {
        return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    } catch (error) {
      console.warn('Firestore projects fetch failed, using default list:', error);
    }
  }

  // Return local storage or default project list
  const stored = localStorage.getItem('adobek_projects');
  return stored ? JSON.parse(stored) : DEFAULT_PROJECTS_LIST;
}

/**
 * Save or update a project in CMS
 */
export async function saveProject(projectData) {
  const id = projectData.id ? String(projectData.id) : 'proj_' + Date.now();
  const payload = { ...projectData, id, updatedAt: new Date().toISOString() };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'projects', id), payload, { merge: true });
      return { success: true, id, isLive: true };
    } catch (error) {
      console.error('Firestore save project error:', error);
    }
  }

  const projects = await getDynamicProjects();
  const existingIdx = projects.findIndex(p => String(p.id) === String(id));
  if (existingIdx >= 0) {
    projects[existingIdx] = payload;
  } else {
    projects.push(payload);
  }
  localStorage.setItem('adobek_projects', JSON.stringify(projects));
  return { success: true, id, isLive: false };
}

/**
 * Delete a project from CMS
 */
export async function deleteProject(projectId) {
  const id = String(projectId);
  if (isFirebaseConfigured && db) {
    try {
      await deleteDoc(doc(db, 'projects', id));
    } catch (error) {
      console.error('Firestore delete project error:', error);
    }
  }

  const projects = await getDynamicProjects();
  const filtered = projects.filter(p => String(p.id) !== id);
  localStorage.setItem('adobek_projects', JSON.stringify(filtered));
  return { success: true };
}

// ----------------------------------------------------
// 3. DYNAMIC JOURNAL CMS
// ----------------------------------------------------

/**
 * Get all journal articles (Firestore with fallback to DEFAULT_JOURNAL_POSTS)
 */
export async function getDynamicJournalPosts() {
  if (isFirebaseConfigured && db) {
    try {
      const snapshot = await getDocs(collection(db, 'journal_posts'));
      if (!snapshot.empty) {
        return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    } catch (error) {
      console.warn('Firestore journal fetch failed, using default posts:', error);
    }
  }

  const stored = localStorage.getItem('adobek_journal_posts');
  return stored ? JSON.parse(stored) : DEFAULT_JOURNAL_POSTS;
}

/**
 * Save or update a journal post in CMS
 */
export async function saveJournalPost(postData) {
  const id = postData.id ? String(postData.id) : 'journal_' + Date.now();
  const payload = { ...postData, id, updatedAt: new Date().toISOString() };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'journal_posts', id), payload, { merge: true });
      return { success: true, id, isLive: true };
    } catch (error) {
      console.error('Firestore save journal error:', error);
    }
  }

  const posts = await getDynamicJournalPosts();
  const existingIdx = posts.findIndex(p => String(p.id) === String(id));
  if (existingIdx >= 0) {
    posts[existingIdx] = payload;
  } else {
    posts.unshift(payload);
  }
  localStorage.setItem('adobek_journal_posts', JSON.stringify(posts));
  return { success: true, id, isLive: false };
}

// ----------------------------------------------------
// 4. AUTHENTICATION HELPERS
// ----------------------------------------------------

export async function loginAdminUser(email, password) {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = password.trim();

  // Check if credentials match the master passcode
  const isMasterEmail = (cleanEmail === 'adobek@adobek-interior.com' || cleanEmail === 'admin' || cleanEmail === 'mikasadessalegn@gmail.com');
  const isMasterPass = (cleanPass === 'adobek2025' || cleanPass === 'adobek@2025' || cleanPass === 'admin123');

  // 1. Try Firebase Auth first (required for Firestore read access)
  if (isFirebaseConfigured && auth) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, cleanPass);
      sessionStorage.setItem('adobek_admin_auth', JSON.stringify({ email: userCredential.user.email }));
      return { success: true, user: userCredential.user };
    } catch (error) {
      // Firebase Auth failed — fall through to master passcode check
    }
  }

  // 2. Master passcode fallback (works offline / when Firebase Auth user doesn't exist)
  if (isMasterEmail && isMasterPass) {
    const adminUser = { email: cleanEmail, name: 'Studio Director' };
    sessionStorage.setItem('adobek_admin_auth', JSON.stringify(adminUser));
    return { success: true, user: adminUser };
  }

  // 3. Loose master passcode fallback (any email + correct passcode)
  if (isMasterPass) {
    const adminUser = { email: cleanEmail || 'adobek@adobek-interior.com', name: 'Adobek Admin' };
    sessionStorage.setItem('adobek_admin_auth', JSON.stringify(adminUser));
    return { success: true, user: adminUser };
  }

  return { success: false, error: 'Invalid email or passcode.' };
}

export async function logoutAdminUser() {
  if (isFirebaseConfigured && auth) {
    try {
      await signOut(auth);
    } catch (e) { }
  }
  sessionStorage.removeItem('adobek_admin_auth');
  return { success: true };
}
