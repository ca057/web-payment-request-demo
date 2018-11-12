import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ProductItem from './product-item'

const ProductSelection = ({
  availableItems,
  onItemSelection,
  selectedItems
}) => {
  const itemsList = Object.values(availableItems).map(item => ({
    ...item,
    inSelection: (selectedItems[item.id] && true) || false
  }))

  return (
    <Fragment>
      <h2>
        Our Selection
      </h2>
      <div>
        {itemsList.map(item => (
          <ProductItem
            {...item}
            onItemSelection={onItemSelection}
            key={item.id}
          />
        ))}
      </div>
    </Fragment>
  )
}

ProductSelection.propTypes = {
  availableItems: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ),
  selectedItems: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ),
  onItemSelection: PropTypes.func.isRequired
}

ProductSelection.defaultProps = {
  availableItems: {},
  selectedItems: {}
}

export default ProductSelection
