const controller = new ScrollMagic.Controller();
const amimateNavbar = gsap
  .timeline()
  .from(".navbar", {
    backgroundColor: "transparent",
    padding: "1rem",
  })
  .from(".navbar__list__link", {
    fontSize: "1.1rem",
  });
new ScrollMagic.Scene({
  triggerElement: ".showcase",
  triggerHook: 0,
  duration: 200,
})
  .setTween(amimateNavbar)
  .addTo(controller);
