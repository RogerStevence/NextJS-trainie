import React, { Children } from 'react'

const Button = ({children}) => {
    return (
        <button className='w-full min-w-[216px] h-[56px] rounded-[8px] bg-[#ECBD00] shadow-md cursor-pointer'>{children}</button>
    )
}

export default Button