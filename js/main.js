const searchBtn = document.querySelector(".navbar__list__searchbtn");
const searchCloseBtn = document.querySelector(".search__div__close");
const newsletterText = document.querySelector(".newsletter__text");

searchBtn.addEventListener("click", openSearchBox);
searchCloseBtn.addEventListener("click", closeSearchBox);
newsletterText.addEventListener("click", showNewsletterForm);

function openSearchBox(e) {
  e.preventDefault();
  gsap
    .timeline()
    .to(".search__outer", 0.2, {
      display: "block",
      opacity: "1",
    })
    .to(".search__div", 0.2, {
      transform: "translate3d(0,0,0)",
    });
}
function closeSearchBox(e) {
  e.preventDefault();
  gsap
    .timeline()
    .to(".search__div", 0.2, {
      transform: "translate3d(0, -100%, 0)",
    })
    .to(".search__outer", 0.2, {
      opacity: "0",
      display: "none",
    });
}
function showNewsletterForm(e) {
  e.preventDefault();
  gsap.timeline().to(".newsletter__container", 0.3, {
    transform: "translate3d(0, -70px, 0)",
  });
}

//Navbar Shrink
const controller = new ScrollMagic.Controller();
const amimateNavbar = gsap
  .timeline()
  .to(".navbar", {
    backgroundColor: "#000",
    padding: "0",
  })
  .to(".navbar__list__link", {
    fontSize: "1rem",
  });
new ScrollMagic.Scene({
  triggerElement: ".showcase",
  triggerHook: 0,
  duration: 200,
})
  .setTween(amimateNavbar)
  .addTo(controller);
const scroll = new SmoothScroll('.showcase__inner__action[href*="#"]');
