'use client'
import Image from "next/image"
import StayPage from "../component/Stay"
import Footer from "../component/Footer"
import Link from "next/link"
import { useState } from "react"
import ScrollAnimation from "../component/Scroll_animation"

       

  export default  function ProductDetail(){
    

    const [Counter,setincrease] =  useState(0)
    
    
    
    
    const handleIncrease = ()=>{
      if(Counter<100){
       setincrease(Counter +  1)
      }
    }
  
  
    const handleDecreases = ()=>{
      if(Counter>0){
       setincrease(Counter -  1)
      }
    }
    return(

        <div className="">
          <ScrollAnimation>
          <div className="mt-6 w-[358px] lg:w-[1240px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
</div>

<div>
    <ul className="flex gap-2 lg:text-[16px] lg:ml-20 text-gray-500 mt-4 ml-4 lg:gap-4">
        <li>Home  </li>
        <li>
                          <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className="mt-2 "></Image>
                    
                </li>
        <li>Shop  </li>
        <li>
                          <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className="mt-2 "></Image>
                    
                </li>
        <li>Men  </li>
        <li>
                          <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className="mt-2 "></Image>
                    
                </li>
        <li>T-Shirt </li>
    </ul>
</div>

<div className="flex justify-center items-center mt-4 lg:flex lg:flex-col lg:items-start lg:ml-[300px]  ">
    <Image src={"/Dimage1.png"} height={290} width={358} alt="product" className="lg:w-[444px] lg:h-[530px] mt-4"></Image>
</div>


<div className="flex ml-2 justify-center items-center mt-4 gap-4 lg:flex lg:flex-col lg:ml-28 lg:items-start lg:-mt-[530px]">
    <Image src={"/image2.png"} height={106} width={111} alt="product"  className="smMax:h-[90px] smMax:w-[100px] lg:w-[152px] h-[167px]"></Image>
    <Image src={"/Dimage3.png"} height={106} width={111} alt="product" className="smMax:h-[90px] smMax:w-[100px] lg:w-[152px] h-[168px]" ></Image>
    <Image src={"/Dimage2.png"} height={106} width={112} alt="product" className="smMax:h-[90px] smMax:w-[100px] lg:w-[152px] h-[167px]"></Image>

</div>


<div className="lg:flex lg:flex-col lg:items-end  lg:mr-2 lg:-mt-[540px] ">
    <p className="font-integral w-[300px]  font-bold text-[24px] mt-2 ml-4 h-[56px]  lg:text-[40px] lg:w-[600px] lg:h-[48px] ">
    One Life Graphic T-shirt
    </p>
    <Image src={"/Dstar.png"} height={19} width={154} alt="rating" className="mt-4 ml-4 lg:mr-[440px]" ></Image>

</div>

<div className="flex mt-4 ml-4 gap-3 lg:flex lg:justify-end lg:items-end lg:mr-[380px] ">
<p className="font-satoshi font-bold text-[24px] lg:text-[32px]">
$260
    </p>

    <p className="font-satoshi font-bold text-[24px] text-gray-400 line-through lg:text-[32px]">
$300
    </p>

    <div className="h-[31px] w-[62px] rounded-[62px] bg-red text-rose-500 text-center lg:mb-2  flex justify-center items-center">
        <p>
            -40%
        </p>
    </div>
    
</div>

<div className="lg:flex lg:flex-col lg:items-end lg:mr-64">
<p className="h-[50px] smMax:w-[310px] w-[368px] ml-4 text-[14px] text-gray-400 mt-4  lg:text-[16px] lg:-mr-[140px] lg:h-[33px] lg:w-[490px]">
    This graphic t-shirt which is perfect for any 
    occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
    </p>
</div>

<div className="mt-6 w-[358px] lg:w-[590px] text-center border-[1px] flex flex-col justify-center items-center mx-auto lg:flex lg:flex-col lg:items-end lg:mr-4">
  <hr />
</div>

<p className="text-gray-400 mt-4 ml-4 font-satoshi text-[14px] lg:flex lg:flex-col lg:items-end lg:mr-[520px]">
    Select Colors
</p>

<div className="mt-4 lg:flex lg:flex-col lg:items-end lg:mr-[460px]">

<Image src={"/Dcolors.png"} height={39} width={142} alt="rating" className="mt-4 ml-4" ></Image>


</div>

<div className="mt-6 w-[358px] lg:w-[590px]  text-center border-[1px] flex flex-col justify-center items-center mx-auto lg:flex lg:flex-col lg:items-end lg:mr-4">
  <hr />
</div>

<div className="lg:flex lg:flex-col lg:items-end lg:mr-[520px]">
    
<p className="text-gray-400 mt-4 ml-4 font-satoshi text-[14px]">
    Choose Size
</p>

</div>

<div className="flex gap-4 mt-4 lg:flex  lg:flex-row lg:items-end lg:ml-[770px] ">

<div className=" h-[39px] w-[74px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
<button className="text-customBlack hover:text-white" >Small</button>

</div>

<div className=" h-[39px] w-[90px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
<button className=" text-customBlack hover:text-white">Medium</button>

</div>

<div className=" h-[39px] w-[76px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
<button className="text-customBlack hover:text-white">Large</button>

</div>

<div className=" h-[39px] w-[89px] rounded-[62px] bg-lightGray hover:bg-black  flex justify-center items-center  text-center">
<button className=" text-customBlack hover:text-white">X-Large</button>

</div>

{/* ... */}
</div>



<div className="mt-6 w-[358px] lg:w-[590px]  text-center border-[1px] flex flex-col justify-center items-center mx-auto lg:mr-4">
  <hr />
</div>


<div className="smMax:w-[80px] smMax:h-[34px]  mt-4 ml-4 h-[44px] w-[110px] lg:h-[52px] lg:w-[170px] lg:ml-[780px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center justify-evenly">
<button onClick={handleDecreases} className=" text-customBlack  text-[24px]">-</button>
<p> {`${Counter}`} </p>
<button onClick={handleIncrease} className=" text-customBlack text-[24px]">+</button>




</div>


<div className="flex justify-end items-end -mt-11">
<div className="smMax:w-[200px] smMax:h-[40px] smMax:mt-2  h-[44px]  w-[236px] lg:h-[52px] lg:-mt-2  lg:w-[400px] rounded-[62px] bg-black flex justify-center items-center  text-center">
<Link href={"/Cart"}>

<button className=" text-white">Add to Cart</button>
</Link>
</div>
</div>


<div className="flex gap-10 mt-10 ml-4 justify-around">

<div>
<button className=" text-customBlack  lg:text-[20px] " >Product Details</button>
</div>

<div>
<button className=" text-black lg:text-[20px]" >Rating & Reviews</button>
</div>

<div>
<button className=" text-customBlack lg:text-[20px]" >FAQs</button>
</div>

</div>



<div className="mt-6 w-[360px]  border-[1px]  ml-4 lg:ml-24 lg:w-[1200px]">
  <hr />
</div>

<div className="lg:flex lg:justify-center lg:items-center ">
<div className=" h-[1px] border-black smMax:ml-36 lg:mr-14 lg:w-[300px] w-[140px] text-black bg-black  -mt-[2px] border-[1px]  ml-[144px]">
</div>
</div>

<div className="mt-6 lg:w-0 w-[80px]  border-[1px]  -mt-[2px]  ml-[284px] hidden lg:block">
  <hr />
</div>
     
</ScrollAnimation>

<ScrollAnimation>
<div className="flex gap-2">
<p className="smMax:text-[14px] font-satoshi font-bold text-[20px] mt-4 ml-4 lg:mt-2">
        All Reviews 
    </p>

    <p className="font-satoshi font-normal text-gray-400 text-[14px] mt-6 lg:mt-4 ">
        (451)
    </p>

    <div className="ml-6 lg:ml-[740px] lg:-mt-2">
<Image src={"/filter.png"} height={40} width={40} alt="rating" className="smMax:-ml-1 mt-4 ml-4" ></Image>
        

    </div>

    <div className="flex justify-end items-end lg:ml-[0px] hidden lg:block">
<div className=" h-[40px]  w-[113px] lg:h-[48px]  lg:w-[120px] rounded-[62px] bg-gray-300 flex justify-center items-center  text-center">
<button className=" text-black text-[12px]">Latest</button>

</div>
</div>

    <div className="flex justify-end items-end lg:mb-4 lg:mr-[100px] ">
<div className=" h-[40px]  w-[113px] lg:h-[48px]  lg:w-[166px] rounded-[62px] bg-black flex justify-center items-center  text-center">
<button className=" text-white text-[12px]">Write a Review </button>

</div>
</div>
</div>


            {/* Card 1 */}
            <div className="lg:grid lg:grid-cols-2 ">
<div className="flex justify-center items-center mt-6 gap-6  ">
            
            <div className="flex h-[224px] w-[358px] lg:w-[610px] lg:h-[241px] text-white border-[1px] rounded-[20px] ">
                        <div className=" mt-6 space-x-1 ml-6 ">
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
            
                    
                        <div className="flex items-center space-x-2">
                      <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                      Samantha D.
                      </p>
                      <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                        <p className="text-white text-xs font-bold">✔</p>
                      </div>
                     
                    </div>
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5 lg:leading-6">
                      {`"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, 
                      I appreciate the attention to detail. It's become my favorite go-to shirt."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5 lg:mt-4">
                      {`Posted on Augest 14, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>
                    
        
        {/*Card 2  */}

     
<div className="flex justify-center items-center mt-6 gap-4  ">
            
            <div className="flex h-[224px] w-[358px] lg:w-[610px] lg:h-[241px] lg:-ml-20 text-white border-[1px] rounded-[20px] ">
                        <div className=" mt-6 space-x-1 ml-6 ">
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
            
                    
                        <div className="flex items-center space-x-2">
                      <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                      Alex M.
                      </p>
                      <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                        <p className="text-white text-xs font-bold">✔</p>
                      </div>
                     
                    </div>
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5 lg:leading-6">
                      {`"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, 
                      and this t-shirt definitely gets a thumbs up from me."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5 lg:mt-4">
                      {`Posted on Augest 15, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>

{/* Card 3 */}
                            
<div className="flex justify-center items-center mt-6 gap-6  ">
            
            <div className="flex h-[224px] w-[358px] lg:w-[610px] lg:h-[241px] text-white border-[1px] rounded-[20px] ">
                        <div className=" mt-6 space-x-1 ml-6 ">
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
            
                    
                        <div className="flex items-center space-x-2">
                      <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                      Ethan R.
                      </p>
                      <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                        <p className="text-white text-xs font-bold">✔</p>
                      </div>
                     
                    </div>
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5 lg:leading-6">
                      {`"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's
                       touch in every aspect of this shirt."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5 lg:mt-4">
                      {`Posted on August 16, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>

                        {/* Card 4 */}

                        <div className="flex justify-center items-center mt-6 gap-6  hidden lg:block">
            
            <div className="flex h-[224px] w-[358px] lg:w-[610px] lg:h-[241px] text-white border-[1px] rounded-[20px] ">
                        <div className=" mt-6 space-x-1 ml-6 ">
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
            
                    
                        <div className="flex items-center space-x-2">
                      <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                      Olivia P.
                      </p>
                      <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                        <p className="text-white text-xs font-bold">✔</p>
                      </div>
                     
                    </div>
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5 lg:leading-6">
                      {`"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the
                       designer poured their creativity into making this t-shirt stand out."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5 lg:mt-4">
                      {`Posted on August 17, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>

                        {/* Card 5 */}
                    
                        <div className="flex justify-center items-center mt-6 gap-6 lg:ml-8  hidden lg:block">
            
            <div className="flex h-[224px] w-[358px] lg:w-[610px] lg:h-[241px] text-white border-[1px] rounded-[20px] ">
                        <div className=" mt-6 space-x-1 ml-6 ">
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
            
                    
                        <div className="flex items-center space-x-2">
                      <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                      Liam K.
                      </p>
                      <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                        <p className="text-white text-xs font-bold">✔</p>
                      </div>
                     
                    </div>
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5 lg:leading-6">
                      {`"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing 
                      a piece of art that reflects my passion for both design and fashion."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5 lg:mt-4">
                      {`Posted on August 18, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>

                        {/* Card 6 */}

                        <div className="flex justify-center items-center mt-6 gap-6  hidden lg:block ">
            
            <div className="flex h-[224px] w-[358px] lg:w-[610px] lg:h-[241px] text-white border-[1px] rounded-[20px] ">
                        <div className=" mt-6 space-x-1 ml-6 ">
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
                        <span className="text-yellow-500 ">⭐</span>
            
                    
                        <div className="flex items-center space-x-2">
                      <p className=" mt-2 font-satoshi text-[16px] lg:text-[20px] font-bold text-black">
                      Ava H.
                      </p>
                      <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                        <p className="text-white text-xs font-bold">✔</p>
                      </div>
                     
                    </div>
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5 lg:leading-6">
                      {`"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details
                       and thoughtful layout of the design make this shirt a conversation starter."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5 lg:mt-4">
                      {`Posted on August 19, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>
                    
                        </div>                 
                           
    <div className="flex justify-center items-center mt-4 ">
<div className=" h-[47px]  w-[195px]  rounded-[62px] bg-white border-[1px] flex justify-center items-center  text-center">
<button className="block lg:hidden text-black text-[12px]">Write a Review </button>
<button className="hidden lg:block text-black text-[12px] lg:h-[52px]  lg:w-[230px]">Load more Review </button>

</div>
</div>
</ScrollAnimation>

<ScrollAnimation>

<div>
          <div className="flex justify-center items-center">
          <p className="font-integral w-[184px] h-[72px] lg:w-[579px] lg:h-[58px] text-[32px] lg:text-[48px] font-bold text-center mt-6 ">
          YOU MIGHT ALSO LIKE
          </p>
          </div>
        
          
          <div className="flex space-x-4 p-4 lg:gap-36 lg:hidden">
            <Image src={"/polo.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/gradient.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
        
              
            </div>
            {/* Desktop */}
        
            <div className="flex space-x-4 p-4 lg:gap-6 lg:flex hidden lg:block ">
            <Image src={"/DP.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/DG.png"} width={295} height={298} alt={"menu"} className=" mt-4 "></Image>
        <Image src={"/tipping.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/blackT.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
              
            </div>
            <div className="flex gap-x-16 lg:gap-52">
            <p className="ml-4 w-[312px] text-[16px] h-[22px]  text-sm font-satoshi font-bold lg:text-[20px]">
            Polo with Contrast Trims
              </p>
        
        
              {/* Mobile */}
              <p className=" text-sm w-[250px] text-[16px] h-[22px] font-satoshi font-bold -ml-10 lg:hidden">
              Gradient Graphic T-sh
              </p>
              {/* Desktop */}
              <p className=" text-sm w-[250px] text-[16px] h-[22px] font-satoshi font-bold -ml-[150px] lg:text-[20px] hidden lg:block">
              Gradient Graphic T-shirt
              </p>

              <p className="ml-4 lg:-ml-[95px] w-[312px] text-[16px] h-[22px]  text-sm font-satoshi font-bold lg:text-[20px] hidden lg:block">
              Polo with Tipping Details
              </p>

              <p className="ml-4 lg:-ml-28 w-[312px] text-[16px] h-[22px]  text-sm font-satoshi font-bold lg:text-[20px] hidden lg:block">
              Black Striped T-shirt
              </p>
        
            
            
            </div>
            <div className="flex lg:gap-48 lg:-mt-4">
            <Image  src={"/D4.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-4"></Image>
        <Image src={"/D3.5.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 lg:ml-14 ml-28"></Image>
        <Image  src={"/D45.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-12 hidden lg:block"></Image>
        <Image src={"/D5.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-[95px] hidden lg:block"></Image>
      
        </div>
        
        <div className="flex font-satoshi font-bold text-xl  mt-2 ">
        
        <p className="  ml-4 ">$212</p>
          
          <p className="  ml-2 text-gray-400 line-through">$242</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red  ml-2 text-xs  text-rose-400 text-center">-20%</p>
          <p className="  ml-[70px] lg:ml-[210px]">$145</p>
          <p className="  ml-[70px] lg:ml-[290px] hidden lg:block">$180</p>
          <p className="  ml-[70px] lg:ml-[340px] hidden lg:block">$120</p>
          <p className="  ml-[70px] lg:ml-[10px] lg:text-gray-400 line-through hidden lg:block">$150</p>
        <p className="h-[28px] w-[58px] rounded-2xl bg-red  ml-2 text-[12px]  text-rose-400 text-center hidden lg:block">-30%</p>

   

   
        </div>
        
      
     
        </div>
        </ScrollAnimation>
        <StayPage/>    
        <Footer/> 
             

        </div>
    )
  }