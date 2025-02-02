/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/product_detail/:id',
  //       destination: '/Product_Detail/:id',
  //       permanent: true, 
  //     },
  //   ];
  // },
};

export default nextConfig;
