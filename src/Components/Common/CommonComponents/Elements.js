import React from 'react'

export const Button = (props) => {
  const { title, onClickHandler, className, variant = 'Primary' } = props;
  return (
    <button
      onClick={onClickHandler}
      className={`px-4 py-2 rounded-md ${className} ${variant === "Primary" ? "bg-purple-500 text-white" : "bg-gray-400 text-black"
        }`}
    >
      {title}
    </button>
  )
}

// Reusable Input Component
export const Input = ({ label, value, onChange, onBlur }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-500 mb-1">{label}</label>
    <input
      type="text"
      defaultValue={value}
      onChange={onchange}
      onBlur={onBlur}
      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
    />
  </div>
);

// Reusable Dropdown Component

export const Dropdown = ({ label, options = [], value, onChange }) => (
    <div className="flex flex-col w-full">
        <label className="text-sm text-gray-600 mb-1 font-medium">
            {label}
        </label>

        <select
            value={value}
            onChange={onChange}
            className="
                border border-gray-300 rounded-lg px-3 py-2 
                bg-white text-gray-800
                shadow-sm 
                transition-all duration-200

                hover:border-gray-400 
                focus:outline-none
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500

                cursor-pointer
            "
        >
            {/* Default Placeholder */}
            <option value=""  className="text-gray-400">
                --Select {label}--
            </option>

            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);



