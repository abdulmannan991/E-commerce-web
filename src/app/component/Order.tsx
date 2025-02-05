import { useCart } from "../../../context/CartContext";

const OrderSummary = () => {
  const { getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Discount: -${discount.toFixed(2)}</p>
      <p>Delivery Fee: ${deliveryFee}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
