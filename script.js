function cardsStickyAnimation() {
  document.querySelectorAll('.card').forEach(function (el) {
    gsap.to(el, {
      height: '200px',
      scale: 0.4,
      opacity: 0,
      scrollTrigger: {
        trigger: el,
        start: 'top 10%',
        end: 'bottom 10%',
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(el.children[0].children[0], {
      rotate: 29,
      scrollTrigger: {
        trigger: el,
        start: 'top 10%',
        end: 'bottom 10%',
        // markers: true,
        scrub: true,
      },
    });
    document.querySelectorAll('.card h2').forEach(function (e) {
      gsap.to(e, {
        marginBottom: 50,
        // ease: 'power3.inOut',
        // duration: 1.5,
        scrollTrigger: {
          trigger: e.parentElement.parentElement,
          start: 'top 10%',
          end: 'bottom 10%',
          // markers: true,
          scrub: true,
        },
      });
    });
  });
}
cardsStickyAnimation();
