import Image from "next/image"
import ScrollAnimation from "./Scroll_animation"

export default function Browse(){

    return(
        <div>
          <ScrollAnimation>
              <div className="flex justify-center items-center mt-16 lg:hidden ">
          <div className="flex flex-col justify-start items-center sm:h-[1250px] h-[975px] max-w-[1023px] w-full rounded-[20px]" style={{ background: "#F2F0F1" }}>
            <h1 className="font-integral text-[32px] text-center mt-[48px] leading-tight font-bold">
              BROWSE BY <span className="block">Dress STYLE</span>
            </h1>
            
            <div className="space-y-4 mt-6">
            <Image src={"/Casual.png"} width={310} height={190} alt={"menu"} className="sm:w-[410px]"></Image>
            <Image src={"/Formal.png"} width={310} height={190} alt={"menu"} className="sm:w-[410px]"></Image>
            <Image src={"/Party.png"} width={310} height={190} alt={"menu"} className="sm:w-[410px]"></Image>
            <Image src={"/Gym.png"} width={310} height={190} alt={"menu"} className="sm:w-[410px]"></Image>
        
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="flex justify-center items-center mt-16 lg:flex hidden lg:block">
          <div className="flex flex-col justify-start items-center h-[866px] w-[1239px] rounded-[20px]" style={{ background: "#F2F0F1" }}>
            <h1 className="font-integral text-[48px] text-center mt-[48px] leading-tight font-bold">
              BROWSE BY <span>Dress STYLE</span>
            </h1>
            
            {/* Flex container for images */}
            <div className="flex flex-col items-center  mt-6 gap-y-6">
              {/* First row of images */}
              <div className="flex justify-center items-center gap-x-6">
                <Image src={"/Dcasual.png"} width={407} height={289} alt={"menu"} />
                <Image src={"/Dformal.png"} width={684} height={289} alt={"menu"} />
              </div>
        
              {/* Second row of images */}
              <div className="flex justify-center items-center gap-x-6">
              <Image src={"/Dgym.png"} width={684} height={289} alt={"menu"} />
        
                <Image src={"/Dparty.png"} width={407} height={289} alt={"menu"} />
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>
        
        </div>

        
    )
}