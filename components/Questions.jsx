import React from 'react';

const inputItems = [
    {
        holder: 'Your email address',
        type: 'text',
        maxLength: '25'
    },
    {
        holder: 'Your name',
        type: 'text',
        maxLength: '40'
    }
]

function Questions() {
    return (
        <div className='z-40 relative' id='questions'>
            <div className='container mx-auto mt-[124px] sm:flex hidden'>
                <div className='h-full w-full flex flex-col items-end'>
                    <form action="" className='flex flex-col w-[100%] max-w-[670px] h-[706px] items-center shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] bg-[#FFFCEC] rounded-[15px]'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-primary text-center mt-[40px] text-[32px]'>HAVE <span className='text-seccondary font-semibold'>QUESTIONS</span>?</h1>
                            <p className='leading-5 text-[14px] text-[#263800] text-center w-[100%] max-w-[491px] mt-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget justo, neque, a vitae neque phasellus ultrices. Nunc vel amet, adipiscing erat pulvinar id vestibulum, malesuada morbi. </p>
                        </div>
                        <div className='mt-[40px] flex flex-col w-[100%] max-w-[546px] space-y-[18px] text-primary '>
                            {
                                inputItems.map((item, index) =>
                                    <input key={index} type={item.type} placeholder={item.holder} maxLength={item.maxLength} className='shadow-xl pl-[16px] py-[11px] focus:outline-none focus:bg-slate-200'/>
                                )
                            }
                            <textarea name="" id="" cols="30" rows="10" maxLength="360" className='text-primary shadow-xl pl-[16px] pt-[11px] resize-none focus:outline-none focus:bg-slate-200' placeholder='Enter your message here'></textarea>
                        </div>
                        <button className='w-full min-w-[100px] max-w-[216px] h-[56px] rounded-[8px] bg-[#ECBD00] text-[#FFFCEC] cursor-pointer uppercase mt-[32px] shadow-md hover:bg-[#ecbd00a9] focus:bg-[#b99400] duration-150'>send</button>
                    </form>
                </div>
            </div>

            {/* {'Mobile'} */}
            
            <div className='sm:hidden mt-[114px]'>
                <div className='h-full flex flex-col items-end mx-4'>
                    <form action="" className='flex flex-col max-w-[670px] max-h-[599px] h-[100%] min-h-[550px] items-center shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] bg-[#FFFCEC] rounded-[15px] px-4'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-primary text-center mt-[32px] text-[32px] leading-[37.57px]'>HAVE <span className='text-seccondary font-semibold'>QUESTIONS</span>?</h1>
                            <p className='leading-5 text-[14px] text-[#263800] text-center w-[100%] max-w-[491px] mt-[18px] max-h-[80px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget justo, neque, a vitae neque phasellus ultrices. Nunc vel amet, adipiscing erat pulvinar id vestibulum, malesuada morbi. </p>
                        </div>
                        <div className='mt-[32px] flex flex-col w-[100%] max-w-[546px] space-y-[16px] text-primary '>
                            {
                                inputItems.map((item, index) =>
                                    <input key={index} type={item.type} placeholder={item.holder} className='shadow-xl pl-[16px] py-[11px] focus:outline-none'/>
                                )
                            }
                            <textarea name="" id="" cols="30" rows="6" className='text-primary shadow-xl pl-[16px] pt-[11px] resize-none focus:outline-none max-h-[179px]' placeholder='Enter your message here'></textarea>
                        </div>
                        <button className='w-full min-w-[100px] max-w-[219px] max-h-[56px] min-h-[46px] rounded-[8px] bg-[#ECBD00] text-[#FFFCEC] cursor-pointer uppercase my-[24px] shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)]'>send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Questions