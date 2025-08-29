"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger,ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const PanelAnimation = () => {

  useGSAP(() => {
    gsap.to(".panel", {
      scrollTrigger: {
        trigger: ".panel",
        markers: true,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: ".panel", offsetY: 0 },
          });
        },
        onEnterBack: () => {
          gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: ".panel", offsetY: 0 },
          });
        },
      },
    });
  }, []);

  return null;
};

export default PanelAnimation;
