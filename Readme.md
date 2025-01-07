Note: To make it work on inconigito yiu have to enabvle it in it
////////////////
Latest:

console.log("YouTube Ad Skipper is running...");

let isMuted = false;

function skipAd(){
  const skipButton = document.querySelector(".ytp-skip-ad-button");

  if (skipButton) {
    // video.muted = false;
    console.log("[ skipAd ]Skip Ad button detected! Skipping ad...");
    skipButton.click(); // Skip the ad

    const event = new MouseEvent("click", { bubbles: true, cancelable: true, view: window });
    skipButton.dispatchEvent(event);
    console.log("Skip Ad button triggered via MouseEvent!");

    // console.log("Skip Ad button Clicked!");
  }

}

function muteAd() {
  const video = document.querySelector("video");

  if (
    document.querySelector(".ad-showing") ||
    document.querySelector(".ytp-ad-persistent-progress-bar-container")
  ) {
    console.log("Ad detected!");
    if (!video.muted) {
      console.log("Ad Muted!");
      video.muted = true; // Mute during ads
      isMuted = true;
    }
  } else if (isMuted) {
    console.log("Ad unmuted!");
    video.muted = false; // Unmute after ads
    isMuted = false;
  }
}

// Observe DOM changes to detect the "Skip Ads" button dynamically
const observer = new MutationObserver(() => {
  skipAd();
});

// Start observing changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });

// Run every second
setInterval(muteAd, 1000);


///////////////////////////
console.log("YouTube Ad Skipper is running...");

// Try to block ad requests
// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     console.log("Blocking ad request:", details.url);
//     return { cancel: true };
//   },
//   {
//     urls: [
//       "*://googleads.g.doubleclick.net/*", // YouTube ads
//       "*://www.youtube.com/api/stats/ads*", // Ad-related stats API
//       "*://*.adsafeprotected.com/*", // Other ad networks
//       "*://*.doubleclick.net/*"
//     ]
//   },
//   ["blocking"]
// );

let isMuted = false;

function skipAd() {
  const video = document.querySelector("video");
  const skipButton = document.querySelector(".ytp-skip-ad-button");

  // const adButtonClassNames = [".ytp-skip-ad-button", ".ytp-ad-skip-button"]; // Add button classes if changed

  // adButtonClassNames.forEach((className) => {
  //   // Query all elements with the specified class name
  //   const elements = document.querySelector(`.${className}`);

  //   elements.forEach((element) => {
  //     if (element) {
  //       // console.log(`Clicking on element with class: ${className}`);
  //       console.log(
  //         "Skip Ad button detected! Skipping ad... className:" + className
  //       );
  //       element.click(); // Click the element
  //     }
  //   });
  // });

  if (skipButton || document.querySelector(".ytp-skip-ad")) {
    // video.muted = false; 
    console.log("Skip Ad button detected! Skipping ad...");
    skipButton.click(); // Skip the ad
    console.log("Skip Ad button Clicked!");
  }

  if (document.querySelector(".ad-showing") || document.querySelector(".ytp-ad-persistent-progress-bar-container") ||  document.querySelector(".video-ad")  ) {
    console.log("Ad detected!");
    if (!video.muted) {
      console.log("Ad Muted!");
      video.muted = true; // Mute during ads
      isMuted = true;
    }
  } else if (isMuted) {
    console.log("Ad unmuted!");
    video.muted = false; // Unmute after ads
    isMuted = false;
  }
}


// Observe DOM changes to detect the "Skip Ads" button dynamically
const observer = new MutationObserver(() => {
  skipAd();
});

// Start observing changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });

// Run every second
setInterval(skipAd, 1000);

// console.log("YouTube Ad Skipper is running...");

// // Function to click the "Skip Ads" button
// function skipAd() {
//   const skipButton = document.querySelector("._1CSTLo7uotP5mTlp3jKun7 _2BEasvIVTwYSBn1h8onP0c");
//   if (skipButton) {
//     console.log("Ad detected! Skipping ad...");
//     skipButton.click();
//   }
// }

// // Observe DOM changes to detect the "Skip Ads" button dynamically
// const observer = new MutationObserver(() => {
//   skipAd();
// });

// // Start observing changes in the DOM
// observer.observe(document.body, { childList: true, subtree: true });

// // Additionally, check periodically in case the observer misses something
// setInterval(() => {
//   skipAd();
// }, 1000);
