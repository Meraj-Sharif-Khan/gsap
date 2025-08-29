"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WhatWeDoAnimation = () => {
  let scrolling = false;
  useGSAP(() => {
    gsap.to(".whatWeDo-text",{
      scrollTrigger:{
        trigger:".whatWeDo-text",
        start: "top top",
        end: "+=1000",
        pin:true,
      }
    })
    gsap.to("#what-panel", {
      scrollTrigger: {
        trigger: "#what-panel",
        start: "bottom 98%",
        end: "bottom 2%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          if (!scrolling) {
            scrolling = true;
            gsap.to(window, {
              duration: 0.8,
              scrollTo: { y: "#cta-panel", offsetY: 0 },
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
              scrollTo: { y: "#what-panel", offsetY:0},
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

export default WhatWeDoAnimation;
