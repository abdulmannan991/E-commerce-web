"use client";

import { useCart } from "../../../context/CartContext";
import { useRouter } from "next/navigation";

export default function OrderSummary() {
  const { getCartTotal } = useCart();
  const router = useRouter();

  const subtotal = getCartTotal();
  const discount = subtotal * 0.2;
  const deliveryFee = subtotal === 0 ? 0 : 100;
  const total = subtotal - discount + deliveryFee;

  const handleCheckout = () => {
    router.push(`/stripe-payment?cartTotal=${total.toFixed(2)}`);
  };

  return (
    <div className="w-full lg:w-[358px] p-4 sm:p-6 border-[1px] rounded-[20px] mt-6 lg:mt-0">
      <p className="font-satoshi font-bold text-[20px] lg:text-[24px]">Order Summary</p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-400 text-[16px] lg:text-[20px]">Subtotal</p>
        <p className="font-bold text-[16px] lg:text-[20px]">{subtotal.toFixed(2)} Rs</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-400 text-[16px] lg:text-[20px]">Discount (-20%)</p>
        <p className="font-bold text-rose-500 text-[16px] lg:text-[20px]">-{discount.toFixed(2)} Rs</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-400 text-[16px] lg:text-[20px]">Delivery Fee</p>
        <p className="font-bold text-[16px] lg:text-[20px]">{deliveryFee.toFixed(2)} Rs</p>
      </div>

      <div className="mt-4 border-t border-gray-300"></div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-[16px] lg:text-[20px]">Total</p>
        <p className="font-bold text-[20px] lg:text-[24px]">{total.toFixed(2)} Rs</p>
      </div>

      <button
        onClick={handleCheckout}
        className="bg-black text-white rounded-full px-6 py-3 w-full lg:w-[326px] flex items-center justify-center mt-4"
      >
        Go to Checkout
      </button>
    </div>
  );
}
