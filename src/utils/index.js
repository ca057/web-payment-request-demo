export const getDisplayPrice = priceInCents => {
  const [euros = '', cents = ''] = (priceInCents / 100).toString().split('.')
  return `${euros},${cents.padEnd(2, '0')}`
}
