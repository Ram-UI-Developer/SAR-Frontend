import React from 'react'

const Button = (props) => {
    const {title, onClickHandler, className, variant} = props;
  return (
    <button
    onClick={onClickHandler}
      className={`px-4 py-2 rounded-md ${className} ${
        variant == "Primary" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
        {title}
    </button>
  )
}

export default Button