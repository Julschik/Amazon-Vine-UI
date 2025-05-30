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

    // Hier UI Elemente einfügen. Jede Funktion soll ein eigenes JS haben und hier verlinkt werden


    // Optional: Weitere DOM-Optimierungen, Filter, UX-Verbesserungen etc.
    console.log("✅ Vine UI wurde angepasst.");
  });
})();
