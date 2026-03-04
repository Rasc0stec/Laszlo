// ============================================================
// security.js - Portfolio beskyttelse
// Blokerer højreklik og tekstmarkering
// ============================================================

(function () {
  // --- Blokér højreklik ---
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  // --- Blokér tekstmarkering via mus ---
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
    return false;
  });

  // --- Blokér Ctrl+U (vis kildekode), Ctrl+S (gem), Ctrl+P (print) ---
  document.addEventListener('keydown', function (e) {
    // Ctrl+U
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
    // Ctrl+S
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }
    // Ctrl+P
    if (e.ctrlKey && e.key === 'p') {
      e.preventDefault();
      return false;
    }
    // F12 (DevTools)
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
  });
})();
