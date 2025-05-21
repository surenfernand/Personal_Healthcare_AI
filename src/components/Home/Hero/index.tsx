"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <section className="relative" id="home-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md pt-32 px-4 relative">
        <div className="bg-banner-image hidden lg:block absolute w-full h-full top-0 blur-390"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-16" style={{gap: "120px"}}>
            <div className="col-span-7">
              <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                Personal Healthcare<br />
              </h1>
              <p className="text-white md:text-lg font-normal mb-10 md:text-start text-center">
                Personal healthcare focuses on maintaining well-being through <br />{" "}
                regular checkups, healthy habits, prevention, <br />{" "}
                early diagnosis, and personalized medical care.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl mr-6">
                  Get Started
                </button>             
              </div>
            </div>
            <div className="col-span-5 lg:-m-48 ps-5 ">
              <Image
                src={"/images/avatar/healthcare.png"}
                alt="nothing"
                width={650}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-primary/60 to-secondary/60 rounded-lg sm:m-0 m-4">
            <div className="overlay flex items-center justify-between border-b border-solid border-border p-5 z-50 backdrop-blur-sm">
              <h3 className="text-white">How It Works</h3>
              <button onClick={closeModal} className="inline-block dark:invert">
                <Icon icon="tabler:circle-x" className="text-2xl text-white" />
              </button>
            </div>
            <iframe
              height="400"
              className="p-4 md:w-[50rem] w-full"
              src="https://www.youtube.com/embed/xAAEiykov1w?si=7Keuu5t0oJzZ67Q-"
              title="How Our Product Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
