import React from "react";

const ButtonComponent = ({
    label,
    onClick,
    type = 'button',
    style,
    className="bg-green-color rounded-5 border-0 text-white px-3 py-1 font-14",
    disabled = false,
    ...props
}) =>{
    return (
        <>
        <button 
          type={type}
          onClick={onClick}
          style={style}
          className={className}
          disabled={disabled}
          {...props}
        >
            {label}
        </button>
        </>
    )
}

export default ButtonComponent;