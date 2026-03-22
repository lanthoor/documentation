(function () {
  const themeToggleButtons = document.querySelectorAll(".hextra-theme-toggle");

  function normalizeTheme(theme) {
    return theme === "dark" ? "dark" : "light";
  }

  function persistTheme(theme) {
    localStorage.setItem("color-theme", theme);
    localStorage.setItem("colorscheme", theme);
  }

  function applyTheme(theme) {
    const normalized = normalizeTheme(theme);

    themeToggleButtons.forEach((btn) => {
      if (btn.parentElement) {
        btn.parentElement.dataset.theme = normalized;
      }
    });

    persistTheme(normalized);
    return normalized;
  }

  function switchTheme(theme) {
    const normalized = normalizeTheme(theme);
    setTheme(normalized);
    applyTheme(normalized);
  }

  const colorTheme = normalizeTheme(localStorage.getItem("color-theme") || localStorage.getItem("colorscheme") || "light");
  switchTheme(colorTheme);

  themeToggleButtons.forEach((toggler) => {
    toggler.addEventListener("click", (e) => {
      e.preventDefault();

      const current = toggler.parentElement && toggler.parentElement.dataset.theme === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      switchTheme(next);
    });
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== "color-theme" && event.key !== "colorscheme") {
      return;
    }

    const theme = normalizeTheme(event.newValue);
    setTheme(theme);
    applyTheme(theme);
  });
})();
