import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const directors = [
  { name: 'sheh4n', image: '1.jpg' },
  { name: 'AK02 (MGT)', image: '2.jpg' },
  { name: 'SAWYER (MGT)', image: '3.jpg' },
  { name: 'Meeyaa(dev)', image: '4.jpg' },
  { name: 'Eternal Wolf(dev)', image: '5.jpg' },
  { name: 'Bencado (MGT)', image: '6.jpg' },
];

export default function Team() {
  const containerRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const [activeName, setActiveName] = useState(directors[0].name);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      thumbnailRefs.current,
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section className="h-[70vh] py-28 bg-black text-white text-center">
      <div ref={containerRef} className="max-w-4xl mx-auto">
        {/* Thumbnails with animation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {directors.map((director, index) => (
            <div
              key={index}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              className="w-20 h-24 overflow-hidden rounded-md cursor-pointer border border-white/30 hover:border-white transition"
              onMouseEnter={() => setActiveName(director.name)}
            >
              <img
                src={`/img/${director.image}`}
                alt={director.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

                {/* Active name */}
        <h1 className="special-font hero-heading absolute text-center left-1/2 -translate-x-1/2 z-40 text-blue-75">
          {activeName}
        </h1>
      </div>
    </section>
  );
}
