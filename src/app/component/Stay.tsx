import ScrollAnimation from "./Scroll_animation";

export default function StayPage(){


    return(

        <div className="">
            {/* Stay upto date */}
            <ScrollAnimation>
            <div className="w-[392px] h-[846px] lg:w-[1441px] lg:h-[499px] bg-lightGray lg:mt-[200px] mt-[150px]  ">

<div className="flex justify-center items-center ">
<div className="w-[358px] h-[293px] lg:w-[1240px] lg:h-[180px]   flex justify-center rounded-[20px] -ml-1 -mt-[100px] bg-black">
            <div className=" font-integral font-bold text-white text-[32px] mt-6 lg:flex lg:justify-start lg:items-start gap-2">
            
            <p className="hidden lg:block w-[451px] h-[94px]">STAY UPTO DATE ABOUT OUR LATEST OFFER</p>
            <p className="lg:hidden ">
            STAY UPTO DATE 
            </p>
            <span className="-mt-2 block lg:hidden">
              About Our
            </span>
{/*             
            <span className="  hidden lg:block">
              About 
            </span> */}
            
            <span className="-mt-2 block lg:hidden ">
              Latest Offers
            </span>
            
            <p className="">
            <span className="  hidden  ">
              Our Latest Offers
            </span>
            </p>
            
            
            <div>
            
            
              
            <div className="relative w-[311px]">
              <span className="text-[16px] mt-2 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                📧 
              </span>
              <input
                name="text"
                placeholder="Enter your email address"
                className="text-[14px] text-black outline-none pl-10 h-[42px] w-full rounded-[62px] bg-white border-[1px] font-satoshi font-medium mt-4"
              />
            </div>
              
            
            <button className="h-[42px] w-[311px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
              <p className="text-black font-satoshi text-[14px]">
              Subscribe to Newsletter
              </p>
            </button>
            </div>
            
            
            
            </div>
            
            
 
</div>

</div>

  </div>
</ScrollAnimation>
           
        </div>
    )
}