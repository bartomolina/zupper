if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/VMDUnb7LYj_QwFpy4SON8/_buildManifest.js",revision:"4372edc77fac19cc2d0c3b5042e5bde4"},{url:"/_next/static/VMDUnb7LYj_QwFpy4SON8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/133-d853fe694a5eec83.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/165.3935935cbc9d20a9.js",revision:"3935935cbc9d20a9"},{url:"/_next/static/chunks/217-8bec6615f80d06ed.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/2e86f500-30d20c1108e0ddb3.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/361-e54cda26790955ea.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/3ad77f3c-80078886d328006d.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/493.356acbfaf338dbb3.js",revision:"356acbfaf338dbb3"},{url:"/_next/static/chunks/630-66a8604e5d73bb3c.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/673422f7-2e594fd19fc48e8b.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/75866778-849d3d066ff2f799.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/771-408b3e4d1ace884a.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/883.19ad8321e523c240.js",revision:"19ad8321e523c240"},{url:"/_next/static/chunks/899.93fd6397e09ad506.js",revision:"93fd6397e09ad506"},{url:"/_next/static/chunks/977-eeb7652d0f4c772a.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/app/layout-f53815665264fa9c.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/app/not-found-c16610670cb42844.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/app/page-12e2bd810a169242.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/app/signup/page-ca913d338943bf65.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/c72b12b3-6eb5ac20ca164024.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/fd9d1056-1b4c1c49bb1a11b8.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/main-4988415c614a7e34.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/main-app-9126de79d6c43036.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/pages/_app-6b79a29ad0d63b21.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/pages/_error-9aeb3e4d490fe4b8.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-32e499c1b0d81eec.js",revision:"VMDUnb7LYj_QwFpy4SON8"},{url:"/_next/static/css/f730ea714557da43.css",revision:"f730ea714557da43"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
