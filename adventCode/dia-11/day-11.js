export default function shouldBuyFidelity(times) {
  let withDescuento = 0;
  for (let i = 1; i <= times; i++) {
    withDescuento = withDescuento + 12 * Math.pow(0.75, i);
  }
  withDescuento = withDescuento + 250
  const withoutDescuento = 12 * times
  return withoutDescuento > withDescuento
}