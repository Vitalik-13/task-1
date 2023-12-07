new Swiper(".myswiper", {
  effect: "cards",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const showImage = document.querySelector(".imge-screen");
const positionFixed = document.querySelector(".position-fixed");
const hidePositionFixed = document.querySelector(".close");
showImage.addEventListener("click", () => {
  positionFixed.classList.add("show");
});
hidePositionFixed.addEventListener("click", () => {
  positionFixed.classList.remove("show");
});
positionFixed.addEventListener("click", (e) => {
  if (!e.target.closest(".image-in-screen")) {
    positionFixed.classList.remove("show");
  }
});
const addActiveClass = document.querySelectorAll(".change-img-content-list");

addActiveClass.forEach((item) => {
  item.addEventListener("mouseover", () => {
    addActiveClass.forEach((element) => {
      if (element !== item) {
        element.classList.remove("active");
      }
    });
    item.classList.add("active");
  });
});

changeFoto = document.querySelector(".change-foto");
changeWrapper = document.querySelector(".change-img-content-wrapper");
changeWrapper.addEventListener("mouseover", (event) => {
  if (event.target.closest(".one")) {
    changeFoto.setAttribute("src", "./images/foto-change-1.png");
  } else if (event.target.closest(".two")) {
    changeFoto.setAttribute("src", "./images/change-foto-2.png");
  } else if (event.target.closest(".three")) {
    changeFoto.setAttribute("src", "./images/change-foto-3.png");
  }
});

changeFotoreverse = document.querySelector(".foto-reverse");
changeWrapperreverse = document.querySelector(".wrapper-reverse");
changeWrapperreverse.addEventListener("mouseover", (event) => {
  if (event.target.closest(".one-reverse")) {
    changeFotoreverse.setAttribute("src", "./images/reverse-1.webp");
  } else if (event.target.closest(".two-reverse")) {
    changeFotoreverse.setAttribute("src", "./images/reverse-2.webp");
  } else if (event.target.closest(".three-reverse")) {
    changeFotoreverse.setAttribute("src", "./images/reverse-3.webp");
  }
});

const shewronBlock = document.querySelector(".shewron-container");
const headerLinks = document.querySelector(".header-links");

shewronBlock.addEventListener("click", () => {
  shewronBlock.classList.toggle("rotation");
  headerLinks.classList.toggle("show");
});
