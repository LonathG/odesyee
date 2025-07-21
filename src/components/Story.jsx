import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const images = [
  "/img/highlight-1.jpeg",
  "/img/highlight-2.jpeg",
  "/img/highlight-3.jpeg",
];
const FloatingImage = () => {
  const frameRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Rotate effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 800,
      transformOrigin: "center",
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
      });
    }
  };

  // Slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImage + 1) % images.length;

      if (frameRef.current) {
        gsap.to(frameRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setCurrentImage(nextIndex);
            gsap.to(frameRef.current, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.inOut",
            });
          },
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          a living GTA RP universe
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the heart <b>o</b>f <br /> a sleepless real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src={images[currentImage]}
                  alt="highlight"
                  className="object-contain filter-[url(#flt_tag)]"
                />
              </div>
            </div>

            <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where power shifts and streets speak, Odesyee rises.
              Navigate the chaos, rise through factions, and build your legacy in the republic that writes itself.
            </p>

            <Button id="realm-btn" title="discover prologue" containerClass="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;