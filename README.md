```markdown
# Amazon Vine UI Optimierung

Ein benutzerdefiniertes Tampermonkey-Script zur Verbesserung der Benutzeroberfläche auf der Amazon Vine-Seite (`https://www.amazon.de/vine/*`).

---

## 🔧 Funktionen

- Fügt dynamisch Elemente zur Amazon Vine-Seite hinzu
- Nutzt **CSS in externer Datei** (`amazon-vine-ui.css`)
- Trennung von Logik (`.js`) und Styling (`.css`)
- Lädt Ressourcen **lokal beim Entwickeln**, und automatisch **von GitHub im Produktivbetrieb**

---

## 📁 Projektstruktur

```

Amazon-Vine-UI/
├── amazon-vine-ui.js       # JavaScript mit DOM-Manipulationen
├── amazon-vine-ui.css      # Klassisches CSS
└── README.md               # Diese Dokumentation

````

---

## ⚙️ Einrichtung

### 1. 📥 Tampermonkey installieren
Installiere die Browser-Erweiterung [Tampermonkey](https://www.tampermonkey.net/) für deinen Browser.

### 2. 📄 Loader-Script in Tampermonkey einfügen

```javascript
// ==UserScript==
// @name         Amazon Vine UI Loader (klassisch)
// @namespace    https://amazon.de/
// @version      1.0
// @description  Lädt CSS & JS dynamisch – lokal oder von GitHub (Julschik/Amazon-Vine-UI) 🧱
// @author       
// @match        https://www.amazon.de/vine/*
// @grant        none
// ==/UserScript==

(function () {
  const LOCAL_BASE_URL = 'http://127.0.0.1:8080';
  const REMOTE_BASE_URL = 'https://raw.githubusercontent.com/Julschik/Amazon-Vine-UI/main';
  const JS_FILENAME = 'amazon-vine-ui.js';
  const CSS_FILENAME = 'amazon-vine-ui.css';

  const testLocal = async () => {
    try {
      const res = await fetch(`${LOCAL_BASE_URL}/${JS_FILENAME}`, { method: 'HEAD', cache: 'no-store' });
      return res.ok;
    } catch {
      return false;
    }
  };

  testLocal().then((isLocalAvailable) => {
    const BASE_URL = isLocalAvailable ? LOCAL_BASE_URL : REMOTE_BASE_URL;
    console.log(`📦 Lade Vine UI Ressourcen von: ${BASE_URL}`);

    const script = document.createElement("script");
    script.src = `${BASE_URL}/${JS_FILENAME}`;
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${BASE_URL}/${CSS_FILENAME}`;
    document.head.appendChild(link);
  });
})();
````

---

## 🧪 Entwicklung (lokal)

### Voraussetzungen:

* Node.js installiert
* `live-server` global installiert:

  ```bash
  npm install -g live-server
  ```

### Projekt starten:

```bash
cd /Users/julianhill/Amazon-Vine-UI
live-server --port=8080 --cors
```

Tampermonkey lädt dann automatisch deine lokalen Dateien.

---

## ☁️ Deployment via GitHub

Sobald du fertig bist, einfach:

```bash
git add .
git commit -m "Update Vine UI Script"
git push
```

Das Script wird dann automatisch von GitHub geladen, sobald der lokale Server aus ist.

---

## 🧰 Technologien

* JavaScript DOM-APIs
* Klassisches CSS
* Tampermonkey
* GitHub (für Deployment)
* `live-server` für lokale Vorschau

---

## 🙋 Support

Erstellt von [Julian Hill](https://github.com/Julschik)
Fragen oder Feature-Ideen? GitHub Issue öffnen oder Fork erstellen.