"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AboutOtaAnimation = () => {
  let scrolling = false;

  useGSAP(() => {
    gsap.to(".about-ota", {
      opacity: 1,
      duration: 1.5,
      scale: 0.8,
      scrollTrigger: {
        markers: true,
        pin: true,
        start: "top 15%",
        end: "+=1000",
        toggleActions: "play none none reverse",
        trigger: ".about-ota",
      },
    });
  }, []);

  return null;
};

export default AboutOtaAnimation;
