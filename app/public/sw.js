let cacheData = "appPwa";

let urlCache = [
    '/static/js/bundle.js',
    '/static/media/a.a557f5ec4d1a997d6ffd.webp',
    '/manifest.json',
    '/favicon.ico',
    '/',
    '/logo192.png',
    '/dashboard',
    'dashboard/form',
    '/dashboard/form/event',
    'dashboard/camera'

]

// install service worker

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll(urlCache)
        })
    )
})

// fetch cache data

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        console.log('Offline')
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result
                }
                let fUrl = event.request.clone();
                return fetch(fUrl)
            })
        )
    }
})