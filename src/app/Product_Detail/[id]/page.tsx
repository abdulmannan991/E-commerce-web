// // pages/Product_Detail/[id].tsx

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { client } from '@/sanity/lib/client'; // Adjust the import based on your setup
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';// Ensure you have a function to get the image URL
// import { Product } from '../../../../types/product';

// const ProductDetail = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get the product ID from the URL
//   const [product, setProduct] = useState<Product | null>(null); // Use Product type

//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         const productData = await client.fetch(`*[_type == "products" && _id == $id][0]`, { id });
//         setProduct(productData);
//       };

//       fetchProduct();
//     }
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-2xl font-bold">{product.name}</h1>
//       <Image
//         src={urlFor(product.image).url()} // Use the correct field for the image
//         width={300}
//         height={300}
//         alt={product.name}
//         className="object-cover mt-4"
//       />
//       <p className="text-lg mt-2">Price: ${product.price}</p>
//     </div>
//   );
// };

// export default ProductDetail;