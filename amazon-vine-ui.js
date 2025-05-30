(function () {
  'use strict';

  console.log("🚀 Amazon Vine UI Script aktiviert");

  // Sicherstellen, dass die Seite vollständig geladen ist
  window.addEventListener('load', () => {
    // Beispiel: Prüfen, ob Vine-Bereich vorhanden ist
    const vineSection = document.querySelector("#a-page");

    if (!vineSection) {
      console.warn("⚠️ Keine Vine-Sektion gefunden.");
      return;
    }

    // Beispiel: UI-Element einfügen
    const infoBox = document.createElement("div");
    infoBox.className = "bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mt-4";
    infoBox.innerHTML = `
      <strong class="font-bold">Hinweis:</strong>
      <span class="block sm:inline">Diese Seite wurde durch das Amazon Vine UI Script optimiert.</span>
    `;
    vineSection.prepend(infoBox);

    // Optional: Weitere DOM-Optimierungen, Filter, UX-Verbesserungen etc.
    console.log("✅ Vine UI wurde angepasst.");
  });
})();
