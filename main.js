document.addEventListener("DOMContentLoaded", () => {
  if (window.location.href.startsWith("https://miamarmeladenbrot.github.io/SilasAR")) {
    window.location.href = "https://silas-ar.vercel.app/";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll("[mindar-image-target]");

  targets.forEach((target) => {
    const mediaId = target.getAttribute("data-media");
    const mediaEl = document.querySelector(`#${mediaId}`);

    if (!mediaEl) return;

    if (mediaEl.tagName.toLowerCase() === "audio" || mediaEl.tagName.toLowerCase() === "video") {
      target.addEventListener("targetFound", () => {
        console.log(`Target found: Playing ${mediaId}...`);
        mediaEl.play();
      });

      target.addEventListener("targetLost", () => {
        console.log(`Target lost: Pausing ${mediaId}...`);
        mediaEl.pause();
        mediaEl.currentTime = 0;
      });
    }
  });
});
