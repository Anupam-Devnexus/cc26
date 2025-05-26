import React from "react";
import {
    FaMapMarkerAlt,
    FaBuilding,
    FaWarehouse,
    FaCity,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiFactory, GiModernCity } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import { BsPinMapFill } from "react-icons/bs";
import { HiOfficeBuilding } from "react-icons/hi";

import ContactUsCard from "../Components/Cards/ContactusCard";
import Button from "../Components/Buttons/Button1";

export default function ContactUs() {
    const contactUsData = [
        {
            icon: <FaMapMarkerAlt />,
            Office: "Mumbai Office",
            add1: "1079, Block B, Vegas Mall, Sector 14",
            add2: "Dwarka, Mumbai, 110075",
        },
        {
            icon: <FaBuilding />,
            Office: "Delhi Headquarters",
            add1: "4th Floor, Tower A, Connaught Place",
            add2: "New Delhi, 110001",
        },
        {
            icon: <MdLocationOn />,
            Office: "Bangalore Branch",
            add1: "HSR Layout, 27th Main Rd, Sector 2",
            add2: "Bangalore, Karnataka, 560102",
        },
        {
            icon: <FaWarehouse />,
            Office: "Hyderabad Storage",
            add1: "Kukatpally Industrial Area",
            add2: "Hyderabad, Telangana, 500072",
        },
        {
            icon: <GiFactory />,
            Office: "Pune Manufacturing Unit",
            add1: "MIDC Industrial Area, Pimpri",
            add2: "Pune, Maharashtra, 411018",
        },
        {
            icon: <RiBuilding2Fill />,
            Office: "Chennai Support Center",
            add1: "T Nagar, North Usman Road",
            add2: "Chennai, Tamil Nadu, 600017",
        },
        {
            icon: <HiOfficeBuilding />,
            Office: "Ahmedabad Regional Office",
            add1: "S.G. Highway, Prahlad Nagar",
            add2: "Ahmedabad, Gujarat, 380015",
        },
        {
            icon: <GiModernCity />,
            Office: "Kolkata Operations",
            add1: "Salt Lake City, Sector V",
            add2: "Kolkata, West Bengal, 700091",
        },
        {
            icon: <BsPinMapFill />,
            Office: "Indore Admin Office",
            add1: "RNT Marg, Regal Square",
            add2: "Indore, Madhya Pradesh, 452001",
        },
        {
            icon: <FaCity />,
            Office: "Lucknow Client Relations",
            add1: "Hazratganj, MG Road",
            add2: "Lucknow, Uttar Pradesh, 226001",
        },
    ];

    return (
        <div className="flex flex-col gap-12">
            {/* Hero Header */}
            <header className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/5244025/pexels-photo-5244025.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Contact Banner"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
                    Contact Us
                </h1>
            </header>

            {/* Contact Info & Form Section */}
            <section className="container mx-auto px-4 py-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-10">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[100vh] overflow-y-auto pr-2 custom-scroll">
                        {contactUsData.map((card, index) => (
                            <ContactUsCard
                                key={index}
                                icon={card.icon}
                                Office={card.Office}
                                add1={card.add1}
                                add2={card.add2}
                            />
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white  shadow-xl border-[1px] border-[var(--var-red-col)] rounded-2xl p-6 lg:p-8">
                        <h2 className="text-3xl font-bold  text-[var(--var-red-col)] mb-3">
                            Get in Touch
                        </h2>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full border-[1px] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--var-red-col)]"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Your Phone Number"
                                    maxLength={12}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--var-red-col)]"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="you@example.com"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--var-red-col)]"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Write your message here..."
                                    rows={4}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--var-red-col)]"
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button text={"Cancel"} />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="px-6 py-2 bg-[var(--var-red-col)] text-white rounded-md hover:bg-[var(--var-red-col)]/90 transition-all duration-200 cursor-pointer"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
