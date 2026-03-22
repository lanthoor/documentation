document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".hextra-footer");
  if (!footer) {
    return;
  }

  footer.querySelectorAll("a").forEach((link) => {
    link.style.textDecoration = "underline";
    link.style.textUnderlineOffset = "0.15em";
  });
});
