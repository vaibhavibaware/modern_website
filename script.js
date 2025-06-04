// smooth scrolling- 1)attach loco scroll css 
// 2)attach locomotive scroll min js 
// 3)some code from loco github for js
//gsap -
// scroll trigger


const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });


  function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelement", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,//delay between each element
      })
      .from("#previous", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }
  

  
  function circleMouseFollower(xscale = 1, yscale = 1) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#minicircle").style.transform =
        `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  
  firstPageAnim();
  circleMouseFollower();

  document.querySelectorAll(".element").forEach(function (element) {
    var rotate = 0;
    var diffrot = 0;
  
    element.addEventListener("mouseleave", function (dets) {
      gsap.to(element.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    element.addEventListener("mousemove", function (dets) {
      // mouse total distance is =clientY-div ka top
      var diff = dets.clientY - element.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(element.querySelector("img"), {
        opacity: 1,//makes it visible
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
