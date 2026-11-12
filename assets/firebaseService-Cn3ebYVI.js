import{D as Fp,a as Lp}from"./index-CeZgZZVr.js";const kp=()=>{};var kc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},xp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],B=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,B=o?n[s+1]:0,u=s+2<n.length,c=u?n[s+2]:0,h=i>>2,f=(i&3)<<4|B>>4;let m=(B&15)<<2|c>>6,A=c&63;u||(A=64,o||(m=64)),r.push(t[h],t[f],t[m],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],B=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||B==null||c==null||f==null)throw new Vp;const m=i<<2|B>>4;if(r.push(m),c!==64){const A=B<<4&240|c>>2;if(r.push(A),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mp=function(n){const e=Gh(n);return Uh.encodeByteArray(e,!0)},ao=function(n){return Mp(n).replace(/\./g,"")},Hh=function(n){try{return Uh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=()=>Gp().__FIREBASE_DEFAULTS__,Hp=()=>{if(typeof process>"u"||typeof kc>"u")return;const n=kc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hh(n[1]);return e&&JSON.parse(e)},Po=()=>{try{return kp()||Up()||Hp()||Jp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jh=n=>Po()?.emulatorHosts?.[n],jh=n=>{const e=Jh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},qh=()=>Po()?.config,Kh=n=>Po()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ao(JSON.stringify(t)),ao(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function qp(){const n=Po()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wp(){const n=qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $p(){return!qp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yp(){try{return typeof indexedDB=="object"}catch{return!1}}function Xp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="FirebaseError";class jt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Zp,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eg(i,r):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new jt(s,B,r)}}function eg(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const o=n.substring(s+2,i),B=e[o];r+=n.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return r}catch{return n}}function tg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(xc(i)&&xc(o)){if(!Xn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function xc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ms(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Es(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ng(n,e){const t=new rg(n,e);return t.subscribe.bind(t)}class rg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");sg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ra),s.error===void 0&&(s.error=Ra),s.complete===void 0&&(s.complete=Ra);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ra(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yB(n){return(await fetch(n,{credentials:"include"})).ok}class An{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ag(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);r===B&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:og(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function og(n){return n===Jn?void 0:n}function ag(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ig(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(oe||(oe={}));const ug={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},cg=oe.INFO,lg={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},hg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=lg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class TB{constructor(e){this.name=e,this._logLevel=cg,this._logHandler=hg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Cg=(n,e)=>e.some(t=>n instanceof t);let Vc,Mc;function fg(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dg(){return Mc||(Mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wh=new WeakMap,Ka=new WeakMap,$h=new WeakMap,va=new WeakMap,AB=new WeakMap;function pg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(En(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wh.set(t,n)}).catch(()=>{}),AB.set(e,n),e}function gg(n){if(Ka.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ka.set(n,e)}let za={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ka.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$h.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return En(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mg(n){za=n(za)}function Eg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pa(this),e,...t);return $h.set(r,e.sort?e.sort():[e]),En(r)}:dg().includes(n)?function(...e){return n.apply(Pa(this),e),En(Wh.get(this))}:function(...e){return En(n.apply(Pa(this),e))}}function _g(n){return typeof n=="function"?Eg(n):(n instanceof IDBTransaction&&gg(n),Cg(n,fg())?new Proxy(n,za):n)}function En(n){if(n instanceof IDBRequest)return pg(n);if(va.has(n))return va.get(n);const e=_g(n);return e!==n&&(va.set(n,e),AB.set(e,n)),e}const Pa=n=>AB.get(n);function Dg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),B=En(o);return r&&o.addEventListener("upgradeneeded",u=>{r(En(o.result),u.oldVersion,u.newVersion,En(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),B.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),B}const Ig=["get","getKey","getAll","getAllKeys","count"],wg=["put","add","delete","clear"],Sa=new Map;function Gc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Sa.get(e))return Sa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=wg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ig.includes(t)))return;const i=async function(o,...B){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(B.shift())),(await Promise.all([c[t](...B),s&&u.done]))[0]};return Sa.set(e,i),i}mg(n=>({...n,get:(e,t,r)=>Gc(e,t)||n.get(e,t,r),has:(e,t)=>!!Gc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Tg(n){return n.getComponent()?.type==="VERSION"}const Qa="@firebase/app",Uc="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new TB("@firebase/app"),Ag="@firebase/app-compat",Rg="@firebase/analytics-compat",vg="@firebase/analytics",Pg="@firebase/app-check-compat",Sg="@firebase/app-check",bg="@firebase/auth",Og="@firebase/auth-compat",Ng="@firebase/database",Fg="@firebase/data-connect",Lg="@firebase/database-compat",kg="@firebase/functions",xg="@firebase/functions-compat",Vg="@firebase/installations",Mg="@firebase/installations-compat",Gg="@firebase/messaging",Ug="@firebase/messaging-compat",Hg="@firebase/performance",Jg="@firebase/performance-compat",jg="@firebase/remote-config",qg="@firebase/remote-config-compat",Kg="@firebase/storage",zg="@firebase/storage-compat",Qg="@firebase/firestore",Wg="@firebase/ai",$g="@firebase/firestore-compat",Yg="firebase",Xg="12.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="[DEFAULT]",Zg={[Qa]:"fire-core",[Ag]:"fire-core-compat",[vg]:"fire-analytics",[Rg]:"fire-analytics-compat",[Sg]:"fire-app-check",[Pg]:"fire-app-check-compat",[bg]:"fire-auth",[Og]:"fire-auth-compat",[Ng]:"fire-rtdb",[Fg]:"fire-data-connect",[Lg]:"fire-rtdb-compat",[kg]:"fire-fn",[xg]:"fire-fn-compat",[Vg]:"fire-iid",[Mg]:"fire-iid-compat",[Gg]:"fire-fcm",[Ug]:"fire-fcm-compat",[Hg]:"fire-perf",[Jg]:"fire-perf-compat",[jg]:"fire-rc",[qg]:"fire-rc-compat",[Kg]:"fire-gcs",[zg]:"fire-gcs-compat",[Qg]:"fire-fst",[$g]:"fire-fst-compat",[Wg]:"fire-vertex","fire-js":"fire-js",[Yg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,em=new Map,$a=new Map;function Hc(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zn(n){const e=n.name;if($a.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,n);for(const t of Fs.values())Hc(t,n);for(const t of em.values())Hc(t,n);return!0}function So(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Et(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new ni("app","Firebase",tm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=Xg;function Yh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Wa,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(t||(t=qh()),!t)throw Kt.create("no-options");const i=Fs.get(s);if(i)if(Xn(t,i.options)){if(Xn(r,i.config))return i;throw Kt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw Kt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Bg(s);for(const u of $a.values())o.addComponent(u);const B=new nm(t,r,o);return Fs.set(s,B),B}function bo(n=Wa){const e=Fs.get(n);if(!e&&n===Wa&&qh())return Yh();if(!e)throw Kt.create("no-app",{appName:n});return e}function rm(){return Array.from(Fs.values())}function kt(n,e,t){let r=Zg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}Zn(new An(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="firebase-heartbeat-database",im=1,Ls="firebase-heartbeat-store";let ba=null;function Xh(){return ba||(ba=Dg(sm,im,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),ba}async function om(n){try{const t=(await Xh()).transaction(Ls),r=await t.objectStore(Ls).get(Zh(n));return await t.done,r}catch(e){if(e instanceof jt)Xt.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e?.message});Xt.warn(t.message)}}}async function Jc(n,e){try{const r=(await Xh()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(e,Zh(n)),await r.done}catch(t){if(t instanceof jt)Xt.warn(t.message);else{const r=Kt.create("idb-set",{originalErrorMessage:t?.message});Xt.warn(r.message)}}}function Zh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=1024,Bm=30;class um{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Bm){const s=hm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Xt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jc(),{heartbeatsToSend:t,unsentEntries:r}=cm(this._heartbeatsCache.heartbeats),s=ao(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Xt.warn(e),""}}}function jc(){return new Date().toISOString().substring(0,10)}function cm(n,e=am){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),qc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yp()?Xp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await om(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qc(n){return ao(JSON.stringify({version:2,heartbeats:n})).length}function hm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n){Zn(new An("platform-logger",e=>new yg(e),"PRIVATE")),Zn(new An("heartbeat",e=>new um(e),"PRIVATE")),kt(Qa,Uc,n),kt(Qa,Uc,"esm2020"),kt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cm("");var fm="firebase",dm="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(fm,dm,"app");var Kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _n,eC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,E){function D(){}D.prototype=E.prototype,T.F=E.prototype,T.prototype=new D,T.prototype.constructor=T,T.D=function(R,y,S){for(var _=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)_[Ze-2]=arguments[Ze];return E.prototype[y].apply(R,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,E,D){D||(D=0);const R=Array(16);if(typeof E=="string")for(var y=0;y<16;++y)R[y]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(y=0;y<16;++y)R[y]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=T.g[0],D=T.g[1],y=T.g[2];let S=T.g[3],_;_=E+(S^D&(y^S))+R[0]+3614090360&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+R[1]+3905402710&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+R[2]+606105819&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+R[3]+3250441966&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+R[4]+4118548399&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+R[5]+1200080426&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+R[6]+2821735955&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+R[7]+4249261313&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+R[8]+1770035416&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+R[9]+2336552879&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+R[10]+4294925233&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+R[11]+2304563134&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+R[12]+1804603682&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+R[13]+4254626195&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+R[14]+2792965006&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+R[15]+1236535329&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(y^S&(D^y))+R[1]+4129170786&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+R[6]+3225465664&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+R[11]+643717713&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+R[0]+3921069994&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+R[5]+3593408605&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+R[10]+38016083&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+R[15]+3634488961&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+R[4]+3889429448&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+R[9]+568446438&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+R[14]+3275163606&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+R[3]+4107603335&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+R[8]+1163531501&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+R[13]+2850285829&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+R[2]+4243563512&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+R[7]+1735328473&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+R[12]+2368359562&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(D^y^S)+R[5]+4294588738&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+R[8]+2272392833&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+R[11]+1839030562&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+R[14]+4259657740&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+R[1]+2763975236&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+R[4]+1272893353&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+R[7]+4139469664&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+R[10]+3200236656&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+R[13]+681279174&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+R[0]+3936430074&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+R[3]+3572445317&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+R[6]+76029189&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+R[9]+3654602809&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+R[12]+3873151461&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+R[15]+530742520&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+R[2]+3299628645&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(y^(D|~S))+R[0]+4096336452&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+R[7]+1126891415&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+R[14]+2878612391&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+R[5]+4237533241&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+R[12]+1700485571&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+R[3]+2399980690&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+R[10]+4293915773&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+R[1]+2240044497&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+R[8]+1873313359&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+R[15]+4264355552&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+R[6]+2734768916&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+R[13]+1309151649&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+R[4]+4149444226&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+R[11]+3174756917&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+R[2]+718787259&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+R[9]+3951481745&4294967295,T.g[0]=T.g[0]+E&4294967295,T.g[1]=T.g[1]+(y+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+y&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,E){E===void 0&&(E=T.length);const D=E-this.blockSize,R=this.C;let y=this.h,S=0;for(;S<E;){if(y==0)for(;S<=D;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<E;)if(R[y++]=T.charCodeAt(S++),y==this.blockSize){s(this,R),y=0;break}}else for(;S<E;)if(R[y++]=T[S++],y==this.blockSize){s(this,R),y=0;break}}this.h=y,this.o+=E},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var E=1;E<T.length-8;++E)T[E]=0;E=this.o*8;for(var D=T.length-8;D<T.length;++D)T[D]=E&255,E/=256;for(this.v(T),T=Array(16),E=0,D=0;D<4;++D)for(let R=0;R<32;R+=8)T[E++]=this.g[D]>>>R&255;return T};function i(T,E){var D=B;return Object.prototype.hasOwnProperty.call(D,T)?D[T]:D[T]=E(T)}function o(T,E){this.h=E;const D=[];let R=!0;for(let y=T.length-1;y>=0;y--){const S=T[y]|0;R&&S==E||(D[y]=S,R=!1)}this.g=D}var B={};function u(T){return-128<=T&&T<128?i(T,function(E){return new o([E|0],E<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return M(c(-T));const E=[];let D=1;for(let R=0;T>=D;R++)E[R]=T/D|0,D*=4294967296;return new o(E,0)}function h(T,E){if(T.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(T.charAt(0)=="-")return M(h(T.substring(1),E));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=c(Math.pow(E,8));let R=f;for(let S=0;S<T.length;S+=8){var y=Math.min(8,T.length-S);const _=parseInt(T.substring(S,S+y),E);y<8?(y=c(Math.pow(E,y)),R=R.j(y).add(c(_))):(R=R.j(D),R=R.add(c(_)))}return R}var f=u(0),m=u(1),A=u(16777216);n=o.prototype,n.m=function(){if(x(this))return-M(this).m();let T=0,E=1;for(let D=0;D<this.g.length;D++){const R=this.i(D);T+=(R>=0?R:4294967296+R)*E,E*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(v(this))return"0";if(x(this))return"-"+M(this).toString(T);const E=c(Math.pow(T,6));var D=this;let R="";for(;;){const y=Be(D,E).g;D=j(D,y.j(E));let S=((D.g.length>0?D.g[0]:D.h)>>>0).toString(T);if(D=y,v(D))return S+R;for(;S.length<6;)S="0"+S;R=S+R}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function v(T){if(T.h!=0)return!1;for(let E=0;E<T.g.length;E++)if(T.g[E]!=0)return!1;return!0}function x(T){return T.h==-1}n.l=function(T){return T=j(this,T),x(T)?-1:v(T)?0:1};function M(T){const E=T.g.length,D=[];for(let R=0;R<E;R++)D[R]=~T.g[R];return new o(D,~T.h).add(m)}n.abs=function(){return x(this)?M(this):this},n.add=function(T){const E=Math.max(this.g.length,T.g.length),D=[];let R=0;for(let y=0;y<=E;y++){let S=R+(this.i(y)&65535)+(T.i(y)&65535),_=(S>>>16)+(this.i(y)>>>16)+(T.i(y)>>>16);R=_>>>16,S&=65535,_&=65535,D[y]=_<<16|S}return new o(D,D[D.length-1]&-2147483648?-1:0)};function j(T,E){return T.add(M(E))}n.j=function(T){if(v(this)||v(T))return f;if(x(this))return x(T)?M(this).j(M(T)):M(M(this).j(T));if(x(T))return M(this.j(M(T)));if(this.l(A)<0&&T.l(A)<0)return c(this.m()*T.m());const E=this.g.length+T.g.length,D=[];for(var R=0;R<2*E;R++)D[R]=0;for(R=0;R<this.g.length;R++)for(let y=0;y<T.g.length;y++){const S=this.i(R)>>>16,_=this.i(R)&65535,Ze=T.i(y)>>>16,xn=T.i(y)&65535;D[2*R+2*y]+=_*xn,ee(D,2*R+2*y),D[2*R+2*y+1]+=S*xn,ee(D,2*R+2*y+1),D[2*R+2*y+1]+=_*Ze,ee(D,2*R+2*y+1),D[2*R+2*y+2]+=S*Ze,ee(D,2*R+2*y+2)}for(T=0;T<E;T++)D[T]=D[2*T+1]<<16|D[2*T];for(T=E;T<2*E;T++)D[T]=0;return new o(D,0)};function ee(T,E){for(;(T[E]&65535)!=T[E];)T[E+1]+=T[E]>>>16,T[E]&=65535,E++}function ae(T,E){this.g=T,this.h=E}function Be(T,E){if(v(E))throw Error("division by zero");if(v(T))return new ae(f,f);if(x(T))return E=Be(M(T),E),new ae(M(E.g),M(E.h));if(x(E))return E=Be(T,M(E)),new ae(M(E.g),E.h);if(T.g.length>30){if(x(T)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var D=m,R=E;R.l(T)<=0;)D=Ne(D),R=Ne(R);var y=Ce(D,1),S=Ce(R,1);for(R=Ce(R,2),D=Ce(D,2);!v(R);){var _=S.add(R);_.l(T)<=0&&(y=y.add(D),S=_),R=Ce(R,1),D=Ce(D,1)}return E=j(T,y.j(E)),new ae(y,E)}for(y=f;T.l(E)>=0;){for(D=Math.max(1,Math.floor(T.m()/E.m())),R=Math.ceil(Math.log(D)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),S=c(D),_=S.j(E);x(_)||_.l(T)>0;)D-=R,S=c(D),_=S.j(E);v(S)&&(S=m),y=y.add(S),T=j(T,_)}return new ae(y,T)}n.B=function(T){return Be(this,T).h},n.and=function(T){const E=Math.max(this.g.length,T.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)&T.i(R);return new o(D,this.h&T.h)},n.or=function(T){const E=Math.max(this.g.length,T.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)|T.i(R);return new o(D,this.h|T.h)},n.xor=function(T){const E=Math.max(this.g.length,T.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)^T.i(R);return new o(D,this.h^T.h)};function Ne(T){const E=T.g.length+1,D=[];for(let R=0;R<E;R++)D[R]=T.i(R)<<1|T.i(R-1)>>>31;return new o(D,T.h)}function Ce(T,E){const D=E>>5;E%=32;const R=T.g.length-D,y=[];for(let S=0;S<R;S++)y[S]=E>0?T.i(S+D)>>>E|T.i(S+D+1)<<32-E:T.i(S+D);return new o(y,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,eC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,_n=o}).apply(typeof Kc<"u"?Kc:typeof self<"u"?self:typeof window<"u"?window:{});var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tC,_s,nC,$i,Ya,rC,sC,iC;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fi=="object"&&Fi];for(var l=0;l<a.length;++l){var C=a[l];if(C&&C.Math==Math)return C}throw Error("Cannot find global object")}var r=t(this);function s(a,l){if(l)e:{var C=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var P=a[d];if(!(P in C))break e;C=C[P]}a=a[a.length-1],d=C[a],l=l(d),l!=d&&l!=null&&e(C,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var C=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&C.push([d,l[d]]);return C}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,C){return a.call.apply(a.bind,arguments)}function c(a,l,C){return c=u,c.apply(null,arguments)}function h(a,l){var C=Array.prototype.slice.call(arguments,1);return function(){var d=C.slice();return d.push.apply(d,arguments),a.apply(this,d)}}function f(a,l){function C(){}C.prototype=l.prototype,a.Z=l.prototype,a.prototype=new C,a.prototype.constructor=a,a.Ob=function(d,P,b){for(var U=Array(arguments.length-2),re=2;re<arguments.length;re++)U[re-2]=arguments[re];return l.prototype[P].apply(d,U)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const l=a.length;if(l>0){const C=Array(l);for(let d=0;d<l;d++)C[d]=a[d];return C}return[]}function v(a,l){for(let d=1;d<arguments.length;d++){const P=arguments[d];var C=typeof P;if(C=C!="object"?C:P?Array.isArray(P)?"array":C:"null",C=="array"||C=="object"&&typeof P.length=="number"){C=a.length||0;const b=P.length||0;a.length=C+b;for(let U=0;U<b;U++)a[C+U]=P[U]}else a.push(P)}}class x{constructor(l,C){this.i=l,this.j=C,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(a){o.setTimeout(()=>{throw a},0)}function j(){var a=T;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ee{constructor(){this.h=this.g=null}add(l,C){const d=ae.get();d.set(l,C),this.h?this.h.next=d:this.g=d,this.h=d}}var ae=new x(()=>new Be,a=>a.reset());class Be{constructor(){this.next=this.g=this.h=null}set(l,C){this.h=l,this.g=C,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,Ce=!1,T=new ee,E=()=>{const a=Promise.resolve(void 0);Ne=()=>{a.then(D)}};function D(){for(var a;a=j();){try{a.h.call(a.g)}catch(C){M(C)}var l=ae;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Ce=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const C=()=>{};o.addEventListener("test",C,l),o.removeEventListener("test",C,l)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function Ze(a,l){y.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}f(Ze,y),Ze.prototype.init=function(a,l){const C=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(C=="mouseover"?l=a.fromElement:C=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ze.Z.h.call(this)},Ze.prototype.h=function(){Ze.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xn="closure_listenable_"+(Math.random()*1e6|0),np=0;function rp(a,l,C,d,P){this.listener=a,this.proxy=null,this.src=l,this.type=C,this.capture=!!d,this.ha=P,this.key=++np,this.da=this.fa=!1}function Ei(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _i(a,l,C){for(const d in a)l.call(C,a[d],d,a)}function sp(a,l){for(const C in a)l.call(void 0,a[C],C,a)}function Lu(a){const l={};for(const C in a)l[C]=a[C];return l}const ku="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xu(a,l){let C,d;for(let P=1;P<arguments.length;P++){d=arguments[P];for(C in d)a[C]=d[C];for(let b=0;b<ku.length;b++)C=ku[b],Object.prototype.hasOwnProperty.call(d,C)&&(a[C]=d[C])}}function Di(a){this.src=a,this.g={},this.h=0}Di.prototype.add=function(a,l,C,d,P){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const U=sa(a,l,d,P);return U>-1?(l=a[U],C||(l.fa=!1)):(l=new rp(l,this.src,b,!!d,P),l.fa=C,a.push(l)),l};function ra(a,l){const C=l.type;if(C in a.g){var d=a.g[C],P=Array.prototype.indexOf.call(d,l,void 0),b;(b=P>=0)&&Array.prototype.splice.call(d,P,1),b&&(Ei(l),a.g[C].length==0&&(delete a.g[C],a.h--))}}function sa(a,l,C,d){for(let P=0;P<a.length;++P){const b=a[P];if(!b.da&&b.listener==l&&b.capture==!!C&&b.ha==d)return P}return-1}var ia="closure_lm_"+(Math.random()*1e6|0),oa={};function Vu(a,l,C,d,P){if(Array.isArray(l)){for(let b=0;b<l.length;b++)Vu(a,l[b],C,d,P);return null}return C=Uu(C),a&&a[xn]?a.J(l,C,B(d)?!!d.capture:!1,P):ip(a,l,C,!1,d,P)}function ip(a,l,C,d,P,b){if(!l)throw Error("Invalid event type");const U=B(P)?!!P.capture:!!P;let re=Ba(a);if(re||(a[ia]=re=new Di(a)),C=re.add(l,C,d,U,b),C.proxy)return C;if(d=op(),C.proxy=d,d.src=a,d.listener=C,a.addEventListener)S||(P=U),P===void 0&&(P=!1),a.addEventListener(l.toString(),d,P);else if(a.attachEvent)a.attachEvent(Gu(l.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return C}function op(){function a(C){return l.call(a.src,a.listener,C)}const l=ap;return a}function Mu(a,l,C,d,P){if(Array.isArray(l))for(var b=0;b<l.length;b++)Mu(a,l[b],C,d,P);else d=B(d)?!!d.capture:!!d,C=Uu(C),a&&a[xn]?(a=a.i,b=String(l).toString(),b in a.g&&(l=a.g[b],C=sa(l,C,d,P),C>-1&&(Ei(l[C]),Array.prototype.splice.call(l,C,1),l.length==0&&(delete a.g[b],a.h--)))):a&&(a=Ba(a))&&(l=a.g[l.toString()],a=-1,l&&(a=sa(l,C,d,P)),(C=a>-1?l[a]:null)&&aa(C))}function aa(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[xn])ra(l.i,a);else{var C=a.type,d=a.proxy;l.removeEventListener?l.removeEventListener(C,d,a.capture):l.detachEvent?l.detachEvent(Gu(C),d):l.addListener&&l.removeListener&&l.removeListener(d),(C=Ba(l))?(ra(C,a),C.h==0&&(C.src=null,l[ia]=null)):Ei(a)}}}function Gu(a){return a in oa?oa[a]:oa[a]="on"+a}function ap(a,l){if(a.da)a=!0;else{l=new Ze(l,this);const C=a.listener,d=a.ha||a.src;a.fa&&aa(a),a=C.call(d,l)}return a}function Ba(a){return a=a[ia],a instanceof Di?a:null}var ua="__closure_events_fn_"+(Math.random()*1e9>>>0);function Uu(a){return typeof a=="function"?a:(a[ua]||(a[ua]=function(l){return a.handleEvent(l)}),a[ua])}function Ue(){R.call(this),this.i=new Di(this),this.M=this,this.G=null}f(Ue,R),Ue.prototype[xn]=!0,Ue.prototype.removeEventListener=function(a,l,C,d){Mu(this,a,l,C,d)};function ze(a,l){var C,d=a.G;if(d)for(C=[];d;d=d.G)C.push(d);if(a=a.M,d=l.type||l,typeof l=="string")l=new y(l,a);else if(l instanceof y)l.target=l.target||a;else{var P=l;l=new y(d,a),xu(l,P)}P=!0;let b,U;if(C)for(U=C.length-1;U>=0;U--)b=l.g=C[U],P=Ii(b,d,!0,l)&&P;if(b=l.g=a,P=Ii(b,d,!0,l)&&P,P=Ii(b,d,!1,l)&&P,C)for(U=0;U<C.length;U++)b=l.g=C[U],P=Ii(b,d,!1,l)&&P}Ue.prototype.N=function(){if(Ue.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const C=a.g[l];for(let d=0;d<C.length;d++)Ei(C[d]);delete a.g[l],a.h--}}this.G=null},Ue.prototype.J=function(a,l,C,d){return this.i.add(String(a),l,!1,C,d)},Ue.prototype.K=function(a,l,C,d){return this.i.add(String(a),l,!0,C,d)};function Ii(a,l,C,d){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let P=!0;for(let b=0;b<l.length;++b){const U=l[b];if(U&&!U.da&&U.capture==C){const re=U.listener,be=U.ha||U.src;U.fa&&ra(a.i,U),P=re.call(be,d)!==!1&&P}}return P&&!d.defaultPrevented}function Bp(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Hu(a){a.g=Bp(()=>{a.g=null,a.i&&(a.i=!1,Hu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class up extends R{constructor(l,C){super(),this.m=l,this.l=C,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Hu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(a){R.call(this),this.h=a,this.g={}}f(Zr,R);var Ju=[];function ju(a){_i(a.g,function(l,C){this.g.hasOwnProperty(C)&&aa(l)},a),a.g={}}Zr.prototype.N=function(){Zr.Z.N.call(this),ju(this)},Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ca=o.JSON.stringify,cp=o.JSON.parse,lp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function qu(){}function Ku(){}var es={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function la(){y.call(this,"d")}f(la,y);function ha(){y.call(this,"c")}f(ha,y);var Vn={},zu=null;function wi(){return zu=zu||new Ue}Vn.Ia="serverreachability";function Qu(a){y.call(this,Vn.Ia,a)}f(Qu,y);function ts(a){const l=wi();ze(l,new Qu(l))}Vn.STAT_EVENT="statevent";function Wu(a,l){y.call(this,Vn.STAT_EVENT,a),this.stat=l}f(Wu,y);function Qe(a){const l=wi();ze(l,new Wu(l,a))}Vn.Ja="timingevent";function $u(a,l){y.call(this,Vn.Ja,a),this.size=l}f($u,y);function ns(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function rs(){this.g=!0}rs.prototype.ua=function(){this.g=!1};function hp(a,l,C,d,P,b){a.info(function(){if(a.g)if(b){var U="",re=b.split("&");for(let fe=0;fe<re.length;fe++){var be=re[fe].split("=");if(be.length>1){const Fe=be[0];be=be[1];const St=Fe.split("_");U=St.length>=2&&St[1]=="type"?U+(Fe+"="+be+"&"):U+(Fe+"=redacted&")}}}else U=null;else U=b;return"XMLHTTP REQ ("+d+") [attempt "+P+"]: "+l+`
`+C+`
`+U})}function Cp(a,l,C,d,P,b,U){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+P+"]: "+l+`
`+C+`
`+b+" "+U})}function dr(a,l,C,d){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+dp(a,C)+(d?" "+d:"")})}function fp(a,l){a.info(function(){return"TIMEOUT: "+l})}rs.prototype.info=function(){};function dp(a,l){if(!a.g)return l;if(!l)return null;try{const b=JSON.parse(l);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var C=b[a];if(!(C.length<2)){var d=C[1];if(Array.isArray(d)&&!(d.length<1)){var P=d[0];if(P!="noop"&&P!="stop"&&P!="close")for(let U=1;U<d.length;U++)d[U]=""}}}}return ca(b)}catch{return l}}var yi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xu;function Ca(){}f(Ca,qu),Ca.prototype.g=function(){return new XMLHttpRequest},Xu=new Ca;function ss(a){return encodeURIComponent(String(a))}function pp(a){var l=1;a=a.split(":");const C=[];for(;l>0&&a.length;)C.push(a.shift()),l--;return a.length&&C.push(a.join(":")),C}function nn(a,l,C,d){this.j=a,this.i=l,this.l=C,this.S=d||1,this.V=new Zr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var ec={},fa={};function da(a,l,C){a.M=1,a.A=Ai(Pt(l)),a.u=C,a.R=!0,tc(a,null)}function tc(a,l){a.F=Date.now(),Ti(a),a.B=Pt(a.A);var C=a.B,d=a.S;Array.isArray(d)||(d=[String(d)]),fc(C.i,"t",d),a.C=0,C=a.j.L,a.h=new Zu,a.g=Oc(a.j,C?l:null,!a.u),a.P>0&&(a.O=new up(c(a.Y,a,a.g),a.P)),l=a.V,C=a.g,d=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ju[0]=P.toString()),P=Ju);for(let b=0;b<P.length;b++){const U=Vu(C,P[b],d||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=a.J?Lu(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),ts(),hp(a.i,a.v,a.B,a.l,a.S,a.u)}nn.prototype.ba=function(a){a=a.target;const l=this.O;l&&on(a)==3?l.j():this.Y(a)},nn.prototype.Y=function(a){try{if(a==this.g)e:{const re=on(this.g),be=this.g.ya(),fe=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Dc(this.g)))){this.K||re!=4||be==7||(be==8||fe<=0?ts(3):ts(2)),pa(this);var l=this.g.ca();this.X=l;var C=gp(this);if(this.o=l==200,Cp(this.i,this.v,this.B,this.l,this.S,re,l),this.o){if(this.U&&!this.L){t:{if(this.g){var d,P=this.g;if((d=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(d)){var b=d;break t}}b=null}if(a=b)dr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ga(this,a);else{this.o=!1,this.m=3,Qe(12),Mn(this),is(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<C.length;)if(Fe=mp(this,C),Fe==fa){re==4&&(this.m=4,Qe(14),a=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==ec){this.m=4,Qe(15),dr(this.i,this.l,C,"[Invalid Chunk]"),a=!1;break}else dr(this.i,this.l,Fe,null),ga(this,Fe);if(nc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||C.length!=0||this.h.h||(this.m=1,Qe(16),a=!1),this.o=this.o&&a,!a)dr(this.i,this.l,C,"[Invalid Chunked Response]"),Mn(this),is(this);else if(C.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Ta(U),U.P=!0,Qe(11))}}else dr(this.i,this.l,C,null),ga(this,C);re==4&&Mn(this),this.o&&!this.K&&(re==4?vc(this.j,this):(this.o=!1,Ti(this)))}else Op(this.g),l==400&&C.indexOf("Unknown SID")>0?(this.m=3,Qe(12)):(this.m=0,Qe(13)),Mn(this),is(this)}}}catch{}finally{}};function gp(a){if(!nc(a))return a.g.la();const l=Dc(a.g);if(l==="")return"";let C="";const d=l.length,P=on(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Mn(a),is(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<d;b++)a.h.h=!0,C+=a.h.i.decode(l[b],{stream:!(P&&b==d-1)});return l.length=0,a.h.g+=C,a.C=0,a.h.g}function nc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function mp(a,l){var C=a.C,d=l.indexOf(`
`,C);return d==-1?fa:(C=Number(l.substring(C,d)),isNaN(C)?ec:(d+=1,d+C>l.length?fa:(l=l.slice(d,d+C),a.C=d+C,l)))}nn.prototype.cancel=function(){this.K=!0,Mn(this)};function Ti(a){a.T=Date.now()+a.H,rc(a,a.H)}function rc(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ns(c(a.aa,a),l)}function pa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(fp(this.i,this.B),this.M!=2&&(ts(),Qe(17)),Mn(this),this.m=2,is(this)):rc(this,this.T-a)};function is(a){a.j.I==0||a.K||vc(a.j,a)}function Mn(a){pa(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,ju(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function ga(a,l){try{var C=a.j;if(C.I!=0&&(C.g==a||ma(C.h,a))){if(!a.L&&ma(C.h,a)&&C.I==3){try{var d=C.Ba.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var P=d;if(P[0]==0){e:if(!C.v){if(C.g)if(C.g.F+3e3<a.F)bi(C),Pi(C);else break e;ya(C),Qe(18)}}else C.xa=P[1],0<C.xa-C.K&&P[2]<37500&&C.F&&C.A==0&&!C.C&&(C.C=ns(c(C.Va,C),6e3));oc(C.h)<=1&&C.ta&&(C.ta=void 0)}else Un(C,11)}else if((a.L||C.g==a)&&bi(C),!_(l))for(P=C.Ba.g.parse(l),l=0;l<P.length;l++){let fe=P[l];const Fe=fe[0];if(!(Fe<=C.K))if(C.K=Fe,fe=fe[1],C.I==2)if(fe[0]=="c"){C.M=fe[1],C.ba=fe[2];const St=fe[3];St!=null&&(C.ka=St,C.j.info("VER="+C.ka));const Hn=fe[4];Hn!=null&&(C.za=Hn,C.j.info("SVER="+C.za));const an=fe[5];an!=null&&typeof an=="number"&&an>0&&(d=1.5*an,C.O=d,C.j.info("backChannelRequestTimeoutMs_="+d)),d=C;const Bn=a.g;if(Bn){const Ni=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var b=d.h;b.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ea(b,b.h),b.h=null))}if(d.G){const Aa=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Aa&&(d.wa=Aa,pe(d.J,d.G,Aa))}}C.I=3,C.l&&C.l.ra(),C.aa&&(C.T=Date.now()-a.F,C.j.info("Handshake RTT: "+C.T+"ms")),d=C;var U=a;if(d.na=bc(d,d.L?d.ba:null,d.W),U.L){ac(d.h,U);var re=U,be=d.O;be&&(re.H=be),re.D&&(pa(re),Ti(re)),d.g=U}else Ac(d);C.i.length>0&&Si(C)}else fe[0]!="stop"&&fe[0]!="close"||Un(C,7);else C.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Un(C,7):wa(C):fe[0]!="noop"&&C.l&&C.l.qa(fe),C.A=0)}}ts(4)}catch{}}var Ep=class{constructor(a,l){this.g=a,this.map=l}};function sc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ic(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oc(a){return a.h?1:a.g?a.g.size:0}function ma(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Ea(a,l){a.g?a.g.add(l):a.h=l}function ac(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}sc.prototype.cancel=function(){if(this.i=Bc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const C of a.g.values())l=l.concat(C.G);return l}return A(a.i)}var uc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _p(a,l){if(a){a=a.split("&");for(let C=0;C<a.length;C++){const d=a[C].indexOf("=");let P,b=null;d>=0?(P=a[C].substring(0,d),b=a[C].substring(d+1)):P=a[C],l(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function rn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof rn?(this.l=a.l,os(this,a.j),this.o=a.o,this.g=a.g,as(this,a.u),this.h=a.h,_a(this,dc(a.i)),this.m=a.m):a&&(l=String(a).match(uc))?(this.l=!1,os(this,l[1]||"",!0),this.o=Bs(l[2]||""),this.g=Bs(l[3]||"",!0),as(this,l[4]),this.h=Bs(l[5]||"",!0),_a(this,l[6]||"",!0),this.m=Bs(l[7]||"")):(this.l=!1,this.i=new cs(null,this.l))}rn.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(us(l,cc,!0),":");var C=this.g;return(C||l=="file")&&(a.push("//"),(l=this.o)&&a.push(us(l,cc,!0),"@"),a.push(ss(C).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),C=this.u,C!=null&&a.push(":",String(C))),(C=this.h)&&(this.g&&C.charAt(0)!="/"&&a.push("/"),a.push(us(C,C.charAt(0)=="/"?wp:Ip,!0))),(C=this.i.toString())&&a.push("?",C),(C=this.m)&&a.push("#",us(C,Tp)),a.join("")},rn.prototype.resolve=function(a){const l=Pt(this);let C=!!a.j;C?os(l,a.j):C=!!a.o,C?l.o=a.o:C=!!a.g,C?l.g=a.g:C=a.u!=null;var d=a.h;if(C)as(l,a.u);else if(C=!!a.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var P=l.h.lastIndexOf("/");P!=-1&&(d=l.h.slice(0,P+1)+d)}if(P=d,P==".."||P==".")d="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){d=P.lastIndexOf("/",0)==0,P=P.split("/");const b=[];for(let U=0;U<P.length;){const re=P[U++];re=="."?d&&U==P.length&&b.push(""):re==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),d&&U==P.length&&b.push("")):(b.push(re),d=!0)}d=b.join("/")}else d=P}return C?l.h=d:C=a.i.toString()!=="",C?_a(l,dc(a.i)):C=!!a.m,C&&(l.m=a.m),l};function Pt(a){return new rn(a)}function os(a,l,C){a.j=C?Bs(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function as(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function _a(a,l,C){l instanceof cs?(a.i=l,Ap(a.i,a.l)):(C||(l=us(l,yp)),a.i=new cs(l,a.l))}function pe(a,l,C){a.i.set(l,C)}function Ai(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Bs(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function us(a,l,C){return typeof a=="string"?(a=encodeURI(a).replace(l,Dp),C&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Dp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cc=/[#\/\?@]/g,Ip=/[#\?:]/g,wp=/[#\?]/g,yp=/[#\?@]/g,Tp=/#/g;function cs(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&_p(a.i,function(l,C){a.add(decodeURIComponent(l.replace(/\+/g," ")),C)}))}n=cs.prototype,n.add=function(a,l){Gn(this),this.i=null,a=pr(this,a);let C=this.g.get(a);return C||this.g.set(a,C=[]),C.push(l),this.h+=1,this};function lc(a,l){Gn(a),l=pr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function hc(a,l){return Gn(a),l=pr(a,l),a.g.has(l)}n.forEach=function(a,l){Gn(this),this.g.forEach(function(C,d){C.forEach(function(P){a.call(l,P,d,this)},this)},this)};function Cc(a,l){Gn(a);let C=[];if(typeof l=="string")hc(a,l)&&(C=C.concat(a.g.get(pr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)C=C.concat(a[l]);return C}n.set=function(a,l){return Gn(this),this.i=null,a=pr(this,a),hc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=Cc(this,a),a.length>0?String(a[0]):l):l};function fc(a,l,C){lc(a,l),C.length>0&&(a.i=null,a.g.set(pr(a,l),A(C)),a.h+=C.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let d=0;d<l.length;d++){var C=l[d];const P=ss(C);C=Cc(this,C);for(let b=0;b<C.length;b++){let U=P;C[b]!==""&&(U+="="+ss(C[b])),a.push(U)}}return this.i=a.join("&")};function dc(a){const l=new cs;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function pr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Ap(a,l){l&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(C,d){const P=d.toLowerCase();d!=P&&(lc(this,d),fc(this,P,C))},a)),a.j=l}function Rp(a,l){const C=new rs;if(o.Image){const d=new Image;d.onload=h(sn,C,"TestLoadImage: loaded",!0,l,d),d.onerror=h(sn,C,"TestLoadImage: error",!1,l,d),d.onabort=h(sn,C,"TestLoadImage: abort",!1,l,d),d.ontimeout=h(sn,C,"TestLoadImage: timeout",!1,l,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else l(!1)}function vp(a,l){const C=new rs,d=new AbortController,P=setTimeout(()=>{d.abort(),sn(C,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:d.signal}).then(b=>{clearTimeout(P),b.ok?sn(C,"TestPingServer: ok",!0,l):sn(C,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),sn(C,"TestPingServer: error",!1,l)})}function sn(a,l,C,d,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),d(C)}catch{}}function Pp(){this.g=new lp}function Da(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Da,qu),Da.prototype.g=function(){return new Ri(this.i,this.h)};function Ri(a,l){Ue.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Ri,Ue),n=Ri.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,hs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function pc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?ls(this):hs(this),this.readyState==3&&pc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ls(this))},n.Na=function(a){this.g&&(this.response=a,ls(this))},n.ga=function(){this.g&&ls(this)};function ls(a){a.readyState=4,a.l=null,a.j=null,a.B=null,hs(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var C=l.next();!C.done;)C=C.value,a.push(C[0]+": "+C[1]),C=l.next();return a.join(`\r
`)};function hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gc(a){let l="";return _i(a,function(C,d){l+=d,l+=":",l+=C,l+=`\r
`}),l}function Ia(a,l,C){e:{for(d in C){var d=!1;break e}d=!0}d||(C=gc(C),typeof a=="string"?C!=null&&ss(C):pe(a,l,C))}function De(a){Ue.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(De,Ue);var Sp=/^https?$/i,bp=["POST","PUT"];n=De.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,C,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xu.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(b){mc(this,b);return}if(a=C||"",C=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var P in d)C.set(P,d[P]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const b of d.keys())C.set(b,d.get(b));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(C.keys()).find(b=>b.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(bp,l,void 0)>=0)||d||P||C.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,U]of C)this.g.setRequestHeader(b,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){mc(this,b)}};function mc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Ec(a),vi(a)}function Ec(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ze(this,"complete"),ze(this,"abort"),vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),De.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?_c(this):this.Xa())},n.Xa=function(){_c(this)};function _c(a){if(a.h&&typeof i<"u"){if(a.v&&on(a)==4)setTimeout(a.Ca.bind(a),0);else if(ze(a,"readystatechange"),on(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var C;if(!(C=l)){var d;if(d=b===0){let U=String(a.D).match(uc)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),d=!Sp.test(U?U.toLowerCase():"")}C=d}if(C)ze(a,"complete"),ze(a,"success");else{a.o=6;try{var P=on(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Ec(a)}}finally{vi(a)}}}}function vi(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const C=a.g;a.g=null,l||ze(a,"ready");try{C.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function on(a){return a.g?a.g.readyState:0}n.ca=function(){try{return on(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),cp(l)}};function Dc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Op(a){const l={};a=(a.g&&on(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<a.length;d++){if(_(a[d]))continue;var C=pp(a[d]);const P=C[0];if(C=C[1],typeof C!="string")continue;C=C.trim();const b=l[P]||[];l[P]=b,b.push(C)}sp(l,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(a,l,C){return C&&C.internalChannelParams&&C.internalChannelParams[a]||l}function Ic(a){this.za=0,this.i=[],this.j=new rs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Cs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Cs("baseRetryDelayMs",5e3,a),this.Za=Cs("retryDelaySeedMs",1e4,a),this.Ta=Cs("forwardChannelMaxRetries",2,a),this.va=Cs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new sc(a&&a.concurrentRequestLimit),this.Ba=new Pp,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ic.prototype,n.ka=8,n.I=1,n.connect=function(a,l,C,d){Qe(0),this.W=a,this.H=l||{},C&&d!==void 0&&(this.H.OSID=C,this.H.OAID=d),this.F=this.X,this.J=bc(this,null,this.W),Si(this)};function wa(a){if(wc(a),a.I==3){var l=a.V++,C=Pt(a.J);if(pe(C,"SID",a.M),pe(C,"RID",l),pe(C,"TYPE","terminate"),fs(a,C),l=new nn(a,a.j,l),l.M=2,l.A=Ai(Pt(C)),C=!1,o.navigator&&o.navigator.sendBeacon)try{C=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!C&&o.Image&&(new Image().src=l.A,C=!0),C||(l.g=Oc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ti(l)}Sc(a)}function Pi(a){a.g&&(Ta(a),a.g.cancel(),a.g=null)}function wc(a){Pi(a),a.v&&(o.clearTimeout(a.v),a.v=null),bi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Si(a){if(!ic(a.h)&&!a.m){a.m=!0;var l=a.Ea;Ne||E(),Ce||(Ne(),Ce=!0),T.add(l,a),a.D=0}}function Np(a,l){return oc(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ns(c(a.Ea,a,l),Pc(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new nn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=Lu(b),xu(b,this.U)):b=this.U),this.u!==null||this.R||(P.J=b,b=null),this.S)e:{for(var l=0,C=0;C<this.i.length;C++){t:{var d=this.i[C];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,l>4096){l=C;break e}if(l===4096||C===this.i.length-1){l=C+1;break e}}l=1e3}else l=1e3;l=Tc(this,P,l),C=Pt(this.J),pe(C,"RID",a),pe(C,"CVER",22),this.G&&pe(C,"X-HTTP-Session-Id",this.G),fs(this,C),b&&(this.R?l="headers="+ss(gc(b))+"&"+l:this.u&&Ia(C,this.u,b)),Ea(this.h,P),this.Ra&&pe(C,"TYPE","init"),this.S?(pe(C,"$req",l),pe(C,"SID","null"),P.U=!0,da(P,C,null)):da(P,C,l),this.I=2}}else this.I==3&&(a?yc(this,a):this.i.length==0||ic(this.h)||yc(this))};function yc(a,l){var C;l?C=l.l:C=a.V++;const d=Pt(a.J);pe(d,"SID",a.M),pe(d,"RID",C),pe(d,"AID",a.K),fs(a,d),a.u&&a.o&&Ia(d,a.u,a.o),C=new nn(a,a.j,C,a.D+1),a.u===null&&(C.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Tc(a,C,1e3),C.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ea(a.h,C),da(C,d,l)}function fs(a,l){a.H&&_i(a.H,function(C,d){pe(l,d,C)}),a.l&&_i({},function(C,d){pe(l,d,C)})}function Tc(a,l,C){C=Math.min(a.i.length,C);const d=a.l?c(a.l.Ka,a.l,a):null;e:{var P=a.i;let re=-1;for(;;){const be=["count="+C];re==-1?C>0?(re=P[0].g,be.push("ofs="+re)):re=0:be.push("ofs="+re);let fe=!0;for(let Fe=0;Fe<C;Fe++){var b=P[Fe].g;const St=P[Fe].map;if(b-=re,b<0)re=Math.max(0,P[Fe].g-100),fe=!1;else try{b="req"+b+"_"||"";try{var U=St instanceof Map?St:Object.entries(St);for(const[Hn,an]of U){let Bn=an;B(an)&&(Bn=ca(an)),be.push(b+Hn+"="+encodeURIComponent(Bn))}}catch(Hn){throw be.push(b+"type="+encodeURIComponent("_badmap")),Hn}}catch{d&&d(St)}}if(fe){U=be.join("&");break e}}U=void 0}return a=a.i.splice(0,C),l.G=a,U}function Ac(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Ne||E(),Ce||(Ne(),Ce=!0),T.add(l,a),a.A=0}}function ya(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ns(c(a.Da,a),Pc(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Rc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ns(c(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Qe(10),Pi(this),Rc(this))};function Ta(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Rc(a){a.g=new nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Pt(a.na);pe(l,"RID","rpc"),pe(l,"SID",a.M),pe(l,"AID",a.K),pe(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(l,"TO",a.ia),pe(l,"TYPE","xmlhttp"),fs(a,l),a.u&&a.o&&Ia(l,a.u,a.o),a.O&&(a.g.H=a.O);var C=a.g;a=a.ba,C.M=1,C.A=Ai(Pt(l)),C.u=null,C.R=!0,tc(C,a)}n.Va=function(){this.C!=null&&(this.C=null,Pi(this),ya(this),Qe(19))};function bi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function vc(a,l){var C=null;if(a.g==l){bi(a),Ta(a),a.g=null;var d=2}else if(ma(a.h,l))C=l.G,ac(a.h,l),d=1;else return;if(a.I!=0){if(l.o)if(d==1){C=l.u?l.u.length:0,l=Date.now()-l.F;var P=a.D;d=wi(),ze(d,new $u(d,C)),Si(a)}else Ac(a);else if(P=l.m,P==3||P==0&&l.X>0||!(d==1&&Np(a,l)||d==2&&ya(a)))switch(C&&C.length>0&&(l=a.h,l.i=l.i.concat(C)),P){case 1:Un(a,5);break;case 4:Un(a,10);break;case 3:Un(a,6);break;default:Un(a,2)}}}function Pc(a,l){let C=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(C*=2),C*l}function Un(a,l){if(a.j.info("Error code "+l),l==2){var C=c(a.bb,a),d=a.Ua;const P=!d;d=new rn(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||os(d,"https"),Ai(d),P?Rp(d.toString(),C):vp(d.toString(),C)}else Qe(2);a.I=0,a.l&&a.l.pa(l),Sc(a),wc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function Sc(a){if(a.I=0,a.ja=[],a.l){const l=Bc(a.h);(l.length!=0||a.i.length!=0)&&(v(a.ja,l),v(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function bc(a,l,C){var d=C instanceof rn?Pt(C):new rn(C);if(d.g!="")l&&(d.g=l+"."+d.g),as(d,d.u);else{var P=o.location;d=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;const b=new rn(null);d&&os(b,d),l&&(b.g=l),P&&as(b,P),C&&(b.h=C),d=b}return C=a.G,l=a.wa,C&&l&&pe(d,C,l),pe(d,"VER",a.ka),fs(a,d),d}function Oc(a,l,C){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new De(new Da({ab:C})):new De(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nc(){}n=Nc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Oi(){}Oi.prototype.g=function(a,l){return new Bt(a,l)};function Bt(a,l){Ue.call(this),this.g=new Ic(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new gr(this)}f(Bt,Ue),Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){wa(this.g)},Bt.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var C={};C.__data__=a,a=C}else this.v&&(C={},C.__data__=ca(a),a=C);l.i.push(new Ep(l.Ya++,a)),l.I==3&&Si(l)},Bt.prototype.N=function(){this.g.l=null,delete this.j,wa(this.g),delete this.g,Bt.Z.N.call(this)};function Fc(a){la.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const C in l){a=C;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}f(Fc,la);function Lc(){ha.call(this),this.status=1}f(Lc,ha);function gr(a){this.g=a}f(gr,Nc),gr.prototype.ra=function(){ze(this.g,"a")},gr.prototype.qa=function(a){ze(this.g,new Fc(a))},gr.prototype.pa=function(a){ze(this.g,new Lc)},gr.prototype.oa=function(){ze(this.g,"b")},Oi.prototype.createWebChannel=Oi.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,iC=function(){return new Oi},sC=function(){return wi()},rC=Vn,Ya={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yi.NO_ERROR=0,yi.TIMEOUT=8,yi.HTTP_ERROR=6,$i=yi,Yu.COMPLETE="complete",nC=Yu,Ku.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",Ue.prototype.listen=Ue.prototype.J,_s=Ku,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa,tC=De}).apply(typeof Fi<"u"?Fi:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var V=class jn{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static LOOKBEHIND=512;static MATCH_NL=jn.CLASS_NL|jn.DOT_NL;static PERL=jn.CLASS_NL|jn.ONE_LINE|jn.PERL_X|jn.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2};const mr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},ks=128,Xa=new Int32Array(ks),Za=new Int32Array(ks),Li=65535;for(let n=0;n<ks;n++)n>=97&&n<=122?Xa[n]=n-32:Xa[n]=n,n>=65&&n<=90?Za[n]=n+32:Za[n]=n;var O=class{static CODES=new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]);static toUpperCase(n){if(n<ks)return Xa[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>Li?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=r.codePointAt(0)>Li?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<ks)return Za[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>Li?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=r.codePointAt(0)>Li?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}},p=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const oC=new Uint8Array(256);for(let n=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";n<64;n++)oC[e.charCodeAt(n)]=n;const aC=n=>{const e=[];let t=0,r=0;for(let s=0;s<n.length;s++){let i=oC[n.charCodeAt(s)];t|=(i&31)<<r,i&32?r+=5:(e.push(t),t=0,r=0)}return e},g=(n,e)=>{const t=aC(n),r=e?t.length/2:t.length/3,s=new Uint32Array(r*3);let i=0,o=0;for(let B=0;B<r;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},pm=n=>{const e=aC(n),t=new Map;let r=0;for(let s=0;s<e.length;s+=2){r+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(r,r+o)}return t};var ki=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return n in this.initializer}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.initializer[n],t=e?e():null;return this.cache.set(n,t),t}},tt=class{static _CASE_ORBIT=null;static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=pm("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static _Print=null;static get Print(){return this._Print||(this._Print=new p(g("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static CATEGORIES=new ki({C:()=>new p(g("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new p(g("AfgDgB",!0)),Cf:()=>new p(g("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new p(g("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new p(g("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new p(g("gg2B--B",!0)),L:()=>new p(g("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new p(g("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new p(g("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new p(g("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new p(g("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new p(g("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new p(g("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new p(g("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new p(g("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new p(g("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new p(g("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new p(g("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new p(g("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new p(g("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new p(g("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new p(g("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new p(g("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new p(g("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new p(g("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new p(g("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new p(g("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new p(g("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new p(g("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new p(g("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new p(g("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new p(g("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new p(g("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new p(g("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new p(g("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new p(g("ohIA",!0)),Zp:()=>new p(g("phIA",!0)),Zs:()=>new p(g("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new p(g("wBJIFbF",!0)),Alphabetic:()=>new p(g("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new p(g("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new p(g("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new p(g("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new p(g("7-8DE",!0)),Emoji_Modifier_Base:()=>new p(g("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new p(g("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new p(g("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new p(g("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new p(g("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new p(g("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new p(g("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new p(g("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new p(g("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new p(g("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))});static get Upper(){return this.CATEGORIES.get("Lu")}static SCRIPTS=new ki({Adlam:()=>new p(g("go6DrCFJFB",!0)),Ahom:()=>new p(g("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new p(g("ggxCmS",!0)),Arabic:()=>new p(g("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new p(g("xpBlBDxBDCks9BE",!0)),Avestan:()=>new p(g("g4iC1BEG",!0)),Balinese:()=>new p(g("g4GsCCxB",!0)),Bamum:()=>new p(g("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new p(g("w26CdDF",!0)),Batak:()=>new p(g("g+GzBJD",!0)),Bengali:()=>new p(g("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new p(g("g17CYDY",!0)),Bhaiksuki:()=>new p(g("ggnCICsBCNLc",!0)),Bopomofo:()=>new p(g("qXB6wLqBxDf",!0)),Brahmi:()=>new p(g("ggkCtCFjBKA",!0)),Braille:()=>new p(g("ggK-H",!0)),Buginese:()=>new p(g("gwGbDB",!0)),Buhid:()=>new p(g("g6FT",!0)),Canadian_Aboriginal:()=>new p(g("ggF-TxRlC7tgCP",!0)),Carian:()=>new p(g("g1gCwB",!0)),Caucasian_Albanian:()=>new p(g("wphCzBMA",!0)),Chakma:()=>new p(g("gokC0BCR",!0)),Cham:()=>new p(g("gwqB2BKNDJDD",!0)),Cherokee:()=>new p(g("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new p(g("w9jCb",!0)),Common:()=>new p(g("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new p(g("ifNxkKzDGG",!0)),Cuneiform:()=>new p(g("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new p(g("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new p(g("w8rCiD",!0)),Cyrillic:()=>new p(g("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new p(g("gghCvC",!0)),Devanagari:()=>new p(g("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new p(g("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new p(g("ggmC7B",!0)),Duployan:()=>new p(g("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new p(g("ggsC1iBL68D",!0)),Elbasan:()=>new p(g("gohCnB",!0)),Elymaic:()=>new p(g("g-jCW",!0)),Ethiopic:()=>new p(g("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new p(g("gqjClBEcJB",!0)),Georgian:()=>new p(g("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new p(g("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new p(g("w5gCa",!0)),Grantha:()=>new p(g("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new p(g("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new p(g("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new p(g("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new p(g("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new p(g("go4C5B",!0)),Han:()=>new p(g("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new p(g("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new p(g("gojCnBJJ",!0)),Hanunoo:()=>new p(g("g5FU",!0)),Hatran:()=>new p(g("gniCSCBGE",!0)),Hebrew:()=>new p(g("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new p(g("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new p(g("giiCVCI",!0)),Inherited:()=>new p(g("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new p(g("g7iCSGH",!0)),Inscriptional_Parthian:()=>new p(g("g6iCVDH",!0)),Javanese:()=>new p(g("gsqBtCDJFB",!0)),Kaithi:()=>new p(g("gkkCiCLA",!0)),Kannada:()=>new p(g("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new p(g("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new p(g("g4nCQCoBEc",!0)),Kayah_Li:()=>new p(g("goqBtBCA",!0)),Kharoshthi:()=>new p(g("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new p(g("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new p(g("g8F9CDJHJnPf",!0)),Khojki:()=>new p(g("gwkCRCuB",!0)),Khudawadi:()=>new p(g("w1kC6BGJ",!0)),Kirat_Rai:()=>new p(g("gq7C5B",!0)),Lao:()=>new p(g("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new p(g("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new p(g("ggH3BEOEC",!0)),Limbu:()=>new p(g("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new p(g("gwhC2JKVLH",!0)),Linear_B:()=>new p(g("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new p(g("wmpBvBx1eA",!0)),Lycian:()=>new p(g("g0gCc",!0)),Lydian:()=>new p(g("gpiCZGA",!0)),Mahajani:()=>new p(g("wqkCmB",!0)),Makasar:()=>new p(g("g3nCY",!0)),Malayalam:()=>new p(g("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new p(g("giCbDA",!0)),Manichaean:()=>new p(g("g2iCmBFL",!0)),Marchen:()=>new p(g("wjnCfDVCN",!0)),Masaram_Gondi:()=>new p(g("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new p(g("gy7C6C",!0)),Meetei_Mayek:()=>new p(g("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new p(g("gg6DkGDP",!0)),Meroitic_Cursive:()=>new p(g("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new p(g("gsiCf",!0)),Miao:()=>new p(g("g47CqCF4BIQ",!0)),Modi:()=>new p(g("gwlCkCMJ",!0)),Mongolian:()=>new p(g("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new p(g("gy6CeCJFB",!0)),Multani:()=>new p(g("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new p(g("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new p(g("gkiCeJI",!0)),Nag_Mundari:()=>new p(g("wm5DpB",!0)),Nandinagari:()=>new p(g("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new p(g("gsGrBFZHKEB",!0)),Newa:()=>new p(g("gglC7CCE",!0)),Nko:()=>new p(g("g+B6BDC",!0)),Nushu:()=>new p(g("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new p(g("go4DsBENDJFB",!0)),Ogham:()=>new p(g("g0Fc",!0)),Ol_Chiki:()=>new p(g("wiHvB",!0)),Ol_Onal:()=>new p(g("wu5DqBFA",!0)),Old_Hungarian:()=>new p(g("gkjCyBOyBIF",!0)),Old_Italic:()=>new p(g("g4gCjBKC",!0)),Old_North_Arabian:()=>new p(g("g0iCf",!0)),Old_Permic:()=>new p(g("w6gCqB",!0)),Old_Persian:()=>new p(g("g9gCjBFN",!0)),Old_Sogdian:()=>new p(g("g4jCnB",!0)),Old_South_Arabian:()=>new p(g("gziCf",!0)),Old_Turkic:()=>new p(g("ggjCoC",!0)),Old_Uyghur:()=>new p(g("w7jCZ",!0)),Oriya:()=>new p(g("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new p(g("wlhCjBFjB",!0)),Osmanya:()=>new p(g("gkhCdDJ",!0)),Pahawh_Hmong:()=>new p(g("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new p(g("gjiCf",!0)),Pau_Cin_Hau:()=>new p(g("g2mC4B",!0)),Phags_Pa:()=>new p(g("giqB3B",!0)),Phoenician:()=>new p(g("goiCbEA",!0)),Psalter_Pahlavi:()=>new p(g("g8iCRIDNG",!0)),Rejang:()=>new p(g("wpqBjBMA",!0)),Runic:()=>new p(g("g1FqCEK",!0)),Samaritan:()=>new p(g("ggCtBDO",!0)),Saurashtra:()=>new p(g("gkqBlCJL",!0)),Sharada:()=>new p(g("gskC-ChsCH",!0)),Shavian:()=>new p(g("wihCvB",!0)),Siddham:()=>new p(g("gslC1BDlB",!0)),Sidetic:()=>new p(g("gqiCZ",!0)),SignWriting:()=>new p(g("gg2DrUQECO",!0)),Sinhala:()=>new p(g("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new p(g("w5jCpB",!0)),Sora_Sompeng:()=>new p(g("wmkCYIJ",!0)),Soyombo:()=>new p(g("wymCyC",!0)),Sundanese:()=>new p(g("g8G-BhIH",!0)),Sunuwar:()=>new p(g("g+mChBPJ",!0)),Syloti_Nagri:()=>new p(g("ggqBsB",!0)),Syriac:()=>new p(g("g4BNC7BDCxIK",!0)),Tagalog:()=>new p(g("g4FVKA",!0)),Tagbanwa:()=>new p(g("g7FMCCCB",!0)),Tai_Le:()=>new p(g("wqGdDE",!0)),Tai_Tham:()=>new p(g("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new p(g("g0qBiCZE",!0)),Tai_Yo:()=>new p(g("g25DeCVJB",!0)),Takri:()=>new p(g("g0lC5BHJ",!0)),Tamil:()=>new p(g("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new p(g("wz6CuCCJ",!0)),Tangut:()=>new p(g("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new p(g("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new p(g("g8BxB",!0)),Thai:()=>new p(g("hwD5BGb",!0)),Tibetan:()=>new p(g("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new p(g("wpL3BIBPA",!0)),Tirhuta:()=>new p(g("gklCnCJJ",!0)),Todhri:()=>new p(g("guhCzB",!0)),Tolong_Siki:()=>new p(g("wtnCrBFJ",!0)),Toto:()=>new p(g("w04De",!0)),Tulu_Tigalari:()=>new p(g("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new p(g("g8gCdCA",!0)),Unknown:()=>new p(g("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new p(g("gopBrJ",!0)),Vithkuqi:()=>new p(g("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new p(g("g24D5BGA",!0)),Warang_Citi:()=>new p(g("glmCyCNA",!0)),Yezidi:()=>new p(g("g0jCpBCCDB",!0)),Yi:()=>new p(g("ggoBskBE2B",!0)),Zanabazar_Square:()=>new p(g("gwmCnC",!0))});static FOLD_CATEGORIES=new ki({L:()=>new p(g("laA",!0)),LC:()=>new p(g("laA",!0)),Ll:()=>new p(g("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new p(g("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new p(g("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new p(g("5cgBgBlgHAB",!1)),Mn:()=>new p(g("5cgBgBlgHAB",!1)),Emoji:()=>new p(g("8mJA",!0)),Extended_Pictographic:()=>new p(g("8mJA",!0)),Lowercase:()=>new p(g("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new p(g("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new p(g("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))});static FOLD_SCRIPT=new ki({Common:()=>new p(g("8cgBgB",!1)),Greek:()=>new p(g("1FwUwU",!1)),Inherited:()=>new p(g("5cgBgBlgHAB",!1))})},q=class gt{static MAX_RUNE=1114111;static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static MIN_HIGH_SURROGATE=55296;static MAX_HIGH_SURROGATE=56319;static MIN_LOW_SURROGATE=56320;static MAX_LOW_SURROGATE=57343;static MIN_SUPPLEMENTARY_CODE_POINT=65536;static is32(e,t){let r=0,s=e.length;for(;r<s;){const i=r+Math.floor((s-r)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:r=i+1}return!1}static is(e,t){if(t<=gt.MAX_LATIN1){for(let r=0;r<e.length;r++){if(t>e.getHi(r))continue;const s=e.getLo(r);if(t<s)return!1;const i=e.getStride(r);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&gt.is32(e,t)}static isUpper(e){if(e<=gt.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return gt.is(tt.Upper,e)}static isPrint(e){return e<=gt.MAX_LATIN1?e>=32&&e<gt.MAX_ASCII||e>=161&&e!==173:gt.is(tt.Print,e)}static simpleFold(e){if(tt.CASE_ORBIT.has(e))return tt.CASE_ORBIT.get(e);const t=O.toLowerCase(e);return t!==e?t:O.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=gt.MAX_ASCII&&t<=gt.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let r=gt.simpleFold(e);r!==e;r=gt.simpleFold(r))if(r===t)return!0;return!1}};const RB=256,BC=new Uint8Array(RB);for(let n=0;n<RB;n++)BC[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let Oa=null,Na=null;var Q=class ut{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")||O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")}static unhex(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")?e-O.CODES.get("0"):O.CODES.get("a")<=e&&e<=O.CODES.get("f")?e-O.CODES.get("a")+10:O.CODES.get("A")<=e&&e<=O.CODES.get("F")?e-O.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(q.isPrint(e))ut.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case O.CODES.get('"'):t+='\\"';break;case O.CODES.get("\\"):t+="\\\\";break;case O.CODES.get("	"):t+="\\t";break;case O.CODES.get(`
`):t+="\\n";break;case O.CODES.get("\r"):t+="\\r";break;case O.CODES.get("\b"):t+="\\b";break;case O.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){const t=String(e),r=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);r.push(i),s+=i>q.MAX_BMP?2:1}return r}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<RB?BC[e]===1:!1}static emptyOpContext(e,t){let r=0;return e<0&&(r|=ut.EMPTY_BEGIN_TEXT|ut.EMPTY_BEGIN_LINE),e===10&&(r|=ut.EMPTY_BEGIN_LINE),t<0&&(r|=ut.EMPTY_END_TEXT|ut.EMPTY_END_LINE),t===10&&(r|=ut.EMPTY_END_LINE),ut.isWordRune(e)!==ut.isWordRune(t)?r|=ut.EMPTY_WORD_BOUNDARY:r|=ut.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>ut.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>q.MAX_BMP?2:1}static toArray(e){const t=e.length,r=new Array(t);for(let s=0;s<t;s++)r[s]=e[s];return r}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Oa||(Oa=new TextEncoder),Oa.encode(e);{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===q.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===q.MIN_LOW_SURROGATE?(i=q.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){Na||(Na=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return Na.decode(t)}else{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[r++],B=e[r++],u=e[r++],c=((i&7)<<18|(o&63)<<12|(B&63)<<6|u&63)-q.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(q.MIN_HIGH_SURROGATE+(c>>10)),t[s++]=String.fromCharCode(q.MIN_LOW_SURROGATE+(c&1023))}else{let o=e[r++],B=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}};const uC=(n=[],e=0)=>{const t=Object.create(null);for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)};var er=class eB{static Encoding=uC(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===eB.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===eB.Encoding.UTF_16}},zc=class extends er{constructor(n=null){super(),this.bytes=n}getEncoding(){return er.Encoding.UTF_8}asCharSequence(){return Q.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},gm=class extends er{constructor(n=null){super(),this.charSequence=n}getEncoding(){return er.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return Q.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},zn=class{static utf16(n){return new gm(n)}static utf8(n){return Q.isByteArray(n)?new zc(n):new zc(Q.stringToUtf8ByteArray(n))}},Ye=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},mm=class extends Ye{constructor(n,e=0,t=n.length){super(),this.bytes=n,this.start=e,this.end=t}hasString(n,e){const t=n.bytes;if(t.length===0)return!0;const r=this.indexOf(this.bytes,t,this.start+e);return r!==-1&&r<=this.end-t.length}hasAnyString(n,e){return n.ac8?n.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return Ye.EOF();const e=this.bytes[n]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&n+1<this.end){const t=this.bytes[n+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&n+2<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;return(r&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|r&63)<<3|3}else if(e>=240&&e<=244&&n+3<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;if((r&192)!==128)return e<<3|1;const s=this.bytes[n+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(r&63)<<6|s&63)<<3|4}else return e<<3|1}index(n,e){e+=this.start;const t=this.indexOf(this.bytes,n.prefixUTF8,e);return t<0?t:t-e}context(n){n+=this.start;let e=-1;if(n>this.start&&n<=this.end){let r=n-1;if(e=this.bytes[r--],e>=128){let s=n-4;for(s<this.start&&(s=this.start);r>=s&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start),e=this.step(r-this.start)>>3}}const t=n<this.end?this.step(n-this.start)>>3:-1;return Q.emptyOpContext(e,t)}indexOf(n,e,t=0){let r=e.length;if(r===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-r;const o=typeof n.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=n.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&n[B]!==s;)B++;if(B>i)return-1}let u=!0;for(let c=1;c<r;c++)if(n[B+c]!==e[c]){u=!1;break}if(u)return B;B++}return-1}prefixLength(n){return n.prefixUTF8.length}},Em=class extends Ye{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.ac16?n.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return Ye.EOF();const e=this.charSequence.charCodeAt(n);if(e<q.MIN_HIGH_SURROGATE||e>q.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=q.MIN_LOW_SURROGATE&&t<=q.MAX_LOW_SURROGATE?(e-q.MIN_HIGH_SURROGATE)*1024+(t-q.MIN_LOW_SURROGATE)+q.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return Q.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},ge=class{static fromUTF8(n,e=0,t=n.length){return new mm(n,e,t)}static fromUTF16(n,e=0,t=n.length){return new Em(n,e,t)}},si=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},de=class extends si{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},_m=class extends si{constructor(n){super(n),this.name="RE2JSCompileException"}},et=class extends si{constructor(n){super(n),this.name="RE2JSGroupException"}},Dm=class extends si{constructor(n){super(n),this.name="RE2JSFlagsException"}},ys=class extends si{constructor(n){super(n),this.name="RE2JSInternalException"}},Qc=class cC{static MAX_REPLACER_ARGS=65535;static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(r=>{const s=r.codePointAt(0);return s===O.CODES.get("\\")||s===O.CODES.get("$")?`\\${r}`:r}).join(""):e.indexOf("$")<0?e:e.split("").map(r=>r.codePointAt(0)===O.CODES.get("$")?"$$":r).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,this.numberOfInstructions=r.numberOfInstructions(),t instanceof er?this.resetMatcherInput(t):Q.isByteArray(t)?this.resetMatcherInput(zn.utf8(t)):this.resetMatcherInput(zn.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof er||(Q.isByteArray(e)?e=zn.utf8(e):e=zn.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new et(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new et(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new et(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}getNamedGroups(){if(!this.hasMatch)throw new et("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new et(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new et("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new et("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,V.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,V.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new et(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?ge.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):ge.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,V.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?Q.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),r}appendReplacementInternalJava(e){let t="",r=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===O.CODES.get("\\")){if(r<i&&(t+=e.substring(r,i)),i++,i>=s)throw new et("character to be escaped is missing");r=i,i++;continue}if(o===O.CODES.get("$")){if(r<i&&(t+=e.substring(r,i)),i+1>=s)throw new et("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(O.CODES.get("0")<=B&&B<=O.CODES.get("9")){let u=B-O.CODES.get("0"),c=i+2;for(;c<s;c++){const f=e.codePointAt(c);if(f<O.CODES.get("0")||f>O.CODES.get("9")||u*10+f-O.CODES.get("0")>this.patternGroupCount)break;u=u*10+f-O.CODES.get("0")}if(u>this.patternGroupCount)throw new et(`n > number of groups: ${u}`);const h=this.group(u);h!==null&&(t+=h),i=c,r=i}else if(B===O.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==O.CODES.get("}");)u++;if(u>=s)throw new et("named capture group is missing trailing '}'");const c=e.substring(i+2,u),h=this.group(c);h!==null&&(t+=h),i=u+1,r=i}else throw new et("Illegal group reference");continue}i++}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalJs(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===O.CODES.get("$")){let o=e.codePointAt(i+1);if(O.CODES.get("$")===o){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(O.CODES.get("&")===o){r<i&&(t+=e.substring(r,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,r=i+1;continue}else if(O.CODES.get("`")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(0,this.start(0)),i++,r=i+1;continue}else if(O.CODES.get("'")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,r=i+1;continue}else if(O.CODES.get("1")<=o&&o<=O.CODES.get("9")){let B=o-O.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<O.CODES.get("0")||o>O.CODES.get("9")||B*10+o-O.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-O.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,r=i,i--;continue}const u=this.group(B);u!==null&&(t+=u),r=i,i--;continue}else if(o===O.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==O.CODES.get(">")&&e.codePointAt(B)!==O.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==O.CODES.get(">")){t+=e.substring(i-1,B+1),r=B+1,i=B;continue}const u=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const c=this.group(u);c!==null&&(t+=c)}else t+=`$<${u}>`;r=B+1,i=B;continue}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=cC.MAX_REPLACER_ARGS)throw new et("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,r){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,r);return s+=String(e(...B)),s}buildReplacerArgs(e,t,r){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(r),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},N=class Le{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static LB_WRITE=12;static LB_CHECK=13;static isRuneOp(e){return Le.RUNE<=e&&e<=Le.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=Q.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&V.FOLD_CASE?q.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&V.FOLD_CASE?q.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case Le.ALT:return`alt -> ${this.out}, ${this.arg}`;case Le.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Le.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Le.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Le.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case Le.FAIL:return"fail";case Le.NOP:return`nop -> ${this.out}`;case Le.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case Le.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case Le.RUNE:return this.runes===null?"rune <null>":["rune ",Le.escapeRunes(this.runes),this.arg&V.FOLD_CASE?"/i":""," -> ",this.out].join("");case Le.RUNE1:return`rune1 ${Le.escapeRunes(this.runes)} -> ${this.out}`;case Le.RUNE_ANY:return`any -> ${this.out}`;case Le.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},Wc=class{constructor(n){this.sparse=new Int32Array(n),this.densePcs=new Int32Array(n),this.denseCaps=null,this.size=0,this.ncap=0}init(n){this.ncap=n;const e=this.densePcs.length*n;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(n){const e=this.sparse[n];return e<this.size&&this.densePcs[e]===n}isEmpty(){return this.size===0}add(n){const e=this.size++;return this.sparse[n]=e,this.densePcs[e]=n,e}clear(){this.size=0}toString(){let n="{";for(let e=0;e<this.size;e++)e!==0&&(n+=", "),n+=this.densePcs[e];return n+="}",n}},Im=class tB{static fromRE2(e){const t=new tB;return t.prog=e.prog,t.re2=e,t.q0=new Wc(t.prog.numInst()),t.q1=new Wc(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return tB.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?Q.emptyInts():Q.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,r){const s=this.re2.cond;if(s===Q.EMPTY_ALL||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,f=c&7,m=-1,A=0;c!==Ye.EOF()&&(c=e.step(i+f),m=c>>3,A=c&7);let v;for(i===0?v=Q.emptyOpContext(-1,h):v=e.context(i);;){if(B.isEmpty()){if(s&Q.EMPTY_BEGIN_TEXT&&i!==0||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&m!==this.re2.prefixRune&&e.canCheckPrefix()){const j=e.index(this.re2,i);if(j<0)break;i+=j,c=e.step(i),h=c>>3,f=c&7,c=e.step(i+f),m=c>>3,A=c&7,v=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let j=0;j<this.prog.lbStarts.length;j++)this.add(B,this.prog.lbStarts[j],i,this.matchcap,0,v);!this.matched&&(i===0||r===V.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,v));const x=i+f;if(v=e.context(x),this.step(B,u,i,x,h,v,r,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,h=m,f=A,h!==-1&&(c=e.step(i+f),m=c>>3,A=c&7);const M=B;B=u,u=M}return u.clear(),this.matched}matchSet(e,t,r){const s=this.re2.cond;if(s===Q.EMPTY_ALL)return[];if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,f=c&7,m=-1,A=0;c!==Ye.EOF()&&(c=e.step(i+f),m=c>>3,A=c&7);let v=i===0?Q.emptyOpContext(-1,h):e.context(i);const x=new Set;for(;!(B.isEmpty()&&(s&Q.EMPTY_BEGIN_TEXT&&i!==0||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let ee=0;ee<this.prog.lbStarts.length;ee++)this.add(B,this.prog.lbStarts[ee],i,this.matchcap,0,v);(i===0||r===V.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,v);const M=i+f;v=e.context(M);for(let ee=0;ee<B.size;ee++){const ae=B.densePcs[ee],Be=this.prog.inst[ae],Ne=ee*this.ncap;let Ce=!1;switch(Be.op){case N.MATCH:if(r===V.ANCHOR_BOTH&&i!==e.endPos())break;x.add(Be.arg);break;case N.RUNE:Ce=Be.matchRune(h);break;case N.RUNE1:Ce=h===Be.runes[0];break;case N.RUNE_ANY:Ce=!0;break;case N.RUNE_ANY_NOT_NL:Ce=h!==10;break;default:continue}Ce&&this.add(u,Be.out,M,B.denseCaps,Ne,v)}if(B.clear(),f===0)break;i+=f,h=m,f=A,h!==-1&&(c=e.step(i+f),m=c>>3,A=c&7);const j=B;B=u,u=j}return u.clear(),Array.from(x).sort((M,j)=>M-j)}step(e,t,r,s,i,o,B,u){const c=this.re2.longest;for(let h=0;h<e.size;h++){const f=e.densePcs[h],m=h*this.ncap;if(c&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[m])continue;const A=this.prog.inst[f];let v=!1;switch(A.op){case N.MATCH:if(B===V.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!c||!this.matched||this.matchcap[1]<r)){e.denseCaps[m+1]=r;for(let x=0;x<this.ncap;x++)this.matchcap[x]=e.denseCaps[m+x]}c||(e.size=0),this.matched=!0;break;case N.RUNE:v=A.matchRune(i);break;case N.RUNE1:v=i===A.runes[0];break;case N.RUNE_ANY:v=!0;break;case N.RUNE_ANY_NOT_NL:v=i!==10;break;default:continue}v&&this.add(t,A.out,s,e.denseCaps,m,o)}e.clear()}add(e,t,r,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),u=this.prog.inst[t];switch(u.op){case N.FAIL:return;case N.ALT:case N.ALT_MATCH:this.add(e,u.out,r,s,i,o),t=u.arg;continue;case N.EMPTY_WIDTH:if(!(u.arg&~o)){t=u.out;continue}return;case N.NOP:t=u.out;continue;case N.CAPTURE:if(u.arg<this.ncap){const c=s[i+u.arg];s[i+u.arg]=r,this.add(e,u.out,r,s,i,o),s[i+u.arg]=c;return}else{t=u.out;continue}case N.LB_WRITE:this.lbTable[Math.abs(u.arg)]=r,t=u.out;continue;case N.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===r){t=u.out;continue}}else if(this.lbTable[-u.arg]!==r){t=u.out;continue}return;case N.MATCH:case N.RUNE:case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:if(this.ncap>0){const c=B*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[c+h]=s[i+h]}return;default:throw new ys("unhandled")}}}};const $c=n=>{let e=-2128831035;for(let t=0;t<n.length;t++)e^=n[t],e=Math.imul(e,16777619);return e},wm=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0};var ym=class{constructor(n,e,t=[]){this.nfaStates=n,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(q.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(q.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},Tm=class nB{static MAX_CACHE_CLEARS=5;static STATE_MEMORY_ESTIMATE=838;constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/nB.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,r=[...e];let s=!1;const i=[];for(;r.length>0;){const B=r.pop();if(t.has(B))continue;t.add(B);const u=this.prog.getInst(B);switch(u.op){case N.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case N.ALT:case N.ALT_MATCH:r.push(u.out),r.push(u.arg);break;case N.NOP:case N.CAPTURE:r.push(u.out);break;case N.EMPTY_WIDTH:case N.LB_WRITE:case N.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,u)=>B-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const r=t.pcs,s=$c(r);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const u=i[B];if(wm(u.nfaStates,r))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=nB.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new ym(r,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),r=e.length-t,s=e.slice(r),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const u=$c(B.nfaStates);let c=this.stateCache.get(u);c||(c=[],this.stateCache.set(u,c)),c.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,r){if(t<=q.MAX_LATIN1)if(r===V.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(r===V.UNANCHORED?0:q.MAX_RUNE+1),B=e.transKeys,u=B.length;for(let c=0;c<u;c++)if(B[c]===o)return e.transVals[c]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],u=this.prog.getInst(B);N.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}r===V.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=q.MAX_LATIN1)r===V.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(r===V.UNANCHORED?0:q.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,r){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(r===V.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),u=B>>3,c=B&7;if(c===0)break;if(i=r===V.UNANCHORED&&u<=q.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,r),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(r===V.ANCHOR_BOTH){if(o+c===s)return!0}else return!0;if(i.nfaStates.length===0&&r!==V.UNANCHORED)return!1;o+=c}return!1}matchSet(e,t,r){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(c,h)=>{c.isMatch&&(r===V.ANCHOR_BOTH?h===s&&c.matchIDs.forEach(f=>o.add(f)):c.matchIDs.forEach(f=>o.add(f)))};B(i,t);let u=t;for(;u<s;){const c=e.step(u),h=c>>3,f=c&7;if(f===0)break;if(i=r===V.UNANCHORED&&h<=q.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,r),i===null)return null;if(i.lastSeen=++this.clock,u+=f,B(i,u),i.nfaStates.length===0&&r!==V.UNANCHORED)break}return Array.from(o).sort((c,h)=>c-h)}};const Am=32,Rm=500,Fa=256,vm=256*1024;var Pm=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(Fa),this.jobArg=new Uint8Array(Fa),this.jobPos=new Int32Array(Fa),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const r=n.numInst()*(e+1)+Am-1>>>5;this.visited.length<r?this.visited=new Uint32Array(r):this.visited.fill(0,0,r),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,r=t>>>5,s=1<<(t&31);return this.visited[r]&s?!1:(this.visited[r]|=s,!0)}push(n,e,t,r){if(n.prog.getInst(e).op!==N.FAIL&&(r||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=r?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,r,s){const i=n.longest;for(this.push(n,t,r,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],c=!0;for(;!(!c&&!this.shouldVisit(o,u));){c=!1;const h=n.prog.getInst(o);switch(h.op){case N.FAIL:throw new ys("unexpected InstFail");case N.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(n,o,u,!0),o=h.out;continue}case N.ALT_MATCH:{const f=n.prog.getInst(h.out);if(N.isRuneOp(f.op)){this.push(n,h.arg,u,!1),o=h.arg,u=this.end;continue}this.push(n,h.out,this.end,!1),o=h.out;continue}case N.RUNE:{const f=e.step(u);if(f===Ye.EOF()||!h.matchRune(f>>3))break;u+=f&7,o=h.out;continue}case N.RUNE1:{const f=e.step(u);if(f===Ye.EOF()||f>>3!==h.runes[0])break;u+=f&7,o=h.out;continue}case N.RUNE_ANY_NOT_NL:{const f=e.step(u);if(f===Ye.EOF()||f>>3===10)break;u+=f&7,o=h.out;continue}case N.RUNE_ANY:{const f=e.step(u);if(f===Ye.EOF())break;u+=f&7,o=h.out;continue}case N.CAPTURE:if(B){this.cap[h.arg]=u;break}else{h.arg<this.ncap&&(this.push(n,o,this.cap[h.arg],!0),this.cap[h.arg]=u),o=h.out;continue}case N.EMPTY_WIDTH:{const f=e.context(u);if(h.arg&~f)break;o=h.out;continue}case N.NOP:o=h.out;continue;case N.MATCH:{if(s===V.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const f=this.matchcap[1];if((f===-1||i&&u>0&&u>f)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case N.LB_WRITE:case N.LB_CHECK:throw new ys("Backtracker cannot evaluate Lookbehind instructions");default:throw new ys("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const xi=[];var Vi=class lC{static shouldBacktrack(e){return e.numInst()<=Rm}static maxBitStateLen(e){return lC.shouldBacktrack(e)?Math.floor(vm/e.numInst()):0}static execute(e,t,r,s,i){const o=e.cond;if(o===Q.EMPTY_ALL||(s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&r!==0||o&Q.EMPTY_BEGIN_TEXT&&r!==0)return null;const B=xi.length>0?xi.pop():new Pm,u=t.endPos();B.reset(e.prog,u,i);let c=!1;if(o&Q.EMPTY_BEGIN_TEXT||s===V.ANCHOR_START||s===V.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=r),B.tryBacktrack(e,t,e.prog.start,r,s)&&(c=!0);else{let f=-1;for(;r<=u&&f!==0;r+=f){if(e.prefix.length>0){const A=t.index(e,r);if(A<0)break;r+=A}if(B.ncap>0&&(B.cap[0]=r),B.tryBacktrack(e,t,e.prog.start,r,s)){c=!0;break}const m=t.step(r);f=m===Ye.EOF()?0:m&7}}if(!c)return xi.push(B),null;const h=i===0?[]:Q.toArray(B.matchcap.subarray(0,i));return xi.push(B),h}},Yc=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const Sm=(n,e,t,r)=>{const s=n.length,i=e.length;let o=0,B=0;const u=[],c=[];let h=!0,f=-1;const m=A=>{const v=A?n:e,x=A?o:B,M=A?t:r;return f>0&&v[x]<=u[f]?!1:(u.push(v[x],v[x+1]),A?o+=2:B+=2,f+=2,c.push(M),!0)};for(;o<s||B<i;)if(B>=i?h=m(!0):o>=s||e[B]<n[o]?h=m(!1):h=m(!0),!h)return null;return{merged:u,next:c}};var bm=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],r=new N(t.op);r.out=t.out,r.arg=t.arg,r.runes=t.runes?t.runes.slice():[],r.next=null,this.inst[e]=r}}};const Om=n=>{const e=new bm(n);for(let t=0;t<e.inst.length;t++){const r=e.inst[t];if(r.op!==N.ALT&&r.op!==N.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[r[i]];if(o.op!==N.ALT&&o.op!==N.ALT_MATCH&&(s="arg",i="out",o=e.inst[r[i]],o.op!==N.ALT&&o.op!==N.ALT_MATCH))continue;const B=e.inst[r[s]];if(B.op===N.ALT||B.op===N.ALT_MATCH)continue;let u="out",c="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,u="arg",c="out"),h&&(o[u]=r[s]),r[s]===o[u]&&(r[i]=o[c])}return e},Nm=n=>{if(n.inst.length>=1e3)return null;const e=new Yc(n.inst.length),t=new Yc(n.inst.length),r=new Array(n.inst.length),s=new Array(n.inst.length).fill(!1),i=o=>{let B=!0;const u=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case N.ALT:case N.ALT_MATCH:{B=i(u.out)&&i(u.arg);let c=s[u.out],h=s[u.arg];if(c&&h)return!1;if(h){const v=u.out;u.out=u.arg,u.arg=v;const x=c;c=h,h=x}c&&(s[o]=!0,u.op=N.ALT_MATCH);const f=r[u.out]||[],m=r[u.arg]||[],A=Sm(f,m,u.out,u.arg);if(!A)return!1;r[o]=A.merged,u.next=new Uint32Array(A.next);break}case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:B=i(u.out),s[o]=s[u.out],r[o]=r[u.out]?r[u.out].slice():[],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break;case N.MATCH:case N.FAIL:s[o]=u.op===N.MATCH;break;case N.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){r[o]=[],u.next=new Uint32Array([u.out]);break}let c=[];if(u.runes.length===1&&u.arg&V.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let f=q.simpleFold(h);f!==h;f=q.simpleFold(f))c.push(f,f);c.sort((f,m)=>f-m)}else for(let h=0;h<u.runes.length;h++)c.push(u.runes[h]);r[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let c=[];if(u.arg&V.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let f=q.simpleFold(h);f!==h;f=q.simpleFold(f))c.push(f,f);c.sort((f,m)=>f-m)}else c.push(u.runes[0],u.runes[0]);r[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,q.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case N.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,9,11,q.MAX_RUNE],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break}return B};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)r[o]&&(n.inst[o].runes=r[o]);return n},Fm=(n,e)=>{for(let t=0;t<e.inst.length;t++){const r=e.inst[t];switch(r.op){case N.ALT:case N.ALT_MATCH:case N.RUNE:break;case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:case N.MATCH:case N.FAIL:n.inst[t].next=null;break;case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=r.op,n.inst[t].runes=r.runes?r.runes.slice():[];break}}};var Xc=class hC{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==N.EMPTY_WIDTH||!(t.arg&Q.EMPTY_BEGIN_TEXT))return null;let r=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===N.ALT||e.inst[i].op===N.ALT_MATCH){r=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case N.ALT:case N.ALT_MATCH:if(B===N.MATCH||e.inst[o.arg].op===N.MATCH)return null;break;case N.EMPTY_WIDTH:if(B===N.MATCH){if((o.arg&Q.EMPTY_END_TEXT)===Q.EMPTY_END_TEXT)continue;return null}break;default:if(B===N.MATCH&&r)return null;break}}let s=Om(e);return s=Nm(s),s!==null&&Fm(s,e),s}static next(e,t){const r=e.matchRunePos(t);return r>=0?e.next[r]:e.op===N.ALT_MATCH?e.out:0}static execute(e,t,r,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let u=!1,c=t.step(r),h=c>>3,f=c&7,m=Ye.EOF(),A=-1,v=0;c!==Ye.EOF()&&(m=t.step(r+f),m!==Ye.EOF()&&(A=m>>3,v=m&7));let x=r===0?Q.emptyOpContext(-1,h):t.context(r),M=o.start,j;for(;;){switch(j=o.inst[M],M=j.out,j.op){case N.MATCH:return s===V.ANCHOR_BOTH&&r!==t.endPos()?null:(u=!0,B.length>0&&(B[0]=0,B[1]=r),i===0?[]:Q.toArray(B));case N.RUNE:if(!j.matchRune(h))return null;break;case N.RUNE1:if(h!==j.runes[0])return null;break;case N.RUNE_ANY:break;case N.RUNE_ANY_NOT_NL:if(h===10)return null;break;case N.ALT:case N.ALT_MATCH:M=hC.next(j,h);continue;case N.FAIL:return null;case N.NOP:continue;case N.EMPTY_WIDTH:if(j.arg&~x)return null;continue;case N.CAPTURE:j.arg<B.length&&(B[j.arg]=r);continue;default:throw new ys("bad inst")}if(f===0)break;x=Q.emptyOpContext(h,A),r+=f,h=A,f=v,h!==-1&&(m=t.step(r+f),m!==Ye.EOF()?(A=m>>3,v=m&7):(A=-1,v=0))}return u?i===0?[]:Q.toArray(B):null}},w=class Y{static Op=uC(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=Y.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===O.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new Y(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=Y.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=Y.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Y.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Y.Op.EMPTY_MATCH:e+="(?:)";break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:case Y.Op.REPEAT:{const t=this.subs[0];switch(t.op>Y.Op.CAPTURE||t.op===Y.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Y.Op.STAR:e+="*";break;case Y.Op.PLUS:e+="+";break;case Y.Op.QUEST:e+="?";break;case Y.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&V.NON_GREEDY&&(e+="?");break}case Y.Op.CONCAT:for(let t of this.subs)t.op===Y.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case Y.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case Y.Op.LITERAL:this.flags&V.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=Q.escapeRune(t);this.flags&V.FOLD_CASE&&(e+=")");break;case Y.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Y.Op.ANY_CHAR:e+="(?s:.)";break;case Y.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case Y.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case Y.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Y.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Y.Op.BEGIN_TEXT:e+="\\A";break;case Y.Op.END_TEXT:this.flags&V.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case Y.Op.BEGIN_LINE:e+="^";break;case Y.Op.END_LINE:e+="$";break;case Y.Op.WORD_BOUNDARY:e+="\\b";break;case Y.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Y.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===q.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=Y.quoteIfHyphen(r),e+=Q.escapeRune(r),r!==s&&(e+="-",e+=Y.quoteIfHyphen(s),e+=Q.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=Y.quoteIfHyphen(r),e+=Q.escapeRune(r),r!==s&&(e+="-",e+=Y.quoteIfHyphen(s),e+=Q.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===Y.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof Y)||this.op!==e.op)return!1;switch(this.op){case Y.Op.END_TEXT:if((this.flags&V.WAS_DOLLAR)!==(e.flags&V.WAS_DOLLAR))return!1;break;case Y.Op.LITERAL:case Y.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case Y.Op.ALTERNATE:case Y.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.REPEAT:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.PLB:case Y.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},Zc=class{constructor(n){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of n){let r=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[r]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[r][i]=this.next.length-1),r=this.next[r][i]}this.match[r]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const r=this.next[0][t];this.fail[r]=0,e.push(r)}for(;e.length>0;){const t=e.shift();for(const r in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],r)){const s=this.next[t][r];let i=this.fail[t];for(;i!==0&&!(r in this.next[i]);)i=this.fail[i];r in this.next[i]?this.fail[s]=this.next[i][r]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n.charCodeAt(s);for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}searchUTF8(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n[s];for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}},le=class Ds{static Type={NONE:0,EXACT:1,AND:2,OR:3};constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Ds.Type.NONE:return!0;case Ds.Type.EXACT:return e.hasString(this,t);case Ds.Type.AND:for(let r=0;r<this.subs.length;r++)if(!this.subs[r].eval(e,t))return!1;return!0;case Ds.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let r=0;r<this.subs.length;r++)if(this.subs[r].eval(e,t))return!0;return!1;default:return!0}}},Lm=class qt{static build(e){const t=qt.fromRegexp(e);return qt.simplify(t)}static fromRegexp(e){if(!e)return new le(le.Type.NONE);switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.NO_MATCH:case w.Op.EMPTY_MATCH:case w.Op.BEGIN_LINE:case w.Op.END_LINE:case w.Op.BEGIN_TEXT:case w.Op.END_TEXT:case w.Op.WORD_BOUNDARY:case w.Op.NO_WORD_BOUNDARY:case w.Op.CHAR_CLASS:case w.Op.ANY_CHAR_NOT_NL:case w.Op.ANY_CHAR:return new le(le.Type.NONE);case w.Op.LITERAL:{if(e.runes.length===0||e.flags&V.FOLD_CASE)return new le(le.Type.NONE);const t=new le(le.Type.EXACT);let r="";for(let s=0;s<e.runes.length;s++)r+=String.fromCodePoint(e.runes[s]);return t.str=r,t.bytes=Q.stringToUtf8ByteArray(t.str),t}case w.Op.CAPTURE:case w.Op.PLUS:return qt.fromRegexp(e.subs[0]);case w.Op.REPEAT:return e.min>=1?qt.fromRegexp(e.subs[0]):new le(le.Type.NONE);case w.Op.CONCAT:{const t=new le(le.Type.AND);for(const r of e.subs)t.subs.push(qt.fromRegexp(r));return t}case w.Op.ALTERNATE:{const t=new le(le.Type.OR);for(const r of e.subs)t.subs.push(qt.fromRegexp(r));return t}default:return new le(le.Type.NONE)}}static simplify(e){if(e.type===le.Type.EXACT||e.type===le.Type.NONE)return e;if(e.type===le.Type.AND){const t=[];for(const r of e.subs){const s=qt.simplify(r);if(s.type!==le.Type.NONE)if(s.type===le.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new le(le.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===le.Type.OR){const t=[];for(const o of e.subs){const B=qt.simplify(o);if(B.type===le.Type.NONE)return new le(le.Type.NONE);if(B.type===le.Type.OR)for(let u=0;u<B.subs.length;u++)t.push(B.subs[u]);else t.push(B)}if(t.length===0)return new le(le.Type.NONE);if(t.length===1)return t[0];const r=new Set,s=[];for(const o of t)o.type===le.Type.EXACT?r.has(o.str)||(r.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==le.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new Zc(s.map(o=>{const B=[];for(let u=0;u<o.str.length;u++)B.push(o.str.charCodeAt(u));return B})),e.ac8=new Zc(s.map(o=>o.bytes))),e}return e}},mt=class{constructor(n=0,e=0){this.head=n,this.tail=e}},km=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new N(n))}skipNop(n){let e=this.inst[n];for(;e.op===N.NOP||e.op===N.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!N.isRuneOp(e.op)||e.runes.length!==1)return[e.op===N.MATCH,n];for(;N.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&V.FOLD_CASE);)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===N.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case N.EMPTY_WIDTH:n|=t.arg;break;case N.FAIL:return-1;case N.CAPTURE:case N.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const r=this.inst[t>>1];t&1?(t=r.arg,r.arg=e):(t=r.out,r.out=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return n.tail&1?t.arg=e.head:t.out=e.head,new mt(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}},Mi=class{constructor(n=0,e=new mt,t=!1){this.i=n,this.out=e,this.nullable=t}},xm=class Er{static ANY_RUNE_NOT_NL(){return[0,O.CODES.get(`
`)-1,O.CODES.get(`
`)+1,q.MAX_RUNE]}static ANY_RUNE(){return[0,q.MAX_RUNE]}static compileRegexp(e){const t=new Er,r=t.compile(e);return t.prog.patch(r.out,t.newInst(N.MATCH).i),t.prog.start=r.i,t.prog}static compileSet(e){const t=new Er;if(e.length===0)return t.prog.start=t.newInst(N.FAIL).i,t.prog;let r=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(N.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),r.push(o.i)}let s=r[0];for(let i=1;i<r.length;i++){const o=t.newInst(N.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=r[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new km,this.newInst(N.FAIL)}newInst(e){return this.prog.addInst(e),new Mi(this.prog.numInst()-1,new mt,!0)}nop(){const e=this.newInst(N.NOP);return e.out=new mt(e.i<<1,e.i<<1),e}fail(){return new Mi}cap(e){const t=this.newInst(N.CAPTURE);return t.out=new mt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Mi(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new mt(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new mt(r.i<<1|1,r.i<<1|1)),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new mt(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new mt(r.i<<1|1,r.i<<1|1)),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Mi(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(N.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new mt(t.i<<1,t.i<<1),t}rune(e,t){const r=this.newInst(N.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=V.FOLD_CASE,(e.length!==1||q.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=new mt(r.i<<1,r.i<<1),!(t&V.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=N.RUNE1:e.length===2&&e[0]===0&&e[1]===q.MAX_RUNE?s.op=N.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===O.CODES.get(`
`)-1&&e[2]===O.CODES.get(`
`)+1&&e[3]===q.MAX_RUNE&&(s.op=N.RUNE_ANY_NOT_NL),r}lookBehind(e,t){const r=this.newInst(N.LB_WRITE);this.prog.getInst(r.i).arg=t;const s=this.rune(Er.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,r.i);const B=this.newInst(N.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new mt(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case w.Op.NO_MATCH:return this.fail();case w.Op.EMPTY_MATCH:return this.nop();case w.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case w.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case w.Op.ANY_CHAR_NOT_NL:return this.rune(Er.ANY_RUNE_NOT_NL(),0);case w.Op.ANY_CHAR:return this.rune(Er.ANY_RUNE(),0);case w.Op.BEGIN_LINE:return this.empty(Q.EMPTY_BEGIN_LINE);case w.Op.END_LINE:return this.empty(Q.EMPTY_END_LINE);case w.Op.BEGIN_TEXT:return this.empty(Q.EMPTY_BEGIN_TEXT);case w.Op.END_TEXT:return this.empty(Q.EMPTY_END_TEXT);case w.Op.WORD_BOUNDARY:return this.empty(Q.EMPTY_WORD_BOUNDARY);case w.Op.NO_WORD_BOUNDARY:return this.empty(Q.EMPTY_NO_WORD_BOUNDARY);case w.Op.PLB:case w.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case w.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case w.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case w.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case w.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&V.NON_GREEDY)!==0);case w.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}case w.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}default:throw new _m("regexp: unhandled case in compile")}}},Vm=class ct{static simplify(e){if(e===null)return null;switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:{const t=ct.simplify(e.subs[0]);if(t!==e.subs[0]){const r=w.fromRegexp(e);return r.runes=[],r.subs=[t],r}return e}case w.Op.CONCAT:case w.Op.ALTERNATE:{const t=[];let r=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=ct.simplify(i);if(o!==i&&(r=!0),e.op===w.Op.CONCAT){if(o.op===w.Op.NO_MATCH)return new w(w.Op.NO_MATCH);if(o.op===w.Op.EMPTY_MATCH){r=!0;continue}if(o.op===w.Op.CONCAT){r=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===w.Op.ALTERNATE){if(o.op===w.Op.NO_MATCH){r=!0;continue}if(o.op===w.Op.ALTERNATE){r=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(r){if(t.length===0)return new w(e.op===w.Op.CONCAT?w.Op.EMPTY_MATCH:w.Op.NO_MATCH);if(t.length===1)return t[0];const s=w.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case w.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new w(w.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===q.MAX_RUNE?new w(w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===q.MAX_RUNE?new w(w.Op.ANY_CHAR_NOT_NL):e;case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:{const t=ct.simplify(e.subs[0]);return ct.simplify1(e.op,e.flags,t,e)}case w.Op.REPEAT:{if(e.min===0&&e.max===0)return new w(w.Op.EMPTY_MATCH);const t=ct.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return ct.simplify1(w.Op.STAR,e.flags,t,null);if(e.min===1)return ct.simplify1(w.Op.PLUS,e.flags,t,null);const s=new w(w.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(ct.simplify1(w.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),ct.simplify(s)}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=ct.simplify1(w.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new w(w.Op.CONCAT);o.subs=[t,s],s=ct.simplify1(w.Op.QUEST,e.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new w(w.Op.CONCAT);return s.subs=r.slice(0),ct.simplify(s)}return new w(w.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){if(r.op===w.Op.EMPTY_MATCH)return r;if(r.op===w.Op.NO_MATCH)return e===w.Op.PLUS?r:new w(w.Op.EMPTY_MATCH);if(e===r.op&&(t&V.NON_GREEDY)===(r.flags&V.NON_GREEDY))return r;if(s!==null&&s.op===e&&(s.flags&V.NON_GREEDY)===(t&V.NON_GREEDY)&&r===s.subs[0])return s;const i=new w(e);return i.flags=t,i.subs=[r],i}},ce=class{constructor(n,e){this.sign=n,this.cls=e}};const el=[48,57],tl=[9,10,12,13,32,32],nl=[48,57,65,90,95,95,97,122],rl=new Map([["\\d",new ce(1,el)],["\\D",new ce(-1,el)],["\\s",new ce(1,tl)],["\\S",new ce(-1,tl)],["\\w",new ce(1,nl)],["\\W",new ce(-1,nl)]]),sl=[48,57,65,90,97,122],il=[65,90,97,122],ol=[0,127],al=[9,9,32,32],Bl=[0,31,127,127],ul=[48,57],cl=[33,126],ll=[97,122],hl=[32,126],Cl=[33,47,58,64,91,96,123,126],fl=[9,13,32,32],dl=[65,90],pl=[48,57,65,90,95,95,97,122],gl=[48,57,65,70,97,102],ml=new Map([["[:alnum:]",new ce(1,sl)],["[:^alnum:]",new ce(-1,sl)],["[:alpha:]",new ce(1,il)],["[:^alpha:]",new ce(-1,il)],["[:ascii:]",new ce(1,ol)],["[:^ascii:]",new ce(-1,ol)],["[:blank:]",new ce(1,al)],["[:^blank:]",new ce(-1,al)],["[:cntrl:]",new ce(1,Bl)],["[:^cntrl:]",new ce(-1,Bl)],["[:digit:]",new ce(1,ul)],["[:^digit:]",new ce(-1,ul)],["[:graph:]",new ce(1,cl)],["[:^graph:]",new ce(-1,cl)],["[:lower:]",new ce(1,ll)],["[:^lower:]",new ce(-1,ll)],["[:print:]",new ce(1,hl)],["[:^print:]",new ce(-1,hl)],["[:punct:]",new ce(1,Cl)],["[:^punct:]",new ce(-1,Cl)],["[:space:]",new ce(1,fl)],["[:^space:]",new ce(-1,fl)],["[:upper:]",new ce(1,dl)],["[:^upper:]",new ce(-1,dl)],["[:word:]",new ce(1,pl)],["[:^word:]",new ce(-1,pl)],["[:xdigit:]",new ce(1,gl)],["[:^xdigit:]",new ce(-1,gl)]]);var un=class ln{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],o=e[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],o=e[s+1];let B=t,u=r;for(;B<=u;){for(;B<r&&ln.cmp(e,B,i,o)<0;)B+=2;for(;u>t&&ln.cmp(e,u,i,o)>0;)u-=2;if(B<=u){if(B!==u){let c=e[B];e[B]=e[u],e[u]=c,c=e[B+1],e[B+1]=e[u+1],e[u+1]=c}B+=2,u-=2}}t<u&&ln.qsortIntPair(e,t,u),B<r&&ln.qsortIntPair(e,B,r)}constructor(e=Q.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;ln.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&V.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=q.MIN_FOLD&&t>=q.MAX_FOLD)return this.appendRange(e,t);if(t<q.MIN_FOLD||e>q.MAX_FOLD)return this.appendRange(e,t);e<q.MIN_FOLD&&(this.appendRange(e,q.MIN_FOLD-1),e=q.MIN_FOLD),t>q.MAX_FOLD&&(this.appendRange(q.MAX_FOLD+1,t),t=q.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=q.simpleFold(r);s!==r;s=q.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=q.MAX_RUNE&&this.appendRange(t,q.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const r=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r=0;r<e.length;++r){const s=e.getLo(r),i=e.getHi(r),o=e.getStride(r);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=q.MAX_RUNE&&this.appendRange(t,q.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=q.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=q.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new ln().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return ln.charClassToString(this.r,this.len)}},Mm=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=Q.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},Gm=class K{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ERR_UNEXPECTED_PAREN="unexpected )";static ERR_NESTING_DEPTH="expression nests too deeply";static ERR_LARGE="expression too large";static ERR_INVALID_CAPTURE_IN_LOOKBEHIND="invalid capture in lookbehind";static MAX_HEIGHT=1e3;static MAX_SIZE=3355443;static MAX_RUNES=33554432;static ANY_TABLE=new p(new Uint32Array([0,q.MAX_RUNE,1]));static ASCII_TABLE=new p(new Uint32Array([0,127,1]));static ASCII_FOLD_TABLE=new p(new Uint32Array([0,127,1,383,383,1,8490,8490,1]));static unicodeTable(e){return e==="Any"?{tab:K.ANY_TABLE,fold:K.ANY_TABLE,sign:1}:e==="Ascii"?{tab:K.ASCII_TABLE,fold:K.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:tt.CATEGORIES.get("Cn"),fold:tt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:tt.CATEGORIES.get("LC"),fold:tt.FOLD_CATEGORIES.get("LC"),sign:1}:tt.CATEGORIES.has(e)?{tab:tt.CATEGORIES.get(e),fold:tt.FOLD_CATEGORIES.get(e),sign:1}:tt.SCRIPTS.has(e)?{tab:tt.SCRIPTS.get(e),fold:tt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<q.MIN_FOLD||e>q.MAX_FOLD)return e;let t=e;const r=e;for(e=q.simpleFold(e);e!==r;e=q.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===w.Op.EMPTY_MATCH)return null;if(e.op===w.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===w.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new w(w.Op.LITERAL);return r.flags=t,r.runes=Q.stringToRunes(e),r}static parse(e,t){return new K(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=K.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=K.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new de(K.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&q.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==O.CODES.get("_")&&!Q.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=O.CODES.get("0")&&e.peek()<=O.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===O.CODES.get("0")?-1:r.length>8?-2:parseInt(r,10)}static isCharClass(e){return e.op===w.Op.LITERAL&&e.runes.length===1||e.op===w.Op.CHAR_CLASS||e.op===w.Op.ANY_CHAR_NOT_NL||e.op===w.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case w.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case w.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case w.Op.ANY_CHAR_NOT_NL:return t!==O.CODES.get(`
`);case w.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case w.Op.ANY_CHAR:break;case w.Op.ANY_CHAR_NOT_NL:K.matchRune(t,O.CODES.get(`
`))&&(e.op=w.Op.ANY_CHAR);break;case w.Op.CHAR_CLASS:t.op===w.Op.LITERAL?e.runes=new un(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new un(e.runes).appendClass(t.runes).toArray();break;case w.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=w.Op.CHAR_CLASS,e.runes=new un().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new de(K.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case O.CODES.get("1"):case O.CODES.get("2"):case O.CODES.get("3"):case O.CODES.get("4"):case O.CODES.get("5"):case O.CODES.get("6"):case O.CODES.get("7"):if(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"))break;case O.CODES.get("0"):{let s=r-O.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"));i++)s=s*8+e.peek()-O.CODES.get("0"),e.skip(1);return s}case O.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===O.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===O.CODES.get("}"))break;const u=Q.unhex(r);if(u<0||(B=B*16+u,B>q.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=Q.unhex(r);if(!e.more())break;r=e.pop();const i=Q.unhex(r);if(s<0||i<0)break;return s*16+i}case O.CODES.get("a"):return O.CODES.get("\x07");case O.CODES.get("f"):return O.CODES.get("\f");case O.CODES.get("n"):return O.CODES.get(`
`);case O.CODES.get("r"):return O.CODES.get("\r");case O.CODES.get("t"):return O.CODES.get("	");case O.CODES.get("v"):return O.CODES.get("\v");default:if(r<=q.MAX_ASCII&&!Q.isalnum(r))return r;break}throw new de(K.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new de(K.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?K.parseEscape(e):e.pop()}static concatRunes(e,t){for(let r=0;r<t.length;r++)e.push(t[r]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===w.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(K.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new w(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>K.MAX_RUNES)throw new de(K.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===w.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(K.MAX_SIZE/this.repeats)?this.repeats=K.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(K.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>K.MAX_SIZE)throw new de(K.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let r=0;switch(e.op){case w.Op.LITERAL:r=e.runes.length;break;case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:case w.Op.STAR:r=2+this.calcSize(e.subs[0]);break;case w.Op.PLUS:case w.Op.QUEST:r=1+this.calcSize(e.subs[0]);break;case w.Op.CONCAT:for(let s of e.subs)r=r+this.calcSize(s);break;case w.Op.ALTERNATE:for(let s of e.subs)r=r+this.calcSize(s);e.subs.length>1&&(r=r+e.subs.length-1);break;case w.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?r=2+s:r=1+e.min*s;break}r=e.max*s+(e.max-e.min);break}}return r=Math.max(1,r),this.size===null&&(this.size=new Map),this.size.set(e,r),r}checkHeight(e){if(!(this.numRegexp<K.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>K.MAX_HEIGHT)throw new de(K.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let r=1;for(let s of e.subs){const i=this.calcHeight(s);r<1+i&&(r=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,r),r}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!w.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(this.numRunes+=e.runes.length,e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===w.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&q.simpleFold(e.runes[0])===e.runes[2]&&q.simpleFold(e.runes[2])===e.runes[0]||e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&q.simpleFold(e.runes[0])===e.runes[1]&&q.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|V.FOLD_CASE))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|V.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==w.Op.LITERAL||i.op!==w.Op.LITERAL||(s.flags&V.FOLD_CASE)!==(i.flags&V.FOLD_CASE)?!1:(i.runes=K.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(w.Op.LITERAL);return r.flags=t,t&V.FOLD_CASE&&(e=K.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,o){let B=this.flags;if(B&V.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=V.NON_GREEDY),o!==-1))throw new de(K.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new de(K.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[u-1];if(w.isPseudoOp(c.op))throw new de(K.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=r,h.flags=B,h.subs=[c],this.stack[u-1]=h,this.checkLimits(h),e===w.Op.REPEAT&&(t>=2||r>=2)&&!this.repeatIsValid(h,1e3))throw new de(K.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===w.Op.REPEAT){let r=e.max;if(r===0)return!0;if(r<0&&(r=e.min),r>t)return!1;r>0&&(t=Math.trunc(t/r))}for(let r of e.subs)if(!this.repeatIsValid(r,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(w.Op.EMPTY_MATCH)):this.push(this.collapse(e,w.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(w.Op.NO_MATCH)):this.push(this.collapse(e,w.Op.ALTERNATE))}cleanAlt(e){e.op===w.Op.CHAR_CLASS&&(e.runes=new un(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===q.MAX_RUNE?(e.runes=[],e.op=w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===q.MAX_RUNE&&(e.runes=[],e.op=w.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let B of e)r+=B.op===t?B.subs.length:1;let s=new Array(r).fill(null),i=0;for(let B of e)if(B.op===t){for(let u=0;u<B.subs.length;u++)s[i++]=B.subs[u];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===w.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,o=0,B=0,u=0;for(let h=0;h<=r;h++){let f=null,m=0,A=0;if(h<r){let v=e[t+h];if(v.op===w.Op.CONCAT&&v.subs.length>0&&(v=v.subs[0]),v.op===w.Op.LITERAL&&(f=v.runes,m=v.runes.length,A=v.flags&V.FOLD_CASE),A===B){let x=0;for(;x<o&&x<m&&i[x]===f[x];)x++;if(x>0){o=x;continue}}}if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const v=this.newRegexp(w.Op.LITERAL);v.flags=B,v.runes=i.slice(0,o);for(let j=u;j<h;j++)e[t+j]=this.removeLeadingString(e[t+j],o),this.checkLimits(e[t+j]);const x=this.collapse(e.slice(t+u,t+h),w.Op.ALTERNATE),M=this.newRegexp(w.Op.CONCAT);M.subs=[v,x],e[s++]=M}u=h,i=f,o=m,B=A}r=s,t=0,u=0,s=0;let c=null;for(let h=0;h<=r;h++){let f=null;if(!(h<r&&(f=K.leadingRegexp(e[t+h]),c!==null&&c.equals(f)&&(K.isCharClass(c)||c.op===w.Op.REPEAT&&c.min===c.max&&K.isCharClass(c.subs[0]))))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const m=c;for(let x=u;x<h;x++){const M=x!==u;e[t+x]=this.removeLeadingRegexp(e[t+x],M),this.checkLimits(e[t+x])}const A=this.collapse(e.slice(t+u,t+h),w.Op.ALTERNATE),v=this.newRegexp(w.Op.CONCAT);v.subs=[m,A],e[s++]=v}u=h,c=f}}r=s,t=0,u=0,s=0;for(let h=0;h<=r;h++)if(!(h<r&&K.isCharClass(e[t+h]))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{let f=u;for(let A=u+1;A<h;A++){const v=e[t+f],x=e[t+A];(v.op<x.op||v.op===x.op&&(v.runes!==null?v.runes.length:0)<(x.runes!==null?x.runes.length:0))&&(f=A)}const m=e[t+u];e[t+u]=e[t+f],e[t+f]=m;for(let A=u+1;A<h;A++)K.mergeCharClass(e[t+u],e[t+A]),this.reuse(e[t+A]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}h<r&&(e[s++]=e[t+h]),u=h+1}r=s,t=0,u=0,s=0;for(let h=0;h<r;++h)h+1<r&&e[t+h].op===w.Op.EMPTY_MATCH&&e[t+h+1].op===w.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===w.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===w.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=w.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(w.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&V.LITERAL)return K.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new Mm(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case O.CODES.get("("):if(this.flags&V.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&V.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(w.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case O.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case O.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case O.CODES.get("^"):this.flags&V.ONE_LINE?this.op(w.Op.BEGIN_TEXT):this.op(w.Op.BEGIN_LINE),s.skip(1);break;case O.CODES.get("$"):this.flags&V.ONE_LINE?this.op(w.Op.END_TEXT).flags|=V.WAS_DOLLAR:this.op(w.Op.END_LINE),s.skip(1);break;case O.CODES.get("."):this.flags&V.DOT_NL?this.op(w.Op.ANY_CHAR):this.op(w.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case O.CODES.get("["):this.parseClass(s);break;case O.CODES.get("*"):case O.CODES.get("+"):case O.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case O.CODES.get("*"):o=w.Op.STAR;break;case O.CODES.get("+"):o=w.Op.PLUS;break;case O.CODES.get("?"):o=w.Op.QUEST;break}this.repeat(o,t,r,i,s,e);break}case O.CODES.get("{"):{i=s.pos();const o=K.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,r=(o&q.MAX_BMP)<<16>>16,this.repeat(w.Op.REPEAT,t,r,i,s,e);break}case O.CODES.get("\\"):{const o=s.pos();if(s.skip(1),this.flags&V.PERL_X&&s.more())switch(s.pop()){case O.CODES.get("A"):this.op(w.Op.BEGIN_TEXT);break e;case O.CODES.get("b"):this.op(w.Op.WORD_BOUNDARY);break e;case O.CODES.get("B"):this.op(w.Op.NO_WORD_BOUNDARY);break e;case O.CODES.get("C"):throw new de(K.ERR_INVALID_ESCAPE,"\\C");case O.CODES.get("Q"):{let c=s.rest();const h=c.indexOf("\\E");h>=0?(c=c.substring(0,h),s.skipString(c),s.skipString("\\E")):s.skipString(c);let f=0;for(;f<c.length;){const m=c.codePointAt(f);this.literal(m),f+=Q.charCount(m)}break e}case O.CODES.get("z"):this.op(w.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(w.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const c=new un;if(this.parseUnicodeClass(s,c)){B.runes=c.toArray(),this.push(B);break e}}const u=new un;if(this.parsePerlClassEscape(s,u)){B.runes=u.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(K.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new de(K.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const B=r.charAt(2)==="P"?4:3,u=r.indexOf(">");if(u<0)throw new de(K.ERR_INVALID_NAMED_CAPTURE,r);const c=r.substring(B,u);if(e.skipString(c),e.skip(B+1),!K.isValidCaptureName(c))throw new de(K.ERR_INVALID_NAMED_CAPTURE,r.substring(0,u+1));const h=this.op(w.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[c])throw new de(K.ERR_DUPLICATE_NAMED_CAPTURE,c);this.namedGroups[c]=this.numCap,h.name=c;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case O.CODES.get("i"):s|=V.FOLD_CASE,o=!0;break;case O.CODES.get("m"):s&=-17,o=!0;break;case O.CODES.get("s"):s|=V.DOT_NL,o=!0;break;case O.CODES.get("U"):s|=V.NON_GREEDY,o=!0;break;case O.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case O.CODES.get(":"):case O.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===O.CODES.get(":")&&this.op(w.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new de(K.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(w.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===w.Op.VERTICAL_BAR&&K.isCharClass(this.stack[e-1])&&K.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return K.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===w.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new de(K.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==w.Op.LEFT_PAREN)throw new de(K.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(K.hasCapture(e))throw new de(K.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=w.Op.PLB:t.op=w.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=w.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&V.PERL_X)||!e.more()||e.pop()!==O.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=rl.has(s)?rl.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&V.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const o=ml.has(i)?ml.get(i):null;if(o===null)throw new de(K.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&V.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&V.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===O.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new de(K.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==O.CODES.get("{"))o=Q.runeToString(i);else{const h=e.rest(),f=h.indexOf("}");if(f<0)throw e.rewindTo(r),new de(K.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===O.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=K.unicodeTable(o);if(B===null)throw new de(K.ERR_INVALID_CHAR_RANGE,e.from(r));B.sign<0&&(s=0-s);const u=B.tab,c=B.fold;if(!(this.flags&V.FOLD_CASE)||c===null)t.appendTableWithSign(u,s);else{const h=new un().appendTable(u).appendTable(c).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(w.Op.CHAR_CLASS);r.flags=this.flags;const s=new un;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&V.CLASS_NL||s.appendRange(O.CODES.get(`
`),O.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==O.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&V.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new de(K.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const u=K.parseClassChar(e,t);let c=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(c=K.parseClassChar(e,t),c<u)throw new de(K.ERR_INVALID_CHAR_RANGE,e.from(B))}this.flags&V.FOLD_CASE?s.appendFoldedRange(u,c):s.appendRange(u,c)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}},Um=class qn{static initTest(e){const t=qn.compile(e),r=new qn(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r.prefilter=t.prefilter,r}static compile(e){return qn.compileImpl(e,V.PERL,!1)}static compilePOSIX(e){return qn.compileImpl(e,V.POSIX,!0)}static compileImpl(e,t,r){let s=Gm.parse(e,t);const i=s.maxCap();s=Vm.simplify(s);const o=Lm.build(s),B=xm.compileRegexp(s),u=new qn(e,B,i,r);u.prefilter=o.type===le.Type.NONE?null:o;const[c,h]=B.prefix();return u.prefixComplete=c,u.prefix=h,u.prefixUTF8=Q.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return qn.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new Tm(this.prog),this.onepass=Xc.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,r,s){if((r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(r===V.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+B}else if(r===V.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(r===V.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,r,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,r,s);if(this.prefilter!==null&&r===V.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Xc.execute(this,e,t,r,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=Vi.maxBitStateLen(this.prog)?Vi.execute(this,e,t,r,s):this.doExecuteNFA(e,t,r,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,r);if(i!==null)return i?[]:null;if(e.endPos()<=Vi.maxBitStateLen(this.prog))return Vi.execute(this,e,t,r,s)}return this.doExecuteNFA(e,t,r,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,r,s){let i=this.get();i||(i=Im.fromRE2(this)),i.init(s);const o=i.match(e,t,r)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(ge.fromUTF16(e),0,V.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof er||(Q.isByteArray(e)?e=zn.utf8(e):e=zn.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?ge.fromUTF16(e.asCharSequence(),0,r):ge.fromUTF8(e.asBytes(),0,r),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(ge.fromUTF8(e),0,V.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,o="";const B=ge.fromUTF16(e);let u=0;for(;i<=e.length;){const c=this.executeEngine(B,i,V.UNANCHORED,2);if(c===null||c.length===0)break;o+=e.substring(s,c[0]),(c[1]>s||c[0]===0)&&(o+=t(e.substring(c[0],c[1])),u++),s=c[1];const h=B.step(i)&7;if(i+h>c[1]?i+=h:i+1>c[1]?i++:i=c[1],u>=r)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,u=-1;for(;B<t&&o<=i;){const c=this.executeEngine(e,o,V.UNANCHORED,this.prog.numCap);if(c===null||c.length===0)break;let h=!0;if(c[1]===o){c[0]===u&&(h=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=c[1];u=c[1],h&&(s.push(r(this.pad(c))),B++)}return s}findUTF8(e){const t=this.executeEngine(ge.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(ge.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(ge.fromUTF16(e),0,V.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(ge.fromUTF16(e),0,V.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(ge.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(ge.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(ge.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.executeEngine(ge.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(ge.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(ge.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(ge.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(ge.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(ge.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(ge.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(ge.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(ge.fromUTF16(e),t);return r.length===0?null:r}},Hm=class _r{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let r="",s=!1,i=e.length;i===0&&(r="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let c=e[B];if(c==="\\"){if(B+1<i)switch(c=e[B+1],c){case"\\":r+="\\\\",B+=2;continue;case"c":if(B+2<i){let m=e[B+2].charCodeAt(0);if(m>=65&&m<=90||m>=97&&m<=122){let A=m%32;r+="\\x",r+=(A>>4).toString(16).toUpperCase(),r+=(A&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}r+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let m=B+3,A=!1,v=!1;for(;m<i;){const x=e[m];if(x==="}"){v=!0;break}if(!_r.isHexadecimal(x))break;A=!0,m++}if(v&&A){r+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let m=!0;for(let A=0;A<4;A++)if(!_r.isHexadecimal(e[B+2+A])){m=!1;break}if(m){r+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}r+="u",B+=2,s=!0;continue;case"x":{let m=!1;if(B+2<i&&e[B+2]==="{"){let A=B+3,v=!1,x=!1;for(;A<i;){const M=e[A];if(M==="}"){x=!0;break}if(!_r.isHexadecimal(M))break;v=!0,A++}x&&v&&(m=!0)}else B+3<i&&_r.isHexadecimal(e[B+2])&&_r.isHexadecimal(e[B+3])&&(m=!0);m?(r+="\\x",B+=2):(r+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":r+="\\"+c,B+=2;continue;default:{let m=e.codePointAt(B+1);if(m>=48&&m<=57||m>=65&&m<=90||m>=97&&m<=122){let A=Q.charCount(m);r+=e.substring(B+1,B+1+A),B+=A+1,s=!0}else{r+="\\";let A=Q.charCount(m);r+=e.substring(B+1,B+1+A),B+=A+1}continue}}}else if(c==="/"){r+="\\/",B+=1,s=!0;continue}else if(c==="[")o=!0;else if(c==="]")o=!1;else if(!o&&c==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){r+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),f=Q.charCount(h);r+=e.substring(B,B+f),B+=f}const u=s?r:e;return t.length>0?`(?${t})${u}`:u}},vB=class bt{static CASE_INSENSITIVE=mr.CASE_INSENSITIVE;static DOTALL=mr.DOTALL;static MULTILINE=mr.MULTILINE;static DISABLE_UNICODE_GROUPS=mr.DISABLE_UNICODE_GROUPS;static LONGEST_MATCH=mr.LONGEST_MATCH;static LOOKBEHINDS=mr.LOOKBEHINDS;static quote(e){return Q.quoteMeta(e)}static quoteReplacement(e,t=!1){return Qc.quoteReplacement(e,t)}static translateRegExp(e){return Hm.translate(e)}static compile(e,t=0){let r=e;if(t&bt.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&bt.DOTALL&&(r=`(?s)${r}`),t&bt.MULTILINE&&(r=`(?m)${r}`),t&-544)throw new Dm("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=V.PERL;t&bt.DISABLE_UNICODE_GROUPS&&(s&=-129),t&bt.LOOKBEHINDS&&(s|=V.LOOKBEHIND);const i=new bt(e,t);return i.re2Input=Um.compileImpl(r,s,(t&bt.LONGEST_MATCH)!==0),i}static matches(e,t){return bt.compile(e).testExact(t)}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new bt(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return Q.isByteArray(e)&&(e=zn.utf8(e)),new Qc(this,e)}test(e){return Q.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=Q.isByteArray(e)?ge.fromUTF8(e):ge.fromUTF16(e);return this.re2Input.executeEngine(t,0,V.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;return r}split(e,t=0){const r=this.matcher(e),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&s.length===t-1)break;if(o===r.start()){if(t===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(t!==0||s.length===0&&!(o===r.inputLength()&&o>0))&&s.push(r.substring(o,r.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;yield r}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr="12.18.0";function Jm(n){Hr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new TB("@firebase/firestore");function Dr(){return tr.logLevel}function J(n,...e){if(tr.logLevel<=oe.DEBUG){const t=e.map(PB);tr.debug(`Firestore (${Hr}): ${n}`,...t)}}function Zt(n,...e){if(tr.logLevel<=oe.ERROR){const t=e.map(PB);tr.error(`Firestore (${Hr}): ${n}`,...t)}}function Tt(n,...e){if(tr.logLevel<=oe.WARN){const t=e.map(PB);tr.warn(`Firestore (${Hr}): ${n}`,...t)}}function PB(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,CC(n,r,t)}function CC(n,e,t){let r=`FIRESTORE (${Hr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Zt(r),new Error(r)}function z(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||CC(e,s,r)}function ne(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SB{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=jm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function rB(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return La(s)===La(i)?ie(s,i):La(s)?1:-1}return ie(n.length,e.length)}const qm=55296,Km=57343;function La(n){const e=n.charCodeAt(0);return e>=qm&&e<=Km}function Fr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gi(this.root,e,this.comparator,!0)}}class Gi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Me.RED,this.left=s??Me.EMPTY,this.right=i??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(e){return new El(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ve(this.comparator);return t.data=e,t}}class El{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="__name__";class Ot{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ot?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ot.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ie(e.length,t.length)}static compareSegments(e,t){const r=Ot.isNumericId(e),s=Ot.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ot.extractNumericId(e).compare(Ot.extractNumericId(t)):rB(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _n.fromString(e.substring(4,e.length-2))}}class he extends Ot{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new he(t)}static emptyPath(){return new he([])}}const zm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let dt=class Ir extends Ot{construct(e,t,r){return new Ir(e,t,r)}static isValidIdentifier(e){return zm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ir.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nt}static keyField(){return new Ir([Nt])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(r+=B,s++):(i(),s++)}if(i(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ir(t)}static emptyPath(){return new Ir([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new It([])}unionWith(e){let t=new ve(dt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qm(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function fC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(he.fromString(e))}static fromName(e){return new W(he.fromString(e).popFirst(5))}static empty(){return new W(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(n,e,t){if(!t)throw new H(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Wm(n,e,t,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _l(n){if(!W.isDocumentKey(n))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dl(n){if(W.isDocumentKey(n))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ii(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Oo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function nr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Oo(n);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function oi(n,e){if(!ii(n))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new H(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=-62135596800,wl=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*wl);return new me(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Il)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wl}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oi(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Il;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ae("string",me._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pC("Invalid base64 string: "+i):i}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const $m=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(n){if(z(!!n,39018),typeof n=="string"){let e=0;const t=$m.exec(n);if(z(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vn(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="server_timestamp",mC="__type__",EC="__previous_value__",_C="__local_write_time__";function No(n){return(n?.mapValue?.fields||{})[mC]?.stringValue===gC}function ai(n){const e=n.mapValue.fields[EC];return No(e)?ai(e):e}function Lr(n){const e=Rn(n.mapValue.fields[_C].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,t,r,s,i,o,B,u,c,h,f,m,A){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=f,this._customHeaders=m,this.grpcFlowControlWindow=A}}const uo="(default)";class xs{constructor(e,t){this.projectId=e,this.database=t||uo}static empty(){return new xs("","")}get isDefaultDatabase(){return this.database===uo}isEqual(e){return e instanceof xs&&e.projectId===this.projectId&&e.database===this.database}}function Xm(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xs(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bB=-1;function Fo(n){return n==null}function Vs(n){return n===0&&1/n==-1/0}function Zm(n){return typeof n=="number"&&Number.isInteger(n)&&!Vs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function eE(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="__type__",tE="__max__",Ui={mapValue:{}},IC="__vector__",Ms="value",kr={nullValue:"NULL_VALUE"},it={booleanValue:!0},xe={booleanValue:!1};function Se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?No(n)?4:nE(n)?9007199254740991:co(n)?10:11:$(28295,{value:n})}function Dt(n,e,t){if(n===e)return!0;const r=Se(n);if(r!==Se(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Lr(n).isEqual(Lr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Rn(i.timestampValue),u=Rn(o.timestampValue);return B.seconds===u.seconds&&B.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return vn(i.bytesValue).isEqual(vn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return _e(i.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o,B){if("integerValue"in i&&"integerValue"in o)return _e(i.integerValue)===_e(o.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in o)u=_e(i.doubleValue),c=_e(o.doubleValue);else{if(!B?.t)return!1;u=_e(i.integerValue??i.doubleValue),c=_e(o.integerValue??o.doubleValue)}return u===c?!!B?.i||Vs(u)===Vs(c):!!(B===void 0||B.o)&&isNaN(u)&&isNaN(c)}(n,e,t);case 9:return Fr(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Dt(s,i,t));case 10:case 11:return function(i,o,B){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Bo(u)!==Bo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Dt(u[h],c[h],B)))return!1;return!0}(n,e,t);default:return $(52216,{left:n})}}function Gs(n,e){return(n.values||[]).find(t=>Dt(t,e))!==void 0}function ot(n,e){if(n===e)return 0;const t=Se(n),r=Se(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(i,o){const B=_e(i.integerValue||i.doubleValue),u=_e(o.integerValue||o.doubleValue);return B<u?-1:B>u?1:B===u?0:isNaN(B)?isNaN(u)?0:-1:1}(n,e);case 3:return yl(n.timestampValue,e.timestampValue);case 4:return yl(Lr(n),Lr(e));case 5:return rB(n.stringValue,e.stringValue);case 6:return function(i,o){const B=vn(i),u=vn(o);return B.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const B=i.split("/"),u=o.split("/");for(let c=0;c<B.length&&c<u.length;c++){const h=ie(B[c],u[c]);if(h!==0)return h}return ie(B.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const B=ie(_e(i.latitude),_e(o.latitude));return B!==0?B:ie(_e(i.longitude),_e(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Tl(n.arrayValue,e.arrayValue);case 10:return function(i,o){const B=i.fields||{},u=o.fields||{},c=B[Ms]?.arrayValue,h=u[Ms]?.arrayValue,f=ie(c?.values?.length||0,h?.values?.length||0);return f!==0?f:Tl(c,h)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ui.mapValue&&o===Ui.mapValue)return 0;if(i===Ui.mapValue)return 1;if(o===Ui.mapValue)return-1;const B=i.fields||{},u=Object.keys(B),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=rB(u[f],h[f]);if(m!==0)return m;const A=ot(B[u[f]],c[h[f]]);if(A!==0)return A}return ie(u.length,h.length)}(n.mapValue,e.mapValue);default:throw $(23264,{u:t})}}function yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=Rn(n),r=Rn(e),s=ie(t.seconds,r.seconds);return s!==0?s:ie(t.nanos,r.nanos)}function Tl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ot(t[s],r[s]);if(i!==void 0&&i!==0)return i}return ie(t.length,r.length)}function xr(n){return sB(n)}function sB(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return vn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=sB(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sB(t.fields[o])}`;return s+"}"}(n.mapValue):$(61005,{value:n})}function Yi(n){switch(Se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ai(n);return e?16+Yi(e):16;case 5:return 2*n.stringValue.length;case 6:return vn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Yi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Br(r.fields,(i,o)=>{s+=i.length+Yi(o)}),s}(n.mapValue);default:throw $(13486,{value:n})}}function Al(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ft(n){return!!n&&"integerValue"in n}function Qn(n){return!!n&&"doubleValue"in n}function Pn(n){return Ft(n)||Qn(n)}function Vr(n){return!!n&&"arrayValue"in n}function Ct(n){return!!n&&"nullValue"in n}function at(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wn(n){return!!n&&"mapValue"in n}function co(n){return(n?.mapValue?.fields||{})[DC]?.stringValue===IC}function iB(n){return(n?.mapValue?.fields||{})[Ms]?.arrayValue}function Ts(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Br(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ts(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ts(n.arrayValue.values[t]);return e}return{...n}}function nE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ts(t)}setAll(e){let t=dt.emptyPath(),r={},s=[];e.forEach((o,B)=>{if(!t.isImmediateParentOf(B)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=B.popLast()}o?r[B.lastSegment()]=Ts(o):s.push(B.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Wn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Wn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Br(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht(Ts(this.value))}}function wC(n){const e=[];return Br(n.fields,(t,r)=>{const s=new dt([t]);if(Wn(r)){const i=wC(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vs(e)?"-0":e}}function OB(n){return{integerValue:""+n}}function NB(n,e,t){return Zm(e)?OB(e):Lo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this._=void 0}}function rE(n,e,t){return n instanceof Us?function(s,i){const o={fields:{[mC]:{stringValue:gC},[_C]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&No(i)&&(i=ai(i)),i&&(o.fields[EC]=i),{mapValue:o}}(t,e):n instanceof Hs?TC(n,e):n instanceof Js?AC(n,e):n instanceof js?function(s,i){const o=yC(s,i),B=Co(o)+Co(s.l);return Ft(o)&&Ft(s.l)?OB(B):Lo(s.serializer,B)}(n,e):n instanceof lo?function(s,i){return Rl(s,i,Math.min)}(n,e):n instanceof ho?function(s,i){return Rl(s,i,Math.max)}(n,e):void 0}function sE(n,e,t){return n instanceof Hs?TC(n,e):n instanceof Js?AC(n,e):t}function yC(n,e){return n instanceof js?Pn(e)?e:{integerValue:0}:null}class Us extends ko{}class Hs extends ko{constructor(e){super(),this.elements=e}}function TC(n,e){const t=RC(e);for(const r of n.elements)t.some(s=>Dt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Js extends ko{constructor(e){super(),this.elements=e}}function AC(n,e){let t=RC(e);for(const r of n.elements)t=t.filter(s=>!Dt(s,r));return{arrayValue:{values:t}}}class FB extends ko{constructor(e,t){super(),this.serializer=e,this.l=t}}class js extends FB{}class lo extends FB{}class ho extends FB{}function Rl(n,e,t){if(!Pn(e))return n.l;const r=t(Co(e),Co(n.l));return Ft(e)&&Ft(n.l)?OB(r):Lo(n.serializer,r)}function Co(n){return _e(n.integerValue||n.doubleValue)}function RC(n){return Vr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.field=e,this.transform=t}}function oE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Hs&&s instanceof Hs||r instanceof Js&&s instanceof Js?Fr(r.elements,s.elements,Dt):r instanceof js&&s instanceof js||r instanceof lo&&s instanceof lo||r instanceof ho&&s instanceof ho?Dt(r.l,s.l):r instanceof Us&&s instanceof Us}(n.transform,e.transform)}class aE{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xo{}function vC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new LB(n.key,yt.none()):new Bi(n.key,n.data,yt.none());{const t=n.data,r=ht.empty();let s=new ve(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ur(n.key,r,new It(s.toArray()),yt.none())}}function BE(n,e,t){n instanceof Bi?function(s,i,o){const B=s.value.clone(),u=Pl(s.fieldTransforms,i,o.transformResults);B.setAll(u),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()}(n,e,t):n instanceof ur?function(s,i,o){if(!Xi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=Pl(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(PC(s)),u.setAll(B),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function As(n,e,t,r){return n instanceof Bi?function(i,o,B,u){if(!Xi(i.precondition,o))return B;const c=i.value.clone(),h=Sl(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof ur?function(i,o,B,u){if(!Xi(i.precondition,o))return B;const c=Sl(i.fieldTransforms,u,o),h=o.data;return h.setAll(PC(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,o,B){return Xi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B}(n,e,t)}function uE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=yC(r.transform,s||null);i!=null&&(t===null&&(t=ht.empty()),t.set(r.field,i))}return t||null}function vl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fr(r,s,(i,o)=>oE(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Bi extends xo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends xo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function PC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Pl(n,e,t){const r=new Map;z(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,B=e.data.field(i.field);r.set(i.field,sE(o,B,t[s]))}return r}function Sl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,rE(i,o,e))}return r}class LB extends xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cE extends xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.position=e,this.inclusive=t}}function bl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),t.key):r=ot(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ol(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Dt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{}class Te extends SC{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new hE(e,t,r):t==="array-contains"?new dE(e,r):t==="in"?new pE(e,r):t==="not-in"?new gE(e,r):t==="array-contains-any"?new mE(e,r):new Te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new CE(e,r):new fE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ot(t,this.value)):t!==null&&Se(this.value)===Se(t)&&this.matchesComparison(ot(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends SC{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new At(e,t)}matches(e){return bC(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function bC(n){return n.op==="and"}function OC(n){return lE(n)&&bC(n)}function lE(n){for(const e of n.filters)if(e instanceof At)return!1;return!0}function oB(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+xr(n.value);if(OC(n))return n.filters.map(e=>oB(e)).join(",");{const e=n.filters.map(t=>oB(t)).join(",");return`${n.op}(${e})`}}function NC(n,e){return n instanceof Te?function(r,s){return s instanceof Te&&r.op===s.op&&r.field.isEqual(s.field)&&Dt(r.value,s.value)}(n,e):n instanceof At?function(r,s){return s instanceof At&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,B)=>i&&NC(o,s.filters[B]),!0):!1}(n,e):void $(19439)}function FC(n){return n instanceof Te?function(t){return`${t.field.canonicalString()} ${t.op} ${xr(t.value)}`}(n):n instanceof At?function(t){return t.op.toString()+" {"+t.getFilters().map(FC).join(" ,")+"}"}(n):"Filter"}class hE extends Te{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class CE extends Te{constructor(e,t){super(e,"in",t),this.keys=LC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fE extends Te{constructor(e,t){super(e,"not-in",t),this.keys=LC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function LC(n,e){return(e.arrayValue?.values||[]).map(t=>W.fromName(t.referenceValue))}class dE extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vr(t)&&Gs(t.arrayValue,this.value)}}class pE extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gs(this.value.arrayValue,t)}}class gE extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gs(this.value.arrayValue,t)}}class mE extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Gs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t="asc"){this.field=e,this.dir=t}}function EE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new me(0,0))}static max(){return new te(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,r,s,i,o,B){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new je(e,0,te.min(),te.min(),te.min(),ht.empty(),0)}static newFoundDocument(e,t,r,s){return new je(e,1,t,te.min(),r,s,0)}static newNoDocument(e,t){return new je(e,2,t,te.min(),te.min(),ht.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,te.min(),te.min(),ht.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=-1;function _E(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new me(t+1,0):new me(t,r));return new Sn(s,W.empty(),e)}function DE(n){return new Sn(n.readTime,n.key,Ks)}class Sn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Sn(te.min(),W.empty(),Ks)}static max(){return new Sn(te.max(),W.empty(),Ks)}}function IE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,t=null,r=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function Nl(n,e=null,t=[],r=[],s=null,i=null,o=null){return new wE(n,e,t,r,s,i,o)}function kC(n){const e=ne(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>oB(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xr(r)).join(",")),e.R=t}return e.R}function xC(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!NC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ol(n.startAt,e.startAt)&&Ol(n.endAt,e.endAt)}function Kn(n){return!!n.isCorePipeline}function VC(n){return!!n.path&&W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t=null,r=[],s=[],i=null,o="F",B=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function yE(n,e,t,r,s,i,o,B){return new Jr(n,e,t,r,s,i,o,B)}function MC(n){return new Jr(n)}function Fl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function TE(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function GC(n){return n.collectionGroup!==null}function Rs(n){const e=ne(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new ve(dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(B=B.add(c.field))})}),B})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new qs(i,r))}),t.has(dt.keyField().canonicalString())||e.I.push(new qs(dt.keyField(),r))}return e.I}function xt(n){const e=ne(n);return e.A||(e.A=AE(e,Rs(n))),e.A}function AE(n,e){if(n.limitType==="F")return Nl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qs(s.field,i)});const t=n.endAt?new fo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fo(n.startAt.position,n.startAt.inclusive):null;return Nl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function aB(n,e){const t=n.filters.concat([e]);return new Jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function RE(n,e){const t=n.explicitOrderBy.concat([e]);return new Jr(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function BB(n,e,t){return new Jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vE(n,e){return xC(xt(n),xt(e))&&n.limitType===e.limitType}function vs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>FC(s)).join(", ")}]`),Fo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>xr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>xr(s)).join(",")),`Target(${r})`}(xt(n))}; limitType=${n.limitType})`}function Vo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Rs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,B,u){const c=bl(o,B,u);return o.inclusive?c<=0:c<0}(r.startAt,Rs(r),s)||r.endAt&&!function(o,B,u){const c=bl(o,B,u);return o.inclusive?c>=0:c>0}(r.endAt,Rs(r),s))}(n,e)}function kB(n){return(e,t)=>{let r=!1;for(const s of Rs(n)){const i=PE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function PE(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(i,o,B){const u=o.data.field(i),c=B.data.field(i);return u!==null&&c!==null?ot(u,c):$(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,ue;function bE(n){switch(n){case L.OK:return $(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function UC(n){if(n===void 0)return Zt("GRPC error has no .code"),L.UNKNOWN;switch(n){case ye.OK:return L.OK;case ye.CANCELLED:return L.CANCELLED;case ye.UNKNOWN:return L.UNKNOWN;case ye.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ye.INTERNAL:return L.INTERNAL;case ye.UNAVAILABLE:return L.UNAVAILABLE;case ye.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ye.NOT_FOUND:return L.NOT_FOUND;case ye.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ye.ABORTED:return L.ABORTED;case ye.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ye.DATA_LOSS:return L.DATA_LOSS;default:return $(39323,{code:n})}}(ue=ye||(ye={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new Ee(W.comparator);function rt(){return OE}const HC=new Ee(W.comparator);function wr(...n){let e=HC;for(const t of n)e=e.insert(t.key,t);return e}function JC(n){let e=HC;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function hn(){return Ps()}function jC(){return Ps()}function Ps(){return new cr(n=>n.toString(),(n,e)=>n.isEqual(e))}const NE=new Ee(W.comparator),FE=new ve(W.comparator);function se(...n){let e=FE;for(const t of n)e=e.add(t);return e}const LE=new ve(ie);function kE(){return LE}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new _n([4294967295,4294967295],0);function Ll(n){const e=xE().encode(n),t=new eC;return t.update(e),new Uint8Array(t.digest())}function kl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _n([t,r],0),new _n([s,i],0)]}class xB{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Is(`Invalid padding: ${t}`);if(r<0)throw new Is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Is(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Is(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=_n.fromNumber(this.m)}S(e,t,r){let s=e.add(t.multiply(_n.fromNumber(r)));return s.compare(VE)===1&&(s=new _n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}v(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Ll(e),[r,s]=kl(t);for(let i=0;i<this.hashCount;i++){const o=this.S(r,s,i);if(!this.v(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xB(i,s,t);return r.forEach(B=>o.insert(B)),o}insert(e){if(this.m===0)return;const t=Ll(e),[r,s]=kl(t);for(let i=0;i<this.hashCount;i++){const o=this.S(r,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ui(te.min(),s,new Ee(ie),rt(),rt(),se())}}class ci{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ci(r,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class qC{constructor(e,t){this.targetId=e,this.O=t}}class KC{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class xl{constructor(e){this.targetId=e,this.M=0,this.N=Vl(),this.L=Pe.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=se(),t=se(),r=se();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}}),new ci(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=Vl()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,z(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const ds="WatchChangeAggregator";class ME{constructor(e){this.Z=e,this.X=new Map,this.ee=rt(),this.te=Hi(),this.ne=rt(),this.re=Hi(),this.ie=new Ee(ie)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:$(56790,{state:e.state})}else J(ds,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((r,s)=>{this.ue(s)&&t(s)})}le(e){return Kn(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:VC(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const o=new W(Kn(i)?he.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,je.newNoDocument(o,te.min()))}else z(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.Te(t);if(o!==r){const B=this.Pe(e),u=B?this.Re(B,e,o):1;if(u!==0){this.ce(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=vn(r).toUint8Array()}catch(u){if(u instanceof pC)return Tt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{B=new xB(o,s,i)}catch(u){return Tt(u instanceof Is?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return B.m===0?null:B}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Z.Ae(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,o)=>{const B=this.he(o);if(B){if(i.current&&this.le(B.target)){const u=Kn(B.target)?he.fromString(B.target.getPipelineDocuments()[0]):B.target.path,c=new W(u);this.fe(c).has(o)||this.me(o,c)||this.oe(o,c,je.newNoDocument(c,e))}i.q&&(t.set(o,i.K()),i.W())}});let r=se();this.re.forEach((i,o)=>{let B=!0;o.forEachWhile(u=>{const c=this.he(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)}),B&&(r=r.add(i))}),this.ee.forEach((i,o)=>o.setReadTime(e)),this.ne.forEach((i,o)=>o.setReadTime(e));const s=new ui(e,t,this.ie,this.ee,this.ne,r);return this.ee=rt(),this.te=Hi(),this.ne=rt(),this.re=Hi(),this.ie=new Ee(ie),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void J(ds,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),Kn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(Kn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):J(ds,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(J(ds,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new xl(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new ve(ie),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new ve(ie),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||J(ds,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new xl(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Hi(){return new Ee(W.comparator)}function Vl(){return new Ee(W.comparator)}const GE={asc:"ASCENDING",desc:"DESCENDING"},UE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HE={and:"AND",or:"OR"};class JE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uB(n,e){return n.useProto3Json||Fo(e)?e:{value:e}}function po(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VB(n){const e=Rn(n);return new me(e.seconds,e.nanos)}function zC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function eo(n,e){return po(n,e.toTimestamp())}function Vt(n){return z(!!n,49232),te.fromTimestamp(VB(n))}function MB(n,e){return cB(n,e).canonicalString()}function cB(n,e){const t=function(s){return new he(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function QC(n){const e=he.fromString(n);return z(ZC(e),10190,{key:e.toString()}),e}function go(n,e){return MB(n.databaseId,e.path)}function ka(n,e){const t=QC(e);if(t.get(1)!==n.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W($C(t))}function WC(n,e){return MB(n.databaseId,e)}function jE(n){const e=QC(n);return e.length===4?he.emptyPath():$C(e)}function lB(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $C(n){return z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ml(n,e,t){return{name:go(n,e),fields:t.value.mapValue.fields}}function qE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(z(h===void 0||typeof h=="string",58123),Pe.fromBase64String(h||"")):(z(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Pe.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&function(c){const h=c.code===void 0?L.UNKNOWN:UC(c.code);return new H(h,c.message||"")}(o);t=new KC(r,s,i,B||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ka(n,r.document.name),i=Vt(r.document.updateTime),o=r.document.createTime?Vt(r.document.createTime):te.min(),B=new ht({mapValue:{fields:r.document.fields}}),u=je.newFoundDocument(s,i,o,B),c=r.targetIds||[],h=r.removedTargetIds||[];t=new Zi(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ka(n,r.document),i=r.readTime?Vt(r.readTime):te.min(),o=je.newNoDocument(s,i),B=r.removedTargetIds||[];t=new Zi([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ka(n,r.document),i=r.removedTargetIds||[];t=new Zi([],i,s,null)}else{if(!("filter"in e))return $(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new SE(s,i),B=r.targetId;t=new qC(B,o)}}return t}function KE(n,e){let t;if(e instanceof Bi)t={update:Ml(n,e.key,e.value)};else if(e instanceof LB)t={delete:go(n,e.key)};else if(e instanceof ur)t={update:Ml(n,e.key,e.data),updateMask:n_(e.fieldMask)};else{if(!(e instanceof cE))return $(16599,{we:e.type});t={verify:go(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const B=o.transform;if(B instanceof Us)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof Hs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof Js)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof js)return{fieldPath:o.field.canonicalString(),increment:B.l};if(B instanceof lo)return{fieldPath:o.field.canonicalString(),minimum:B.l};if(B instanceof ho)return{fieldPath:o.field.canonicalString(),maximum:B.l};throw $(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:eo(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)}(n,e.precondition)),t}function zE(n,e){return n&&n.length>0?(z(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?Vt(s.updateTime):Vt(i);return o.isEqual(te.min())&&(o=Vt(i)),new aE(o,s.transformResults||[])}(t,e))):[]}function QE(n,e){return{documents:[WC(n,e.path)]}}function WE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=WC(n,s);const i=function(c){if(c.length!==0)return XC(At.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:yr(m.field),direction:ZE(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=uB(n,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{be:t,parent:s}}function $E(n){let e=jE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){z(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const m=YC(f);return m instanceof At&&OC(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(v){return new qs(Tr(v.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(m))}(t.orderBy));let B=null;t.limit&&(B=function(f){let m;return m=typeof f=="object"?f.value:f,Fo(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(f){const m=!!f.before,A=f.values||[];return new fo(A,m)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const m=!f.before,A=f.values||[];return new fo(A,m)}(t.endAt)),yE(e,s,o,i,B,"F",u,c)}function YE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function XE(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function YC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Tr(t.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tr(t.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tr(t.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Tr(t.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}}(n):n.fieldFilter!==void 0?function(t){return Te.create(Tr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return At.create(t.compositeFilter.filters.map(r=>YC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}}(t.compositeFilter.op))}(n):$(30097,{filter:n})}function ZE(n){return GE[n]}function e_(n){return UE[n]}function t_(n){return HE[n]}function yr(n){return{fieldPath:n.canonicalString()}}function Tr(n){return dt.fromServerFormat(n.fieldPath)}function XC(n){return n instanceof Te?function(t){if(t.op==="=="){if(at(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NAN"}};if(Ct(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(at(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NOT_NAN"}};if(Ct(t.value))return{unaryFilter:{field:yr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(t.field),op:e_(t.op),value:t.value}}}(n):n instanceof At?function(t){const r=t.getFilters().map(s=>XC(s));return r.length===1?r[0]:{compositeFilter:{op:t_(t.op),filters:r}}}(n):$(54877,{filter:n})}function n_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ZC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ef(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function zs(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function tf(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){return new JE(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _t(Pe.fromBase64String(e))}catch(t){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _t(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oi(e,_t._jsonSchema))return _t.fromBase64String(e.bytes)}}_t._jsonSchemaVersion="firestore/bytes/1.0",_t._jsonSchema={type:Ae("string",_t._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GB{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function r_(){return new GB(Nt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UB{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mt._jsonSchemaVersion}}static fromJSON(e){if(oi(e,Mt._jsonSchema))return new Mt(e.latitude,e.longitude)}}Mt._jsonSchemaVersion="firestore/geoPoint/1.0",Mt._jsonSchema={type:Ae("string",Mt._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Je.UNAUTHENTICATED))}shutdown(){}}class i_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class o_{constructor(e){this.ve=e,this.currentUser=Je.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){z(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new Dn;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},B=u=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.ve.onInit(u=>B(u)),setTimeout(()=>{if(!this.auth){const u=this.ve.getImmediate({optional:!0});u?B(u):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.De!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string",31837,{Fe:r}),new nf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string",2055,{Oe:e}),new Je(e)}}class a_{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class B_{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new a_(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u_{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,Et(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){z(this.xe===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new Gl(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(z(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Gl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function rf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{Ke(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="ConnectivityMonitor";class Hl{constructor(){this.Qe=()=>this.We(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.Qe),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.Qe),window.addEventListener("offline",this.Ge)}We(){J(Ul,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){J(Ul,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji=null;function hB(){return Ji===null?Ji=function(){return 268435456+Math.round(2147483648*Math.random())}():Ji++,"0x"+Ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="RestConnection",l_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class h_{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===uo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const o=hB(),B=this.nt(e,t.toUriEncodedString());J(xa,`Sending RPC '${e}' ${o}:`,B,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:c}=new URL(B),h=or(c);return this.it(e,B,u,r,h).then(f=>(J(xa,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Tt(xa,`RPC '${e}' ${o} failed with error: `,f,"url: ",B,"request:",r),f})}st(e,t,r,s,i,o){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=l_[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection",ps=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class vr extends h_{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!vr.gt){const e=sC();ps(e,rC.STAT_EVENT,t=>{t.stat===Ya.PROXY?J(He,"STAT_EVENT: detected buffering proxy"):t.stat===Ya.NOPROXY&&J(He,"STAT_EVENT: detected no buffering proxy")}),vr.gt=!0}}it(e,t,r,s,i){const o=hB();return new Promise((B,u)=>{const c=new tC;c.setWithCredentials(!0),c.listenOnce(nC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $i.NO_ERROR:const f=c.getResponseJson();J(He,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),B(f);break;case $i.TIMEOUT:J(He,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const m=c.getStatus();if(J(He,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const v=A?.error;if(v&&v.status&&v.message){const x=function(j){const ee=j.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(ee)>=0?ee:L.UNKNOWN}(v.status);u(new H(x,v.message))}else u(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:$(9055,{yt:e,streamId:o,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{J(He,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);J(He,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",h,r,15)})}St(e,t,r){const s=hB(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(B.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(B.useFetchStreams=!0),this.rt(B.initMessageHeaders,t,r),B.encodeInitMessageHeaders=!0;const c=i.join("");J(He,`Creating RPC '${e}' stream ${s}: ${c}`,B);const h=o.createWebChannel(c,B);this.vt(h);let f=!1,m=!1;const A=new C_({_t:v=>{m?J(He,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(f||(J(He,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),J(He,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},ot:()=>h.close()});return ps(h,_s.EventType.OPEN,()=>{m||(J(He,`RPC '${e}' stream ${s} transport opened.`),A.Rt())}),ps(h,_s.EventType.CLOSE,()=>{m||(m=!0,J(He,`RPC '${e}' stream ${s} transport closed`),A.At(),this.Dt(h))}),ps(h,_s.EventType.ERROR,v=>{m||(m=!0,Tt(He,`RPC '${e}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),A.At(new H(L.UNAVAILABLE,"The operation could not be completed")))}),ps(h,_s.EventType.MESSAGE,v=>{if(!m){const x=v.data[0];z(!!x,16349);const M=x,j=M?.error||M[0]?.error;if(j){J(He,`RPC '${e}' stream ${s} received error:`,j);const ee=j.status;let ae=function(Ce){const T=ye[Ce];if(T!==void 0)return UC(T)}(ee),Be=j.message;ee==="NOT_FOUND"&&Be.includes("database")&&Be.includes("does not exist")&&Be.includes(this.databaseId.database)&&Tt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ae===void 0&&(ae=L.INTERNAL,Be="Unknown error status: "+ee+" with message "+j.message),m=!0,A.At(new H(ae,Be)),h.close()}else J(He,`RPC '${e}' stream ${s} received:`,x),A.Vt(x)}}),vr.ft(),setTimeout(()=>{A.It()},0),A}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}vt(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return iC()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n){return new vr(n)}vr.gt=!1;class sf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="PersistentStream";class of{constructor(e,t,r,s,i,o,B,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=u,this.state=0,this.Qt=0,this.Wt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new sf(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Wt===null&&(this.Wt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Wt&&(this.Wt.cancel(),this.Wt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Qt++,e!==4?this.jt.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Zt(t.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Qt),t=this.Qt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qt===t&&this.an(r,s)},r=>{e(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)})})}an(e,t){const r=this._n(this.Qt);this.stream=this.cn(e,t),this.stream.ut(()=>{r(()=>this.listener.ut())}),this.stream.lt(()=>{r(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{r(()=>this.un(s))}),this.stream.onMessage(s=>{r(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return J(Jl,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Qt===e?t():(J(Jl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class d_ extends of{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}cn(e,t){return this.connection.St("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=qE(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Vt(o.readTime):te.min()}(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=lB(this.serializer),t.addTarget=function(i,o){let B;const u=o.target;if(B=Kn(u)?{pipelineQuery:XE(i,u)}:VC(u)?{documents:QE(i,u)}:{query:WE(i,u).be},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=zC(i,o.resumeToken);const c=uB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){B.readTime=po(i,o.snapshotVersion.toTimestamp());const c=uB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}return B}(this.serializer,e);const r=YE(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=lB(this.serializer),t.removeTarget=e,this.tn(t)}}class p_ extends of{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.St("Write",e,t)}En(e){return z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,z(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=zE(e.writeResults,e.commitTime),r=Vt(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=lB(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>KE(this.serializer,r))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{}class m_ extends g_{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.tt(e,cB(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,B])=>this.connection.st(e,cB(t,r),s,o,B,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function E_(n,e,t,r){return new m_(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="ComponentProvider",jl=new Map;function D_(n,e,t,r,s){return new Ym(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,rf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},af=41943040;class nt{static withCacheSize(e){return new nt(e,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}nt.DEFAULT_COLLECTION_PERCENTILE=10,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nt.DEFAULT=new nt(af,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nt.DISABLED=new nt(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}Go.yn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==I_)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,o=!1;e.forEach(B=>{++s,B.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,o=new Array(i);let B=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++B,B===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function y_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="LruGarbageCollector",T_=1048576;function zl([n,e],[t,r]){const s=ie(n,t);return s===0?ie(e,r):s}class A_{constructor(e){this.Jn=e,this.buffer=new ve(zl),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();zl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class R_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){J(Kl,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qr(t)?J(Kl,"Ignoring IndexedDB error during garbage collection: ",t):await jr(t)}await this.tr(3e5)})}}class v_{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Go.yn);const r=new A_(t);return this.nr.forEachTarget(e,s=>r.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>r.Xn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(ql)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ql):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,o,B,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,B=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Dr()<=oe.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(u-B)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function P_(n,e){return new v_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="firestore.googleapis.com",Ql=!0;class Wl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bf,this.ssl=Ql}else this.host=e.host,this.ssl=e.ssl??Ql;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=af;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<T_)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Wm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new H(L.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(r[B]!==s[B])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Uo=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new s_;switch(r.type){case"firstParty":return new B_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=jl.get(t);r&&(J(__,"Removing Datastore"),jl.delete(t),r.terminate())}(this),Promise.resolve()}};function S_(n,e,t,r={}){n=nr(n,Uo);const s=or(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},B=`${e}:${t}`;s&&yB(`https://${B}`),i.host!==Bf&&i.host!==B&&Tt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:B,ssl:s,emulatorOptions:r};if(!Xn(u,o)&&(n._setSettings(u),r.mockUserToken)){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Je.MOCK_USER;else{c=Qh(r.mockUserToken,n._app?.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Je(f)}n._authCredentials=new i_(new nf(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(oi(t,Re._jsonSchema))return new Re(e,r||null,new W(he.fromString(t.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:Ae("string",Re._jsonSchemaVersion),referencePath:Ae("string")};class In extends lr{constructor(e,t,r){super(e,t,MC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new W(e))}withConverter(e){return new In(this.firestore,e,this._path)}}function Ho(n,e,...t){if(n=Ve(n),dC("collection","path",e),n instanceof Uo){const r=he.fromString(e,...t);return Dl(r),new In(n,null,r)}{if(!(n instanceof Re||n instanceof In))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return Dl(r),new In(n.firestore,null,r)}}function Jo(n,e,...t){if(n=Ve(n),arguments.length===1&&(e=SB.newId()),dC("doc","path",e),n instanceof Uo){const r=he.fromString(e,...t);return _l(r),new Re(n,null,new W(r))}{if(!(n instanceof Re||n instanceof In))throw new H(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return _l(r),new Re(n.firestore,n instanceof In?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:st._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oi(e,st._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new st(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}st._jsonSchemaVersion="firestore/vectorValue/1.0",st._jsonSchema={type:Ae("string",st._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=/^__.*__$/;class O_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bi(e,this.data,t,this.fieldTransforms)}}function uf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{dataSource:n})}}class HB{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new HB({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return mo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(uf(this.dataSource)&&b_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class N_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Mo(e)}createContext(e,t,r,s=!1){return new HB({dataSource:e,methodName:t,targetDoc:r,path:dt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function JB(n){const e=n._freezeSettings(),t=Mo(n._databaseId);return new N_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cf(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Cf("Data must be an object, but it was:",o,r);const B=lf(r,o);let u,c;if(i.merge)u=new It(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=li(e,f,t);if(!o.contains(m))throw new H(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);x_(h,m)||h.push(m)}u=new It(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new O_(new ht(B),u,c)}class jB extends UB{_toFieldTransform(e){return new iE(e.path,new Us)}isEqual(e){return e instanceof jB}}function F_(n,e,t,r=!1){return Mr(t,n.createContext(r?4:3,e))}function Mr(n,e,t){if(hf(n=Ve(n)))return Cf("Unsupported field value:",e,n),lf(n,e);if(n instanceof UB)return function(s,i){if(!uf(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let B=0;for(const u of s){let c=Mr(u,i.childContextForArray(B));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),B++}return{arrayValue:{values:o}}}(n,e)}return function(s,i,o){if((s=Ve(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return NB(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=me.fromDate(s);return{timestampValue:po(i.serializer,B)}}if(s instanceof me){const B=new me(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:po(i.serializer,B)}}if(s instanceof Mt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _t)return{bytesValue:zC(i.serializer,s._byteString)};if(s instanceof Re){const B=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(B))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:MB(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof st)return function(u,c){const h=u instanceof st?u.toArray():u;return{mapValue:{fields:{[DC]:{stringValue:IC},[Ms]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return Lo(c.serializer,m)})}}}}}}(s,i);if(ef(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Oo(s)}`)}(n,e)}function lf(n,e){const t={};return fC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(n,(r,s)=>{const i=Mr(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function hf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof Mt||n instanceof _t||n instanceof Re||n instanceof UB||n instanceof st||ef(n))}function Cf(n,e,t){if(!hf(t)||!ii(t)){const r=Oo(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function li(n,e,t){if((e=Ve(e))instanceof GB)return e._internalPath;if(typeof e=="string")return k_(n,e);throw mo("Field path arguments must be of type string or ",n,!1,void 0,t)}const L_=new RegExp("[~\\*/\\[\\]]");function k_(n,e,t){if(e.search(L_)>=0)throw mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new GB(...e.split("."))._internalPath}catch{throw mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function mo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(L.INVALID_ARGUMENT,B+n+u)}function x_(n,e){return n.some(t=>t.isEqual(e))}function ff(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=ht.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&ii(o)?B={mapValue:{fields:new Ke(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=Mr(o,t)??void 0),B&&r.set(dt.fromServerFormat(i.serverName),B)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Qm(r,(o,B)=>[dt.fromServerFormat(B),o!==void 0?Mr(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!ii(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function M_(){return new jB("serverTimestamp")}function G_(n){return new st(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n){let e;return n instanceof hr?n:(e=ii(n)?q_(n):n instanceof Array?K_(n):df(n,void 0),e)}function Va(n){if(n instanceof hr)return n;if(n instanceof st)return Qs(n);if(Array.isArray(n))return Qs(G_(n));throw new Error("Unsupported value: "+typeof n)}function qB(n){return eE(n)?to(n):G(n)}class hr{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,G(e)],"add")}asBoolean(){if(this instanceof bn)return this;if(this instanceof zr)return new gf(this);if(this instanceof Kr)return new j_(this);if(this instanceof F)return new pf(this);throw new H("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,G(e)],"subtract")}multiply(e){return new F("multiply",[this,G(e)],"multiply")}divide(e){return new F("divide",[this,G(e)],"divide")}mod(e){return new F("mod",[this,G(e)],"mod")}equal(e){return new F("equal",[this,G(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,G(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,G(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,G(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,G(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,G(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>G(s));return new F("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,G(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new ws(e.map(G),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new ws(e.map(G),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new ws(e.map(G),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new ws(e.map(G),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,G(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,G(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,G(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,G(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,G(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,G(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,G(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,G(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(G(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(G(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(G(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Qs(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(G);return new F("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,G(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,G(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,G(e),G(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,G(e),G(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(G);return new F("concat",[this,...r],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,G(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,G(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new F("array_transform",[this,G(e),G(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,G(e)];return t!==void 0&&r.push(G(t)),new F("array_slice",r,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,G(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,G(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,G(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,G(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,G(e),G("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,G(e),G("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,G(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Qs(e)],"mapGet")}mapSet(e,t,...r){const s=[this,G(e),G(t),...r.map(G)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,G(e)],"get_field")}count(){return lt._create("count",[this],"count")}sum(){return lt._create("sum",[this],"sum")}average(){return lt._create("average",[this],"average")}minimum(){return lt._create("minimum",[this],"minimum")}maximum(){return lt._create("maximum",[this],"maximum")}first(){return lt._create("first",[this],"first")}last(){return lt._create("last",[this],"last")}arrayAgg(){return lt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return lt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return lt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new F("maximum",[this,...r.map(G)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new F("minimum",[this,...r.map(G)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,Va(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,Va(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,Va(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,G(e),G(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,G(e),G(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,qB(e),G(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,G(e)];return t&&r.push(G(t)),new F("timestamp_extract",r,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const r=G(e);return new F("substring",t===void 0?[this,r]:[this,r,G(t)],"substring")}arrayGet(e){return new F("array_get",[this,G(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,G(e)],"ifError");return e instanceof bn?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,G(e)],"mapRemove")}mapMerge(e,...t){const r=G(e),s=t.map(G);return new F("map_merge",[this,r,...s],"mapMerge")}pow(e){return new F("pow",[this,G(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,G(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,G(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,G(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,G(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,G(e),...t.map(G)],"coalesce")}join(e){return new F("join",[this,G(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,G(e)])}timestampTruncate(e,t){const r=[this,G(e)];return t&&r.push(G(t)),new F("timestamp_trunc",r)}ascending(){return z_(this)}descending(){return Q_(this)}as(e){return new H_(this,e,"as")}}class lt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new lt(e,t);return s._methodName=r,s}as(e){return new U_(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class U_{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class H_{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class ws extends hr{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class Kr extends hr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,G(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function to(n){return J_(n,"field")}function J_(n,e){return new Kr(typeof n=="string"?Nt===n?r_()._internalPath:li("field",n):n._internalPath,e)}class zr extends hr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new zr(e,void 0);return t._protoValue=e,t}_toProto(e){return z(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,V_(this._protoValue)||(this._protoValue=Mr(this.value,e))}}function Qs(n,e){return df(n,"constant")}function df(n,e){const t=new zr(n,e);return typeof n=="boolean"?new gf(t):t}class F extends hr{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ke({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class bn extends hr{get _methodName(){return this._expr._methodName}countIf(){return lt._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=G(e),r=new F("if_error",[this,t],"ifError");return t instanceof bn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class pf extends bn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class gf extends bn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class j_ extends bn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function q_(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Qs(r)),t.push(G(s))}return new F("map",t,"map")}function K_(n){return function(t,r){return new F("array",t.map(s=>G(s)),r)}(n,"array")}function z_(n){return new mf(qB(n),"ascending","ascending")}function Q_(n){return new mf(qB(n),"descending","descending")}class mf{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:tf(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Ef extends pt{get _name(){return"add_fields"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[zs(e,this.fields)]}}_readUserData(e){super._readUserData(e),On(this.fields,e)}}class _f extends pt{get _name(){return"aggregate"}get _optionsUtil(){return new Ke({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[zs(e,this.accumulators),zs(e,this.groups)]}}_readUserData(e){super._readUserData(e),On(this.groups,e),On(this.accumulators,e)}}class Df extends pt{get _name(){return"distinct"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[zs(e,this.groups)]}}_readUserData(e){super._readUserData(e),On(this.groups,e)}}class jo extends pt{get _name(){return"collection"}get _optionsUtil(){return new Ke({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class qo extends pt{get _name(){return"collection_group"}get _optionsUtil(){return new Ke({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class KB extends pt{get _name(){return"database"}get _optionsUtil(){return new Ke({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class zB extends pt{get _name(){return"documents"}get _optionsUtil(){return new Ke({})}constructor(e,t){if(super(t),!e||e.length===0)throw new H(L.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new H(L.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Ko extends pt{get _name(){return"where"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),On(this.condition,e)}}class rr extends pt{get _name(){return"limit"}get _optionsUtil(){return new Ke({})}constructor(e,t){z(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[NB(e,this.limit)]}}}class $l extends pt{get _name(){return"offset"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[NB(e,this.offset)]}}}class W_ extends pt{get _name(){return"select"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[zs(e,this.selections)]}}_readUserData(e){super._readUserData(e),On(this.selections,e)}}class zt extends pt{get _name(){return"sort"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),On(this.orderings,e)}}class QB extends pt{get _name(){return"replace_with"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),tf(QB.Pr)]}}_readUserData(e){super._readUserData(e),On(this.map,e)}}QB.Pr="full_replace";function On(n,e){return ff(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Ar(e,t){const r=this.userDataReader.createContext(3,e);return ff(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Ar("where",e),t.push(new Ko(e,{})),new Ss(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new rr(e,{})),new Ss(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new zt(this.Ar("sort",e.orderings),{})):r.push(new zt(this.Ar("sort",[e,...t]),{})),new Ss(this._db,this.userDataReader,this._userDataWriter,r)}Vr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class $e{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return zo(this)}getPipelineCollectionGroup(){return WB(this)}getPipelineCollectionId(){return $_(this)}getPipelineDocuments(){return CB(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==Df.name&&s._name!==_f.name||(r="keyless"),s._name===W_.name&&r==="exact"&&(r="augmented"),s._name===Ef.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return wn(this)}}function wn(n){const e=n.stages[0];return e instanceof jo||e instanceof qo||e instanceof KB||e instanceof zB?e._name:"unknown"}function zo(n){if(wn(n)==="collection")return n.stages[0].Er}function WB(n){if(wn(n)==="collection_group")return n.stages[0].collectionId}function $_(n){switch(wn(n)){case"collection":return he.fromString(zo(n)).lastSegment();case"collection_group":return WB(n);default:return}}function CB(n){if(wn(n)==="documents")return n.stages[0].hr}class I{constructor(e,t){this.type=e,this.value=t}static dr(){return new I("ERROR",void 0)}static mr(){return new I("UNSET",void 0)}static pr(){return new I("NULL",kr)}static newValue(e){return Ct(e)?new I("NULL",kr):function(r){return!!r&&"booleanValue"in r}(e)?new I("BOOLEAN",e):Ft(e)?new I("INT",e):Qn(e)?new I("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new I("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new I("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new I("BYTES",e):e.referenceValue?new I("REFERENCE",e):e.geoPointValue?new I("GEO_POINT",e):Vr(e)?new I("ARRAY",e):co(e)?new I("VECTOR",e):Wn(e)?new I("MAP",e):new I("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function bs(n){if(!n.gr())return n.value}function If(n){return n instanceof bn?n._expr:n}function X(n){if((n=If(n))instanceof Kr)return new Y_(n);if(n instanceof zr)return new X_(n);if(n instanceof ws)return new Z_(n);if(n instanceof F){if(n.name==="add")return new nD(n);if(n.name==="subtract")return new rD(n);if(n.name==="multiply")return new sD(n);if(n.name==="divide")return new iD(n);if(n.name==="mod")return new oD(n);if(n.name==="and")return new aD(n);if(n.name==="equal")return new ED(n);if(n.name==="not_equal")return new _D(n);if(n.name==="less_than")return new DD(n);if(n.name==="less_than_or_equal")return new ID(n);if(n.name==="greater_than")return new wD(n);if(n.name==="greater_than_or_equal")return new yD(n);if(n.name==="array_concat")return new TD(n);if(n.name==="array_reverse")return new AD(n);if(n.name==="array_contains")return new RD(n);if(n.name==="array_contains_all")return new vD(n);if(n.name==="array_contains_any")return new PD(n);if(n.name==="array_length")return new SD(n);if(n.name==="array_element")return new bD(n);if(n.name==="equal_any")return new wf(n);if(n.name==="not_equal_any")return new uD(n);if(n.name==="is_nan")return new cD(n);if(n.name==="is_not_nan")return new lD(n);if(n.name==="is_null")return new hD(n);if(n.name==="is_not_null")return new CD(n);if(n.name==="is_error")return new fD(n);if(n.name==="exists")return new dD(n);if(n.name==="not")return new Qo(n);if(n.name==="or")return new BD(n);if(n.name==="xor")return new $B(n);if(n.name==="conditional")return new pD(n);if(n.name==="maximum")return new gD(n);if(n.name==="minimum")return new mD(n);if(n.name==="reverse")return new OD(n);if(n.name==="replace_first")return new ND(n);if(n.name==="replace_all")return new FD(n);if(n.name==="char_length")return new LD(n);if(n.name==="byte_length")return new kD(n);if(n.name==="like")return new xD(n);if(n.name==="regex_contains")return new VD(n);if(n.name==="regex_match")return new MD(n);if(n.name==="string_contains")return new GD(n);if(n.name==="starts_with")return new UD(n);if(n.name==="ends_with")return new HD(n);if(n.name==="to_lower")return new JD(n);if(n.name==="to_upper")return new jD(n);if(n.name==="trim")return new qD(n);if(n.name==="string_concat")return new KD(n);if(n.name==="map_get")return new zD(n);if(n.name==="cosine_distance")return new QD(n);if(n.name==="dot_product")return new WD(n);if(n.name==="euclidean_distance")return new $D(n);if(n.name==="vector_length")return new YD(n);if(n.name==="unix_micros_to_timestamp")return new nI(n);if(n.name==="timestamp_to_unix_micros")return new iI(n);if(n.name==="unix_millis_to_timestamp")return new rI(n);if(n.name==="timestamp_to_unix_millis")return new oI(n);if(n.name==="unix_seconds_to_timestamp")return new sI(n);if(n.name==="timestamp_to_unix_seconds")return new aI(n);if(n.name==="timestamp_add")return new BI(n);if(n.name==="timestamp_subtract")return new uI(n)}throw new Error(`Unknown Expr : ${n}`)}class Y_{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Nt)return I.newValue({referenceValue:go(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return I.newValue({timestampValue:eo(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return I.newValue({timestampValue:eo(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?No(r)?I.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:eo(i.serializer,te.fromTimestamp(Lr(o)))};if(i.serverTimestampBehavior==="previous"){const B=ai(o);if(B)return B}return{nullValue:"NULL_VALUE"}}(e,r)):I.newValue(r):I.mr()}}class X_{constructor(e){this.expr=e}evaluate(e,t){return I.newValue(this.expr._getValue())}}class Z_{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map(s=>X(s).evaluate(e,t));return r.some(s=>s.gr())?I.dr():I.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function Ge(n){return Qn(n)?Number(n.doubleValue):Number(n.integerValue)}function Ht(n){return BigInt(n.integerValue)}const eD=BigInt("0x7fffffffffffffff"),tD=-BigInt("0x8000000000000000");class hi{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length>=2,24778);const r=X(this.expr.params[0]).evaluate(e,t),s=X(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const o of this.expr.params.slice(2)){const B=X(o).evaluate(e,t);i=this.wr(i,B)}return i}wr(e,t){if(e.gr()||t.gr())return I.dr();if(e.yr()||t.yr())return I.pr();const r=e.value,s=t.value;if(!Qn(r)&&!Ft(r)||!Qn(s)&&!Ft(s))return I.dr();if(Qn(r)||Qn(s)){const i=this.br(r,s);return i?I.newValue(i):I.dr()}if(Ft(r)&&Ft(s)){const i=this.Sr(r,s);return i===void 0?I.dr():typeof i=="number"?I.newValue({doubleValue:i}):i<tD||i>eD?I.dr():I.newValue({integerValue:`${i}`})}return I.dr()}}function en(n,e){return Se(n)!==Se(e)?"TYPE_MISMATCH":at(n)||at(e)?"NOT_EQ":Ct(n)&&Ct(e)?"EQ":Ct(n)||Ct(e)?"NULL":Vr(n)&&Vr(e)?function(r,s){if(r.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let o=0;o<(r.values?.length??0);o++){const B=r.values[o],u=s.values[o];switch(en(B,u)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:$(44609,{vr:B,Dr:u})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):co(n)&&co(e)||Wn(n)&&Wn(e)?function(r,s){const i=r.fields||{},o=s.fields||{};if(Bo(i)!==Bo(o))return"NOT_EQ";let B=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(en(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return Dt(r,s,{o:!1,t:!0,i:!0})}(n,e)?"EQ":"NOT_EQ"}class nD extends hi{Sr(e,t){return Ht(e)+Ht(t)}br(e,t){return{doubleValue:Ge(e)+Ge(t)}}}class rD extends hi{constructor(e){super(e),this.expr=e}Sr(e,t){return Ht(e)-Ht(t)}br(e,t){return{doubleValue:Ge(e)-Ge(t)}}}class sD extends hi{constructor(e){super(e),this.expr=e}Sr(e,t){return Ht(e)*Ht(t)}br(e,t){return{doubleValue:Ge(e)*Ge(t)}}}class iD extends hi{constructor(e){super(e),this.expr=e}Sr(e,t){const r=Ht(t);if(r!==BigInt(0))return Ht(e)/r}br(e,t){const r=Ge(t);return r===0?{doubleValue:Vs(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ge(e)/r}}}class oD extends hi{constructor(e){super(e),this.expr=e}Sr(e,t){const r=Ht(t);if(r!==BigInt(0))return Ht(e)%r}br(e,t){const r=Ge(t);if(r!==0)return{doubleValue:Ge(e)%r}}}class aD{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const o=X(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!o.value?.booleanValue)return I.newValue(xe);break;case"NULL":s=!0;break;default:r=!0}}return r?I.dr():s?I.pr():I.newValue(it)}}class Qo{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,9634);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return I.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return I.pr();default:return I.dr()}}}class BD{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const o=X(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(o.value?.booleanValue)return I.newValue(it);break;case"NULL":s=!0;break;default:r=!0}}return r?I.dr():s?I.pr():I.newValue(xe)}}class $B{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const o=X(i).evaluate(e,t);switch(o.type){case"BOOLEAN":r=$B.xor(r,!!o.value?.booleanValue);break;case"NULL":s=!0;break;default:return I.dr()}}return s?I.pr():I.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class wf{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,55094);let r=!1;const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return I.dr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();for(const o of i.value?.arrayValue?.values??[])switch(Ct(s.value)&&Ct(o)?"EQ":en(s.value,o)){case"EQ":return I.newValue(it);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(44608,{value:s.value,candidate:o})}return r?I.pr():I.newValue(xe)}}class uD{constructor(e){this.expr=e}evaluate(e,t){return new Qo(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class cD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,23322);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return I.newValue(xe);case"DOUBLE":return I.newValue({booleanValue:isNaN(Ge(r.value))});case"NULL":return I.pr();default:return I.dr()}}}class lD{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,50406),new Qo(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class hD{constructor(e){this.expr=e}evaluate(e,t){switch(z(this.expr.params.length===1,23123),X(this.expr.params[0]).evaluate(e,t).type){case"NULL":return I.newValue(it);case"UNSET":case"ERROR":return I.dr();default:return I.newValue(xe)}}}class CD{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,23167),new Qo(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class fD{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,5228),X(this.expr.params[0]).evaluate(e,t).type==="ERROR"?I.newValue(it):I.newValue(xe)}}class dD{constructor(e){this.expr=e}evaluate(e,t){switch(z(this.expr.params.length===1,6877),X(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return I.dr();case"UNSET":return I.newValue(xe);default:return I.newValue(it)}}}class pD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===3,11706);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?X(this.expr.params[1]).evaluate(e,t):X(this.expr.params[2]).evaluate(e,t);case"NULL":return X(this.expr.params[2]).evaluate(e,t);default:return I.dr()}}}class gD{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>X(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ot(i.value,s.value)>0?i:s}return s===void 0?I.pr():s}}class mD{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>X(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ot(i.value,s.value)<0?i:s}return s===void 0?I.pr():s}}class Qr{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return I.dr()}const s=X(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return I.dr()}return this.Cr(r,s)}}class ED extends Qr{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return I.newValue(it);if(e.yr()||t.yr()||at(e.value)||at(t.value)||Se(e.value)!==Se(t.value))return I.newValue(xe);switch(en(e.value,t.value)){case"EQ":return I.newValue(it);case"NOT_EQ":return I.newValue(xe);case"NULL":return I.pr();default:$(44615,{left:e,right:t})}}}class _D extends Qr{constructor(e){super(e),this.expr=e}Cr(e,t){switch(en(e.value,t.value)){case"EQ":return I.newValue(xe);case"NOT_EQ":case"TYPE_MISMATCH":return I.newValue(it);case"NULL":return I.pr();default:$(44614,{left:e,right:t})}}}class DD extends Qr{constructor(e){super(e),this.expr=e}Cr(e,t){return Se(e.value)!==Se(t.value)||at(e.value)||at(t.value)?I.newValue(xe):I.newValue({booleanValue:ot(e.value,t.value)<0})}}class ID extends Qr{constructor(e){super(e),this.expr=e}Cr(e,t){return Se(e.value)!==Se(t.value)||at(e.value)||at(t.value)?I.newValue(xe):en(e.value,t.value)==="EQ"?I.newValue(it):I.newValue({booleanValue:ot(e.value,t.value)<0})}}class wD extends Qr{constructor(e){super(e),this.expr=e}Cr(e,t){return Se(e.value)!==Se(t.value)||at(e.value)||at(t.value)?I.newValue(xe):I.newValue({booleanValue:ot(e.value,t.value)>0})}}class yD extends Qr{constructor(e){super(e),this.expr=e}Cr(e,t){return Se(e.value)!==Se(t.value)||at(e.value)||at(t.value)?I.newValue(xe):en(e.value,t.value)==="EQ"?I.newValue(it):I.newValue({booleanValue:ot(e.value,t.value)>0})}}class TD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class AD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,216);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"ARRAY":{const s=r.value.arrayValue?.values??[];return I.newValue({arrayValue:{values:[...s].reverse()}})}default:return I.dr()}}}class RD{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===2,52884),new wf(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class vD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,1392);let r=!1;const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=i.value?.arrayValue?.values??[],B=s.value?.arrayValue?.values??[];for(const u of o){let c=!1;r=!1;for(const h of B){switch(Ct(u)&&Ct(h)?"EQ":en(u,h)){case"EQ":c=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(44613,{value:h,search:u})}if(c)break}if(!c)return I.newValue(xe)}return I.newValue(it)}}class PD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,2680);let r=!1;const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=i.value?.arrayValue?.values??[],B=s.value?.arrayValue?.values??[];for(const u of B)for(const c of o)switch(Ct(u)&&Ct(c)?"EQ":en(u,c)){case"EQ":return I.newValue(it);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(60403,{value:u,search:c})}return r?I.pr():I.newValue(xe)}}class SD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,38605);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"ARRAY":return I.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return I.dr()}}}class bD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class OD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,1508);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"BYTES":{const s=r.value?.bytesValue;if(typeof s=="string"){const i=Pe.fromBase64String(s).toUint8Array();return i.reverse(),I.newValue({bytesValue:Pe.fromUint8Array(i).toBase64()})}return I.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{const s=r.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),o=Array.from(i,B=>B.segment).reverse();return I.newValue({stringValue:o.join("")})}default:return I.dr()}}}class ND{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class FD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class LD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,19400);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.pr();case"STRING":{const s=function(o){let B=0;for(let u=0;u<o.length;u++){const c=o.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const h=o.codePointAt(u+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,u++):B+=1}else B+=1;else B+=1;else{if(!(c<=1114111))return;B+=1,u++}}return B}(r.value.stringValue);return s===void 0?I.dr():I.newValue({integerValue:s})}default:return I.dr()}}}class kD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,8486);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const s=r.value?.bytesValue;return typeof s=="string"?I.newValue({integerValue:Pe.fromBase64String(s).toUint8Array().length}):I.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{const s=function(o){let B=0;for(let u=0;u<o.length;u++){const c=o.codePointAt(u);if(c===void 0)return;if(c>=55296&&c<=57343){if(!(c<=56319))return;{const h=o.codePointAt(u+1);if(h===void 0||!(h>=56320&&h<=57343))return;B+=4,u++}}else if(c<=127)B+=1;else if(c<=2047)B+=2;else if(c<=65535)B+=3;else{if(!(c<=1114111))return;B+=4,u++}}return B}(r.value?.stringValue);return s===void 0?I.dr():I.newValue({integerValue:s})}case"NULL":return I.pr();default:return I.dr()}}}class Wr{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return I.dr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return I.dr()}return r?I.pr():this.Fr(s.value?.stringValue,i.value?.stringValue)}}class xD extends Wr{Fr(e,t){try{const r=function(o){let B="";for(let u=0;u<o.length;u++){const c=o.charAt(u);switch(c){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+c;break;default:B+=c}}return"^"+B+"$"}(t),s=vB.compile(r);return I.newValue({booleanValue:s.matches(e)})}catch(r){return Tt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),I.dr()}}}class VD extends Wr{Fr(e,t){try{const r=vB.compile(t);return I.newValue({booleanValue:r.test(e)})}catch{return Tt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),I.dr()}}}class MD extends Wr{Fr(e,t){try{return I.newValue({booleanValue:vB.compile(t).matches(e)})}catch{return Tt(`Invalid regex pattern found in regex_match: ${t}, returning error`),I.dr()}}}class GD extends Wr{Fr(e,t){return I.newValue({booleanValue:e.includes(t)})}}class UD extends Wr{Fr(e,t){return I.newValue({booleanValue:e.startsWith(t)})}}class HD extends Wr{Fr(e,t){return I.newValue({booleanValue:e.endsWith(t)})}}class JD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,29079);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return I.pr();default:return I.dr()}}}class jD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,60487);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return I.pr();default:return I.dr()}}}class qD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,28544);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return I.pr();default:return I.dr()}}}class KD{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>X(o).evaluate(e,t));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return I.dr()}return i?I.pr():I.newValue({stringValue:s})}}class zD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,4483);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return I.mr();case"MAP":break;default:return I.dr()}const s=X(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return I.dr();const i=r.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?I.mr():I.newValue(i)}}class YB{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return I.dr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const o=iB(s.value),B=iB(i.value);if(o===void 0||B===void 0||o.values?.length!==B.values?.length)return I.dr();const u=this.Or(o,B);return u===void 0||isNaN(u)?I.dr():I.newValue({doubleValue:u})}}class QD extends YB{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return;let i=0,o=0,B=0;for(let c=0;c<r.length;c++){if(!Pn(r[c])||!Pn(s[c]))return;const h=Ge(r[c]),f=Ge(s[c]);i+=h*f,o+=h*h,B+=f*f}const u=Math.sqrt(o)*Math.sqrt(B);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class WD extends YB{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Pn(r[o])||!Pn(s[o]))return;i+=Ge(r[o])*Ge(s[o])}return i}}class $D extends YB{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Pn(r[o])||!Pn(s[o]))return;const B=Ge(r[o]),u=Ge(s[o]);i+=Math.pow(B-u,2)}return Math.sqrt(i)}}class YD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,39044);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const s=iB(r.value);return I.newValue({integerValue:s?.values?.length??0})}case"NULL":return I.pr();default:return I.dr()}}}const Ws=BigInt(-62135596800),$s=BigInt(253402300799),Eo=BigInt(1e3),yn=BigInt(1e6),XD=Ws*Eo,ZD=$s*Eo+BigInt(999),eI=Ws*yn,tI=$s*yn+BigInt(999999);function XB(n){return n>=eI&&n<=tI}function yf(n){return n>=Ws&&n<=$s}function Ys(n,e){const t=BigInt(n);return!(t<Ws||t>$s)&&!(e<0||e>=1e9)&&(t!==Ws||e===0)&&!(t===$s&&e>999999999)}function Tf(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function ZB(n){return BigInt(n.seconds)*yn+BigInt(Math.trunc(n.nanoseconds/1e3))}class eu{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return I.pr();default:return I.dr()}}}class nI extends eu{toTimestamp(e){if(!XB(e))return I.dr();let t=Number(e/yn),r=Number(e%yn*BigInt(1e3));const s=Tf(t,r);return t=s.seconds,r=s.nanos,Ys(t,r)?I.newValue({timestampValue:{seconds:t,nanos:r}}):I.dr()}}class rI extends eu{toTimestamp(e){if(!function(o){return o>=XD&&o<=ZD}(e))return I.dr();let t=Number(e/Eo),r=Number(e%Eo*BigInt(1e6));const s=Tf(t,r);return t=s.seconds,r=s.nanos,Ys(t,r)?I.newValue({timestampValue:{seconds:t,nanos:r}}):I.dr()}}class sI extends eu{toTimestamp(e){if(!yf(e))return I.dr();const t=Number(e);return I.newValue({timestampValue:{seconds:t,nanos:0}})}}class tu{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return I.pr();default:return I.dr()}const s=VB(r.value.timestampValue);return Ys(s.seconds,s.nanoseconds)?this.Mr(s):I.dr()}}class iI extends tu{Mr(e){const t=ZB(e);return XB(t)?I.newValue({integerValue:`${t.toString()}`}):I.dr()}}class oI extends tu{Mr(e){const t=ZB(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?I.newValue({integerValue:r.toString()}):I.newValue({integerValue:(r-BigInt(1)).toString()})}}class aI extends tu{Mr(e){const t=BigInt(e.seconds);return yf(t)?I.newValue({integerValue:t.toString()}):I.dr()}}class Af{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return I.dr()}const i=X(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(ee){switch(ee){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return I.dr();break;case"NULL":r=!0;break;default:return I.dr()}const B=X(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":r=!0;break;default:return I.dr()}if(r)return I.pr();const u=BigInt(B.value.integerValue);let c;try{switch(o){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return I.dr()}if(o!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Nr(o)))return I.dr()}catch(j){return Tt(`Error during timestamp arithmetic: ${j}`),I.dr()}const h=VB(s.value.timestampValue);if(!Ys(h.seconds,h.nanoseconds))return I.dr();const f=ZB(h),m=this.Lr(f,c);if(!XB(m))return I.dr();const A=Number(m/yn),v=m%yn,x=Number((v<0?v+yn:v)*BigInt(1e3)),M=v<0?A-1:A;return Ys(M,x)?I.newValue({timestampValue:{seconds:M,nanos:x}}):I.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class BI extends Af{Lr(e,t){return e+t}}class uI extends Af{Lr(e,t){return e-t}}function Xs(n){if((n=If(n))instanceof Kr)return`fld(${n.fieldName})`;if(n instanceof zr)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Re?`ref(${t.path})`:t instanceof st?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof F)return`fn(${n.name},[${n.params.map(Xs).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(Xs).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function cI(n){if(n instanceof Ef)return`${n._name}(${ji(n.fields)})`;if(n instanceof _f){let e=`${n._name}(${ji(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${ji(n.groups)})`),e}if(n instanceof Df)return`${n._name}(${ji(n.groups)})`;if(n instanceof jo)return`${n._name}(${n.Er})`;if(n instanceof qo)return`${n._name}(${n.collectionId})`;if(n instanceof KB)return`${n._name}()`;if(n instanceof zB)return`${n._name}(${n.hr.sort()})`;if(n instanceof Ko)return`${n._name}(${Xs(n.condition)})`;if(n instanceof rr)return`${n._name}(${n.limit})`;if(n instanceof zt)return`${n._name}(${function(t){return t.map(r=>`${Xs(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function ji(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${Xs(t)}`).join(",")}`}function Yt(n){return n.stages.map(e=>cI(e)).join("|")}function Rf(n,e){return Yt(n)===Yt(e)}function Oe(n){return n instanceof $e}function Yl(n){return Oe(n)?Yt(n):vs(n)}function vf(n){return Oe(n)?Yt(n):function(t){return`${kC(xt(t))}|lt:${t.limitType}`}(n)}function Wo(n,e){return n instanceof $e&&e instanceof $e?Rf(n,e):!(n instanceof $e&&!(e instanceof $e)||!(n instanceof $e)&&e instanceof $e)&&vE(n,e)}function Pf(n){return Kn(n)?Yt(n):kC(n)}function Sf(n,e){return n instanceof $e&&e instanceof $e?Rf(n,e):!(n instanceof $e&&!(e instanceof $e)||!(n instanceof $e)&&e instanceof $e)&&xC(n,e)}function lI(n,e){const t=function(s){let i=!1;const o=[];for(const B of s)if(B instanceof zt)if(i=!0,B.orderings.some(u=>u.expr instanceof Kr&&u.expr.fieldName===Nt))o.push(B);else{const u=B.orderings.map(c=>c);u.push(to(Nt).ascending()),o.push(new zt(u,{}))}else B instanceof rr&&(i||(o.push(new zt([to(Nt).ascending()],{})),i=!0)),o.push(B);return i||o.push(new zt([to(Nt).ascending()],{})),o}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new $e(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=As(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=As(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const u=vC(o,B);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Fr(this.mutations,e.mutations,(t,r)=>vl(t,r))&&Fr(this.baseMutations,e.baseMutations,(t,r)=>vl(t,r))}}class nu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){z(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=function(){return NE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new nu(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="";function CI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xl(e)),e=fI(n.get(t),e);return Xl(e)}function fI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case bf:t+="";break;default:t+=i}}return t}function Xl(n){return n+bf+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,r,s,i=te.min(),o=te.min(),B=Pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=u}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.qr=e}}function gI(n){const e=$E({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?BB(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.Yi=new EI}addToCollectionParentIndex(e,t){return this.Yi.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Sn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class EI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ve(he.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ve(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new Nn(0)}static ws(){return new Nn(-1)}}// Copyright 2024 Google LLC* @license
function Of(n,e){let t=e;for(const r of n.stages)t=DI({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function $o(n,e){return Of(n,[e]).length>0}function _I(n,e){return Oe(n)?$o(n,e):Vo(n,e)}function DI(n,e,t){if(e instanceof jo)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof Ko)return function(s,i,o){return o.filter(B=>{const u=bs(X(i.condition).evaluate(s,B));return u!==void 0&&Dt(u,it)})}(n,e,t);if(e instanceof qo)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof KB)return function(s,i,o){return o.filter(B=>B.isFoundDocument())}(0,0,t);if(e instanceof zB)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&i.Tr.has(B.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof rr)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof zt)return function(s,i,o){const B=i.orderings.map(u=>({Os:X(u.expr),direction:u.direction}));return[...o].sort((u,c)=>{for(const{Os:h,direction:f}of B){const m=bs(h.evaluate(s,u)),A=bs(h.evaluate(s,c)),v=ot(m??kr,A??kr);if(v!==0)return f==="ascending"?v:-v}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function fB(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof zt)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=bs(X(s.expr).evaluate({serializer:n.serializer},t)),o=bs(X(s.expr).evaluate({serializer:n.serializer},r)),B=ot(i||kr,o||kr);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function Ma(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof rr)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.changes=new cr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&As(r.mutation,s,It.empty(),me.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const s=hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=wr();return i.forEach((B,u)=>{o=o.insert(B,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,B)=>{t.set(o,B)})})}computeViews(e,t,r,s){let i=rt();const o=Ps(),B=function(){return Ps()}();return t.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof ur)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),As(h.mutation,c,h.mutation.getFieldMask(),me.now())):o.set(c.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>B.set(c,new wI(h,o.get(c)??null))),B))}recalculateAndSaveOverlays(e,t){const r=Ps();let s=new Ee((o,B)=>o-B),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const B of o)B.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||It.empty();h=B.applyToLocalView(c,h),r.set(u,h);const f=(s.get(B.batchId)||se()).add(u);s=s.insert(B.batchId,f)})}).next(()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const u=B.getNext(),c=u.key,h=u.value,f=jC();h.forEach(m=>{if(!i.has(m)){const A=vC(t.get(m),r.get(m));A!==null&&f.set(m,A),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Oe(t)?this.getDocumentsMatchingPipeline(e,t,r,s):TE(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):GC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(hn());let B=Ks,u=i;return o.next(c=>k.forEach(c,(h,f)=>(B<f.largestBatchId&&(B=f.largestBatchId),i.get(h)?k.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,se())).next(h=>({batchId:B,changes:JC(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let s=wr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=wr();return this.indexManager.getCollectionParents(e,i).next(B=>k.forEach(B,u=>{const c=function(f,m){return new Jr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>Vo(t,B)))}getDocumentsMatchingPipeline(e,t,r,s){if(wn(t)==="collection_group"){const i=WB(t);let o=wr();return this.indexManager.getCollectionParents(e,i).next(B=>k.forEach(B,u=>{const c=function(f,m){const A=f.stages.map(v=>v instanceof qo?new jo(m.canonicalString(),{}):v);return new $e(f.serializer,A)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(i=o,wn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let B=se();for(const u of CB(t))B=B.add(W.fromPath(u));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new H("invalid-argument",`Invalid pipeline source to execute offline: ${Yt(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>$o(t,B)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,je.newInvalidDocument(B)))});let s=wr();return t.forEach((i,o)=>{const B=e.get(i);B!==void 0&&As(B.mutation,o,It.empty(),me.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,r){switch(wn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,he.fromString(zo(t)),r);case"collection_group":throw new H("invalid-argument",`Unexpected collection group pipeline: ${Yt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,CB(t).map(s=>W.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new H("invalid-argument",`Failed to get overlays for pipeline: ${Yt(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.serializer=e,this.Ks=new Map,this.Qs=new Map}getBundleMetadata(e,t){return k.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Vt(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Qs.get(t))}saveNamedQuery(e,t){return this.Qs.set(t.name,function(s){return{name:s.name,query:gI(s.bundledQuery),readTime:Vt(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.overlays=new Ee(W.comparator),this.Ws=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hn();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=hn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),k.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Yr(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ws.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ws.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=hn(),i=t.length+1,o=new W(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const u=B.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ee((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=hn(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const B=hn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>B.set(c,h)),!(B.size()>=s)););return k.resolve(B)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ws.get(s.largestBatchId).delete(r.key);this.Ws.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dI(t,r));let i=this.Ws.get(t);i===void 0&&(i=se(),this.Ws.set(t,i)),this.Ws.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.Gs=new ve(ke.zs),this.js=new ve(ke.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new ke(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ys(new ke(e,t))}Zs(e,t){e.forEach(r=>this.removeReference(r,t))}Xs(e){const t=new W(new he([])),r=new ke(t,e),s=new ke(t,e+1),i=[];return this.js.forEachInRange([r,s],o=>{this.Ys(o),i.push(o.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new W(new he([])),r=new ke(t,e),s=new ke(t,e+1);let i=se();return this.js.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ke(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return W.comparator(e.key,t.key)||ie(e.n_,t.n_)}static Hs(e,t){return ie(e.n_,t.n_)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Wr=1,this.r_=new ve(ke.zs)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Wr;this.Wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hI(i,t,r,s);this.mutationQueue.push(o);for(const B of s)this.r_=this.r_.add(new ke(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?bB:this.Wr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ke(t,0),s=new ke(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],o=>{const B=this.i_(o.n_);i.push(B)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ve(ie);return t.forEach(s=>{const i=new ke(s,0),o=new ke(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],B=>{r=r.add(B.n_)})}),k.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new ke(new W(i),0);let B=new ve(ie);return this.r_.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(B=B.add(u.n_)),!0)},o),k.resolve(this.__(B))}__(e){const t=[];return e.forEach(r=>{const s=this.i_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){z(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return k.forEach(t.mutations,s=>{const i=new ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=r})}jr(e){}containsKey(e,t){const r=new ke(t,0),s=this.r_.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.a_=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():je.newInvalidDocument(s))}),k.resolve(r)}getAllEntries(e){let t=rt();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),k.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;Oe(t)?(i=he.fromString(zo(t)),o=h=>$o(t,h)):(i=t.path,o=h=>Vo(t,h));let B=rt();const u=new W(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||IE(DE(f),r)<=0||(s.has(f.key)||o(f))&&(B=B.insert(f.key,f.mutableCopy()))}return k.resolve(B)}getAllFromCollectionGroup(e,t,r,s){$(9500)}u_(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new SI(this)}getSize(e){return k.resolve(this.size)}}class SI extends II{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.persistence=e,this.c_=new cr(t=>Pf(t),Sf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.l_=0,this.E_=new ru,this.targetCount=0,this.h_=Nn.ys()}forEachTarget(e,t){return this.c_.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),k.resolve()}vs(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new Nn(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.vs(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.vs(t),k.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach((o,B)=>{B.sequenceNumber<=t&&r.get(B.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t){this.T_={},this.overlays={},this.P_=new Go(0),this.R_=!1,this.R_=!0,this.I_=new RI,this.referenceDelegate=e(this),this.A_=new bI(this),this.indexManager=new mI,this.remoteDocumentCache=function(s){return new PI(s)}(r=>this.referenceDelegate.V_(r)),this.serializer=new pI(t),this.d_=new TI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new AI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new vI(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const s=new OI(this.P_.next());return this.referenceDelegate.f_(),r(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return k.or(Object.values(this.T_).map(r=>()=>r.containsKey(e,t)))}}class OI extends w_{constructor(e){super(),this.currentSequenceNumber=e}}class su{constructor(e){this.persistence=e,this.g_=new ru,this.y_=null}static w_(e){return new su(e)}get b_(){if(this.y_)return this.y_;throw $(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),k.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.b_,r=>{const s=W.fromPath(r);return this.S_(e,s).next(i=>{i||t.removeEntry(s,te.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.S_(e,t).next(r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}S_(e,t){return k.or([()=>k.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class _o{constructor(e,t){this.persistence=e,this.v_=new cr(r=>CI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=P_(this,t)}static w_(e,t){return new _o(e,t)}f_(){}m_(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}xs(e){let t=0;return this.ir(e,r=>{t++}).next(()=>t)}ir(e,t){return k.forEach(this.v_,(r,s)=>this.Fs(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,o=>this.Fs(e,o,t).next(B=>{B||(r++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.v_.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.v_.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.v_.set(t,e.currentSequenceNumber),k.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yi(e.data.value)),t}Fs(e,t,r){return k.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.v_.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new iu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n,e){return W.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return $p()?8:y_(qe())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.So(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.vo(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new FI;return this.Do(e,t,o).next(B=>{if(i.result=B,this.po)return this.xo(e,t,o,B.size)})}).next(()=>i.result)}xo(e,t,r,s){return Oe(t)?k.resolve():r.documentReadCount<this.yo?(Dr()<=oe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",vs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),k.resolve()):(Dr()<=oe.DEBUG&&J("QueryEngine","Query:",vs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(Dr()<=oe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",vs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xt(t))):k.resolve())}So(e,t){if(Oe(t))return k.resolve(null);let r=t;if(Fl(r))return k.resolve(null);let s=xt(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=BB(r,null,"F"),s=xt(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const B=se(...o);return this.bo.getDocuments(e,B).next(u=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.Co(r,u);return this.Fo(r,h,B,c.readTime)?this.So(e,BB(r,null,"F")):this.Oo(e,h,r,c)}))})))}vo(e,t,r,s){return(Oe(t)?function(o){for(const B of o.stages){if(B instanceof rr||B instanceof $l)return!1;if(B instanceof Ko){if(B.condition instanceof pf&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof Kr&&B.condition._expr.params[0].fieldName===Nt)continue;return!1}}return!0}(t):Fl(t))||s.isEqual(te.min())?k.resolve(null):this.bo.getDocuments(e,r).next(i=>{const o=this.Co(t,i);return this.Fo(t,o,r,s)?k.resolve(null):(Dr()<=oe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yl(t)),this.Oo(e,o,t,_E(s,Ks)).next(B=>B))})}Co(e,t){let r,s;return Oe(e)?(r=new ve(NI),s=i=>$o(e,i)):(r=new ve(kB(e)),s=i=>Vo(e,i)),t.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Fo(e,t,r,s){if(Oe(e))return function(B){return B.stages.some(u=>u instanceof rr||u instanceof $l)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return Dr()<=oe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Yl(t)),this.bo.getDocumentsMatchingQuery(e,t,Sn.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="LocalStore",kI=3e8;class xI{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new Ee(ie),this.Lo=new cr(i=>Pf(i),Sf),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yI(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function VI(n,e,t,r){return new xI(n,e,t,r)}async function Ff(n,e){const t=ne(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],B=[];let u=se();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){B.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({qo:c,removedBatchIds:o,addedBatchIds:B}))})})}function MI(n,e){const t=ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(B,u,c,h){const f=c.batch,m=f.keys();let A=k.resolve();return m.forEach(v=>{A=A.next(()=>h.getEntry(u,v)).next(x=>{const M=c.docVersions.get(v);z(M!==null,48541),x.version.compareTo(M)<0&&(f.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),h.addEntry(x)))})}),A.next(()=>B.mutationQueue.removeMutationBatch(u,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(B){let u=se();for(let c=0;c<B.mutationResults.length;++c)B.mutationResults[c].transformResults.length>0&&(u=u.add(B.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Lf(n){const e=ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function GI(n,e){const t=ne(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const B=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;B.push(t.A_.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.A_.addMatchingKeys(i,h.addedDocuments,f)));let A=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?A=A.withResumeToken(Pe.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(h.resumeToken,r)),s=s.insert(f,A),function(x,M,j){return x.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=kI?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,A,h)&&B.push(t.A_.updateTargetData(i,A))});let u=rt(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),B.push(UI(i,o,e.documentUpdates).next(h=>{u=h.$o,c=h.Ko})),!r.isEqual(te.min())){const h=t.A_.getLastRemoteSnapshotVersion(i).next(f=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r));B.push(h)}return k.waitFor(B).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.No=s,i))}function UI(n,e,t){let r=se(),s=se();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=rt();return t.forEach((B,u)=>{const c=i.get(B);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(B)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(B,u.readTime),o=o.insert(B,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(B,u)):J(ou,"Ignoring outdated watch update for ",B,". Current version:",c.version," Watch version:",u.version)}),{$o:o,Ko:s}})}function HI(n,e){const t=ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bB),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function JI(n,e){const t=ne(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.A_.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.A_.allocateTargetId(r).next(o=>(s=new Qt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r})}async function dB(n,e,t){const r=ne(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qr(o))throw o;J(ou,`Failed to update sequence numbers for target ${e}: ${o}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function Zl(n,e,t){const r=ne(n);let s=te.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),m=f.Lo.get(h);return m!==void 0?k.resolve(f.No.get(m)):f.A_.getTargetData(c,h)}(r,o,Oe(e)?e:xt(e)).next(B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(o,B.targetId).next(u=>{i=u})}).next(()=>r.Mo.getDocumentsMatchingQuery(o,e,t?s:te.min(),t?i:se())).next(B=>(jI(r,B),{documents:B,Qo:i})))}function jI(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||te.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(Zt(t),this.Zo=!1):J("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="RemoteStore";class KI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new Nn(1e3),this.ua=new Nn(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(o=>{r.enqueueAndForget(async()=>{Cr(this)&&(J(Jt,"Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.ca.add(4),await Ci(c),c.ha.set("Unknown"),c.ca.delete(4),await Yo(c)}(this))})}),this.ha=new qI(r,s)}}async function Yo(n){if(Cr(n))for(const e of n.la)await e(!0)}async function Ci(n){for(const e of n.la)await e(!1)}function pB(n,e){return n._a.get(e)||void 0}function kf(n,e){const t=ne(n),r=pB(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=function(B,u){const c=pB(B,u);c!==void 0&&B.oa.delete(c);const h=function(m,A){return A%2!=0?m.ua.next():m.aa.next()}(B,u);return B._a.set(u,h),B.oa.set(h,u),h}(t,e.targetId);J(Jt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Qt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),cu(t)?uu(t):$r(t).Jt()&&Bu(t,i)}function au(n,e){const t=ne(n),r=$r(t),s=pB(t,e);J(Jt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&xf(t,s),t.sa.size===0&&(r.Jt()?r.Xt():Cr(t)&&t.ha.set("Unknown"))}function Bu(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void J(Jt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}$r(n).Tn(e)}function xf(n,e){n.Ta.H(e),$r(n).Pn(e)}function uu(n){n.Ta=new ME({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):se()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),$r(n).start(),n.ha.Xo()}function cu(n){return Cr(n)&&!$r(n).Ht()&&n.sa.size>0}function Cr(n){return ne(n).ca.size===0}function Vf(n){n.Ta=void 0}async function zI(n){n.ha.set("Online")}async function QI(n){n.sa.forEach((e,t)=>{Bu(n,e)})}async function WI(n,e){Vf(n),cu(n)?(n.ha.na(e),uu(n)):n.ha.set("Unknown")}async function $I(n,e,t){if(n.ha.set("Online"),e instanceof KC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s.sa.has(B)){const u=s.oa.get(B);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s._a.delete(u),s.oa.delete(B)),s.sa.delete(B)}s.Ta.removeTarget(B)}}(n,e)}catch(r){J(Jt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Do(n,r)}else if(e instanceof Zi?n.Ta.se(e):e instanceof qC?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(te.min()))try{const r=await Lf(n.localStore);t.compareTo(r)>=0&&await function(i,o){const B=i.Ta.de(o);B.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.sa.get(h);f&&i.sa.set(h,f.withResumeToken(c.resumeToken,o))}}),B.targetMismatches.forEach((c,h)=>{const f=i.sa.get(c);if(!f)return;i.sa.set(c,f.withResumeToken(Pe.EMPTY_BYTE_STRING,f.snapshotVersion)),xf(i,c);const m=new Qt(f.target,c,h,f.sequenceNumber);Bu(i,m)});const u=function(h,f){const m=new Map;f.targetChanges.forEach((v,x)=>{const M=h.oa.get(x);M!==void 0&&m.set(M,v)});let A=new Ee(ie);return f.targetMismatches.forEach((v,x)=>{const M=h.oa.get(v);M!==void 0&&(A=A.insert(M,x))}),new ui(f.snapshotVersion,m,A,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)}(i,B);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){J(Jt,"Failed to raise snapshot:",r),await Do(n,r)}}async function Do(n,e,t){if(!qr(e))throw e;n.ca.add(1),await Ci(n),n.ha.set("Offline"),t||(t=()=>Lf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J(Jt,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await Yo(n)})}function Mf(n,e){return e().catch(t=>Do(n,t,e))}async function Xo(n){const e=ne(n),t=Fn(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:bB;for(;YI(e);)try{const s=await HI(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,XI(e,s)}catch(s){await Do(e,s)}Gf(e)&&Uf(e)}function YI(n){return Cr(n)&&n.ia.length<10}function XI(n,e){n.ia.push(e);const t=Fn(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function Gf(n){return Cr(n)&&!Fn(n).Ht()&&n.ia.length>0}function Uf(n){Fn(n).start()}async function ZI(n){Fn(n).dn()}async function ew(n){const e=Fn(n);for(const t of n.ia)e.In(t.mutations)}async function tw(n,e,t){const r=n.ia.shift(),s=nu.from(r,e,t);await Mf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Xo(n)}async function nw(n,e){e&&Fn(n).Rn&&await async function(r,s){if(function(o){return bE(o)&&o!==L.ABORTED}(s.code)){const i=r.ia.shift();Fn(r).Zt(),await Mf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xo(r)}}(n,e),Gf(n)&&Uf(n)}async function eh(n,e){const t=ne(n);t.asyncQueue.verifyOperationInProgress(),J(Jt,"RemoteStore received new credentials");const r=Cr(t);t.ca.add(3),await Ci(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await Yo(t)}async function rw(n,e){const t=ne(n);e?(t.ca.delete(2),await Yo(t)):e||(t.ca.add(2),await Ci(t),t.ha.set("Unknown"))}function $r(n){return n.Pa||(n.Pa=function(t,r,s){const i=ne(t);return i.mn(),new d_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:zI.bind(null,n),lt:QI.bind(null,n),ht:WI.bind(null,n),hn:$I.bind(null,n)}),n.la.push(async e=>{e?(n.Pa.Zt(),cu(n)?uu(n):n.ha.set("Unknown")):(await n.Pa.stop(),Vf(n))})),n.Pa}function Fn(n){return n.Ra||(n.Ra=function(t,r,s){const i=ne(t);return i.mn(),new p_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:ZI.bind(null,n),ht:nw.bind(null,n),An:ew.bind(null,n),Vn:tw.bind(null,n)}),n.la.push(async e=>{e?(n.Ra.Zt(),await Xo(n)):(await n.Ra.stop(),n.ia.length>0&&(J(Jt,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))})),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,B=new lu(e,t,o,s,i);return B.start(r),B}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hu(n,e){if(Zt("AsyncQueue",`${e}: ${n}`),qr(n))return new H(L.UNAVAILABLE,`${e}: ${n}`);throw n}class th{constructor(){this.activeTargetIds=kE()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iw{constructor(){this.du=new th,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new th,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Ga(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{static emptySet(e){return new $n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=wr(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new $n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.mu=new Ee(W.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):$(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Gr{constructor(e,t,r,s,i,o,B,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(B=>{o.push({type:0,doc:B})}),new Gr(e,t,$n.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.Su())}}class aw{constructor(){this.queries=rh(),this.onlineState="Unknown",this.vu=new Set}terminate(){(function(t,r){const s=ne(t),i=s.queries;s.queries=rh(),i.forEach((o,B)=>{for(const u of B.wu)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function rh(){return new cr(n=>vf(n),Wo)}async function Bw(n,e){const t=ne(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.Su()&&(r=2):(i=new ow,r=e.Su()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=hu(o,`Initialization of query '${Oe(e.query)?Yt(e.query):vs(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&Cu(t)}async function uw(n,e){const t=ne(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.Su()?0:1:!i.bu()&&e.Su()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function cw(n,e){const t=ne(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.wu)B.xu(s)&&(r=!0);o.yu=s}}r&&Cu(t)}function lw(n,e,t){const r=ne(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function Cu(n){n.vu.forEach(e=>{e.next()})}var gB;(function(n){n.Default="default",n.Cache="cache"})(gB||(gB={}));class hw{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.Su())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}Su(){return this.options.source!==gB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.key=e}}class Jf{constructor(e){this.key=e}}class Cw{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=se(),this.mutatedKeys=se(),this.Hu=Oe(e)?fB(e):kB(e),this.Ju=new $n(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new nh,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[u,c]=this.ec(this.query,s);e.inorderTraversal((f,m)=>{const A=s.get(f),v=_I(this.query,m)?m:null,x=!!A&&this.mutatedKeys.has(A.key),M=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let j=!1;A&&v?A.data.isEqual(v.data)?x!==M&&(r.track({type:3,doc:v}),j=!0):this.tc(A,v)||(r.track({type:2,doc:v}),j=!0,(u&&this.Hu(v,u)>0||c&&this.Hu(v,c)<0)&&(B=!0)):!A&&v?(r.track({type:0,doc:v}),j=!0):A&&!v&&(r.track({type:1,doc:A}),j=!0,(u||c)&&(B=!0)),j&&(v?(o=o.add(v),i=M?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))});const h=this.nc(this.query);if(h)if(Oe(this.query)){const f=[];o.forEach(v=>f.push(v));const m=Of(this.query,f);let A=new $n(fB(this.query));for(const v of m)A=A.add(v);o.forEach(v=>{A.has(v.key)||(i=i.delete(v.key),r.track({type:1,doc:v}))}),o=A}else{const f=this.rc(this.query);for(;o.size>h;){const m=f==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}}return{Ju:o,Xu:r,Fo:B,mutatedKeys:i}}nc(e){return Oe(e)?Ma(e)?.limit:e.limit||void 0}rc(e){if(Oe(e)){const t=Ma(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){if(Oe(e)){const r=Ma(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort((h,f)=>function(A,v){const x=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{ye:M})}};return x(A)-x(v)}(h.type,f.type)||this.Hu(h.doc,f.doc)),this.sc(r),s=s??!1;const B=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,c=u!==this.zu;return this.zu=u,o.length!==0||c?{snapshot:new Gr(this.query,e.Ju,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:B}:{oc:B}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new nh,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=se(),this.Ju.forEach(r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))});const t=[];return e.forEach(r=>{this.ju.has(r)||t.push(new Jf(r))}),this.ju.forEach(r=>{e.has(r)||t.push(new Hf(r))}),t}uc(e){this.Gu=e.Qo,this.ju=se();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return Gr.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const fu="SyncEngine";class fw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class dw{constructor(e){this.key=e,this.lc=!1}}class pw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new cr(B=>vf(B),Wo),this.Tc=new Map,this.Pc=new Set,this.Rc=new Ee(W.comparator),this.Ic=new Map,this.Ac=new ru,this.Vc={},this.dc=new Map,this.fc=Nn.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function gw(n,e,t=!0){const r=Wf(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await jf(r,e,t,!0),s}async function mw(n,e){const t=Wf(n);await jf(t,e,!0,!1)}async function jf(n,e,t,r){const s=await JI(n.localStore,Oe(e)?e:xt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let B;return r&&(B=await Ew(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&kf(n.remoteStore,s),B}async function Ew(n,e,t,r,s){n.gc=(f,m,A)=>async function(x,M,j,ee){let ae=M.view.Zu(j);ae.Fo&&(ae=await Zl(x.localStore,M.query,!1).then(({documents:T})=>M.view.Zu(T,ae)));const Be=ee&&ee.targetChanges.get(M.targetId),Ne=ee&&ee.targetMismatches.get(M.targetId)!=null,Ce=M.view.applyChanges(ae,x.isPrimaryClient,Be,Ne);return ih(x,M.targetId,Ce.oc),Ce.snapshot}(n,f,m,A);const i=await Zl(n.localStore,e,!0),o=new Cw(e,i.Qo),B=o.Zu(i.documents),u=ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),c=o.applyChanges(B,n.isPrimaryClient,u);ih(n,t,c.oc);const h=new fw(e,t,o);return n.hc.set(e,h),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),c.snapshot}async function _w(n,e,t){const r=ne(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter(o=>!Wo(o,e))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await dB(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&au(r.remoteStore,s.targetId),mB(r,s.targetId)}).catch(jr)):(mB(r,s.targetId),await dB(r.localStore,s.targetId,!0))}async function Dw(n,e){const t=ne(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),au(t.remoteStore,r.targetId))}async function Iw(n,e,t){const r=Pw(n);try{const s=await function(o,B){const u=ne(o),c=me.now(),h=B.reduce((A,v)=>A.add(v.key),se());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let v=rt(),x=se();return u.Uo.getEntries(A,h).next(M=>{v=M,v.forEach((j,ee)=>{ee.isValidDocument()||(x=x.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,v)).next(M=>{f=M;const j=[];for(const ee of B){const ae=uE(ee,f.get(ee.key).overlayedDocument);ae!=null&&j.push(new ur(ee.key,ae,wC(ae.value.mapValue),yt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,j,B)}).next(M=>{m=M;const j=M.applyToLocalDocumentSet(f,x);return u.documentOverlayCache.saveOverlays(A,M.batchId,j)})}).then(()=>({batchId:m.batchId,changes:JC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,B,u){let c=o.Vc[o.currentUser.toKey()];c||(c=new Ee(ie)),c=c.insert(B,u),o.Vc[o.currentUser.toKey()]=c}(r,s.batchId,t),await fi(r,s.changes),await Xo(r.remoteStore)}catch(s){const i=hu(s,"Failed to persist write");t.reject(i)}}async function qf(n,e){const t=ne(n);try{const r=await GI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ic.get(i);o&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?z(o.lc,14607):s.removedDocuments.size>0&&(z(o.lc,42227),o.lc=!1))}),await fi(t,r,e)}catch(r){await jr(r)}}function sh(n,e,t){const r=ne(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach((i,o)=>{const B=o.view.Du(e);B.snapshot&&s.push(B.snapshot)}),function(o,B){const u=ne(o);u.onlineState=B;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.wu)m.Du(B)&&(c=!0)}),c&&Cu(u)}(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ww(n,e,t){const r=ne(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let o=new Ee(W.comparator);o=o.insert(i,je.newNoDocument(i,te.min()));const B=se().add(i),u=new ui(te.min(),new Map,new Ee(ie),o,rt(),B);await qf(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),du(r)}else await dB(r.localStore,e,!1).then(()=>mB(r,e,t)).catch(jr)}async function yw(n,e){const t=ne(n),r=e.batch.batchId;try{const s=await MI(t.localStore,e);zf(t,r,null),Kf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await fi(t,s)}catch(s){await jr(s)}}async function Tw(n,e,t){const r=ne(n);try{const s=await function(o,B){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,B).next(f=>(z(f!==null,37113),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,B)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);zf(r,e,t),Kf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await fi(r,s)}catch(s){await jr(s)}}function Kf(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function zf(n,e,t){const r=ne(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function mB(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach(r=>{n.Ac.containsKey(r)||Qf(n,r)})}function Qf(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(au(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),du(n))}function ih(n,e,t){for(const r of t)r instanceof Hf?(n.Ac.addReference(r.key,e),Aw(n,r)):r instanceof Jf?(J(fu,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||Qf(n,r.key)):$(19791,{wc:r})}function Aw(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(J(fu,"New document in limbo: "+t),n.Pc.add(r),du(n))}function du(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new W(he.fromString(e)),r=n.fc.next();n.Ic.set(r,new dw(t)),n.Rc=n.Rc.insert(t,r),kf(n.remoteStore,new Qt(xt(MC(t.path)),r,"TargetPurposeLimboResolution",Go.yn))}}async function fi(n,e,t){const r=ne(n),s=[],i=[],o=[];r.hc.isEmpty()||(r.hc.forEach((B,u)=>{o.push(r.gc(u,e,t).then(c=>{if((c||t)&&r.isPrimaryClient){const h=c?!c.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=iu.fo(u.targetId,c);i.push(h)}}))}),await Promise.all(o),r.Ec.hn(s),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>k.forEach(c,m=>k.forEach(m.Ao,A=>h.persistence.referenceDelegate.addReference(f,m.targetId,A)).next(()=>k.forEach(m.Vo,A=>h.persistence.referenceDelegate.removeReference(f,m.targetId,A)))))}catch(f){if(!qr(f))throw f;J(ou,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const A=h.No.get(m),v=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(v);h.No=h.No.insert(m,x)}}}(r.localStore,i))}async function Rw(n,e){const t=ne(n);if(!t.currentUser.isEqual(e)){J(fu,"User change. New user:",e.toKey());const r=await Ff(t.localStore,e);t.currentUser=e,function(i,o){i.dc.forEach(B=>{B.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fi(t,r.qo)}}function vw(n,e){const t=ne(n),r=t.Ic.get(e);if(r&&r.lc)return se().add(r.key);{let s=se();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const B=t.hc.get(o);s=s.unionWith(B.view.Yu)}return s}}function Wf(n){const e=ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ww.bind(null,e),e.Ec.hn=cw.bind(null,e.eventManager),e.Ec.yc=lw.bind(null,e.eventManager),e}function Pw(n){const e=ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tw.bind(null,e),e}class Io{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mo(e.databaseInfo.databaseId),this.sharedClientState=this.Sc(e),this.persistence=this.vc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return VI(this.persistence,new LI,e.initialUser,this.serializer)}vc(e){return new Nf(su.w_,this.serializer)}Sc(e){return new iw}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Io.provider={build:()=>new Io};class Sw extends Io{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){z(this.persistence.referenceDelegate instanceof _o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new R_(r,e.asyncQueue,t)}vc(e){const t=this.cacheSizeBytes!==void 0?nt.withCacheSize(this.cacheSizeBytes):nt.DEFAULT;return new Nf(r=>_o.w_(r,t),this.serializer)}}class EB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rw.bind(null,this.syncEngine),await rw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aw}()}createDatastore(e){const t=Mo(e.databaseInfo.databaseId),r=f_(e.databaseInfo);return E_(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,B){return new KI(r,s,i,o,B)}(this.localStore,this.datastore,e.asyncQueue,t=>sh(this.syncEngine,t,0),function(){return Hl.Je()?new Hl:new c_}())}createSyncEngine(e,t){return function(s,i,o,B,u,c,h){const f=new pw(s,i,o,B,u,c);return h&&(f.mc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=ne(t);J(Jt,"RemoteStore shutting down."),r.ca.add(5),await Ci(r),r.Ea.shutdown(),r.ha.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}EB.provider={build:()=>new EB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="FirestoreClient";class bw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Je.UNAUTHENTICATED,this.clientId=SB.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J(Ln,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J(Ln,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=hu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ua(n,e){n.asyncQueue.verifyOperationInProgress(),J(Ln,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ff(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function oh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ow(n);J(Ln,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>eh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>eh(e.remoteStore,s)),n._onlineComponents=e}async function Ow(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J(Ln,"Using user provided OfflineComponentProvider");try{await Ua(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Tt("Error using user provided cache. Falling back to memory cache: "+t),await Ua(n,new Io)}}else J(Ln,"Using default OfflineComponentProvider"),await Ua(n,new Sw(void 0));return n._offlineComponents}async function $f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J(Ln,"Using user provided OnlineComponentProvider"),await oh(n,n._uninitializedComponentsProvider._online)):(J(Ln,"Using default OnlineComponentProvider"),await oh(n,new EB))),n._onlineComponents}function Nw(n){return $f(n).then(e=>e.syncEngine)}async function Fw(n){const e=await $f(n),t=e.eventManager;return t.onListen=gw.bind(null,e.syncEngine),t.onUnlisten=_w.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Dw.bind(null,e.syncEngine),t}function Lw(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,B,u,c){const h=new sw({next:m=>{h.Aa(),o.enqueueAndForget(()=>uw(i,f)),m.fromCache&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new hw(B instanceof Ss?lI(B):B,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Bw(i,f)}(await Fw(n),n.asyncQueue,e,t,r)),r.promise}function kw(n,e){const t=new Dn;return n.asyncQueue.enqueueAndForget(async()=>Iw(await Nw(n),e,t)),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(li("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},xw=class extends Yf{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{convertValue(e,t="none"){switch(Se(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[Ms].arrayValue?.values?.map(r=>_e(r.doubleValue));return new st(t)}convertGeoPoint(e){return new Mt(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ai(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=Rn(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);z(ZC(r),9688,{name:e});const s=new xs(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(t)||Zt(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="AsyncQueue";class Bh{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Qc=null,this.Wc=!1,this.Gc=!1,this.zc=[],this.jt=new sf(this,"async_queue_retry"),this.jc=()=>{const r=Ga();r&&J(ah,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Hc=e;const t=Ga();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=Ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new Dn;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.jt.reset()}catch(e){if(!qr(e))throw e;J(ah,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.jt.Ut(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Wc=!0,e().catch(r=>{throw this.Qc=r,this.Wc=!1,Zt("INTERNAL UNHANDLED ERROR: ",uh(r)),r}).then(r=>(this.Wc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=lu.createAndSchedule(this,e,t,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Qc&&$(47125,{el:uh(this.Qc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function uh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class di extends Uo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Bh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bh(e),this._firestoreClient=void 0,await e}}}function Mw(n,e){const t=typeof n=="object"?n:bo(),r=typeof n=="string"?n:uo,s=So(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jh("firestore");i&&S_(s,...i)}return s}function Zf(n){if(n._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gw(n),n._firestoreClient}function Gw(n){const e=n._freezeSettings(),t=D_(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new bw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw extends Vw{constructor(e){super(),this.firestore=e}convertBytes(e){return new _t(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}class qi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pr extends Yf{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(li("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pr._jsonSchema={type:Ae("string",Pr._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class no extends Pr{data(e={}){return super.data(e)}}class Sr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new no(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(B=>{Oe(s._snapshot.query)?fB(s._snapshot.query):kB(s.query._query);const u=new no(s._firestore,s._userDataWriter,B.doc.key,B.doc,new qi(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(B=>i||B.type!==3).map(B=>{const u=new no(s._firestore,s._userDataWriter,B.doc.key,B.doc,new qi(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return B.type!==0&&(c=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:Hw(B.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Sr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=SB.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Hw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr._jsonSchemaVersion="firestore/querySnapshot/1.0",Sr._jsonSchema={type:Ae("string",Sr._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pu{}class ed extends pu{}function jw(n,e,...t){let r=[];e instanceof pu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(u=>u instanceof mu).length,B=i.filter(u=>u instanceof gu).length;if(o>1||o>0&&B>0)throw new H(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class gu extends ed{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new gu(e,t,r)}_apply(e){const t=this._parse(e);return td(e._query,t),new lr(e.firestore,e.converter,aB(e._query,t))}_parse(e){const t=JB(e.firestore);return function(i,o,B,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new H(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){lh(f,h);const v=[];for(const x of f)v.push(ch(u,i,x));m={arrayValue:{values:v}}}else m=ch(u,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||lh(f,h),m=F_(B,o,f,h==="in"||h==="not-in");return Te.create(c,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class mu extends pu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:At.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const B=i.getFlattenedFilters();for(const u of B)td(o,u),o=aB(o,u)}(e._query,t),new lr(e.firestore,e.converter,aB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Eu extends ed{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Eu(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qs(i,o)}(e._query,this._field,this._direction);return new lr(e.firestore,e.converter,RE(e._query,t))}}function qw(n,e="asc"){const t=e,r=li("orderBy",n);return Eu._create(r,t)}function ch(n,e,t){if(typeof(t=Ve(t))=="string"){if(t==="")throw new H(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GC(e)&&t.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(he.fromString(t));if(!W.isDocumentKey(r))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Al(n,new W(r))}if(t instanceof Re)return Al(n,t._key);throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oo(t)}.`)}function lh(n,e){if(!Array.isArray(n)||n.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function td(n,e){const t=function(s,i){for(const o of s)for(const B of o.getFlattenedFilters())if(i.indexOf(B.op)>=0)return B.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function _u(n){n=nr(n,lr);const e=nr(n.firestore,di),t=Zf(e),r=new Uw(e);return Jw(n._query),Lw(t,n._query).then(s=>new Sr(e,r,n,s))}function nd(n,e,t){n=nr(n,Re);const r=nr(n.firestore,di),s=Xf(n.converter,e,t),i=JB(r);return Du(r,[cf(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,yt.none())])}function Kw(n){return Du(nr(n.firestore,di),[new LB(n._key,yt.none())])}function zw(n,e){const t=nr(n.firestore,di),r=Jo(n),s=Xf(n.converter,e),i=JB(n.firestore);return Du(t,[cf(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,yt.exists(!1))]).then(()=>r)}function Du(n,e){const t=Zf(n);return kw(t,e)}const hh="@firebase/firestore",Ch="4.17.1";(function(e,t=!0){Jm(ar),Zn(new An("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),B=new di(new o_(r.getProvider("auth-internal")),new u_(o,r.getProvider("app-check-internal")),Xm(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B},"PUBLIC").setMultipleInstances(!0)),kt(hh,Ch,e),kt(hh,Ch,"esm2020")})();function rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qw=rd,sd=new ni("auth","Firebase",rd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new TB("@firebase/auth");function id(n,...e){wo.logLevel<=oe.WARN&&wo.warn(`Auth (${ar}): ${n}`,...e)}function ro(n,...e){wo.logLevel<=oe.ERROR&&wo.error(`Auth (${ar}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,...e){throw Iu(n,...e)}function Gt(n,...e){return Iu(n,...e)}function od(n,e,t){const r={...Qw(),[e]:t};return new ni("auth","Firebase",r).create(e,{appName:n.name})}function Tn(n){return od(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Iu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return sd.create(n,...e)}function Z(n,e,...t){if(!n)throw Iu(e,...t)}function Wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ro(e),new Error(e)}function tn(n,e){n||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _B(){return typeof self<"u"&&self.location?.href||""}function Ww(){return fh()==="http:"||fh()==="https:"}function fh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ww()||zp()||"connection"in navigator)?navigator.onLine:!0}function Yw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,tn(t>e,"Short delay should be less than long delay!"),this.isMobile=jp()||Qp()}get(){return $w()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n,e){tn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ey=new pi(3e4,6e4);function fr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function kn(n,e,t,r,s={}){return Bd(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const B=ri({...o,key:n.config.apiKey}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:u,...i};return Kp()||(c.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&or(n.emulatorConfig.host)&&(c.credentials="include"),ad.fetch()(await ud(n,n.config.apiHost,t,B),c)})}async function Bd(n,e,t){n._canInitEmulator=!1;const r={...Xw,...e};try{const s=new ny(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ki(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[u,c]=B.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ki(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ki(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ki(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw od(n,h,c);Rt(n,h)}}catch(s){if(s instanceof jt)throw s;Rt(n,"network-request-failed",{message:String(s)})}}async function Zo(n,e,t,r,s={}){const i=await kn(n,e,t,r,s);return"mfaPendingCredential"in i&&Rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ud(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?wu(n.config,s):`${n.config.apiScheme}://${s}`;return Zw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ty(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ny{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),ey.get())})}}function Ki(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Gt(n,e,r);return s.customData._tokenResponse=t,s}function dh(n){return n!==void 0&&n.enterprise!==void 0}class ry{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ty(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sy(n,e){return kn(n,"GET","/v2/recaptchaConfig",fr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(n,e){return kn(n,"POST","/v1/accounts:delete",e)}async function yo(n,e){return kn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oy(n,e=!1){const t=Ve(n),r=await t.getIdToken(e),s=yu(r);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Os(Ha(s.auth_time)),issuedAtTime:Os(Ha(s.iat)),expirationTime:Os(Ha(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ha(n){return Number(n)*1e3}function yu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hh(t);return s?JSON.parse(s):(ro("Failed to decode base64 JWT payload"),null)}catch(s){return ro("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ph(n){const e=yu(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jt&&ay(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ay({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n){const e=n.auth,t=await n.getIdToken(),r=await Zs(n,yo(e,{idToken:t}));Z(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?cd(s.providerUserInfo):[],o=cy(n.providerData,i),B=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!o?.length,c=B?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new DB(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function uy(n){const e=Ve(n);await To(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(n,e){const t=await Bd(n,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await ud(n,s,"/v1/token",`key=${i}`),B=await n._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:B,body:r};return n.emulatorConfig&&or(n.emulatorConfig.host)&&(u.credentials="include"),ad.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hy(n,e){return kn(n,"POST","/v2/accounts:revokeToken",fr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ph(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=ph(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ly(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new br;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class wt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new By(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new DB(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oy(this,e)}reload(){return uy(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await To(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Zs(this,iy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:A,providerData:v,stsTokenManager:x}=t;Z(f&&x,e,"internal-error");const M=br.fromJSON(this.name,x);Z(typeof f=="string",e,"internal-error"),cn(r,e.name),cn(s,e.name),Z(typeof m=="boolean",e,"internal-error"),Z(typeof A=="boolean",e,"internal-error"),cn(i,e.name),cn(o,e.name),cn(B,e.name),cn(u,e.name),cn(c,e.name),cn(h,e.name);const j=new wt({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:M,createdAt:c,lastLoginAt:h});return v&&Array.isArray(v)&&(j.providerData=v.map(ee=>({...ee}))),u&&(j._redirectEventId=u),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new br;s.updateFromServerResponse(t);const i=new wt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await To(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,B=new br;B.updateFromIdToken(r);const u=new wt({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new DB(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map;function $t(n){tn(n instanceof Function,"Expected a class definition");let e=gh.get(n);return e?(tn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ld.type="NONE";const mh=ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n,e,t){return`firebase:${n}:${e}:${t}`}class Or{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=so(this.userKey,s.apiKey,i),this.fullPersistenceKey=so("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yo(this.auth,{idToken:e}).catch(()=>{});return t?wt._fromGetAccountInfoResponse(this.auth,t,e):null}return wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Or($t(mh),e,r);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||$t(mh);const o=so(r,e.config.apiKey,e.name);let B=null;for(const c of t)try{const h=await c._get(o);if(h){let f;if(typeof h=="string"){const m=await yo(e,{idToken:h}).catch(()=>{});if(!m)break;f=await wt._fromGetAccountInfoResponse(e,m,h)}else f=wt._fromJSON(e,h);c!==i&&(B=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Or(i,e,r):(i=u[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Or(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gd(e))return"Blackberry";if(md(e))return"Webos";if(Cd(e))return"Safari";if((e.includes("chrome/")||fd(e))&&!e.includes("edge/"))return"Chrome";if(pd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function hd(n=qe()){return/firefox\//i.test(n)}function Cd(n=qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fd(n=qe()){return/crios\//i.test(n)}function dd(n=qe()){return/iemobile/i.test(n)}function pd(n=qe()){return/android/i.test(n)}function gd(n=qe()){return/blackberry/i.test(n)}function md(n=qe()){return/webos/i.test(n)}function Tu(n=qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cy(n=qe()){return Tu(n)&&!!window.navigator?.standalone}function fy(){return Wp()&&document.documentMode===10}function Ed(n=qe()){return Tu(n)||pd(n)||md(n)||gd(n)||/windows phone/i.test(n)||dd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(n,e=[]){let t;switch(n){case"Browser":t=Eh(qe());break;case"Worker":t=`${Eh(qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ar}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,B)=>{try{const u=e(i);o(u)}catch(u){B(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(n,e={}){return kn(n,"GET","/v2/passwordPolicy",fr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=6;class my{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??gy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _h(this),this.idTokenSubscription=new _h(this),this.beforeStateQueue=new dy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Or.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yo(this,{idToken:e}),r=await wt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Et(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,B=await this.tryRedirectSignIn(e);(!i||i===o)&&B?.user&&(r=B.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await To(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(Tn(this));const t=e?Ve(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await py(this),t=new my(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await hy(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_d(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&id(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Yr(n){return Ve(n)}class _h{constructor(e){this.auth=e,this.observer=null,this.addObserver=ng(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _y(n){ea=n}function Dd(n){return ea.loadJS(n)}function Dy(){return ea.recaptchaEnterpriseScript}function Iy(){return ea.gapiScript}function wy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yy{constructor(){this.enterprise=new Ty}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ty{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="recaptcha-enterprise",Id="NO_RECAPTCHA",Dh="onFirebaseAuthREInstanceReady";class Cn{constructor(e){this.type=Ay,this.auth=Yr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,B)=>{sy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)B(new Error("recaptcha Enterprise site key undefined"));else{const c=new ry(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{B(u)})})}function s(i,o,B){const u=window.grecaptcha;dh(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Id)})}):B(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yy().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async B=>{if(!t&&dh(window.grecaptcha)&&Cn.scriptInjectionDeferred)await Cn.scriptInjectionDeferred.promise,s(B,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Dy();u.length!==0&&(u+=B+`&onload=${Dh}`),Cn.scriptInjectionDeferred=new zh,window[Dh]=()=>{Cn.scriptInjectionDeferred?.resolve()},Dd(u).then(()=>Cn.scriptInjectionDeferred?.promise).then(()=>{s(B,i,o)}).catch(c=>{o(c)})}}).catch(B=>{o(B)})})}}Cn.scriptInjectionDeferred=null;async function Ih(n,e,t,r=!1,s=!1){const i=new Cn(n);let o;if(s)o=Id;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const B={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in B){const u=B.phoneEnrollmentInfo.phoneNumber,c=B.phoneEnrollmentInfo.recaptchaToken;Object.assign(B,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in B){const u=B.phoneSignInInfo.recaptchaToken;Object.assign(B,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return B}return r?Object.assign(B,{captchaResp:o}):Object.assign(B,{captchaResponse:o}),Object.assign(B,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(B,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),B}async function wh(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ih(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ih(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n,e){const t=So(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Xn(i,e??{}))return s;Rt(s,"already-initialized")}return t.initialize({options:e})}function vy(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map($t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Py(n,e,t){const r=Yr(n);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=wd(e),{host:o,port:B}=Sy(e),u=B===null?"":`:${B}`,c={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(Xn(c,r.config.emulator)&&Xn(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,or(o)?yB(`${i}//${o}${u}`):by()}function wd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Sy(n){const e=wd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yh(o)}}}function yh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function by(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,t){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function Oy(n,e){return kn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(n,e){return Zo(n,"POST","/v1/accounts:signInWithPassword",fr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(n,e){return Zo(n,"POST","/v1/accounts:signInWithEmailLink",fr(n,e))}async function Ly(n,e){return Zo(n,"POST","/v1/accounts:signInWithEmailLink",fr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Au{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ei(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ei(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wh(e,t,"signInWithPassword",Ny);case"emailLink":return Fy(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wh(e,r,"signUpPassword",Oy);case"emailLink":return Ly(e,{idToken:t,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(n,e){return Zo(n,"POST","/v1/accounts:signInWithIdp",fr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="http://localhost";class sr extends Au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Nr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nr(e,t)}buildRequest(){const e={requestUri:ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ri(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vy(n){const e=ms(Es(n)).link,t=e?ms(Es(e)).deep_link_id:null,r=ms(Es(n)).deep_link_id;return(r?ms(Es(r)).link:null)||r||t||e||n}class Ru{constructor(e){const t=ms(Es(e)),r=t.apiKey??null,s=t.oobCode??null,i=xy(t.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Vy(e);try{return new Ru(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(e,t){return ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ru.parseLink(t);return Z(r,"argument-error"),ei._fromEmailAndCode(e,r.code,r.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends gi{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dn.credential(t,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends gi{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends gi{constructor(){super("twitter.com")}static credential(e,t){return sr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gn.credential(t,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await wt._fromIdTokenResponse(e,r,s),o=Th(r);return new Ur({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Th(r);return new Ur({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Th(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends jt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ao.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ao(e,t,r,s)}}function Td(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ao._fromErrorAndOperation(n,i,e,r):i})}async function My(n,e,t=!1){const r=await Zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ur._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(n,e,t=!1){const{auth:r}=n;if(Et(r.app))return Promise.reject(Tn(r));const s="reauthenticate";try{const i=await Zs(n,Td(r,s,e,n),t);Z(i.idToken,r,"internal-error");const o=yu(i.idToken);Z(o,r,"internal-error");const{sub:B}=o;return Z(n.uid===B,r,"user-mismatch"),Ur._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Rt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ad(n,e,t=!1){if(Et(n.app))return Promise.reject(Tn(n));const r="signIn",s=await Td(n,r,e),i=await Ur._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Uy(n,e){return Ad(Yr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(n){const e=Yr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Jy(n,e,t){return Et(n.app)?Promise.reject(Tn(n)):Uy(Ve(n),Xr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hy(n),r})}function jy(n,e,t,r){return Ve(n).onIdTokenChanged(e,t,r)}function qy(n,e,t){return Ve(n).beforeAuthStateChanged(e,t)}function Ky(n){return Ve(n).signOut()}const Ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=1e3,Qy=10;class vd extends Rd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Qy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vd.type="LOCAL";const Wy=vd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Rd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pd.type="SESSION";const Sd=Pd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const B=Array.from(o).map(async c=>c(t.origin,i)),u=await $y(B);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,u)=>{const c=vu("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(m.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function Xy(n){Ut().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function Zy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eT(){return navigator?.serviceWorker?.controller||null}function tT(){return bd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="firebaseLocalStorageDb",nT=1,vo="firebaseLocalStorage",Nd="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function na(n,e){return n.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function rT(){const n=indexedDB.deleteDatabase(Od);return new mi(n).toPromise()}function Fd(){const n=indexedDB.open(Od,nT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vo,{keyPath:Nd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vo)?e(r):(r.close(),await rT(),e(await Fd()))})})}async function Ah(n,e,t){const r=na(n,!0).put({[Nd]:e,value:t});return new mi(r).toPromise()}async function sT(n,e){const t=na(n,!1).get(e),r=await new mi(t).toPromise();return r===void 0?null:r.value}function Rh(n,e){const t=na(n,!0).delete(e);return new mi(t).toPromise()}const iT=800,oT=3;class Ld{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isClosing)throw new Error("Database is closing");return this.dbPromise?this.dbPromise:(this.dbPromise=Fd(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(this.isClosing||t++>oT)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(tT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Zy(),!this.activeServiceWorker)return;this.sender=new Yy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ah(e,Ro,"1"),await Rh(e,Ro)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ah(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>sT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=na(s,!1).getAll();return new mi(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||id(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Ld.type="LOCAL";const aT=Ld;new pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(n,e){return e?$t(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends Au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uT(n){return Ad(n.auth,new Pu(n),n.bypassAuthState)}function cT(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),Gy(t,new Pu(n),n.bypassAuthState)}async function lT(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),My(t,new Pu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uT;case"linkViaPopup":case"linkViaRedirect":return lT;case"reauthViaPopup":case"reauthViaRedirect":return cT;default:Rt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new pi(2e3,1e4);class Rr extends kd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hT.get())};e()}}Rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="pendingRedirect",io=new Map;class fT extends kd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const r=await dT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dT(n,e){const t=mT(e),r=gT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function pT(n,e){io.set(n._key(),e)}function gT(n){return $t(n._redirectPersistence)}function mT(n){return so(CT,n.config.apiKey,n.name)}async function ET(n,e,t=!1){if(Et(n.app))return Promise.reject(Tn(n));const r=Yr(n),s=BT(r,e),o=await new fT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=10*60*1e3;class DT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!xd(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Gt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_T&&this.cachedEventUids.clear(),this.cachedEventUids.has(vh(e))}saveEventToCache(e){this.cachedEventUids.add(vh(e)),this.lastProcessedEventTime=Date.now()}}function vh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function IT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(n,e={}){return kn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TT=/^https?/;async function AT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wT(n);for(const t of e)try{if(RT(t))return}catch{}Rt(n,"unauthorized-domain")}function RT(n){const e=_B(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!TT.test(t))return!1;if(yT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new pi(3e4,6e4);function Ph(){const n=Ut().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PT(n){return new Promise((e,t)=>{function r(){Ph(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ph(),t(Gt(n,"network-request-failed"))},timeout:vT.get()})}if(Ut().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ut().gapi?.load)r();else{const s=wy("iframefcb");return Ut()[s]=()=>{gapi.load?r():t(Gt(n,"network-request-failed"))},Dd(`${Iy()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw oo=null,e})}let oo=null;function ST(n){return oo=oo||PT(n),oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new pi(5e3,15e3),OT="__/auth/iframe",NT="emulator/auth/iframe",FT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kT(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wu(e,NT):`https://${n.config.authDomain}/${OT}`,r={apiKey:e.apiKey,appName:n.name,v:ar},s=LT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ri(r).slice(1)}`}async function xT(n){const e=await ST(n),t=Ut().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:kT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(n,"network-request-failed"),B=Ut().setTimeout(()=>{i(o)},bT.get());function u(){Ut().clearTimeout(B),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MT=500,GT=600,UT="_blank",HT="http://localhost";class Sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JT(n,e,t,r=MT,s=GT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let B="";const u={...VT,width:r.toString(),height:s.toString(),top:i,left:o},c=qe().toLowerCase();t&&(B=fd(c)?UT:t),hd(c)&&(e=e||HT,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[A,v])=>`${m}${A}=${v},`,"");if(Cy(c)&&B!=="_self")return jT(e||"",B),new Sh(null);const f=window.open(e||"",B,h);Z(f,n,"popup-blocked");try{f.focus()}catch{}return new Sh(f)}function jT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="__/auth/handler",KT="emulator/auth/handler",zT=encodeURIComponent("fac");async function bh(n,e,t,r,s,i){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ar,eventId:s};if(e instanceof yd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",tg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof gi){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const u=await n._getAppCheckToken(),c=u?`#${zT}=${encodeURIComponent(u)}`:"";return`${QT(n)}?${ri(B).slice(1)}${c}`}function QT({config:n}){return n.emulator?wu(n,KT):`https://${n.authDomain}/${qT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="webStorageSupport";class WT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sd,this._completeRedirectFn=ET,this._overrideRedirectResult=pT}async _openPopup(e,t,r,s){tn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await bh(e,t,r,_B(),s);return JT(e,i,vu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await bh(e,t,r,_B(),s);return Xy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xT(e),r=new DT(e);return t.register("authEvent",s=>(Z(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ja,{type:Ja},s=>{const i=s?.[0]?.[Ja];i!==void 0&&t(!!i),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ed()||Cd()||Tu()}}const $T=WT;var Oh="@firebase/auth",Nh="1.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZT(n){Zn(new An("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:B,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_d(n)},c=new Ey(r,s,i,u);return vy(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new An("auth-internal",e=>{const t=Yr(e.getProvider("auth").getImmediate());return(r=>new YT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Oh,Nh,XT(n)),kt(Oh,Nh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=5*60,tA=Kh("authIdTokenMaxAge")||eA;let Fh=null;const nA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>tA)return;const s=t?.token;Fh!==s&&(Fh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rA(n=bo()){const e=So(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ry(n,{popupRedirectResolver:$T,persistence:[aT,Wy,Sd]}),r=Kh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=nA(i.toString());qy(t,o,()=>o(t.currentUser)),jy(t,B=>o(B))}}const s=Jh("auth");return s&&Py(t,`http://${s}`),t}function sA(){return document.getElementsByTagName("head")?.[0]??document}_y({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",sA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZT("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="firebasestorage.googleapis.com",Md="storageBucket",iA=2*60*1e3,oA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends jt{constructor(e,t,r=0){super(ja(e),`Firebase Storage: ${t} (${ja(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ja(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function ja(n){return"storage/"+n}function Su(){const n="An unknown error occurred, please check the error payload for server response.";return new we(Ie.UNKNOWN,n)}function aA(n){return new we(Ie.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function BA(n){return new we(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uA(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new we(Ie.UNAUTHENTICATED,n)}function cA(){return new we(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function lA(n){return new we(Ie.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function hA(){return new we(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CA(){return new we(Ie.CANCELED,"User canceled the upload/download.")}function fA(n){return new we(Ie.INVALID_URL,"Invalid URL '"+n+"'.")}function dA(n){return new we(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function pA(){return new we(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Md+"' property when initializing the app?")}function gA(){return new we(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mA(){return new we(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function EA(n){return new we(Ie.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function IB(n){return new we(Ie.INVALID_ARGUMENT,n)}function Gd(){return new we(Ie.APP_DELETED,"The Firebase app was deleted.")}function _A(n){return new we(Ie.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ns(n,e){return new we(Ie.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function gs(n){throw new we(Ie.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ft.makeFromUrl(e,t)}catch{return new ft(e,"")}if(r.path==="")return r;throw dA(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Be){Be.path.charAt(Be.path.length-1)==="/"&&(Be.path_=Be.path_.slice(0,-1))}const o="(/(.*))?$",B=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(Be){Be.path_=decodeURIComponent(Be.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",A=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),v={bucket:1,path:3},x=t===Vd?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",j=new RegExp(`^https?://${x}/${s}/${M}`,"i"),ae=[{regex:B,indices:u,postModify:i},{regex:A,indices:v,postModify:c},{regex:j,indices:{bucket:1,path:2},postModify:c}];for(let Be=0;Be<ae.length;Be++){const Ne=ae[Be],Ce=Ne.regex.exec(e);if(Ce){const T=Ce[Ne.indices.bucket];let E=Ce[Ne.indices.path];E||(E=""),r=new ft(T,E),Ne.postModify(r);break}}if(r==null)throw fA(e);return r}}class DA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(n,e,t){let r=1,s=null,i=null,o=!1,B=0;function u(){return B===2}let c=!1;function h(...M){c||(c=!0,e.apply(null,M))}function f(M){s=setTimeout(()=>{s=null,n(A,u())},M)}function m(){i&&clearTimeout(i)}function A(M,...j){if(c){m();return}if(M){m(),h.call(null,M,...j);return}if(u()||o){m(),h.call(null,M,...j);return}r<64&&(r*=2);let ae;B===1?(B=2,ae=0):ae=(r+Math.random())*1e3,f(ae)}let v=!1;function x(M){v||(v=!0,m(),!c&&(s!==null?(M||(B=2),clearTimeout(s),f(0)):M||(B=1)))}return f(0),i=setTimeout(()=>{o=!0,x(!0)},t),x}function wA(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(n){return n!==void 0}function TA(n){return typeof n=="object"&&!Array.isArray(n)}function bu(n){return typeof n=="string"||n instanceof String}function Lh(n){return Ou()&&n instanceof Blob}function Ou(){return typeof Blob<"u"}function kh(n,e,t,r){if(r<e)throw IB(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw IB(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Ud(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Yn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Yn||(Yn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t,r,s,i,o,B,u,c,h,f,m=!0,A=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=B,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,x)=>{this.resolve_=v,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new zi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=B=>{const u=B.loaded,c=B.lengthComputable?B.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const B=i.getErrorCode()===Yn.NO_ERROR,u=i.getStatus();if(!B||AA(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Yn.ABORT;r(!1,new zi(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new zi(c,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,B=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(B,B.getResponse());yA(u)?i(u):i()}catch(u){o(u)}else if(B!==null){const u=Su();u.serverResponse=B.getErrorText(),this.errorCallback_?o(this.errorCallback_(B,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Gd():CA();o(u)}else{const u=hA();o(u)}};this.canceled_?t(!1,new zi(!1,null,!0)):this.backoffId_=IA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function vA(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function PA(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function bA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function OA(n,e,t,r,s,i,o=!0,B=!1){const u=Ud(n.urlParams),c=n.url+u,h=Object.assign({},n.headers);return SA(h,e),vA(h,t),PA(h,i),bA(h,r),new RA(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,B)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FA(...n){const e=NA();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ou())return new Blob(n);throw new we(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function LA(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(n){if(typeof atob>"u")throw EA("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qa{constructor(e,t){this.data=e,this.contentType=t||null}}function xA(n,e){switch(n){case Lt.RAW:return new qa(Hd(e));case Lt.BASE64:case Lt.BASE64URL:return new qa(Jd(n,e));case Lt.DATA_URL:return new qa(MA(e),GA(e))}throw Su()}function Hd(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function VA(n){let e;try{e=decodeURIComponent(n)}catch{throw Ns(Lt.DATA_URL,"Malformed data URL.")}return Hd(e)}function Jd(n,e){switch(n){case Lt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ns(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Lt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ns(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=kA(e)}catch(s){throw s.message.includes("polyfill")?s:Ns(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class jd{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ns(Lt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=UA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function MA(n){const e=new jd(n);return e.base64?Jd(Lt.BASE64,e.rest):VA(e.rest)}function GA(n){return new jd(n).contentType}function UA(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){let r=0,s="";Lh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Lh(this.data_)){const r=this.data_,s=LA(r,e,t);return s===null?null:new mn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new mn(r,!0)}}static getBlob(...e){if(Ou()){const t=e.map(r=>r instanceof mn?r.data_:r);return new mn(FA.apply(null,t))}else{const t=e.map(o=>bu(o)?xA(Lt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let B=0;B<o.length;B++)s[i++]=o[B]}),new mn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n){let e;try{e=JSON.parse(n)}catch{return null}return TA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function JA(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Kd(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(n,e){return e}class We{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||jA}}let Qi=null;function qA(n){return!bu(n)||n.length<2?n:Kd(n)}function zd(){if(Qi)return Qi;const n=[];n.push(new We("bucket")),n.push(new We("generation")),n.push(new We("metageneration")),n.push(new We("name","fullPath",!0));function e(i,o){return qA(o)}const t=new We("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new We("size");return s.xform=r,n.push(s),n.push(new We("timeCreated")),n.push(new We("updated")),n.push(new We("md5Hash",null,!0)),n.push(new We("cacheControl",null,!0)),n.push(new We("contentDisposition",null,!0)),n.push(new We("contentEncoding",null,!0)),n.push(new We("contentLanguage",null,!0)),n.push(new We("contentType",null,!0)),n.push(new We("metadata","customMetadata",!0)),Qi=n,Qi}function KA(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function zA(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return KA(r,n),r}function Qd(n,e,t){const r=qd(e);return r===null?null:zA(n,r,t)}function QA(n,e,t,r){const s=qd(e);if(s===null||!bu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=n.bucket,f=n.fullPath,m="/b/"+o(h)+"/o/"+o(f),A=Nu(m,t,r),v=Ud({alt:"media",token:c});return A+v})[0]}function WA(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Wd{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n){if(!n)throw Su()}function $A(n,e){function t(r,s){const i=Qd(n,s,e);return $d(i!==null),i}return t}function YA(n,e){function t(r,s){const i=Qd(n,s,e);return $d(i!==null),QA(i,s,n.host,n._protocol)}return t}function Yd(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=cA():s=uA():t.getStatus()===402?s=BA(n.bucket):t.getStatus()===403?s=lA(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function XA(n){const e=Yd(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=aA(n.path)),i.serverResponse=s.serverResponse,i}return t}function ZA(n,e,t){const r=e.fullServerUrl(),s=Nu(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,B=new Wd(s,i,YA(n,t),o);return B.errorHandler=XA(e),B}function eR(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function tR(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=eR(null,e)),r}function nR(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function B(){let ae="";for(let Be=0;Be<2;Be++)ae=ae+Math.random().toString().slice(2);return ae}const u=B();o["Content-Type"]="multipart/related; boundary="+u;const c=tR(e,r,s),h=WA(c,t),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",A=mn.getBlob(f,r,m);if(A===null)throw gA();const v={name:c.fullPath},x=Nu(i,n.host,n._protocol),M="POST",j=n.maxUploadRetryTime,ee=new Wd(x,M,$A(n,t),j);return ee.urlParams=v,ee.headers=o,ee.body=A.uploadData(),ee.errorHandler=Yd(e),ee}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw gs("cannot .send() more than once");if(or(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sR extends rR{initXhr(){this.xhr_.responseType="text"}}function Xd(){return new sR}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this._service=e,t instanceof ft?this._location=t:this._location=ft.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ir(e,t)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kd(this._location.path)}get storage(){return this._service}get parent(){const e=HA(this._location.path);if(e===null)return null;const t=new ft(this._location.bucket,e);return new ir(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw _A(e)}}function iR(n,e,t){n._throwIfRoot("uploadBytes");const r=nR(n.storage,n._location,zd(),new mn(e,!0),t);return n.storage.makeRequestWithTokens(r,Xd).then(s=>({metadata:s,ref:n}))}function oR(n){n._throwIfRoot("getDownloadURL");const e=ZA(n.storage,n._location,zd());return n.storage.makeRequestWithTokens(e,Xd).then(t=>{if(t===null)throw mA();return t})}function aR(n,e){const t=JA(n._location.path,e),r=new ft(n._location.bucket,t);return new ir(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(n){return/^[A-Za-z]+:\/\//.test(n)}function uR(n,e){return new ir(n,e)}function Zd(n,e){if(n instanceof Fu){const t=n;if(t._bucket==null)throw pA();const r=new ir(t,t._bucket);return e!=null?Zd(r,e):r}else return e!==void 0?aR(n,e):n}function cR(n,e){if(e&&BR(e)){if(n instanceof Fu)return uR(n,e);throw IB("To use ref(service, url), the first argument must be a Storage instance.")}else return Zd(n,e)}function xh(n,e){const t=e?.[Md];return t==null?null:ft.makeFromBucketSpec(t,n)}function lR(n,e,t,r={}){n.host=`${e}:${t}`;const s=or(e);s&&yB(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Qh(i,n.app.options.projectId))}class Fu{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Vd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iA,this._maxUploadRetryTime=oA,this._requests=new Set,s!=null?this._bucket=ft.makeFromBucketSpec(s,this._host):this._bucket=xh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=xh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ir(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new DA(Gd());{const o=OA(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Vh="@firebase/storage",Mh="0.14.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="storage";function hR(n,e,t){return n=Ve(n),iR(n,e,t)}function CR(n){return n=Ve(n),oR(n)}function fR(n,e){return n=Ve(n),cR(n,e)}function dR(n=bo(),e){n=Ve(n);const r=So(n,ep).getImmediate({identifier:e}),s=jh("storage");return s&&pR(r,...s),r}function pR(n,e,t,r={}){lR(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Fu(t,r,s,e,ar)}function mR(){Zn(new An(ep,gR,"PUBLIC").setMultipleInstances(!0)),kt(Vh,Mh,""),kt(Vh,Mh,"esm2020")}mR();const Ar={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},vt=!!(Ar.apiKey&&Ar.projectId&&!Ar.apiKey.includes("your_")&&Ar.projectId!=="adobek-interior"&&Ar.apiKey.trim().length>0);let Wi,Xe=null,ti=null,wB=null;if(vt)try{Wi=rm().length>0?bo():Yh(Ar),Xe=Mw(Wi),ti=rA(Wi),wB=dR(Wi)}catch(n){console.warn("Firebase initialization error, using local storage fallback:",n)}async function TR(n,e="images"){if(!n)return{success:!1,error:"No file provided"};if(vt&&wB)try{const t=Date.now(),r=n.name.replace(/[^a-zA-Z0-9._-]/g,"_"),s=fR(wB,`images/${e}/${t}_${r}`),i=await hR(s,n);return{success:!0,url:await CR(i.ref)}}catch(t){return console.error("Firebase Storage upload error:",t),{success:!1,error:t.message||"Upload failed"}}return new Promise(t=>{const r=new FileReader;r.onload=()=>t({success:!0,url:r.result}),r.onerror=()=>t({success:!1,error:"Failed to read file"}),r.readAsDataURL(n)})}async function AR(n){const e={...n,createdAt:new Date().toISOString(),status:"new"};if(vt&&Xe)try{return{success:!0,id:(await zw(Ho(Xe,"consultations"),{...e,serverTimestamp:M_()})).id,isLive:!0}}catch(i){console.error("Firestore consultation error, saving locally:",i)}const t=JSON.parse(localStorage.getItem("adobek_consultations")||"[]"),r="lead_"+Date.now(),s={...e,id:r};return t.unshift(s),localStorage.setItem("adobek_consultations",JSON.stringify(t)),{success:!0,id:r,isLive:!1}}async function RR(){if(vt&&Xe)try{const n=jw(Ho(Xe,"consultations"),qw("serverTimestamp","desc"));return(await _u(n)).docs.map(t=>({id:t.id,...t.data()}))}catch(n){console.warn("Could not fetch from Firestore, reading local leads:",n)}return JSON.parse(localStorage.getItem("adobek_consultations")||"[]")}async function tp(){if(vt&&Xe)try{const e=await _u(Ho(Xe,"projects"));if(!e.empty)return e.docs.map(t=>({id:t.id,...t.data()}))}catch(e){console.warn("Firestore projects fetch failed, using default list:",e)}const n=localStorage.getItem("adobek_projects");return n?JSON.parse(n):Fp}async function vR(n){const e=n.id?String(n.id):"proj_"+Date.now(),t={...n,id:e,updatedAt:new Date().toISOString()};if(vt&&Xe)try{return await nd(Jo(Xe,"projects",e),t,{merge:!0}),{success:!0,id:e,isLive:!0}}catch(i){console.error("Firestore save project error:",i)}const r=await tp(),s=r.findIndex(i=>String(i.id)===String(e));return s>=0?r[s]=t:r.push(t),localStorage.setItem("adobek_projects",JSON.stringify(r)),{success:!0,id:e,isLive:!1}}async function PR(n){const e=String(n);if(vt&&Xe)try{await Kw(Jo(Xe,"projects",e))}catch(s){console.error("Firestore delete project error:",s)}const r=(await tp()).filter(s=>String(s.id)!==e);return localStorage.setItem("adobek_projects",JSON.stringify(r)),{success:!0}}async function ER(){if(vt&&Xe)try{const e=await _u(Ho(Xe,"journal_posts"));if(!e.empty)return e.docs.map(t=>({id:t.id,...t.data()}))}catch(e){console.warn("Firestore journal fetch failed, using default posts:",e)}const n=localStorage.getItem("adobek_journal_posts");return n?JSON.parse(n):Lp}async function SR(n){const e=n.id?String(n.id):"journal_"+Date.now(),t={...n,id:e,updatedAt:new Date().toISOString()};if(vt&&Xe)try{return await nd(Jo(Xe,"journal_posts",e),t,{merge:!0}),{success:!0,id:e,isLive:!0}}catch(i){console.error("Firestore save journal error:",i)}const r=await ER(),s=r.findIndex(i=>String(i.id)===String(e));return s>=0?r[s]=t:r.unshift(t),localStorage.setItem("adobek_journal_posts",JSON.stringify(r)),{success:!0,id:e,isLive:!1}}async function bR(n,e){const t=n.trim().toLowerCase(),r=e.trim(),s=t==="adobek@adobek-interior.com"||t==="admin"||t==="mikasadessalegn@gmail.com",i=r==="adobek2025"||r==="adobek@2025"||r==="admin123";if(vt&&ti)try{const o=await Jy(ti,t,r);return sessionStorage.setItem("adobek_admin_auth",JSON.stringify({email:o.user.email})),{success:!0,user:o.user}}catch{}if(s&&i){const o={email:t,name:"Studio Director"};return sessionStorage.setItem("adobek_admin_auth",JSON.stringify(o)),{success:!0,user:o}}if(i){const o={email:t||"adobek@adobek-interior.com",name:"Adobek Admin"};return sessionStorage.setItem("adobek_admin_auth",JSON.stringify(o)),{success:!0,user:o}}return{success:!1,error:"Invalid email or passcode."}}async function OR(){if(vt&&ti)try{await Ky(ti)}catch{}return sessionStorage.removeItem("adobek_admin_auth"),{success:!0}}export{ER as a,RR as b,OR as c,vR as d,PR as e,SR as f,tp as g,vt as i,bR as l,AR as s,TR as u};
