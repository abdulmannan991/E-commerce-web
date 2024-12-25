import Image from "next/image"
import Link from "next/link"

export default function TopSelling(){
return(

    <div>
        
        <div>
          <p className="font-integral text-[32px] lg:text-[48px] font-bold text-center mt-6 ">
          Top Selling
          </p>
        
          
          <div className="flex space-x-4 p-4 lg:gap-36 lg:hidden">
            <Link href={"/Category"}>
            
            <Image src={"/Vertical.png"} width={198} height={200} alt={"menu"} className="h-[210px] mt-4"></Image>
            </Link>

            <Link href={"/Category"}>
            
        <Image src={"/Courage.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
        </Link>
        
              
            </div>
            {/* Desktop */}
        
        <div className="hidden lg:block grid grid-cols-4 ml-10  space-x-3 lg:grid ">
        <div className="">
                <Image src={"/C1.png"} width={172} height={174} alt={"menu"} className="ml-4 mt-4 lg:hidden"></Image>
                
            <Link href={"/Category"}>

                <Image src={"/dv.png"} width={295} height={298} alt={"menu"} className=" mt-4 lg:ml-16"></Image>
</Link>
        
                    <p className="lg:text-[20px] ml-6 text-[16px] font-bold font-satoshi lg:ml-[70px]">
                    Vertical Striped Shirt

        
                      </p>
                <Image src={"/D5.png"} width={106} height={16} alt={"menu"} className="ml-2 lg:ml-[70px] ml-6 "></Image>
        
                <div className="flex font-satoshi font-bold text-xl  mt-1 ">
                
                <p className="  ml-5 lg:ml-[70px] ">$212</p>
                <p className=" ml-2  text-gray-400 line-through">$232</p>
                <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-20%</p>
                 
                
                </div>
                </div>
                
                <div className="">
                <Image src={"/C1.png"} width={172} height={174} alt={"menu"} className="ml-4 mt-4 lg:hidden"></Image>

            <Link href={"/Category"}>

                <Image src={"/dcourage.png"} width={295} height={298} alt={"menu"} className="ml-4 mt-4"></Image>

</Link>
                    <p className="lg:text-[20px] ml-6 text-[16px] font-bold font-satoshi">
                    Courage Graphic T-short

                      </p>
                <Image src={"/D4.png"} width={106} height={16} alt={"menu"} className="  ml-6"></Image>
        
                <div className="flex font-satoshi font-bold text-xl  mt-1 ml-6">
                
                <p className="    ">$145</p>
                  
                 
        
                </div>
                </div>
        
                
                <div className="">
                <Image src={"/C1.png"} width={172} height={174} alt={"menu"} className="ml-4 mt-4 lg:hidden"></Image>

            <Link href={"/Category"}>

                <Image src={"/dlo.png"} width={295} height={298} alt={"menu"} className=" mt-4 -ml-5"></Image>
</Link>
        
                    <p className="lg:text-[18px] -ml-4 text-[16px] font-bold font-satoshi">
                    LOOSE FIT BERMUDA SHORTS
        
                      </p>
                <Image src={"/D3.png"} width={106} height={16} alt={"menu"} className=" -ml-4 "></Image>
        
                <div className="flex font-satoshi font-bold text-xl  mt-1 -ml-4">
                
                <p className="    ">$80</p>
                  
               
        
                </div>
                </div>
        
        
                
                <div className="">
                <Image src={"/C1.png"} width={172} height={174} alt={"menu"} className="ml-4 mt-4 lg:hidden"></Image>

            <Link href={"/Category"}>

                <Image src={"/dfad.png"} width={295} height={298} alt={"menu"} className="-ml-14 mt-4"></Image>

</Link>
        
                    <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi -ml-12">
                    FADED SKINNY JEANS
        
                      </p>
                <Image src={"/Tstar.png"} width={106} height={16} alt={"menu"} className="  -ml-12"></Image>
        
                <div className="flex font-satoshi font-bold text-xl  mt-1 -ml-12">
                
                <p className="    ">$210</p>
                  
                
        
                </div>
                </div>
                
        
                
                
                </div>


{/*         
            <div className="flex space-x-4 p-4 lg:gap-12 lg:flex hidden lg:block">
            <Image src={"/dv.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dcourage.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dlo.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dfad.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
              
            </div>
            <div className="flex gap-x-16 lg:gap-52">
            <p className="ml-4  text-sm font-satoshi font-bold ">
              Vertical Striped Shirt
              </p>
        
              
              <p className=" text-sm font-satoshi font-bold ">
              Courage Graphic T-short
              </p>
        
              <p className="ml-4 text-sm font-satoshi font-bold hidden lg:block">
              Vertical Striped Shirt
              </p>
        
              
              <p className=" text-sm font-satoshi font-bold hidden lg:block">
              Courage Graphic T-short
              </p>
            
            </div> */}

            {/* Lg : hidden sm visible */}
            <div className="flex lg:gap-48 lg:hidden">
            <Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-4"></Image>
        <Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-28"></Image>
        <Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-4 hidden lg:block"></Image>
        <Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-28 hidden lg:block"></Image>
        
        </div>
        {/* Lg : hidden */}
        <div className="flex font-satoshi font-bold text-xl mt-2 lg:hidden">
        
        <p className="   ml-4 ">$212</p>
          
          <p className="  ml-2 text-gray-400 line-through">$235</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red  ml-2 text-xs  text-rose-400 text-center">-20%</p>
          <p className="  ml-[70px] lg:ml-[270px]">$145</p>
          <p className="  ml-[270px] hidden lg:block">$80</p>
          <p className="  ml-[370px] hidden lg:block">$210</p>
        </div>
        
        <div className="flex justify-center items-center">
        <button className="lg:h-[52px] lg:w-[218px] h-[46px] w-[358px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
          <p>
            View all
          </p>
        </button>
        </div>
        
        </div>
        
      
        
    </div>
)
}