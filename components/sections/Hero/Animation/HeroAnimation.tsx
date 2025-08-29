"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroAnimation = () => {
  let scrolling = false;

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text",
      { x: 0 },
      {
        opacity: 1,
        x: "100vw",
        duration: 0.5,
        scrollTrigger: {
          pin: true,
          start: "top 30%",
          end: "bottom top",
          toggleActions: "play none none reverse",
          trigger: ".hero-text",
        },
      }
    );
    gsap.to("#hero-panel", {
      scrollTrigger: {
        trigger: "#hero-panel",
        markers: true,
        start: "bottom 98%",
        end: "bottom 2%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          if (!scrolling) {
            scrolling = true;
            gsap.to(window, {
              duration: 0.8,
              scrollTo: { y: "#what-panel", offsetY: 0 },
              onComplete: () => {
                setTimeout(() => {
                  scrolling = false;
                }, 100);
              },
            });
          }
        },
        onEnterBack: () => {
          if (!scrolling) {
            scrolling = true;
            gsap.to(window, {
              duration: 0.8,
              scrollTo: { y: "#hero-panel", offsetY: 0 },
              onComplete: () => {
                setTimeout(() => {
                  scrolling = false;
                }, 100);
              },
            });
          }
        },
      },
    });
  }, []);

  return null;
};

export default HeroAnimation;
