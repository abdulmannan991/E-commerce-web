"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { client } from '@/sanity/lib/client'; // Adjust the import based on your setup
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';// Ensure you have a function to get the image URL
import { Product } from '../../../../types/product';

const ProductDetail = ({params}:{params:{id:string}}) => {
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

  if (!product) return <div>Loading...</div>;

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
    <div className="flex flex-col items-center">
        
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Image
        src={urlFor(product.image).url()} // Use the correct field for the image
        width={300}
        height={300}
        alt={product.name}
        className="object-cover mt-4"
      />
      <p className="text-lg mt-2">Price: ${product.price}</p>
      
    </div>

    </div>
  );
};

export default ProductDetail;