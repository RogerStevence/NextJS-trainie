import React from 'react';
import CustomButton from './Button';

function TryNow() {
    return (
        <div className='bg-primary w-full h-[162px] flex items-center z-10 relative' >
            <div className='container mx-auto flex justify-center flex-row space-x-[93px] items-center max-w-[1440px] z-10'>
                <h1 className='text-[32px] flex-none'>Have some doubts? </h1>
                <h2 className='text-[40px] font-extrabold flex-none'>ORDER A TEST DAY JUST FOR  <span className='text-seccondary'>$4.99</span></h2>
                <CustomButton> Try Now </CustomButton>
            </div>
        </div>

    )
}

export default TryNow