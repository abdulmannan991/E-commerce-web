'use client'
import Image from "next/image"
import Link from "next/link"
import ScrollAnimation from "../component/Scroll_animation";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
// import { product } from "@/sanity/schemaTypes/product";
import { urlFor } from "@/sanity/lib/image";

export default function NewArrival(){

  type Product = {
    _id: string;
    name: string
    price: number;
    image_url: string;
  };
  

    const [newArrivalProducts, setNewArrivalProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchNewArrivalProducts = async () => {
        const products = await client.fetch(`*[_type == "products"][0..3]
          
          `);
        setNewArrivalProducts(products);
      };
  
      fetchNewArrivalProducts();
    }, []);
    
    return(
       
       <div className="">
        <ScrollAnimation>
          <div className="">
            <p className="smMax:mt-20 mt-20 font-integral text-[32px] font-bold text-center  lg:text-[48px]">
            NEW ARRIVALS
            </p>
          
            
          
          {/* Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pl-2 justify-items-center items-center">
  {newArrivalProducts.map((product: any) => (
    <div className="flex justify-center flex-col items-center" key={product._id}>
      <div className="flex flex-col items-center justify-center">
        <Link href={"/Category"}>
          <Image
            src={urlFor(product.image).url()} // Dynamically fetch the product image
            width={198}
            height={298}
            alt={product.name}
            className="rounded-[12px] mt-4 object-cover w-[198px] h-[298px] sm:w-[200px] sm:h-[300px] md:w-[220px] md:h-[320px] lg:w-[295px] lg:h-[248px]"
          />
        </Link>
        <p className="text-[16px] font-bold font-satoshi mt-2 text-center sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px]">
          {product.name} {/* Dynamically fetch the product name */}
        </p>
        <Image
          src={"/Tstar.png"}
          width={106}
          height={16}
          alt="menu"
          className="mx-auto mt-2" // Centered for all screen sizes
        />
        <div className="flex font-satoshi font-bold text-xl mt-1 justify-center items-center">
          <p>{`${product.price}rs`}</p>

          {/* Conditionally render discount percent if it's greater than 0 */}
          {product.discountPercent > 0 && (
            <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs text-rose-400 text-center">
              {`${product.discountPercent}%`}
            </p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

{/* Desktop */}

{/* Mob */}
 
          
<div className="flex justify-center items-center mt-6 lg:mt-0">
  <button className="smMax:h-[46px] smMax:w-[250px] h-[46px] w-[358px] lg:h-[52px] lg:w-[218px] rounded-[62px] bg-white border-[1px] border-transparent font-satoshi font-medium flex justify-center items-center mt-4 relative overflow-hidden group transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#ff5f6d]">
    
    {/* Gradient Background Animation */}
    <span className="absolute inset-0 bg-gradient-to-r bg-white border-[1px] rounded-[62px] border-gray-500 opacity-40 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-[#ff5f6d] group-hover:to-[#ffc371] transition-all duration-700 ease-in-out"></span>

    {/* Border Animation */}
    <span className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#ff5f6d] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out"></span>

    {/* Animated Text */}<p className="relative text-gray-800 text-lg font-semibold transition-all duration-500 ease-in-out group-hover:text-[#000000] group-hover:tracking-wide group-hover:drop-shadow-[0_0_12px_rgba(255,99,71,0.8)]">

      View all
    </p>
  </button>
</div>

          
          <div className="flex justify-center items-center">
          <div className=" w-[358px] lg:w-[1240px] border-[1px]  mt-24 ">
          <hr />
          </div>
          </div>
          
            
        </div>
        </ScrollAnimation>
        </div>
    )
}