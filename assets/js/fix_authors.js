document.addEventListener("DOMContentLoaded", function () {
  // For each publication entry, check if "Maxime Derex" is hidden
  document.querySelectorAll(".author").forEach(function (authorDiv) {
    var hiddenSpan = authorDiv.querySelector("span[id$='-hidden']");
    if (!hiddenSpan) return;

    // Check if any <em> inside the hidden span contains "Maxime Derex"
    hiddenSpan.querySelectorAll("em").forEach(function (em) {
      if (em.textContent.trim().includes("Maxime Derex")) {
        // Extract the full text of this author entry (with comma/and prefix)
        var clone = em.cloneNode(true);

        // Create a visible inline element with your name, underlined
        var visible = document.createElement("span");
        visible.className = "author-highlight";
        visible.innerHTML = ", <em><u>Maxime Derex</u></em>";

        // Insert it just before the hidden span's toggle button
        var toggleBtn = authorDiv.querySelector("a.more-authors");
        if (toggleBtn) {
          authorDiv.insertBefore(visible, toggleBtn);
        }

        // Remove your name from inside the hidden span to avoid duplication
        em.closest("span")?.remove() ||
          em.parentNode?.removeChild(em);
      }
    });
  });
});
