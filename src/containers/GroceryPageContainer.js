import React, { Component } from 'react'
import { connect } from 'react-redux'

import GroceryListContainer from './GroceryListContainer'
import GroceryFormContainer from './GroceryFormContainer'
import { addNewGrocery } from '../modules/groceries'

class GroceryPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Grocery List React</h1>
        <GroceryFormContainer
          addNewGrocery={this.props.addNewGrocery}
          groceryList={this.props.groceryList}
        />
        <GroceryListContainer
          groceries={this.props.groceryList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceries.groceryList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewGrocery: (grocery) => dispatch(addNewGrocery(grocery))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPageContainer)
