const acc = document.querySelectorAll(".accordion");
let panel = [];

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    panel[i] = acc[i].nextElementSibling;
    if (panel[i].style.maxHeight) {
      panel[i].style.maxHeight = null;
    } else {
      panel[i].style.maxHeight = panel[i].scrollHeight + "px";
    }
  });
}