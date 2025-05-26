import React from "react";
import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa6";

export default function Hero() {
  const wel = [
    { value: 100, label: "Projects" },
    { value: 100, label: "Variants" },
    { value: 20, label: "Years" },
    { value: 10, label: "Countries " },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="h-[80vh] w-full flex items-center justify-center bg-cover bg-center text-white text-center px-4"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
        aria-label="Hero banner with brick building background"
        role="img"
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0 h-[80vh]" />

        {/* Overlay */}
        <h1 className="text-2xl sm:text-3xl z-10 md:text-5xl font-bold leading-tight">
          Building the world <br /> Brick by Brick .
        </h1>
      </section>

      {/* Welcome Section */}
      <section
        className="bg-[var(--var-gray-col)] px-4 py-10 text-[var(--var-text-col)] text-center"
        aria-labelledby="welcome-heading"
      >
        <header className="mb-6">
          <h2
            id="welcome-heading"
            className="text-2xl sm:text-3xl  font-bold leading-snug"
          >
            Welcome to Cervino <br /> Ceramics !
          </h2>
        </header>

        <p className="text-sm sm:text-base text-justify font-light max-w-6xl mx-auto px-2">
          Cervino Ceramix Pvt Ltd are the best brick manufacturers of unglazed
          ceramics, cladding tiles, brick pavers, and hollow bricks in India.
          We have led the industry since 1972, from hand-made bricks to using
          advanced European technology for machine made bricks.
          <br />
          <br />
          The company is ISO 9001:2015 certified, ensuring top-notch quality in
          its machine made brick and tiles. Their products are designed to be
          left exposed without the need for plaster or paint. With a systematic
          approach and thorough testing of raw materials, Jindal Mechno Bricks
          consistently produces world-class construction materials.
        </p>
      </section>

      {/* Statistics Section */}
      <section
        className="bg-[var(--var-red-col)] text-white px-4 py-4"
        aria-label="Company statistics"
      >
        <div className="max-w-full mx-auto grid grid-cols-4 gap-y-2 text-center">
          {wel.map((item, index) => (
            <article
              key={`${item.label}-${index}`}
              className="flex flex-col items-center"
              aria-label={`${item.value} ${item.label}`}
            >
              <span className="text-lg sm:text-3xl font-extrabold flex items-center gap-1">
                <CountUp start={0} end={item.value} duration={3.5} />
                <FaPlus className="text-xs" />
              </span>
              <span className="text-xs sm:text-sm mt-1">{item.label}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
