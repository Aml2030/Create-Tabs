let tabsLi = document.querySelectorAll(".tabs li");
let divs = document.querySelectorAll(".content > div");

tabsLi.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mangaeDivs);
});
function removeActive() {
  tabsLi.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function mangaeDivs() {
  divs.forEach((i) => {
    i.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cont).forEach((e) => {
    e.style.display = "block";
  });
}
