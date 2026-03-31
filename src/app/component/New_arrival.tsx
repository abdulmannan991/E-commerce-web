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
    image(image: string): unknown;
    discountPercent: number;
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 justify-items-center items-center w-full max-w-screen-xl mx-auto">
            {newArrivalProducts.map((product) => (
              <div className="flex justify-center flex-col items-center w-full max-w-xs" key={product._id}>
                <div className="flex flex-col items-center justify-center w-full">
                  <Link href={"/Category"} className="w-full">
                    <Image
                      src={urlFor(product.image).url()}
                      width={300}
                      height={400}
                      alt={product.name}
                      className="rounded-[12px] mt-4 object-cover w-full max-w-[295px] h-auto"
                    />
                  </Link>
                  <p className="text-[16px] font-bold font-satoshi mt-2 text-center w-full truncate">
                    {product.name}
                  </p>
                  <Image
                    src={"/Tstar.png"}
                    width={106}
                    height={16}
                    alt="menu"
                    className="mx-auto mt-2"
                  />
                  <div className="flex font-satoshi font-bold text-xl mt-1 justify-center items-center">
                    <p>{`${product.price}rs`}</p>
                    {product.discountPercent > 0 && (
                      <p className="h-5 w-10 rounded-2xl bg-red mt-1 ml-2 text-xs text-rose-400 text-center flex items-center justify-center">
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
 
          

          <div className="flex justify-center items-center mt-6 lg:mt-0 w-full">
            <button className="h-12 w-full max-w-xs rounded-[62px] bg-white border border-transparent font-satoshi font-medium flex justify-center items-center mt-4 relative overflow-hidden group transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-[#ff5f6d]">
              <span className="absolute inset-0 bg-gradient-to-r bg-white border rounded-[62px] border-gray-500 opacity-40 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-[#ff5f6d] group-hover:to-[#ffc371] transition-all duration-700 ease-in-out"></span>
              <span className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#ff5f6d] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out"></span>
              <Link href="/Category" className="w-full">
                <p className="relative text-gray-800 text-lg font-semibold transition-all duration-500 ease-in-out group-hover:text-[#000000] group-hover:tracking-wide group-hover:drop-shadow-[0_0_12px_rgba(255,99,71,0.8)] w-full text-center">
                  View all
                </p>
              </Link>
            </button>
          </div>

          

          <div className="flex justify-center items-center w-full mt-12">
            <div className="w-full max-w-screen-xl border-t border-gray-300" />
          </div>
          
            
        </div>
        </ScrollAnimation>
        </div>
    )
}