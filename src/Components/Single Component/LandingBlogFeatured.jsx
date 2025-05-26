import React, { useRef, useEffect } from "react";
import ArticleCard from "../Cards/ArticleCard";
import { GrLinkNext } from "react-icons/gr";
export default function LandingBlogFeatured() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({ left: el.scrollLeft + e.deltaY });
    };

    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        el.scrollTo({ left: el.scrollLeft + 100, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        el.scrollTo({ left: el.scrollLeft - 100, behavior: "smooth" });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("keydown", onKeyDown);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("keydown", onKeyDown);
    };
  }, []);


  const articleData = [
    {
      image:
        "https://images.pexels.com/photos/93767/pexels-photo-93767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Basics of Modern Construction",
      link:'/blogs',
      description:
        "Construction involves designing, planning, and building infrastructure. Learn how technology and materials have evolved to shape today's construction industry.",
    },
    {
      image:
        "https://images.pexels.com/photos/461419/pexels-photo-461419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Types of Bricks Used in Construction",
       link:'/blogs',
      description:
        "From clay bricks to fly ash and concrete blocks, discover the various types of bricks, their properties, and how they affect the durability of your structure.",
    },
    {
      image:
        "https://images.pexels.com/photos/2076671/pexels-photo-2076671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How to Choose the Right Tiles",
       link:'/blogs',
      description:
        "Tiles come in many varieties like ceramic, porcelain, and vitrified. Learn how to pick the right tile based on area, style, and durability needs.",
    },
    {
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Bricklaying Techniques Explained",
       link:'/blogs',
      description:
        "Understand the fundamentals of bricklaying, from mortar application to layering methods like English and Flemish bonds used for stability and aesthetics.",
    },
    {
      image:
        "https://images.pexels.com/photos/93767/pexels-photo-93767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Waterproofing Tips for Tiled Surfaces",
       link:'/blogs',
      description:
        "Learn essential waterproofing techniques for tiled bathrooms, terraces, and kitchens to prevent seepage and ensure long-lasting tile performance.",
    },
    {
      image:
        "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Energy-Efficient Construction Materials",
       link:'/blogs',
      description:
        "Explore eco-friendly bricks, insulating tiles, and other materials that improve energy efficiency and reduce environmental impact in construction.",
    },
  ];


  return (
    <section className="px-2 py-3 mx-auto">
      <header className="text-center mb-2">
        <h2 className="sm:text-3xl text-2xl font-extrabold text-[var(--var-red-col)]">
          Featured Articles
        </h2>
        <div className=" max-w-full mx-auto flex items-center justify-center gap-4 p-4 rounded-xl">
          <p className="text-gray-700 text-base">
            Stay updated with our latest insights and tutorials in web development.
          </p>
        </div>
        <i className="flex items-center justify-center text-xs text-gray-400 gap-3"> scroll for more
          
          <GrLinkNext
            className="bg-gray-100 p-2 text-[var(--var-red-col)] text-3xl rounded-full "
            aria-label="Next"
          />
           </i>

      </header>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll p-2 scroll-smooth gap-6 hide-scrollbar"
        tabIndex={0}
      >
        {articleData.map((article, index) => (
          <article key={index} className="min-w-[300px] sm:min-w-[350px]">
            <ArticleCard
              articleHeading={article.title}
              articleDesc={article.description}
              image={article.image}
              altText={article.title}
              link={article.link}
            />
          </article>
        ))}
      </div>

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
