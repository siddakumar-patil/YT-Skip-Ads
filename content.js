console.log("YouTube Ad Skipper is running...");

let isMuted = false;

function skipAd() {
  const skipButton = document.querySelector(".ytp-skip-ad-button");

  if (skipButton) {
    console.log("[ skipAd ]Skip Ad button detected! Skipping ad...");
    skipButton.click(); // Skip the ad

    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    skipButton.dispatchEvent(event);
    console.log("Skip Ad button triggered via MouseEvent!");
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
