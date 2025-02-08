import Image from "next/image"
import ScrollAnimation from "./Scroll_animation"

export default function Customer(){

    return(

        <div>
            <ScrollAnimation>
            <div className="ml-4 font-integral text-[32px] lg:ml-28 lg:text-[48px] text-start mt-[48px] leading-tight font-bold">
                  Our Happy <span className="block lg:inline-block">Customers</span>
            
                 <div className="flex justify-end mr-8 lg:mr-28 gap-4 -mt-8 ">
                 <Image src={"/arrow-left.png"} width={24} height={24} alt={"menu"} ></Image>
                 <Image src={"/arrow-right.png"} width={24} height={24} alt={"menu"} ></Image>
                 </div>
                </div>
            
            
            
                <div className="flex justify-center items-center mt-10 gap-6 -ml-24">
            
                <div className="flex h-[186px] w-[358px] lg:h-[240px] lg:w-[400px] text-white border-[1px] rounded-[20px] -ml-72 lg:blur-sm">
                <div className=" mt-6 space-x-1 ml-6 ">
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>

            
                <div className="flex items-center space-x-2">
              <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                Sarah M.
              </p>
              <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                <p className="text-white text-xs font-bold">✔</p>
              </div>
            
              
            
             
            </div>
            
            <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-900">
              {`"Im blown away by the quality and style of the clothes
               I received from Shop.co. From casual wear to elegant dresses every piece Ive bought has exceeded my expectations.”`}
              </p>
            
             </div>
            
                </div>
            
            
            
                <div className="flex h-[186px] w-[358px] lg:h-[240px] lg:w-[400px] text-white border-[1px] rounded-[20px]">
                <div className=" mt-6 space-x-1 ml-6 ">
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>

            
                <div className="flex items-center space-x-2">
              <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                Sarah M.
              </p>
              <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                <p className="text-white text-xs font-bold">✔</p>
              </div>
            
              
            
             
            </div>
            
            <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-900">
              {`"Im blown away by the quality and style of the clothes
               I received from Shop.co. From casual wear to elegant dresses every piece Ive bought has exceeded my expectations.”`}
              </p>
            
             </div>
            
                </div>
            
            
                <div className="flex h-[186px] w-[358px] lg:h-[240px] lg:w-[400px] text-white border-[1px] rounded-[20px] hidden lg:block">
                <div className=" mt-6 space-x-1 ml-6 ">
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>

            
                <div className="flex items-center space-x-2">
              <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
              Alex K.
              </p>
              <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                <p className="text-white text-xs font-bold">✔</p>
              </div>
            
              
            
             
            </div>
            
            <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-900">
              {`"Finding clothes that align with my personal style used to be a challenge until 
              I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
              </p>
            
             </div>
            
                </div>
            
            
            
                <div className="flex h-[186px] w-[358px] lg:h-[240px] lg:w-[400px] text-white border-[1px] rounded-[20px] hidden lg:block">
                <div className=" mt-6 space-x-1 ml-6 ">
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
            
                <div className="flex items-center space-x-2">
              <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                James L.
              </p>
              <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                <p className="text-white text-xs font-bold">✔</p>
              </div>
            
              
            
             
            </div>
            
            <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-900">
              {`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse
               but also on-point with the latest trends.”`}
              </p>
            
             </div>
            
                </div>
            
            
            
            
            
            
                </div>
                </ScrollAnimation>
            
            
        </div>
    )
}