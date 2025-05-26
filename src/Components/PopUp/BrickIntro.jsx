import React from "react";

export default function BrickIntro({ isOpen, onClose, item }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between w-full mb-6">
                    {/* Title */}
                    <h2 className="text-xl font-extrabold text-[var(--var-red-col)]">
                        Brick Specifications - {item?.name}
                    </h2>

                    {/* Close Button */}
                    <button
                        className="py-1 px-2 cursor-pointer border border-gray-300 rounded-full hover:bg-gray-100 hover:text-[var(--var-red-col)] transition-all duration-300"
                        onClick={onClose} // Replace with your actual close function
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Static Specifications */}
                <div className="space-y-4 text-gray-700">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-semibold">Size:</span>
                        <span>7in x 4in x 3in</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-semibold">Shape:</span>
                        <span>Rectangle</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-semibold">Color:</span>
                        <span>Blood Ash</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-semibold">Supply Capacity:</span>
                        <span>150,000 bricks daily</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span className="font-semibold">Minimum Order:</span>
                        <span>1000pcs</span>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="mt-3 cursor-pointer w-full text-center text-white bg-[var(--var-red-col)] px-4 py-2 rounded-md transition-colors duration-200 font-bold hover:bg-opacity-90"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
