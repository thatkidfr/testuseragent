function isChromium() {
  const ua = navigator.userAgent;

  // Check for common Chromium indicators
  const isChrome = /Chrome/.test(ua) && !/Edge|Edg|OPR|Brave/.test(ua);
  const isChromiumBased = /Chrome|Chromium/.test(ua);

  return isChromiumBased;
}

alert(isChromium());
