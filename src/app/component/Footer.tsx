import Image from "next/image";
export default function Footer(){

return(
<div>
<div className="lg:hidden -mt-[700px]">
    <p className="font-integral font-bold text-[28px] w-[160px] h-[22px] leading-6 mt-8  ml-2 ">SHOP.CO</p>
      <p className="font-satoshi text-gray-500 text-[14px] mt-2 ml-2">
      We have clothes that suits your style and which you are proud to wear. From women to men.
      </p>

      <p className="mt-8 ml-2">
        <Image src={"/Social.png"} height={28} width={148} alt="social" ></Image>
      </p>
      <div className="flex justify-around items-start w-full mt-6 flex-wrap">
  {/* Company Section */}
  <div className="flex flex-col mr-12">
    <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium">
      Company
    </p>
    <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[91px] text-gray-500 mt-2 leading-7">
      <li>About</li>
      <li>Features</li>
      <li>Works</li>
      <li>Career</li>
    </ul>
  </div>

  {/* Help Section */}
  <div className="flex flex-col mr-12">
    <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium">
      Help
    </p>
    <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[131px] text-gray-500 mt-2 leading-7">
      <li>Customer Support</li>
      <li>Delivery Detail</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
  </div>

  {/* FAQ Section */}
  <div className="flex flex-col mr-12 mt-6">
    <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium">
      FAQ
    </p>
    <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[91px] text-gray-500 mt-2 leading-7">
      <li>Account</li>
      <li>Manage Deliveries</li>
      <li>Orders</li>
      <li>Payment</li>
    </ul>
  </div>

  {/* Resources Section */}
  <div className="flex flex-col mt-6">
    <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium mr-24">
      Resources
    </p>
    <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[131px] text-gray-500 mt-2 leading-7">
      <li>Free eBook</li>
      <li>Development Tutorial</li>
      <li>How to - Blog</li>
      <li>YouTube Playlist</li>
    </ul>
  </div>
</div>




      
    </div>

    
{/* Desktop */}


<div className="lg:flex hidden flex-wrap justify-between items-start mr-12 mt-12 ml-10">
  <ul className="  font-satoshi text-[14px] font-normal text-gray-500 w-[91px] leading-7">
    <li className="text-[35px] text-black font-bold ">SHOP.CO</li>
    <li className="w-[260px] mt-4">We have clothes that suit your style and which you are proud to wear. From women to men.</li>
    <li className="mt-2 ml-2">
      <Image src={"/dsocial.png"} height={28} width={148} className="w-96 h-[28px]"  alt="social" />
    </li>
  </ul>

  {/* Company Section */}
  <div className="flex flex-col w-auto">
    <p className="font-satoshi text-[16px] font-medium">Company</p>
    <ul className="list-none font-satoshi text-[16px] font-normal text-gray-500 mt-2 leading-8">
      <li>About</li>
      <li>Features</li>
      <li>Works</li>
      <li>Career</li>
    </ul>
  </div>

  {/* Help Section */}
  <div className="flex flex-col w-auto">
    <p className="font-satoshi text-[16px] font-medium">Help</p>
    <ul className="list-none font-satoshi text-[16px] font-normal text-gray-500 mt-2 leading-8">
      <li>Customer Support</li>
      <li>Delivery Detail</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
  </div>

  {/* FAQ Section */}
  <div className="flex flex-col w-auto ">
    <p className="font-satoshi text-[16px] font-medium">FAQ</p>
    <ul className="list-none font-satoshi text-[16px] font-normal text-gray-500 mt-2 leading-8">
      <li>Account</li>
      <li>Manage Deliveries</li>
      <li>Orders</li>
      <li>Payment</li>
    </ul>
  </div>

  {/* Resources Section */}
  <div className="flex flex-col w-auto ">
    <p className="font-satoshi text-[16px] font-medium">Resources</p>
    <ul className="list-none font-satoshi text-[16px] font-normal text-gray-500 mt-2 leading-8">
      <li>Free eBook</li>
      <li>Development Tutorial</li>
      <li>How to - Blog</li>
      <li>YouTube Playlist</li>
    </ul>
  </div>
</div>
{/* Desktop */}


    <div className="w-[358px] lg:ml-12 lg:w-[1240px] border-[1px] flex justify-center items-center mt-16 ml-3">
      <hr />
    </div>

<div className="lg:flex lg:justify-between">
  <p className="lg:ml-12 text-center font-satoshi font-normal text-gray-400 mt-4 text-[14px] ">
  Shop.co © 2000-2021, All rights reserved
  </p>

<div className="lg:flex lg:justify-end lg:items-end flex justify-center items-center mt-4 lg:mr-36">
<Image src={"/Vfooter.png"} height={25} width={240} alt="social" ></Image>

</div>
</div>


</div>
);

}