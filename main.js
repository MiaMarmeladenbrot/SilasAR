document.addEventListener("DOMContentLoaded", () => {
  // Alle mindar-image-target Elemente suchen
  const targets = document.querySelectorAll("[mindar-image-target]");

  // Durch alle Targets iterieren und Event-Listener hinzufügen
  targets.forEach((target) => {
    const mediaId = target.getAttribute("data-media"); // ID des zugehörigen Media-Elements
    const mediaEl = document.querySelector(`#${mediaId}`); // Media-Element finden

    if (!mediaEl) return; // Überspringen, falls kein zugehöriges Media-Element existiert

    if (mediaEl.tagName.toLowerCase() === "audio" || mediaEl.tagName.toLowerCase() === "video") {
      // `targetFound` Event: Wiedergabe starten
      target.addEventListener("targetFound", () => {
        console.log(`Target found: Playing ${mediaId}...`);
        mediaEl.play();
      });

      // `targetLost` Event: Wiedergabe pausieren
      target.addEventListener("targetLost", () => {
        console.log(`Target lost: Pausing ${mediaId}...`);
        mediaEl.pause();
        mediaEl.currentTime = 0; // Wiedergabe zurücksetzen (optional)
      });
    }
  });
});
