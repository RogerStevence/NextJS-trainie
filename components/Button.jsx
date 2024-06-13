import React, { Children } from 'react'

const Button = ({children}) => {
    return (
        <button className='w-full max-w-[219px] h-[56px] rounded-[8px] bg-[#ECBD00] shadow-md cursor-pointer uppercase hover:bg-primary duration-500 hover:shadow-none hover:border-white hover:border-[2px] active:bg-[#253406] transition-[background-color]'>{children}</button>
    )
}

export default Button