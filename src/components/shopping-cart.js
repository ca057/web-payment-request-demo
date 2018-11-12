import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ShoppingCart = ({
  availableItems,
  selectedItems,
  onCheckout,
  successfulPayment
}) => {
  const itemList = Object.values(selectedItems).map(({ id, amount }) => {
    const { name, price } = availableItems[id]

    return {
      id,
      amount,
      name,
      total: price * amount
    }
  })

  const overallTotal = itemList.reduce(
    (totalPrice, { total }) => totalPrice + total,
    0
  )

  const showPayButton = overallTotal > 0 && !successfulPayment
  const showSuccessMessage =
    successfulPayment && Object.keys(selectedItems).length === 0
  const showErrorMessage =
    successfulPayment === false && Object.keys(selectedItems).length === 0

  return (
    <Fragment>
      <h2>Shopping Cart</h2>
      {itemList.length === 0 && <p>Select items from the list above!</p>}
      {itemList.map(({ id, amount, name, total }) => (
        <p key={id}>{`${amount} x ${name} (${total}€)`}</p>
      ))}
      {showPayButton &&
        <button type='button' onClick={onCheckout}>
          {`Pay ${overallTotal}€`}
        </button>}
      {showSuccessMessage && <p>Your payment was successful!</p>}
      {showErrorMessage && <p>There was an error while paying!</p>}
    </Fragment>
  )
}

ShoppingCart.propTypes = {
  availableItems: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ),
  selectedItems: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  ),
  onCheckout: PropTypes.func.isRequired,
  successfulPayment: PropTypes.bool
}

ShoppingCart.defaultProps = {
  availableItems: {},
  selectedItems: {},
  successfulPayment: false
}

export default ShoppingCart
