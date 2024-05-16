const menu = document.querySelectorAll("li");
const imgs = document.querySelectorAll(".content");
console.log(menu);

menu.forEach((option, idx) => {
  option.addEventListener("click", () => {
    hideAllImages();
    hideAllOptions();
    option.classList.add("active");
    imgs[idx].classList.add("show");
  });
});

function hideAllImages() {
  imgs.forEach((img) => {
    img.classList.remove("show");
  });
}

function hideAllOptions() {
  menu.forEach((option) => {
    option.classList.remove("active");
  });
}
