function setTheme(theme) {
  document.documentElement.classList.remove("light", "dark");

  if (theme !== "light" && theme !== "dark") {
    theme = "light";
  }

  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

const savedTheme =
  localStorage.getItem("color-theme") ||
  localStorage.getItem("colorscheme") ||
  "light";

const initialTheme = savedTheme === "dark" ? "dark" : "light";
setTheme(initialTheme);
localStorage.setItem("color-theme", initialTheme);
localStorage.setItem("colorscheme", initialTheme);
