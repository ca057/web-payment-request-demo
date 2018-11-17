import React, { PureComponent } from 'react'

import AVAILABLE_ITEMS from '../items'
import processPayment from '../actions/payment'

import ProductSelection from './product-selection'
import ShoppingCart from './shopping-cart'

class App extends PureComponent {
  state = {
    selectedItems: {},
    successfulPayment: null
  }

  handleItemSelection = (id, amount) => {
    this.setState(({ selectedItems }) => {
      const nextState = { ...selectedItems }
      const currentItem = selectedItems[id]
      if (currentItem) {
        const nextAmount = currentItem.amount + amount
        if (nextAmount > 0) {
          nextState[id] = {
            ...currentItem,
            amount: nextAmount
          }
        } else {
          delete nextState[id]
        }
      } else {
        nextState[id] = {
          id,
          amount
        }
      }

      return {
        selectedItems: nextState,
        successfulPayment: null
      }
    })
  }

  handleCheckout = async () => {
    const { selectedItems } = this.state
    const successfulPayment = await processPayment(selectedItems)
    this.setState({ successfulPayment, selectedItems: {} })
  }

  render () {
    const { selectedItems, successfulPayment } = this.state

    return (
      <div className='app'>
        <div className='headline'>
          <h1><span aria-label='croissant' role='img'>🥐</span> Pastry shop</h1>
        </div>
        <main>
          <ProductSelection
            availableItems={AVAILABLE_ITEMS}
            onItemSelection={this.handleItemSelection}
            selectedItems={selectedItems}
          />
          <ShoppingCart
            availableItems={AVAILABLE_ITEMS}
            selectedItems={selectedItems}
            onCheckout={this.handleCheckout}
            successfulPayment={successfulPayment}
          />
        </main>
      </div>
    )
  }
}

export default App
