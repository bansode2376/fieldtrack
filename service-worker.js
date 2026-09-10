const CACHE='fieldtrack-v5';
const CORE=['./','./index.html','./style.css','./app.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  let url;
  try { url=new URL(event.request.url); } catch { return; }
  if(url.protocol!=='http:' && url.protocol!=='https:') return;
  if(url.origin!==self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached=>{
      if(cached) return cached;
      return fetch(event.request).then(response=>{
        if(!response || !response.ok) return response;
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{});
        return response;
      }).catch(()=>caches.match('./index.html'));
    })
  );
});
