export function formatPrice(priceGel: number): string {
  return Number.isInteger(priceGel) ? String(priceGel) : priceGel.toFixed(1);
}
