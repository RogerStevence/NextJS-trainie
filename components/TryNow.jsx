import React from 'react';

function TryNow() {

    const scrollToPersonalProgram = () => {
        const personalProgramElement = document.getElementById('delivery');
        if (personalProgramElement) {
            const elementPosition = personalProgramElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - 100; 

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <div className='bg-primary w-full h-[162px] items-center z-10 relative sm:flex hidden' >
                <div className='container flex justify-center space-x-[93px] items-center max-w-[1440px] w-full z-10 '>
                    <h1 className='text-[32px] flex-none leading-[32px] font-[400] w-[307px]'>Have some doubts? </h1>
                    <h2 className='text-[40px] flex-none leading-[50px] font-[700] w-[675px] h-[50px] tracking-tighter'>ORDER A TEST DAY JUST FOR  <span className='text-seccondary leading-[48px]'>$4.99</span></h2>
                    <button className='min-w-[268px] h-[56px] rounded-[8px] bg-[#ECBD00] shadow-md cursor-pointer uppercase font-[700] text-[18px] leading-[21px] hover:bg-primary duration-500 hover:shadow-none hover:border-white hover:border-[2px] active:bg-[#253406] transition-[background-color]' onClick={scrollToPersonalProgram}> Try Now </button>
                </div>
                {/* {'Mobile'} */}


            </div>
            <div className='sm:hidden flex flex-col min-w-[360px] relative mt-[64px] overflow-hidden' style={{ backgroundImage: ' linear-gradient(134.46deg, rgba(70, 98, 11, 0.8) 0%, #46620B 100%)' }}>
                <div style={{ backgroundImage: `url('/bg_mobile_trynow.png')`, backgroundRepeat: 'no-repeat' }} className='h-[380px] w-[380px] rounded-full absolute -right-[190px] bottom-[22px] -z-1'>
                </div>
                <h3 className='text-[24px] mx-4 mt-8 leading-[32px] z-10'>Have some doubts? </h3>
                <div className='flex flex-col items-start justify-around h-full w-[214px] mt-8 ml-4'>
                    <p className='text-[36px] font-bold leading-[48px] z-10'>ORDER <br />
                        A TEST DAY
                        JUST FOR </p>
                    <p className='text-[48px] leading-[48px] text-seccondary font-bold mt-4'>$4.99</p>
                    <div className='my-8 mb z-10'>
                        <button className='min-w-[268px] h-[56px] rounded-[8px] bg-[#ECBD00] shadow-md cursor-pointer uppercase'> Try Now </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TryNow

