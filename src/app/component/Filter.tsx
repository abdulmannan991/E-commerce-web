import React from "react";
import Image from "next/image";

type FilterOverlayProps = {
  onClose: () => void; // Type for the onClose prop
};

const FilterOverlay: React.FC<FilterOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto overflow-x-clip">
      {/* Navbar at the top */}
      <div className="font-sans text-xs leading-4 bg-black h-[34px] w-full pt-[9px] pb-[9px] mx-auto sm:hidden">
        <p className="text-white text-center">
          Sign up and get 20% off to your first order. Sign Up Now
        </p>
      </div>
      <div className="flex items-center sm:hidden h-[60px] bg-customfilter">
        <Image
          src={"/mobnav.png"}
          width={24}
          height={24}
          alt={"menu"}
          className="mt-4 ml-2"
        />
        <p className="font-integral font-bold text-base leading-6 ml-4 mt-4 text-[20px]">
          SHOP.CO
        </p>
        <div className="flex justify-end gap-4 mt-4 w-full mr-2">
          <i className="fas fa-search text-lg"></i>
          <i className="fas fa-shopping-cart text-lg"></i>
          <i className="fas fa-user-circle text-lg"></i>
        </div>
      </div>

      {/* Filter content below the navbar */}
      <div className="w-full border-t-[1px] border-gray-300 rounded-tl-[20px] rounded-tr-[20px] mt-12">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-satoshi p-4 font-bold">Filters</p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[20px] font-satoshi p-4 font-bold mt-[130px]"
          >
            <Image
              src={"/x.png"}
              width={15}
              height={15}
              alt={"cancel"}
              className="mt-2"
            />
          </button>
        </div>

        <div className="border-[1px] w-[353px] flex justify-center items-center ml-5">
          <hr />
        </div>

        {/* Categories */}
        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item) => (
          <div
            key={item}
            className="font-satoshi text-[16px] text-gray-400 font-normal p-4 flex justify-between"
          >
            <p>{item}</p>
            <button>
              <Image
                src={"/C-right-arrow.png"}
                width={6.5}
                height={11.5}
                alt={"right arrow"}
              />
            </button>
          </div>
        ))}

        <div className="border-[1px] w-[353px] flex justify-center items-center ml-5">
          <hr />
        </div>

        {/* Price Section */}
        <div className="font-satoshi text-[20px] font-bold p-4 flex justify-between">
          <p>Price</p>
          <button>
            <Image
              src={"/C-up-arrow.png"}
              width={16}
              height={16}
              alt={"filter"}
              className="text-black"
            />
          </button>
        </div>

        <div className="flex flex-col ml-5 items-center space-y-4 w-[247px]">
          <div className="relative w-full">
            <div className="absolute w-full h-[5px] bg-gray-200 rounded-full"></div>
            <div
              className="absolute bg-black h-[5px] rounded-full"
              style={{ left: "20%", right: "20%" }}
            ></div>

            {/* Left Knob */}
            <input
              type="range"
              min="50"
              max="200"
              defaultValue="70"
              className="absolute w-full h-[5px] opacity-0 pointer-events-none"
              style={{ zIndex: 10 }}
            />
            <span
              className="absolute top-[-8px] h-[20px] w-[20px] bg-black rounded-full"
              style={{ left: "20%" }}
            ></span>

            {/* Right Knob */}
            <input
              type="range"
              min="50"
              max="200"
              defaultValue="180"
              className="absolute w-full h-[5px] opacity-0 pointer-events-none"
              style={{ zIndex: 10 }}
            />
            <span
              className="absolute top-[-8px] h-[20px] w-[20px] bg-black rounded-full"
              style={{ right: "20%" }}
            ></span>
          </div>

          {/* Price Labels */}
          <div className="flex justify-around w-full text-black font-medium text-sm">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>

        {/* Colors Section */}
       <div className="font-satoshi text-[20px] font-bold p-4 flex justify-between">
       <p>Colors</p>
       
       <button className="">
             <Image src={"/C-up-arrow.png"} width={16} height={16} alt={"filter"} className="text-black "></Image>
           
           </button>
       
       </div>
       
       
       <div className="font-satoshi text-[20px] font-bold p-4 flex justify-between">
        
       <div className="w-[37px] h-[37px] rounded-full bg-customGreen border-[2px] border-gray-400"></div>
       <div className="w-[37px] h-[37px] rounded-full bg-customRed border-[1px] border-gray-400"></div>
       <div className="w-[37px] h-[37px] rounded-full bg-customYellow border-[1px] border-gray-400"></div>
       <div className="w-[37px] h-[37px] rounded-full bg-customOrange border-[1px] border-gray-400"></div>
       <div className="w-[37px] h-[37px] rounded-full bg-customSky border-[1px] border-gray-400"></div>
       <div className="w-[37px] h-[37px] rounded-full bg-customBlue border-[2px] border-gray-400 flex justify-center items-center">
       <Image src={"/white-tick.png"} width={16} height={16} alt={"filter"} className="text-black "></Image>
       
       </div>
       <div className="w-[37px] h-[37px] rounded-full bg-customPurple border-[1px] border-gray-400"></div>
       
       </div>
       
       
       
       <div className="font-satoshi text-[20px] font-bold p-4 flex space-x-4">
        
      
       <div className="w-[37px] h-[37px] rounded-full bg-customPink border-[1px] border-gray-400"></div>
       <div className="w-[37px] h-[37px] rounded-full bg-white border-[1px] border-gray-400"></div>
       <div className="w-[37px] h-[37px] rounded-full bg-black border-[1px] border-gray-400"></div>
       
       </div>
       
       <div className="border-[1px] w-[247px] flex justify-center items-center ml-5">
         <hr />
         </div>
       
         <div className="font-satoshi text-[20px] font-bold p-4 flex justify-between">
       <p>Size</p>
       
       <button className="">
             <Image src={"/C-up-arrow.png"} width={16} height={16} alt={"filter"} className="text-black "></Image>
           
           </button>
       
       </div>
       
       <div className="grid grid-cols-3 space-y-2 ml-4 mr-10 ">
       
       <div className=" h-[39px] w-[96px] rounded-[62px] mt-2 bg-lightGray hover:bg-black flex justify-center items-center  text-center">
       <button className=" text-customBlack hover:text-white" >XX-Small</button>
       
       </div>
       
       <div className=" h-[39px] w-[88px] rounded-[62px] bg-lightGray hover:bg-black   flex justify-center items-center   text-center">
       <button className=" text-customBlack hover:text-white">X-Small</button>
       
       </div>
       
       <div className=" h-[39px] w-[76px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
       <button className=" text-customBlack hover:text-white">Small</button>
       
       </div>
       
       <div className=" h-[39px] w-[89px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
       <button className=" text-customBlack hover:text-white">Medium</button>
       
       </div>
       
       <div className=" h-[39px] w-[76px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
       <button className=" text-customBlack hover:text-white">Large</button>
       
       </div>
       
       <div className=" h-[39px] w-[89px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
       <button className=" text-customBlack hover:text-white">X-Large</button>
       
       </div>
       
       <div className=" h-[39px] w-[96px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
       <button className=" text-customBlack hover:text-white" >XX-Large</button>
       
       </div>
       
       <div className=" h-[39px] w-[96px] rounded-[62px] bg-lightGray hover:bg-black flex justify-center items-center  text-center">
       <button className=" text-customBlack hover:text-white" >3X-Large</button>
       
       </div>
       
       <div className=" h-[39px] w-[98px] rounded-[62px] bg-lightGray hover:bg-black flex justify-center items-center  text-center">
       <button className=" text-customBlack hover:text-white" >4X-Large</button>
       
       </div>
       
       {/* ... */}
       </div>

       
       <div className="border-[1px] w-[247px] flex justify-center mt-4 items-center ml-5">
         <hr />
         </div>
       
       
         <div className="font-satoshi text-[20px] font-bold p-4 flex justify-between ">
       <p>Dress Style</p>
       
       <button className="">
             <Image src={"/C-up-arrow.png"} width={16} height={16} alt={"filter"} className="text-black "></Image>
           
           </button>
       
       </div>
       
       
         <div className="font-satoshi text-[16px] font-normal text-gray-400 p-1 flex justify-between ml-2">
         <p>Casual</p>
       
       <button className="">
             <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className=" mr-2"></Image>
           
           </button>
           
       
       </div>
       
       <div className="font-satoshi text-[16px] text-gray-400 font-normal p-1 flex justify-between ml-2">
       
       <p>Formal</p>
       
       <button className="">
             <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className=" mr-2"></Image>
           
           </button>
       
           </div>
       
           <div className="font-satoshi text-gray-400 text-[16px] font-normal p-1 flex justify-between ml-2">
       
       <p>Party</p>
       
       <button className="">
             <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className=" mr-2"></Image>
           
           </button>
           </div>
       
       
           <div className="font-satoshi text-gray-400 text-[16px] font-normal p-1 flex justify-between ml-2">
       
       <p>Gym</p>
       
       <button className="">
             <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className="mr-2 "></Image>
           
           </button>
           </div>
       
       
       
           <div className="mt-4 h-[48px] w-[353px] rounded-[62px] bg-black flex justify-center items-center  text-center ml-2">
       <button className=" text-white">Aplly Filter</button>
       
       </div>
           
       
       
       <br />
       
       
      </div>
    </div>
  );
};

export default FilterOverlay;
