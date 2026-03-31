"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Checkout_1 = __importDefault(require("@/app/component/Checkout")); // Update import path
const react_stripe_js_1 = require("@stripe/react-stripe-js");
const stripe_js_1 = require("@stripe/stripe-js");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const stripePromise = (0, stripe_js_1.loadStripe)(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
function ClientStripePayment() {
    const searchParams = (0, navigation_1.useSearchParams)();
    const [cartTotal, setCartTotal] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        const total = parseFloat((_a = searchParams.get("cartTotal")) !== null && _a !== void 0 ? _a : "0");
        setCartTotal(total > 0 ? total : null);
    }, [searchParams]);
    if (cartTotal === null) {
        return <p className="text-red-500">Invalid cart total. Please add items to your cart.</p>;
    }
    return (<div>
      <h1>Hello,</h1>
      <p>Please proceed to Payment</p>
      <react_stripe_js_1.Elements stripe={stripePromise}>
        <Checkout_1.default amount={cartTotal}/>
      </react_stripe_js_1.Elements>
    </div>);
}
exports.default = ClientStripePayment;
