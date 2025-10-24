"use client";
import React, { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeNavbar = () => setMenuOpen(false);
  const openNavbar = () => setMenuOpen(true);

  return (
    <section className="pb-8 ml-35 md:pb-12 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 text-sm font-[Poppins,sans-serif]">
      {/* Hero Content */}
      <div className="flex flex-col-reverse gap-10 md:flex-row px-4 md:px-16 lg:px-24 xl:px-32 mt-12 md:mt-32">
        {/* Left Text */}
        <div className="max-md:text-center">
          <h5 className="text-4xl md:text-6xl/[76px] font-semibold max-w-xl bg-gradient-to-r from-slate-900 to-[#6D8FE4] text-transparent bg-clip-text">
            Turn Ambition into Employment with AI.{" "}
          </h5>

          <p className="text-sm md:text-base max-w-lg mt-6 max-md:px-2 text-slate-600">
            From resume optimization to voice interview practice, Prepwise gives
            you the tools, feedback, and confidence to land your next big
            opportunity. Train smarter. Learn faster. Get hired sooner.
          </p>

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <button
              className="px-8 py-3 rounded-md bg-[#0A66C2] hover:bg-[#053260] text-white active:scale-95 transition-all"
              type="button"
            >
              Get Started
            </button>
            <button
              className="px-5 py-3 rounded-md bg-white text-[#0A66C2] border border-[#0A66C2] flex items-center gap-2 hover:bg-indigo-600/5 active:scale-95 transition-all"
              type="button"
            >
              <span>Our Features</span>
            </button>
          </div>

          {/* User avatars & rating */}
          <div className="flex items-center mt-9 justify-center md:justify-start">
            <div className="flex -space-x-3.5 pr-3">
              {[
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="user"
                  className="size-10 border-2 border-white rounded-full hover:-translate-y-px transition z-[4]"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#FF8F20]">
                {"★★★★★"}
              </div>
              <p className="text-sm text-slate-500">Used by 1,000+ people</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:max-w-xs lg:max-w-lg">
          <img
            className="w-full h-auto"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png"
            alt="users group"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
