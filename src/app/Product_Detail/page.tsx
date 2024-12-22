import Image from "next/image"
export default function ProductDetail(){

    return(

        <div>
          <div className="mt-6 w-[358px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />
</div>

<div>
    <ul className="flex gap-2 text-gray-500 mt-4 ml-4">
        <li>Home </li>
        <li>Shop </li>
        <li>Men </li>
        <li>T-Shirt</li>
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
<br /><br /><br /><br />
        </div>
    )
}