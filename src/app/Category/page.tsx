import Image from "next/image"
import StayPage from "../component/Stay"
import Footer from "../component/Footer"

export default function CategoryPage(){

    return(
        <div>
  <div>
          <div className="mt-6 w-[358px] lg:w-[1380px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
  </div>
  </div>

  <div>
    <ul className="flex gap-2 lg:text-[16px] lg:ml-20 text-gray-500 mt-4 ml-4 lg:gap-4">
        <li>Home {`>`} </li>
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

<StayPage/>
<Footer/>

<br /><br /><br /><br />
        </div>
    )
}