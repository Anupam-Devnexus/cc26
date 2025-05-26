import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    const socialLinks = [
        {
            image: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            alt: 'Instagram icon',
            link: 'https://www.instagram.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
            alt: 'Facebook icon',
            link: 'https://www.facebook.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/145/145807.png',
            alt: 'LinkedIn icon',
            link: 'https://www.linkedin.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
            alt: 'YouTube icon',
            link: 'https://www.youtube.com/'
        }
    ];

    const pagesLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Brochures', path: '/brochures' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Media Coverage', path: '/media' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Location Directory', path: '/location-directory' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    const productLinks = [
        { name: 'Commercial Bricks', path: '/products/commercial-bricks' },
        { name: 'Residential Tile', path: '/products/residential-tile' },
        { name: 'Paver Bricks', path: '/products/paver-bricks' },
        { name: 'Roof Tile', path: '/products/roof-tiles' },
        { name: 'Hollow Bricks', path: '/products/hollow-bricks' },
        { name: 'Terracotta Tiles', path: '/products/terracotta-tiles' },
    ];

    return (
        <footer className="bg-[var(--var-red-col)] text-white px-4 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
                    <img
                        src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1747654975/cervino_ceramax_logo-removebg-preview_ehf7uc.png"
                        alt="Cervino Ceramix Logo"
                        className="w-20 h-20"
                    />
                    <h2 className="text-xl font-bold">Cervino Ceramix</h2>
                    <p className="text-white/70">
                        Innovative surfaces, timeless design. Discover our premium collection of tiles and ceramics.
                    </p>
                </div>

                {/* Navigation + Products Section */}
                <div className="md:col-span-2 grid grid-cols-2 gap-8">
                    {/* Navigation Pages */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            {pagesLinks.map(({ name, path }) => (
                                <li key={name}>
                                    <button
                                        onClick={() => navigate(path)}
                                        className="hover:text-white/80 transition-colors"
                                        aria-label={`Go to ${name} page`}
                                    >
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Products</h3>
                        <ul className="space-y-2 ">
                            {productLinks.map(({ name, path }) => (
                                <li key={name}>
                                    <button
                                        onClick={() => navigate(path)}
                                        className="hover:text-white/80 cursor-pointer transition-colors"
                                        aria-label={`Explore ${name}`}
                                    >
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social + Policy */}
                <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex gap-4 justify-center md:justify-end">
                            {socialLinks.map(({ image, alt, link }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit us on ${alt.split(' ')[0]}`}
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    <img src={image} alt={alt} className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-white/70">
                        <li><a href="#" className="hover:underline hover:text-white">English</a></li>
                        <li><a href="#" className="hover:underline hover:text-white">Privacy</a></li>
                        <li><a href="#" className="hover:underline hover:text-white">Legal</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/20 my-6" />
            <p className="text-center text-sm text-white/60">© 2025 Devnexus Solutions UI. All Rights Reserved.</p>
        </footer>
    );
}
