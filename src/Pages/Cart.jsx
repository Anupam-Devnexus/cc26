import React, { useState } from "react";
import { FaRegPenToSquare, FaWhatsapp } from "react-icons/fa6";
import useWishListStore from "../Zustand/store";
import Enquiry from "../Components/PopUp/Enquiry";
import BrickIntro from "../Components/PopUp/BrickIntro";

export default function Cart() {
  const { wishlist, removeWishList } = useWishListStore();
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {/* Enquiry PopUp */}
      <Enquiry
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        item={selectedItem}
      />

      <div className="min-h-screen w-full bg-gray-200 p-4 mt-12 sm:p-6 ">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center  min-h-[60vh]">
            <img
              src="https://images.pexels.com/photos/1660876/pexels-photo-1660876.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Empty Wishlist"
              className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg font-medium text-gray-700">
              Your wishlist is currently empty.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--var-red-col)] mb-8 text-center">
              Your Wishlist
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlist.map((item, index) => (
                <div
                  key={index}
                  className=" border-[1px] bg-[var(--var-red-col)]/20 text-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span className="text-[var(--var-red-col)] font-medium">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => removeWishList(item)}
                      className="w-full cursor-pointer py-2 text-white bg-[var(--var-red-col)] rounded-md font-medium hover:bg-red-600 transition-all"
                    >
                      Remove
                    </button>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedItem(item);
                          setShowEnquiry(true);
                        }}
                        className="flex items-center cursor-pointer justify-center gap-2 flex-1 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-all"
                      >
                        <FaRegPenToSquare /> Enquiry
                      </button>
                      <button className="flex items-center cursor-pointer justify-center gap-2 flex-1 py-2 text-sm text-green-700 bg-white border border-green-300 rounded-md hover:bg-green-50 transition-all">
                        <FaWhatsapp />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
