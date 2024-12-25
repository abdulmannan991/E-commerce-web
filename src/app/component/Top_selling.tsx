import Image from "next/image"

export default function TopSelling(){
return(

    <div>
        
        <div>
          <p className="font-integral text-[32px] lg:text-[48px] font-bold text-center mt-6 ">
          Top Selling
          </p>
        
          
          <div className="flex space-x-4 p-4 lg:gap-36 lg:hidden">
            <Image src={"/Vertical.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/Courage.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
        
              
            </div>
            {/* Desktop */}
        
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
            
            </div>
            <div className="flex lg:gap-48">
            <Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-4"></Image>
        <Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-28"></Image>
        <Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-4 hidden lg:block"></Image>
        <Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-28 hidden lg:block"></Image>
        
        </div>
        
        <div className="flex font-satoshi font-bold text-xl mt-2 ">
        
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