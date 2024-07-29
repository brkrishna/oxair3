import React from "react";
import Image from "next/image";

const ButtonComponent = ({
    label,
    icon,
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
            {icon && <Image src={icon} alt="icon" className="icon1" />}
            {label}
        </button>
        </>
    )
}

export default ButtonComponent;