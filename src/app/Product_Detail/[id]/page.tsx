"use client"
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; 
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../../types/product';
import StayPage from '@/app/component/Stay';
import Footer from '@/app/component/Footer';
import { useCart } from '../../../../context/CartContext';

const ProductDetail = ({params}:{params:{id:string}}) => {
  const [counter, setCounter] = useState(1); 
  const { addToCart } = useCart();
    
    

    const handleIncrease = () => setCounter(counter + 1);
    const handleDecrease = () => setCounter(counter > 1 ? counter - 1 : 1);
  
    // Function to add to cart
    const handleAddToCart = () => {
      
      if (product) {
        addToCart(
          {
            _id: product._id,   
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: counter,   
          },
          counter 
        );
        
      }
      alert("Item added to Cart!")

    };
    
  
  
    const id = params.id
    const [product, setProduct] = useState<Product | null>(null); // Use Product type

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productData = await client.fetch(`*[_type == "products" && _id == $id][0]`, { id });
        setProduct(productData);
      };

      fetchProduct();
    }
  }, [id]);
  if (!product)
    return (
      <div className="flex flex-col justify-center items-center h-screen animate-fadeIn">
        {/* Rotating Spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
  
        {/* Loading Text with Bouncing Dots */}
        <p className="text-lg font-semibold text-gray-700 mt-4 flex items-center">
          Loading product
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
          <span className="animate-bounce delay-300">.</span>
        </p>
      </div>
    );
    
  

  return (
    <div>
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
        <div className="flex flex-col lg:flex-row items-center lg:items-start -space-x-6  mx-auto max-w-6xl p-6">
  {/* Image Section */}
  <div className="w-full lg:w-1/2 lg:ml-20 xl:ml-44  flex justify-center">
    <Image
      src={urlFor(product.image).url()} // Use the correct field for the image
      width={400}
      height={400}
      alt={product.name}
      className="object-cover rounded-lg w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[450px]  "
    />
  </div>

  {/* Product Details */}
  <div className="w-full lg:w-1/2 ">
    <h1 className="lg:text-3xl  text-2xl font-bold mt-4 lg:mt-0 ">{product.name}</h1>
    
    {/* Ratings */}
    <div className="flex items-center mt-2">
      <span className="text-yellow-500 text-xl">★★★★★</span> 
      <span className="ml-2 text-gray-600 text-sm">4.5/5</span>
    </div>

    {/* Price Section */}
    <div className="flex items-center mt-2">
      <span className="text-2xl font-bold">{product.price}rs</span>
      <span className="ml-2 bg-red-100 text-red-500 bg-red text-rose-500 text-center rounded-full px-2 py-1  text-sm">-{product.discountPercent}%</span>
    </div>

    {/* Description */}
    <p className="text-gray-600 mt-2">
      This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
    </p>

    {/* Color Selection */}
    <div className="mt-4">
  <span className="font-semibold text-gray-700">Select Colors</span>
  <div className="flex gap-2 mt-2">
    {(Array.isArray(product.colors) ? product.colors : product.colors?.split(", ")).map((color, index) => (
      <span
        key={index}
        className="w-8 h-8 rounded-full border-2 cursor-pointer"
        style={{ backgroundColor: color }}
      ></span>
    ))}
  </div>
</div>


    {/* Size Selection */}
    <div className="mt-4">
  {/* Size Selection */}
  <span className="font-semibold text-gray-700">Choose Size</span>
  <div className="flex gap-2 mt-2">
    {(Array.isArray(product.sizes) ? product.sizes : product.sizes?.split(", ")).map((size, index) => (
      <button key={index} className="px-4 py-2 border rounded-md hover:bg-black hover:text-white">
        {size}
      </button>
    ))}
  </div>
</div>

{/* Quantity Selector & Add to Cart Section */}
<div className="flex flex-col sm:flex-row items-center justify-between mt-6 sm:mt-4">
  {/* Quantity Selector */}
  <div className="flex items-center justify-evenly w-[110px] h-[44px] sm:w-[80px] sm:h-[34px] lg:w-[170px] lg:h-[52px] rounded-full bg-lightGray">
    <button onClick={handleDecrease} className="text-2xl px-3 sm:px-2 lg:px-4">-</button>
    <p className="text-base sm:text-sm lg:text-lg">{counter}</p>
    <button onClick={handleIncrease} className="text-2xl px-3 sm:px-2 lg:px-4">+</button>
  </div>

  {/* Add to Cart Button */}
  <button
    onClick={handleAddToCart}
    className="mt-4 sm:mt-0 w-full max-w-[200px] sm:max-w-[236px] lg:max-w-[400px] h-[40px] sm:h-[44px] lg:h-[52px] bg-black text-white rounded-full flex justify-center items-center"
  >
    Add to Cart
  </button>
</div>

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
        <StayPage/>    
                <Footer/> 
                
      
     



    </div>
  );
};

export default ProductDetail;