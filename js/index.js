const sidenav = document.querySelector("#sidenav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
  sidenav.classList.toggle("active");
});

close.addEventListener("click", function () {
  sidenav.classList.remove("active");
});
