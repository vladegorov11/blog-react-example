import React from 'react'

const CategoryItem = (props) => {

  return (
    <li className="collection-item">{props.category.name}</li>
  )
}

export default CategoryItem
