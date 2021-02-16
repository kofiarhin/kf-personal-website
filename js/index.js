const sidenav = document.querySelector("#sidenav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
  sidenav.classList.toggle("active");
});

close.addEventListener("click", function () {
  sidenav.classList.remove("active");
});

// testimonials
const texts = document.querySelectorAll(".text-unit");
const faces = document.querySelectorAll(".face");

clear();

// add active to first element
texts[0].classList.add("active");
faces[0].classList.add("active");

faces.forEach((face, index) => {
  face.addEventListener("click", function () {
    clear();

    this.classList.add("active");

    texts[index].classList.add("active");

    console.log(texts[index]);
  });
});

function clear() {
  texts.forEach((text) => text.classList.remove("active"));
  faces.forEach((face) => face.classList.remove("active"));

  console.log("cleared");
}
