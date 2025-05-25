// smooth scrolling- 1)attach loco scroll css 
// 2)attach locomotive scroll min js 
// 3)some code from loco github for js


//gsap -
// scroll trigger

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  

  circleMouseFollower();