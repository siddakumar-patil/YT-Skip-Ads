# YouTube Ad Skipper (Chrome Extension)

This Chrome extension automatically skips YouTube ads and mutes them during playback for a smoother viewing experience.

## Features
- **Auto Skip**: Automatically clicks the "Skip Ad" button when it appears.
- **Mute Ads**: Mutes ads during playback and restores the sound afterward.

## How to Use

### Option 1: Run Script Directly in the Browser
1. Open [YouTube](https://www.youtube.com) in **Chrome**.
2. Press `F12` (Windows) or `Cmd + Option + I` (Mac) to open **Developer Tools**.
3. Go to the **Console** tab.
4. Paste the following code and press **Enter**:

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

### Option 2: Install as a Local Chrome Extension
1. **Clone this Repository**:
   - Clone the repo or download the files as a ZIP:
     ```bash
     git clone https://github.com/siddakumar-patil/YT-Skip-Ads.git
     ```

2. **Set Up the Extension**:
   - Open the folder where you saved the repository.
   - Ensure the following files are in place:
     - `manifest.json`
     - `content.js` (contains the script from **Option 1**)

3. **Load the Extension in Chrome**:
   - Open **Chrome** and go to `chrome://extensions/`.
   - Enable **Developer mode** (toggle in the top-right).
   - Click **Load unpacked** and select the folder where you cloned/downloaded the repo.

4. **Start Using the Extension**:
   - Once loaded, the extension will automatically run when you visit YouTube, skipping ads and muting them.

## Notes
- This extension works as long as YouTube's layout and ad system remain unchanged.
- Use responsibly and in accordance with YouTube’s terms of service.
