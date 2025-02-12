"use client";

import Checkout from "@/app/component/Checkout"; // Update import path
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function ClientStripePayment() {
  const searchParams = useSearchParams();
  const [cartTotal, setCartTotal] = useState<number | null>(null);

  useEffect(() => {
    const total = parseFloat(searchParams.get("cartTotal") ?? "0");
    setCartTotal(total > 0 ? total : null);
  }, [searchParams]);

  if (cartTotal === null) {
    return <p className="text-red-500">Invalid cart total. Please add items to your cart.</p>;
  }

  return (
    <div>
      <h1>Hello,</h1>
      <p>Please proceed to Payment</p>
      <Elements stripe={stripePromise}>
        <Checkout amount={cartTotal} />
      </Elements>
    </div>
  );
}
