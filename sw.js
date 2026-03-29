const CACHE='sunset-vista-dd-v2';
const URLS=['/sunset-vista-dd-dashboard/Pueblo_3Pack_DD_Dashboard.html','/sunset-vista-dd-dashboard/manifest.json','/sunset-vista-dd-dashboard/icon-192.png','/sunset-vista-dd-dashboard/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cl=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cl))}return r}).catch(()=>caches.match(e.request)))});