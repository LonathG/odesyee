'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPressure from './TextPressure';


const Footer = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = heading.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      gsap.to(heading, {
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(heading, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    heading.addEventListener('mousemove', handleMouseMove);
    heading.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heading.removeEventListener('mousemove', handleMouseMove);
      heading.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <footer className="bg-black text-white px-6 py-10 md:px-20 relative z-10 overflow-hidden">
      {/* Main Logo Title */}
      <h1
        ref={headingRef}
        className="text-[30vw] special-font text-white text-center w-full select-none hover:box-shadow-lg transition-all duration-300 ease-in-ease-out"
      >
      <div style={{position: 'relative', height: '400px'}}>
        <TextPressure
          text="Odeysee"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      </h1>



      {/* Footer Links */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-white">
        {/* Logo */}
        <div className="col-span-1 flex items-start">
          <img
            src="/logo.png"
            alt="Odesyee Logo"
            className="h-20 w-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-2 uppercase text-xs text-white/70">Explore</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Highlights</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="mb-2 uppercase text-xs text-white/70">Products</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Radiant</a></li>
            <li><a href="#" className="hover:underline">Nexus ↗</a></li>
            <li><a href="#" className="hover:underline">Zigma</a></li>
            <li><a href="#" className="hover:underline">Azul</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="mb-2 uppercase text-xs text-white/70">Follow Us</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Discord</a></li>
            <li><a href="#" className="hover:underline">X</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
            <li><a href="#" className="hover:underline">Medium</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="mb-2 uppercase text-xs text-white/70">Resources</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Media Kit</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/70 text-center">
        © 2025 Odesyee. All rights reserved. Designed by{' '}
        <a
          href="https://webmindsdesigns.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-white transition duration-200"
        >
          Webminds Designs
        </a>.
      </div>
    </footer>
  );
};

export default Footer;
