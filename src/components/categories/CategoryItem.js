import React from 'react'

const CategoryItem = (props) => {
  return (
    <li className="">
      <a href="#!" className="category-link">{props.category.name}</a>
    </li>
  )
}

export default CategoryItem
