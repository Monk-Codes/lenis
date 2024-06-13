let tl = gsap.timeline({
 scrollTrigger: {
  trigger: ".animated-element",
  start: "-70% center",
  end: "200% center",
  scrub: true,
  markers: false,
  toggleActions: "play pause reverse complete",
 },
});
tl.to(".animated-element", {
 x: 800,
 duration: 5,
});
//smooth scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
 lenis.raf(time);
 requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
