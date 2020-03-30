self.addEventListener('install', function(e) {
 console.log("PWA Install")
});

self.addEventListener('fetch', function(e) {
  console.log("fetch", e.request.url);
});
