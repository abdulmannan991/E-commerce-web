"use client";

import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function ClientStripePayment() {
  const searchParams = useSearchParams();
  const [cartTotal, setCartTotal] = useState<number | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const total = parseFloat(searchParams.get("cartTotal") ?? "0");
    setCartTotal(total > 0 ? total : null);
  }, [searchParams]);

  useEffect(() => {
    if (cartTotal) {
      const getPaymentIntent = async () => {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: cartTotal }),
        });
        const json = await response.json();
        setClientSecret(json.client_secret);
      };
      getPaymentIntent();
    }
  }, [cartTotal]);

  if (cartTotal === null) {
    return <p className="text-red-500">Invalid cart total. Please add items to your cart.</p>;
  }

  if (!clientSecret) {
    return <p className="text-blue-500">Loading payment...</p>;
  }

  return (
    <div>
      <h1>Hello,</h1>
      <p>Please proceed to Payment</p>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <Checkout amount={cartTotal} />
      </Elements>
    </div>
  );
}
