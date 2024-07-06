export function price(order) {
  const { quantity, itemPrice } = order;
  const basePrice = quantity * itemPrice;
  const discount = Math.max(0, quantity - 500) * itemPrice * 0.05;
  const shippingFee = Math.min(basePrice * 0.1, 100);
  return basePrice - discount + shippingFee;
}
