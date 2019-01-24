import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getCategories} from '../../store/actions/categoryActions'
import CategoryItem from './CategoryItem'

class Categories extends Component {
  
  componentDidMount() {
      this.props.getCategories();
  }

  render() {
    const categories = this.props.categories
    const fixed  = this.props.isFixed ? ' fixed' : ''

    if (this.props.categories) {
      return (
            <ul className={"collection with-header" + fixed }>
              <li className="collection-header"><h4>Categories</h4></li>
              {categories.map(category => {
                return (<CategoryItem category={category} key={category.id}/>)
              })}
            </ul>
      );
    }else {
      return (null)
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories())
  }
}

const mapStateToProps = (state) =>  {
  return {
   categories: state.category.categories
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
