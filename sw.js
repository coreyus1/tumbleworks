// Tumbleworks offline cache. Bump VERSION when the game changes.
const VERSION="tumbleworks-v1";
const CORE=["./","index.html","game.js","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
// Serve from the phone's copy first (works offline); refresh that copy in the background when online.
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.open(VERSION).then(async c=>{
    const hit=await c.match(e.request,{ignoreSearch:true});
    const net=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==="opaque"))c.put(e.request,r.clone());return r}).catch(()=>null);
    return hit||(await net)||(e.request.mode==="navigate"?c.match("index.html"):Response.error());
  }));
});
