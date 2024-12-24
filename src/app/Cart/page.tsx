import Image from "next/image"
export default function CartPage(){

    return(
        <div>
            
            <div>
          <div className="mt-6 w-[358px] lg:ml-12 lg:w-[1340px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />

  </div>
  </div>
             <div>
    <ul className="flex gap-2 lg:text-[16px] lg:ml-20 text-gray-500 mt-4 ml-4 lg:gap-4">
        <li>Home </li>
        <li>
                  <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className="mt-2 "></Image>
            
        </li>
        <li className="text-black">Cart  </li>
      
    </ul>
</div>

<p className="font-satoshi font-bold text-[32px] p-2 ml-2">YOUR CART</p>

        </div>
    )
}