import Image from "next/image"
import StayPage from "../component/Stay"
import Footer from "../component/Footer"
export default function ProductDetail(){

    return(

        <div>
          <div className="mt-6 w-[358px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
</div>

<div>
    <ul className="flex gap-2 text-gray-500 mt-4 ml-4">
        <li>Home {`>`} </li>
        <li>Shop {`>`} </li>
        <li>Men {`>`} </li>
        <li>T-Shirt </li>
    </ul>
</div>

<div className="flex justify-center items-center mt-4">
    <Image src={"/Dimage1.png"} height={290} width={358} alt="product" ></Image>
</div>


<div className="flex justify-center items-center mt-4 gap-4">
    <Image src={"/image2.png"} height={106} width={111} alt="product" ></Image>
    <Image src={"/Dimage3.png"} height={106} width={111} alt="product" ></Image>
    <Image src={"/Dimage2.png"} height={106} width={112} alt="product" ></Image>

</div>

<div>
    <p className="font-integral font-bold text-[24px] mt-2 ml-4 h-[56px] w-[220px]">
    One Life Graphic T-shirt
    </p>
    <Image src={"/Dstar.png"} height={19} width={154} alt="rating" className="mt-4 ml-4" ></Image>

</div>

<div className="flex mt-4 ml-4 gap-3">
<p className="font-satoshi font-bold text-[24px]">
$260
    </p>

    <p className="font-satoshi font-bold text-[24px] text-gray-400 line-through">
$300
    </p>

    <div className="h-[31px] w-[62px] rounded-[62px] bg-red text-rose-500 text-center  flex justify-center items-center">
        <p>
            -40%
        </p>
    </div>
    
</div>

<div>
<p className="h-[50px] w-[368px] ml-4 text-[14px] text-gray-400 mt-4">
    This graphic t-shirt which is perfect for any 
    occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
    </p>
</div>

<div className="mt-6 w-[358px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
</div>

<p className="text-gray-400 mt-4 ml-4 font-satoshi text-[14px]">
    Select Colors
</p>

<div className="mt-4 ">

<Image src={"/Dcolors.png"} height={39} width={142} alt="rating" className="mt-4 ml-4" ></Image>


</div>

<div className="mt-6 w-[358px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
</div>

<div>
    
<p className="text-gray-400 mt-4 ml-4 font-satoshi text-[14px]">
    Choose Size
</p>

</div>

<div className="flex gap-4 mt-4">

<div className=" h-[39px] w-[74px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack" >Small</button>

</div>

<div className=" h-[39px] w-[90px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack">Medium</button>

</div>

<div className=" h-[39px] w-[76px] rounded-[62px] bg-black flex justify-center items-center  text-center">
<button className=" text-white">Large</button>

</div>

<div className=" h-[39px] w-[89px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center">
<button className=" text-customBlack">X-Large</button>

</div>

{/* ... */}
</div>


<div className="mt-6 w-[358px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
</div>


<div className="mt-4 ml-4 h-[44px] w-[110px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center justify-evenly">
<button className=" text-customBlack  text-[24px]">-</button>
<p>1</p>
<button className=" text-customBlack text-[24px]">+</button>




</div>


<div className="flex justify-end items-end -mt-11">
<div className=" h-[44px]  w-[236px] rounded-[62px] bg-black flex justify-center items-center  text-center">
<button className=" text-white">Add to Cart</button>

</div>
</div>


<div className="flex gap-10 mt-10 ml-4">

<div>
<button className=" text-customBlack" >Product Details</button>
</div>

<div>
<button className=" text-black" >Rating & Reviews</button>
</div>

<div>
<button className=" text-customBlack" >FAQs</button>
</div>

</div>



<div className="mt-6 w-[130px]  border-[1px]  ml-4">
  <hr />
</div>


<div className=" h-[1px] border-black w-[140px] text-black bg-black  -mt-[2px] border-[1px]  ml-[144px]">
  
</div>

<div className="mt-6 w-[80px]  border-[1px]  -mt-[2px]  ml-[284px]">
  <hr />
</div>


<div className="flex gap-2">
<p className="font-satoshi font-bold text-[20px] mt-4 ml-4">
        All Reviews 
    </p>

    <p className="font-satoshi font-normal text-gray-400 text-[14px] mt-6 ">
        (451)
    </p>

    <div className="ml-6 ">
<Image src={"/filter.png"} height={40} width={40} alt="rating" className="mt-4 ml-4" ></Image>
        

    </div>

    <div className="flex justify-end items-end ">
<div className=" h-[40px]  w-[113px] rounded-[62px] bg-black flex justify-center items-center  text-center">
<button className=" text-white text-[12px]">Write a Review </button>

</div>
</div>
</div>


            {/* Card 1 */}
<div className="flex justify-center items-center mt-6 gap-6  ">
            
            <div className="flex h-[224px] w-[358px] lg:h-[240px] lg:w-[400px] text-white border-[1px] rounded-[20px] ">
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
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5">
                      {`"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, 
                      I appreciate the attention to detail. It's become my favorite go-to shirt."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5">
                      {`Posted on Augest 14, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>
                    
        
        {/*Card 2  */}

     
<div className="flex justify-center items-center mt-6 gap-6  ">
            
            <div className="flex h-[224px] w-[358px] lg:h-[240px] lg:w-[400px] text-white border-[1px] rounded-[20px] ">
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
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5">
                      {`"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, 
                      and this t-shirt definitely gets a thumbs up from me."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5">
                      {`Posted on Augest 15, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>


                            
<div className="flex justify-center items-center mt-6 gap-6  ">
            
            <div className="flex h-[224px] w-[358px] lg:h-[240px] lg:w-[400px] text-white border-[1px] rounded-[20px] ">
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
                    
                    <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-400 mt-2 leading-5">
                      {`"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's
                       touch in every aspect of this shirt."`}
                      </p>
                    
                      <p className="font-satoshi text-[14px] lg:text-[16px] font-normal text-gray-500 mt-2 leading-5">
                      {`Posted on August 16, 2023`}
                      </p>
                    
                     </div>
                    
                        </div>
                    
                        </div>
                    
                           
                           
    <div className="flex justify-center items-center mt-4 ">
<div className=" h-[47px]  w-[195px] rounded-[62px] bg-white border-[1px] flex justify-center items-center  text-center">
<button className=" text-black text-[12px]">Write a Review </button>

</div>
</div>


<div>
          <div className="flex justify-center items-center">
          <p className="font-integral w-[184px] h-[72px] text-[32px] lg:text-[48px] font-bold text-center mt-6 ">
          YOU MIGHT ALSO LIKE
          </p>
          </div>
        
          
          <div className="flex space-x-4 p-4 lg:gap-36 lg:hidden">
            <Image src={"/polo.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/gradient.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
        
              
            </div>
            {/* Desktop */}
        
            <div className="flex space-x-4 p-4 lg:gap-12 lg:flex hidden lg:block">
            <Image src={"/dv.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dcourage.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dlo.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dfad.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
              
            </div>
            <div className="flex gap-x-16 lg:gap-52">
            <p className="ml-4 w-[312px] text-[16px] h-[22px]  text-sm font-satoshi font-bold ">
            Polo with Contrast Trims
              </p>
        
              
              <p className=" text-sm w-[250px] text-[16px] h-[22px] font-satoshi font-bold -ml-10">
              Gradient Graphic T-sh
              </p>
        
            
            
            </div>
            <div className="flex lg:gap-48">
            <Image  src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-4"></Image>
        <Image src={"/d35.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-28"></Image>
      
        </div>
        
        <div className="flex font-satoshi font-bold text-xl mt-2 ">
        
        <p className="  ml-4 ">$212</p>
          
          <p className="  ml-2 text-gray-400 line-through">$242</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red  ml-2 text-xs  text-rose-400 text-center">-20%</p>
          <p className="  ml-[70px] lg:ml-[270px]">$145</p>
   
        </div>
        
      
<StayPage/>    
<Footer/>    
        </div>
 
        

<br /><br /><br /><br />
        </div>
    )
}