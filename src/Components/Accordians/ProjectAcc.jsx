import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function ProjectAcc() {
    const images = [
        "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true); // control fade in/out
    const imageLength = images.length;
    const touchStartX = useRef(null);

    // Auto-slide every 3 seconds with fade effect
    useEffect(() => {
        const timer = setInterval(() => {
            setFade(false); // start fade out
            setTimeout(() => {
                setCurrentImage((prev) => (prev < imageLength - 1 ? prev + 1 : 0));
                setFade(true); // fade in new image
            }, 700); // duration same as CSS transition
        }, 3000);

        return () => clearInterval(timer);
    }, [currentImage]);

    const prevHandler = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev > 0 ? prev - 1 : imageLength - 1));
            setFade(true);
        }, 500);
    };

    const nextHandler = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev < imageLength - 1 ? prev + 1 : 0));
            setFade(true);
        }, 500);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (!touchStartX.current) return;
        const diffX = touchStartX.current - e.changedTouches[0].clientX;
        if (diffX > 50) nextHandler();
        else if (diffX < -50) prevHandler();
        touchStartX.current = null;
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4">
            <div
                className="relative flex items-center justify-center overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Left Button */}
                {/* <button
          onClick={prevHandler}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 cursor-pointer transform -translate-y-1/2 z-10 bg-white text-[var(--var-red-col)] p-2 rounded-full shadow-md hover:scale-105 transition"
        >
          <FaArrowLeft />
        </button> */}

                {/* Image */}
                <img
                    src={images[currentImage]}
                    alt={`Slide ${currentImage + 1}`}
                    className={`w-full h-96 max-h-[500px] object-cover rounded-xl shadow-md transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Right Button */}
                {/* <button
          onClick={nextHandler}
          aria-label="Next image"
          className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-[var(--var-red-col)] p-2 rounded-full shadow-md hover:scale-105 transition"
        >
          <FaArrowRight />
        </button> */}
            </div>

            {/* Dot Navigation */}
            {/* <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? "bg-[var(--var-red-col)]" : "bg-gray-300"
            } transition`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div> */}
        </div>
    );
}
