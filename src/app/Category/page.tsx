import Image from "next/image"
import StayPage from "../component/Stay"
import Footer from "../component/Footer"

export default function CategoryPage(){

    return(
        <div>
  <div>
          <div className="mt-6 w-[358px] lg:w-[1240px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
  </div>
  </div>

  <div>
    <ul className="flex gap-2 lg:text-[16px] lg:ml-20 text-gray-500 mt-4 ml-4 lg:gap-4">
        <li>Home {`>`} </li>
        <li className="text-black">Casual  </li>
      
    </ul>
</div>

<div className="flex">
    <p className="font-satoshi font-bold text-[24px] mt-4 ml-4">
    Casual
    </p>
    <p className="text-[14px] text-gray-400 mt-7 ml-2">
    Showing 1-10 of 100 Products
    </p>

    <button>
      <Image src={"/filter.png"} width={32} height={32} alt={"filter"} className="mt-5 ml-12 "></Image>
    
    </button>
</div>

 <div className="grid grid-cols-2 space-x-4 pl-2  ">
        <div className="">
        <Image src={"/C1.png"} width={172} height={174} alt={"menu"} className="ml-4 mt-4"></Image>

            <p className=" ml-5 text-[16px] font-bold font-satoshi">
            Gradient Graphic T...
              </p>
        <Image src={"/D35.png"} width={106} height={16} alt={"menu"} className="ml-5 "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="  ml-4 ">$145</p>
          
          <p className="  ml-2 text-gray-400 line-through">$242</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-20%</p>
       

        </div>
        </div>

        <div>
        <Image src={"/C2.png"} width={172} height={174} alt={"menu"} className="rounded-[10px] mt-5"></Image>
        
        <p className="  text-[16px]  font-bold font-satoshi">
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
        <Image src={"/blackT.png"} width={172} height={174} alt={"menu"} className=" mt-4"></Image>
        
        <p className="  text-[16px] font-bold font-satoshi">
        Black Striped T-shirt
              </p>
        <Image src={"/D4.png"} width={117} height={16} alt={"menu"} className=" "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="   ">$120</p>
          
          <p className="  ml-2 text-gray-400 line-through">$150</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-30%</p>
       

        </div>
        </div>
        
        <div>
        <Image src={"/C4.png"} width={172} height={174} alt={"menu"} className=" mt-4"></Image>
        
        <p className="  text-[16px] font-bold font-satoshi">
        Skinny Fit Jeans
              </p>
        <Image src={"/D35.png"} width={106} height={16} alt={"menu"} className=" "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="   ">$240</p>
          
          <p className="  ml-2 text-gray-400 line-through">$260</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-20%</p>
       

        </div>
        </div>
        
        <div>
        <Image src={"/C5.png"} width={172} height={174} alt={"menu"} className=" mt-4"></Image>

        
        <p className="  text-[16px] font-bold font-satoshi">
        Checkered Shirt
              </p>
        <Image src={"/D45.png"} width={106} height={16} alt={"menu"} className=" "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="   ">$180</p>
          
          

        </div>
        </div>
        
        <div>
        <Image src={"/C6.png"} width={172} height={174} alt={"menu"} className=" mt-4"></Image>

        
        <p className="  text-[16px] w-[259px] h-[22px] font-bold font-satoshi">
        Sleeve Striped T-shirt
              </p>
        <Image src={"/D45.png"} width={106} height={16} alt={"menu"} className=" "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="   ">$130</p>
          
          <p className="  ml-2 text-gray-400 line-through">$160</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-30%</p>
       

        </div>
        </div>
        
        
              
            </div>

            <div>
          <div className="mt-6 w-[358px] lg:w-[1240px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
  </div>
  </div>

<div className="">

<div className="flex   items-center mt-4 ml-2 ">
<button className="flex items-center justify-around text-white border-[1px] rounded-[8px] w-[90px] h-[36px] ">
<Image src={"/arrow-left.png"} width={9} height={9} alt={"menu"} className=" "></Image>
<p className="text-[12px] font-satoshi font-medium text-black">Previous</p>
</button>

<div className="w-[36px] h-[36px] rounded-[8px] ml-2 flex justify-center items-center bg-gray-200 ">
<button>1</button>

</div>

<div className="w-[36px] h-[36px] rounded-[8px] ml-2 flex justify-center items-center bg-gray-200 ">
<button>2</button>

</div>

<div className="w-[36px] h-[36px] rounded-[8px] ml-2 flex justify-center items-center bg-white  ">
<button>...</button>

</div>

<div className="w-[36px] h-[36px] rounded-[8px] ml-2 flex justify-center items-center bg-white ">
<button>9</button>

</div>

<div className="w-[36px] h-[36px] rounded-[8px] ml-2 flex justify-center items-center bg-white  ">
<button>10</button>

</div>

<div className="flex   items-center  ml-2 ">
<button className="flex items-center justify-around text-white border-[1px] rounded-[8px] w-[73px] h-[36px] ">
<p className="text-[12px] font-satoshi font-medium text-black">Next</p>
<Image src={"/arrow-right.png"} width={9} height={9} alt={"menu"} className=" "></Image>

</button>


</div>
</div>
</div>

<StayPage/>
<Footer/>

<br /><br /><br /><br />
        </div>
    )
}