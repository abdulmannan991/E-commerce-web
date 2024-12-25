import Image from "next/image"
import StayPage from "../component/Stay"
import Footer from "../component/Footer"

export default function CategoryPage(){

    return(
        <div>
  <div>
          <div className="mt-6 w-[358px] lg:ml-12 lg:w-[1340px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />

  </div>
  </div>
  

  <div>
    <ul className="flex gap-2 lg:text-[16px] lg:ml-20 text-gray-500 mt-4 ml-4 lg:gap-4">
        <li>Home  </li>
        <li>
                          <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className="mt-2 "></Image>
                    
                </li>
        <li className="text-black">Casual  </li>
      
    </ul>
</div>


<div className="flex lg:flex lg:justify-between lg:items-center lg:space-x-4 lg:px-40">
    <p className="font-satoshi font-bold text-[24px] lg:text-[32px] mt-4 ml-4 lg:ml-[250px] ">
    Casual
    </p>

    <p className="lg:hidden text-[14px] text-gray-400 mt-7 ml-2 ">
    Showing 1-10 of 100 Products
    </p>
    
   <div className=" hidden lg:block ">
   <p className="text-[14px] text-gray-400 lg:-mr-[170px]">
      Showing 1-10 of 100 Products Sort by: 
      <span className="text-black font-bold"> Most Popular
      <span className="text-black">&#x25BC;</span>

      </span>
    </p>
   </div>

    <button className="lg:hidden">
      <Image src={"/filter.png"} width={32} height={32} alt={"filter"} className="mt-5 ml-12 "></Image>
    
    </button>
</div>

 <div className="grid grid-cols-2 space-x-4 pl-2  lg:grid lg:grid-cols-3 lg:ml-[380px]  lg:pl-2">
        <div className="">
        <Image src={"/C1.png"} width={172} height={174} alt={"menu"} className="ml-4 mt-4 lg:hidden"></Image>
        <Image src={"/CC1.png"} width={294} height={441} alt={"menu"} className="ml-5 mt-4 rounded-[12px] hidden lg:block"></Image>

            <p className="lg:text-[20px] ml-6 text-[16px] font-bold font-satoshi">
            Gradient Graphic T...
              </p>
        <Image src={"/D35.png"} width={106} height={16} alt={"menu"} className="ml-2 lg:ml-6 ml-6 "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="  ml-5 lg:ml-7 ">$145</p>
          
          <p className="  ml-2 text-gray-400 line-through">$242</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-20%</p>
       

        </div>
        </div>

        <div>
        <Image src={"/C2.png"} width={172} height={174} alt={"menu"} className="rounded-[10px] mt-5 lg:hidden"></Image>
        <Image src={"/CC2.png"} width={296} height={444} alt={"menu"} className="rounded-[10px] mt-5 hidden lg:block"></Image>
        
        <p className="lg:text-[20px]  text-[16px]  font-bold font-satoshi">
        Polo with Tipping De..
              </p>
        <Image src={"/D45.png"} width={127} height={16} alt={"menu"} className=" "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="  ">$180</p>
          
          <p className="  ml-2 text-gray-400 line-through">$242</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-20%</p>
       

        </div>
        </div>
        
        <div>
        <Image src={"/C3.png"} width={172} height={174} alt={"menu"} className=" mt-4 lg:hidden rounded-[12px]"></Image>
        <Image src={"/CC3.png"} width={296} height={444} alt={"menu"} className="ml-4 mt-4 rounded-[12px] hidden lg:block"></Image>

        
        <p className="lg:text-[20px] lg:ml-5  text-[16px] font-bold font-satoshi">
        Black Striped T-shirt
              </p>
        <Image src={"/D4.png"} width={117} height={16} alt={"menu"} className=" lg:ml-5"></Image>

        <div className="flex font-satoshi lg:ml-5 font-bold text-xl  mt-1 ">
        
        <p className="   ">$120</p>
          
          <p className="  ml-2 text-gray-400 line-through">$150</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-30%</p>
       

        </div>
        </div>
        
        <div>
        <Image src={"/C4.png"} width={172} height={174} alt={"menu"} className=" mt-4 lg:hidden"></Image>
        <Image src={"/CC4.png"} width={268} height={402} alt={"menu"} className="ml-4 mt-4 rounded-[12px] hidden lg:block"></Image>
        
        <p className="lg:text-[20px] lg:ml-5 text-[16px] font-bold font-satoshi">
        Skinny Fit Jeans
              </p>
        <Image src={"/D35.png"} width={106} height={16} alt={"menu"} className="lg:ml-5 "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 lg:ml-5">
        
        <p className="   ">$240</p>
          
          <p className="  ml-2 text-gray-400 line-through">$260</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-20%</p>
       

        </div>
        </div>
        
        <div>
        <Image src={"/C5.png"} width={172} height={174} alt={"menu"} className=" mt-4 lg:hidden"></Image>
        <Image src={"/CC5.png"} width={296} height={444} alt={"menu"} className="ml-4 mt-4 rounded-[12px] hidden lg:block"></Image>


        
        <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi lg:ml-5">
        Checkered Shirt
              </p>
        <Image src={"/D45.png"} width={106} height={16} alt={"menu"} className="lg:ml-5 "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 lg:ml-5">
        
        <p className="   ">$180</p>
          
          

        </div>
        </div>
        
        <div>
        <Image src={"/C6.png"} width={172} height={174} alt={"menu"} className=" mt-4  lg:hidden"></Image>
        <Image src={"/CC6.png"} width={296} height={444} alt={"menu"} className="ml-4 mt-4 rounded-[12px] hidden lg:block"></Image>


        
        <p className="lg:text-[20px]  text-[16px] w-[259px] h-[22px] font-bold font-satoshi lg:ml-5">
        Sleeve Striped T-shirt
              </p>
        <Image src={"/D45.png"} width={106} height={16} alt={"menu"} className="lg:ml-5 lg:mt-2 "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 lg:ml-5 ">
        
        <p className="   ">$130</p>
          
          <p className="  ml-2 text-gray-400 line-through">$160</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-30%</p>
       

        </div>
        </div>
        

        <div>
        {/* <Image src={"/CC7.png"} width={172} height={174} alt={"menu"} className=" mt-4  lg:hidden"></Image> */}
        <Image src={"/CC7.png"} width={296} height={444} alt={"menu"} className="ml-4 mt-4 rounded-[12px] hidden lg:block"></Image>


        
        <p className=" lg:text-[20px] text-[16px] w-[259px] h-[22px] font-bold font-satoshi lg:ml-5 hidden lg:block">
        Sleeve Striped T-shirt
              </p>
        <Image src={"/D45.png"} width={106} height={16} alt={"menu"} className="lg:ml-5 lg:mt-2 hidden lg:block"></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 lg:ml-5 hidden lg:block">
        
        <p className="   ">$130</p>
          
          <p className="lg:ml-14 lg:-mt-7  ml-2 text-gray-400 line-through">$160</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center lg:ml-28 lg:-mt-6">-30%</p>
       

        </div>
        </div>
        


        <div>
        {/* <Image src={"/CC8.png"} width={172} height={174} alt={"menu"} className=" mt-4  lg:hidden"></Image> */}
        <Image src={"/CC8.png"} width={294} height={441} alt={"menu"} className=" mt-4 rounded-[12px] hidden lg:block"></Image>

        
        <p className="lg:text-[20px]  text-[16px] w-[259px] h-[22px] font-bold font-satoshi lg:ml-1 hidden lg:block">
        Sleeve Striped T-shirt
              </p>
        <Image src={"/D45.png"} width={106} height={16} alt={"menu"} className=" lg:ml-1 lg:mt-2 hidden lg:block"></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 lg:ml-2 hidden lg:block">
        
        <p className="   ">$130</p>
          
          <p className="lg:ml-14 lg:-mt-7  ml-2 text-gray-400 line-through">$160</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center lg:ml-28 lg:-mt-6">-30%</p>
       

        </div>
        </div>
        



        <div>
        {/* <Image src={"/CC9.png"} width={172} height={174} alt={"menu"} className=" mt-4 lg:hidden"></Image> */}
        <Image src={"/CC9.png"} width={296} height={444} alt={"menu"} className=" mt-4 rounded-[12px] hidden lg:block"></Image>

        
        <p className="  text-[16px] lg:text-[20px] w-[259px] h-[22px] font-bold font-satoshi lg:ml-2 hidden lg:block">
        Sleeve Striped T-shirt
              </p>
        <Image src={"/D45.png"} width={106} height={16} alt={"menu"} className="lg:ml-2 lg:mt-2 hidden lg:block"></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 lg:ml-2 hidden lg:block">
        
        <p className="   ">$130</p>
          
          <p className="lg:ml-14 lg:-mt-7  ml-2 text-gray-400 line-through">$160</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center lg:ml-28 lg:-mt-6">-30%</p>
       

        </div>
        </div>
        
        
              
            </div>

            <div className="lg:flex lg:justify-center lg:items-center">
          <div className="mt-6 w-[358px] lg:w-[925px] lg:ml-[430px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
  </div>
  </div>

<div className="">

<div className="flex   items-center mt-4 ml-2 lg:flex lg:justify-center lg:items-center ">
<button className="lg:mr-[140px] lg:ml-[340px] flex items-center justify-around  lg:flex lg:items-center lg:justify-around text-white border-[1px] rounded-[8px] w-[90px] h-[36px] lg:w-[110px]">
<Image src={"/arrow-left.png"} width={9} height={9} alt={"menu"} className=" lg:w-[20px] lg:h-[20px] " ></Image>
<p className="text-[12px] lg:text-[12px] font-satoshi font-medium text-black ">Previous</p>
</button>

<div className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] rounded-[8px] ml-2 flex justify-center items-center bg-gray-200 ">
<button>1</button>

</div>

<div className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] rounded-[8px] ml-2 flex justify-center items-center bg-gray-200 ">
<button>2</button>

</div>

<div className="hidden lg:block w-[36px] h-[36px] lg:w-[40px] text-center  lg:h-[40px] rounded-[8px] ml-2 lg:flex lg:justify-center lg:items-center bg-gray-200 ">
<button>3</button>

</div>

<div className="w-[36px] h-[36px] rounded-[8px] ml-2 flex justify-center items-center bg-white  ">
<button>...</button>

</div>

<div className="w-[36px] h-[36px] rounded-[8px] ml-2 flex justify-center items-center bg-white ">
<button>9</button>

</div>

<div className="w-[36px] h-[36px] rounded-[8px] ml-2 flex justify-center items-center bg-white ">
<button className=" ">10</button>

</div>

<div className="flex lg:ml-[250px]  items-center  ml-2 lg:flex lg:flex-row lg:items-end">
<button className=" flex items-center justify-around text-white border-[1px] rounded-[8px] w-[73px] lg:w-[86px] h-[36px] ">
<p className="text-[12px] font-satoshi font-medium text-black">Next</p>
<Image src={"/arrow-right.png"} width={9} height={9} alt={"menu"} className=" "></Image>

</button>


</div>
</div>
</div>


<div className="lg:w-[295px] lg:h-[1220px] border-[1px] rounded-[20px] ml-20 -mt-[1300px] hidden lg:block ">
    <div>
<div className="font-satoshi text-[20px] font-bold p-4 flex justify-between">
<p>Filters</p>

<button className="">
      <Image src={"/filter.png"} width={32} height={32} alt={"filter"} className=" "></Image>
    
    </button>

</div>

<div className="border-[1px] w-[247px] flex justify-center items-center ml-5">
  <hr />
  </div>


  <div className="font-satoshi text-[16px] font-normal text-gray-400 p-4 flex justify-between">
  <p>T-shirts</p>

<button className="">
      <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className=" "></Image>
    
    </button>
    

</div>

<div className="font-satoshi text-[16px] text-gray-400 font-normal p-4 flex justify-between">

<p>Shorts</p>

<button className="">
      <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className=" "></Image>
    
    </button>

    </div>

    <div className="font-satoshi text-gray-400 text-[16px] font-normal p-4 flex justify-between">

<p>Shirts</p>

<button className="">
      <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className=" "></Image>
    
    </button>
    </div>


    <div className="font-satoshi text-gray-400 text-[16px] font-normal p-4 flex justify-between">

<p>Hoodie</p>

<button className="">
      <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className=" "></Image>
    
    </button>
    </div>


    <div className="font-satoshi text-gray-400 text-[16px] font-normal p-4 flex justify-between">

<p>Jeans</p>

<button className="">
      <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className=" "></Image>
    
    </button>

    </div>
    </div>

    <div className="border-[1px] w-[247px] flex justify-center items-center ml-5">
  <hr />
  </div>

  <div className="font-satoshi text-[20px] font-bold p-4 flex justify-between">
<p>Price</p>

<button className="">
      <Image src={"/C-up-arrow.png"} width={16} height={16} alt={"filter"} className="text-black "></Image>
    
    </button>

</div>

<div className="flex flex-col ml-5 items-center space-y-4 w-[247px]">
  {/* Slider Container */}
  <div className="relative w-full">
    {/* Track */}
    <div className="absolute w-full h-[5px] bg-gray-200 rounded-full"></div>

    {/* Active Range */}
    <div className="absolute bg-black h-[5px] rounded-full" style={{ left: '20%', right: '20%' }}></div>

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
      style={{ left: '20%' }}
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
      style={{ right: '20%' }}
    ></span>
  </div>

  {/* Price Labels */}
  <div className="flex justify-around w-full text-black font-medium text-sm">
    <span>$50</span>
    <span>$200</span>
  </div>
</div>


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

</div>



<div className="font-satoshi text-[20px] font-bold p-4 flex justify-between">
 
<div className="w-[37px] h-[37px] rounded-full bg-customBlue border-[2px] border-gray-400 flex justify-center items-center">
<Image src={"/white-tick.png"} width={16} height={16} alt={"filter"} className="text-black "></Image>

</div>
<div className="w-[37px] h-[37px] rounded-full bg-customPurple border-[1px] border-gray-400"></div>
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

<div className="grid grid-cols-2 space-y-2 ml-4 mr-16">

<div className=" h-[39px] w-[96px] rounded-[62px] mt-2 bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack" >XX-Small</button>

</div>

<div className=" h-[39px] w-[88px] rounded-[62px] bg-lightGray  flex justify-center items-center   text-center">
<button className=" text-customBlack">X-Small</button>

</div>

<div className=" h-[39px] w-[76px] rounded-[62px] bg-black flex justify-center items-center  text-center">
<button className=" text-white">Small</button>

</div>

<div className=" h-[39px] w-[89px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack">Medium</button>

</div>

<div className=" h-[39px] w-[76px] rounded-[62px] bg-black flex justify-center items-center  text-center">
<button className=" text-white">Large</button>

</div>

<div className=" h-[39px] w-[89px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack">X-Large</button>

</div>

<div className=" h-[39px] w-[96px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack" >XX-Large</button>

</div>

<div className=" h-[39px] w-[96px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack" >3X-Large</button>

</div>

<div className=" h-[39px] w-[98px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack" >4X-Large</button>

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



    <div className=" h-[48px] w-[247px] rounded-[62px] bg-black flex justify-center items-center  text-center ml-6">
<button className=" text-white">Aplly Filter</button>

</div>
    

</div>

<StayPage/>
<Footer/>

        </div>
    )
}