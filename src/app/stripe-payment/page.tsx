import dynamic from "next/dynamic";

const ClientStripePayment = dynamic(() => import("@/app/component/ClientStripePayment"), { ssr: false });

export default function Page() {
  return <ClientStripePayment />;
}
