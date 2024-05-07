import React from 'react';

const inputItems = [
    {
        holder: 'Your email address',
        type: 'text'
    },
    {
        holder: 'Your name',
        type: 'text'
    }
]

function Questions() {
    return (
        <div className='mt-[124px]'>
            <div className='container mx-auto'>
                <div className='h-full w-full flex flex-col items-end'>
                    <form action="" className='flex flex-col w-[100%] max-w-[670px] h-[706px] items-center shadow-xl bg-[#FFFCEC] '>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-primary text-center mt-[40px] text-[32px]'>HAVE <span className='text-seccondary font-semibold'>QUESTIONS</span>?</h1>
                            <p className='leading-5 text-[14px] text-[#263800] text-center w-[100%] max-w-[491px] mt-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget justo, neque, a vitae neque phasellus ultrices. Nunc vel amet, adipiscing erat pulvinar id vestibulum, malesuada morbi. </p>
                        </div>
                        <div className='mt-[40px] flex flex-col w-[100%] max-w-[546px] space-y-[18px] text-primary '>
                            {
                                inputItems.map((item, index) =>
                                    <input key={index} type={item.type} placeholder={item.holder} className='shadow-xl pl-[16px] py-[11px] focus:outline-none'/>
                                )
                            }
                            <textarea name="" id="" cols="30" rows="10" className='text-primary shadow-xl pl-[16px] pt-[11px] resize-none focus:outline-none' placeholder='Enter your message here'></textarea>
                        </div>
                        <button className='w-full min-w-[100px] max-w-[216px] h-[56px] rounded-[8px] bg-[#ECBD00] text-[#FFFCEC] cursor-pointer uppercase mt-[32px] shadow-md'>send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Questions