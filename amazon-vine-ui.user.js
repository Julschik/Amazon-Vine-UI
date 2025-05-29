// ==UserScript==
// @name         Amazon Vine UI Optimierung (externes CSS)
// @namespace    https://amazon.de/
// @version      1.2
// @description  Lädt optimiertes Vine UI CSS von externer Datei
// @author       Julian
// @match        https://www.amazon.de/vine/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function loadExternalCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }

  loadExternalCSS("http://127.0.0.1:8080/vine-ui.css");

  console.log("✅ Vine UI Script geladen und CSS nachgeladen");
})();
