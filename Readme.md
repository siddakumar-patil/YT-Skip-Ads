# YouTube Ad Skipper

A simple JavaScript script to automatically skip YouTube video ads and mute them during playback.

## Features
- **Auto skip**: Skips YouTube ads when the "Skip Ad" button appears.
- **Mute ads**: Mutes ads during playback, restores sound afterward.

## Note: 
To make it work on inconigito you have to enable it 

## How to Use

1. Open [YouTube](https://www.youtube.com) in Chrome.
2. Press `F12` (Windows) or `Cmd + Option + I` (Mac) to open Developer Tools.
3. Go to the **Console** tab.
4. Paste the following code:

```javascript
console.log("YouTube Ad Skipper is running...");

let isMuted = false;

function skipAd() {
  const skipButton = document.querySelector(".ytp-skip-ad-button");
  if (skipButton) {
    skipButton.click();
    console.log("Ad skipped!");
  }
}

function muteAd() {
  const video = document.querySelector("video");
  if (document.querySelector(".ad-showing") || document.querySelector(".ytp-ad-persistent-progress-bar-container")) {
    if (!video.muted) {
      video.muted = true;
      console.log("Ad muted!");
    }
  } else if (video.muted) {
    video.muted = false;
    console.log("Sound restored!");
  }
}

const observer = new MutationObserver(() => { skipAd(); });
observer.observe(document.body, { childList: true, subtree: true });

setInterval(muteAd, 1000);
```

5. Press **Enter** to run the script.

## Notes
- This script works while YouTube ads are playing.
- Use responsibly and comply with YouTube's terms.

---

Let me know if this works for you!