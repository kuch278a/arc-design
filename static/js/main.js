/**
 * Ashara Interiors — Client-side scripts
 * Architecture & Interior Design Portfolio for Beka
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress');
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (progressBar && docHeight > 0) {
            const scrollPercent = (currentScrollY / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }

        // Smart Header Hide/Show
        if (header) {
            if (currentScrollY > lastScrollY && currentScrollY > 120) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        }
        lastScrollY = currentScrollY;
    });

    // 2. Theme Switcher (Dark / Light Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        } else {
            document.body.classList.remove('dark-theme');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-theme');
            const nextTheme = isDark ? 'light' : 'dark';
            applyTheme(nextTheme);
            localStorage.setItem('ashara_theme', nextTheme);
        });

        const storedTheme = localStorage.getItem('ashara_theme');
        if (storedTheme) {
            applyTheme(storedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark');
        }
    }

    // 3. Fallback for broken images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            if (!this.dataset.fallbackApplied) {
                this.dataset.fallbackApplied = "true";
                this.src = '/static/images/our_service.jpg';
            }
        });
    });

    console.log('Ashara Interiors portfolio initialized for Beka.');
});
