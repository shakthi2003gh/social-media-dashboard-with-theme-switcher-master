// >header
const themeToggler = document.getElementById("toggle");

themeToggler.addEventListener("click", (e) => {
  if (e.target.closest("html").dataset.dark === "true")
    e.target.closest("html").dataset.dark = "false";
  else e.target.closest("html").dataset.dark = "true";
});
