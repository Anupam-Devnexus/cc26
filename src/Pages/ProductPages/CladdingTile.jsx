import React, { useState } from "react";
import ProductHeader from "../../Components/ProductComponent/ProductHeader";
import ProductCard from '../../Components/ProductComponent/ProductCard';
import BrickFilter from "../../Components/Single Component/BrickFilter";
import CustomizeSection from "../../Components/Single Component/Customize";
import Recommendation from "../../Components/Single Component/Recommendation";
import useWishListStore from "../../Zustand/store";
export default function Commercial() {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    color: ""
  });

  
  const combinedBricks = [
        {
            type: "Commercial Brick",
            description: "Made from natural clay, these are the most common type of bricks used in construction.",
            link: '/products/commercial-bricks',
            image: "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg"
        },
        {
            type: "Residential Tile",
            description: "Made from fly ash, cement, and water, these are eco-friendly and lightweight.",
            link: '/products/residential-tile',
            image: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg"
        },
        {
            type: "Cladding Bricks",
            description: "Made from cement, sand, and aggregates, usually molded in a machine.",
            link: '/products/cladding-tile',
            image: "https://images.pexels.com/photos/7750434/pexels-photo-7750434.jpeg"
        },
        {
            type: "Pavers",
            description: "Very dense and strong, with low water absorption.",
            link: '/products/paver-bricks',
            image: "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg"
        },
        {
            type: "Roof Tiles",
            description: "Made from special clay that can withstand very high temperatures.",
            link: '/products/roof-tiles',
            image: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg"
        },
        {
            type: "Hollow Bricks",
            description: "Bricks with hollow cavities inside to reduce weight and improve insulation.",
            link: '/products/hollow-bricks',
            image: "https://images.pexels.com/photos/7750434/pexels-photo-7750434.jpeg"
        },
        {
            type: "Teracotta Tile",
            description: "Bricks with hollow cavities inside to reduce weight and improve insulation.",
            link: '/products/terracotta-tiles',
            image: "https://images.pexels.com/photos/7750434/pexels-photo-7750434.jpeg"
        }
    ];
  const AllTileData = [
    // --- Commercial Tiles ---
    {
      id: 1,
      name: "Tile 1",
      image:
        "https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 15.99,
      type: "commercial",
      color: "red",
    },
    {
      id: 2,
      name: "Tile 2",
      image:
        "https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 17.49,
      type: "commercial",
      color: "brown",
    },
    {
      id: 3,
      name: "Tile 3",
      image:
        "https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 14.75,
      type: "commercial",
      color: "grey",
    },
    {
      id: 4,
      name: "Tile 4",
      image:
        "https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 16.30,
      type: "commercial",
      color: "red",
    },
    {
      id: 5,
      name: "Tile 5",
      image:
        "https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 18.60,
      type: "commercial",
      color: "brown",
    },
    {
      id: 6,
      name: "Tile 6",
      image:
        "https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 15.25,
      type: "commercial",
      color: "grey",
    },
    {
      id: 7,
      name: "Tile 7",
      image:
        "https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 19.99,
      type: "commercial",
      color: "red",
    },
    {
      id: 8,
      name: "Tile 8",
      image:
        "https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 13.99,
      type: "commercial",
      color: "brown",
    },
    {
      id: 9,
      name: "Tile 9",
      image:
        "https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 17.10,
      type: "commercial",
      color: "grey",
    },
    {
      id: 10,
      name: "Tile 10",
      image:
        "https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 16.75,
      type: "commercial",
      color: "red",
    },

    // --- Decorative Tiles ---
    {
      id: 11,
      name: "Decor Tile A",
      image:
        "https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 14.50,
      type: "decorative",
      color: "red",
    },
    {
      id: 12,
      name: "Decor Tile B",
      image:
        "https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 15.75,
      type: "decorative",
      color: "brown",
    },
    {
      id: 13,
      name: "Decor Tile C",
      image:
        "https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 16.20,
      type: "decorative",
      color: "grey",
    },
    {
      id: 14,
      name: "Decor Tile D",
      image:
        "https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 13.99,
      type: "decorative",
      color: "red",
    },
    {
      id: 15,
      name: "Decor Tile E",
      image:
        "https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 17.10,
      type: "decorative",
      color: "brown",
    },
    {
      id: 16,
      name: "Decor Tile F",
      image:
        "https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 15.45,
      type: "decorative",
      color: "grey",
    },
    {
      id: 17,
      name: "Decor Tile G",
      image:
        "https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 16.80,
      type: "decorative",
      color: "red",
    },
    {
      id: 18,
      name: "Decor Tile H",
      image:
        "https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 14.30,
      type: "decorative",
      color: "brown",
    },
    {
      id: 19,
      name: "Decor Tile I",
      image:
        "https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      price: 17.25,
      type: "decorative",
      color: "grey",
    },
    {
      id: 20,
      name: "Decor Tile J",
      image:
        "https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 16.95,
      type: "decorative",
      color: "red",
    },
  ];

  const filterData = AllTileData.filter((tile) => {
    const matchName = tile.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchType = filters.type ? tile.type === filters.type : true;
    const matchColor = filters.color ? tile.color === filters.color : true;
    return matchName && matchType && matchColor;
  });



  return (
    <>
      <ProductHeader
        text={"Cladding Tiles"}
        image={"https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=600"}
        desc={"Our commercial line of tiles is designed to meet the highest standards of architects, contractors, and builders worldwide, ensuring durability and aesthetic appeal."}
      />

      <BrickFilter filters={filters} onFilterChange={setFilters} title={"Tiles"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-2 py-4 justify-items-center">
        {filterData.map((tile) => (
          <ProductCard
            key={tile.id}
            name={tile.name}
            image={tile.image}
            price={tile.price}
          />
        ))}
      </div>

      <CustomizeSection />

      {/* Other products */}
      <section aria-labelledby="other-products-heading">
        <h2
          id="other-products-heading"
          className="text-[var(--var-red-col)] text-center text-2xl font-semibold mb-2"
        >
          Other Products
        </h2>

        <div
          className="w-full overflow-x-auto px-4 py-2 scrollbar-thin"
          style={{
            scrollbarColor: `var(--var-red-col) transparent`, // Firefox
          }}
        >

          <div className="flex gap-4 min-w-max">
            {combinedBricks.map((brick, index) => (
              <div key={index} className="min-w-[250px]">
                <Recommendation
                  image={brick.image}
                  text={brick.type}
                  alt={`Recommendation: ${brick.type}`}
                  path={brick.link}
                />
              </div>
            ))}
          </div>
        </div>

      </section>


      <style>
        {`
            /* Webkit browsers */
            div::-webkit-scrollbar {
              height: 6px; /* smaller scrollbar height */
            }
            div::-webkit-scrollbar-track {
              background: transparent;
            }
            div::-webkit-scrollbar-thumb {
              background-color: var(--var-red-col);
              border-radius: 3px;
            }
          `}
      </style>
    </>
  );
}
