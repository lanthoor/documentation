const body = document.body;
const darkModeToggle = document.getElementById("dark-mode-toggle");

function rememberTheme(theme) {
  localStorage.setItem("colorscheme", theme);
  localStorage.setItem("color-theme", theme);
}

function setTheme(theme) {
  const resolved = theme === "dark" ? "dark" : "light";
  const inverse = resolved === "dark" ? "light" : "dark";

  body.classList.remove("colorscheme-auto");
  body.classList.remove("colorscheme-" + inverse);
  body.classList.add("colorscheme-" + resolved);
  document.documentElement.style["color-scheme"] = resolved;

  function waitForElm(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        return;
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  const utterancesMessage = {
    type: "set-theme",
    theme: resolved === "dark" ? "github-dark" : "github-light",
  };

  waitForElm(".utterances-frame").then((iframe) => {
    iframe.contentWindow.postMessage(utterancesMessage, "https://utteranc.es");
  });

  function sendMessage(message) {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
  }

  sendMessage({
    setConfig: {
      theme: resolved,
    },
  });

  document.dispatchEvent(new Event("themeChanged"));
}

const storedTheme =
  localStorage.getItem("colorscheme") ||
  localStorage.getItem("color-theme") ||
  (body.classList.contains("colorscheme-dark") ? "dark" : "light");

setTheme(storedTheme);
rememberTheme(storedTheme);

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    const theme = body.classList.contains("colorscheme-dark") ? "light" : "dark";
    setTheme(theme);
    rememberTheme(theme);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const node = document.querySelector(".preload-transitions");
  if (node) {
    node.classList.remove("preload-transitions");
  }
});

window.addEventListener("storage", (event) => {
  if (event.key !== "colorscheme" && event.key !== "color-theme") {
    return;
  }

  const theme = event.newValue === "dark" ? "dark" : "light";
  setTheme(theme);
  rememberTheme(theme);
});
