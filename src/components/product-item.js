import React, { Component } from 'react'
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
          {inSelection &&
            <button type='button' onClick={this.handleRemove}>
              <span aria-label={`remove one ${name}`} role='img'>➖</span>
            </button>}
          <button type='button' onClick={this.handleAdd}>
            <span aria-label={`add one ${name}`} role='img'>➕</span>
          </button>
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
