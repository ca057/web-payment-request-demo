import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getDisplayPrice } from '../utils'

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
      {itemList.length === 0 &&
        <p>
          Select
          {' '}
          <span aria-label='pastries' role='img'>🥐 🥐 🥐</span>
          {' '}
          from the list above!
        </p>}
      <ul>
        {itemList.map(({ id, amount, name, total }) => (
          <li key={id}>{`${amount} x ${name} (${getDisplayPrice(total)}€)`}</li>
        ))}
      </ul>
      {showPayButton &&
        <button type='button' onClick={onCheckout}>
          {`Pay ${getDisplayPrice(overallTotal)}€`}
        </button>}
      {showSuccessMessage &&
        <p className='success'>Your payment was successful!</p>}
      {showErrorMessage &&
        <p className='error'>There was an error while paying!</p>}
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
