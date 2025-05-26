import './App.css'
import Footer from './Components/Single Component/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import MainNav from './Components/Nav/MainNav.jsx'

// Lazy-loaded pages
const LandingPage = lazy(() => import('./Pages/LandingPage'))
const Signup = lazy(() => import('./Pages/SignUp'))
const Login = lazy(() => import('./Pages/Login'))
const ContactPage = lazy(() => import('./Pages/ContactPage'))
const AboutUsPage = lazy(() => import('./Pages/AboutUsPage'))
const BlogsPage = lazy(() => import('./Pages/BlogsPage'))
const PortfolioPage = lazy(() => import('./Pages/PortfolioPage'))
const MediaPage = lazy(() => import('./Pages/MediaPage'))
const BrochuresPage = lazy(() => import('./Pages/BrochuresPage'))
const CommercialBrick = lazy(() => import('./Pages/ProductPages/Commercial'))
const CladdingTile = lazy(() => import('./Pages/ProductPages/CladdingTile'))
const Residential = lazy(() => import('./Pages/ProductPages/Residential'))
const Paver = lazy(() => import('./Pages/ProductPages/PaverBricks'))
const RoofTile = lazy(() => import('./Pages/ProductPages/RoofTile'))
const HallowBrick = lazy(() => import('./Pages/ProductPages/HallowBricks.jsx'))
const Teracotta = lazy(() => import('./Pages/ProductPages/TeracottaTile.jsx'))
const Blogs = lazy(() => import('./Pages/BlogsPage.jsx'))
const Location = lazy(() => import('./Pages/LocationDiractory.jsx'))
const Contact = lazy(() => import('./Pages/ContactUs.jsx'))
const Cart = lazy(() => import('./Pages/Cart.jsx'))
const Bricks = lazy(() => import('./Pages/Bricks.jsx'))
const Tiles = lazy(() => import('./Pages/Tiles.jsx'))
export default function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <MainNav query={query} setQuery={setQuery} />
      <Suspense fallback={<div className="h-screen flex items-center justify-center  w-full">
        <img
          className='h-1/2 w-1/2'
          src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1747654975/cervino_ceramax_logo-removebg-preview_ehf7uc.png" alt="Logo" />
      </div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path='/brochures' element={<BrochuresPage />} />
          <Route path='/products/commercial-bricks' element={<CommercialBrick />} />
          <Route path='/products/cladding-tile' element={<CladdingTile />} />
          <Route path='/products/residential-bricks' element={<Residential />} />
          <Route path='/products/paver-bricks' element={<Paver />} />
          <Route path='/products/roof-tiles' element={<RoofTile />} />
          <Route path='/products/hollow-bricks' element={<HallowBrick />} />
          <Route path='/products/terracotta-tiles' element={<Teracotta />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/location-directory' element={<Location />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/wishlist' element={<Cart />} />
          <Route path='/Bricks' element={<Bricks />} />
          <Route path='/Tiles' element={<Tiles />} />


        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}
