if ("serviceWorker" in navigator) {     // check browser support or not
    navigator.serviceWorker             // If Support
      .register("./service-worker.js") // service worker file location
      .then(function() {
        console.log("Service Worker Registered Successfully");
      })
      .catch(function(error) {
        console.error("Something goes wrong while registering service worker");
        console.log(error);
      });
  } else {                            // If not
    console.log("Service Worker is not available");
  }