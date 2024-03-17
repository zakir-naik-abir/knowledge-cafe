import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  const {title} = bookmark;

  return (
    <div className='bg-gray-50 p-4 m-4 rounded-xl'>
      <h3 className='text-lg'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark:PropTypes.array.isRequired
}

export default Bookmark;