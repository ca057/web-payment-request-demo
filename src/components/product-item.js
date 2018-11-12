import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class ProductItem extends Component {
  handleAdd = () => {
    const { id, onItemSelection } = this.props
    onItemSelection(id, 1)
  }

  handleRemove = () => {
    const { id, onItemSelection } = this.props
    onItemSelection(id, -1)
  }

  render () {
    const { name, price, inSelection } = this.props
    return (
      <div className='product-item'>
        <p>{`${name} - ${price}€`}</p>
        <div>
          <button
            type='button'
            disabled={!inSelection}
            onClick={this.handleRemove}
          >
            - 1
          </button>
          <button type='button' onClick={this.handleAdd}>+ 1</button>
        </div>
      </div>
    )
  }
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onItemSelection: PropTypes.func.isRequired,
  inSelection: PropTypes.bool.isRequired
}

export default ProductItem
