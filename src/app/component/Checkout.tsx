'use client'
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function Checkout({ amount }: { amount: number }) {
    const [errors, setErrors] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        const getPaymentIntent = async () => {
            const response = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount }),
            });
            const json = await response.json();
            setClientSecret(json.client_secret);
        };
        getPaymentIntent();
    }, [amount]);

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
    
        if (!stripe || !elements) {
            setErrors("Invalid operation");
            setLoading(false);
            return;
        }
    
        // Submit the form
        const { error: submitError } = await elements.submit();
    
        if (submitError) {
            setErrors(submitError.message || "Form submission failed.");
            setLoading(false);
            return;
        }
    
        // Confirm the payment
        const { error } = await stripe.confirmPayment({
            clientSecret,
            elements,
            confirmParams: {
                return_url: window.location.origin, // You can change this to any page
            },
        });
    
        setLoading(false);
    
        if (error) {
            setErrors(error.message || "Payment failed.");
            return;
        }
    
        // Show success pop-up
        setPaymentSuccess(true);
    
        // Redirect after 3 seconds
        setTimeout(() => {
            window.location.href = "/";
        }, 3000);
    };    
    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleFormSubmit} className="w-full max-w-md">
                {clientSecret && <PaymentElement />}
                <button
                    className="mt-4 bg-black rounded-2xl px-6 py-2 text-white font-semibold"
                    disabled={loading}
                >
                    {loading ? "Processing..." : `Pay $${amount}`}
                </button>
                {errors && <p className="text-red-500 mt-2">{errors}</p>}
            </form>

            {/* Pop-up for Payment Success */}
            {paymentSuccess && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-green-600 text-xl font-semibold">✅ Payment Successful!</p>
            <p className="text-gray-500">Redirecting to Home...</p>
        </div>
    </div>
)}


        </div>
    );
}
