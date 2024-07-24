import React from 'react';
import Image from "next/image";
import css from '../components/AboutUS.module.css';


function AboutUS() {

    const ItemsList = [
        {
            title: 'CHOOSE YOUR PROGRAM',
            src: '/1st-item.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'WE COOK WITH FRESH INGREDIENTS',
            src: '/2nd-item.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'QUICK & FREE DELIVERY',
            src: '/3d-item.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'YOU EAT  TASTY & HEALTHY FOOD',
            src: '/4th-item.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]

    return (
        <div className='relative overflow-hidden' id='about'>
            <div className='container mx-auto z-10 relative mt-[250px] hidden sm:flex'>
                <div className={css.bg}></div>
                <div className='h-full w-full flex flex-col items-end'>
                    <h1 className='text-primary text-5xl sm:flex md:text-2xl lg:text-3xl xl:text-5xl font-[800] leading-[64px] z-10'>YOUR<span className='text-seccondary'>&nbsp;DELIVERY</span>&nbsp;TO A<span className='text-seccondary'>&nbsp;HEALTHY</span>&nbsp;LIFE</h1>
                    <div className='flex flex-col items-end bg-[#FFF6C9] pt-6 pl-[144px] rounded-tl-[327px] mt-[10px]'>
                        <p className='text-primary text-right  mb-[64px] max-w-[852px] z-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nulla iaculis elementum cursus feugiat nibh aliquam pellentesque congue. Cursus bibendum velit eu dolor mattis mollis magnis odio. Laoreet nunc turpis mauris id potenti dolor, mi. At tortor, viverra id montes, ac nibh nullam venenatis. Ullamcorper sem egestas diam diam egestas eget. Blandit odio consectetur mauris nunc.
                            Laoreet nunc turpis mauris id potenti dolor, mi. At tortor, viverra id montes, ac nibh nullam venenatis. Ullamcorper sem egestas diam diam egestas eget. Blandit odio consectetur mauris nunc.</p>
                        <div className='flex items-center space-x-4  mb-[64px] z-10'>
                            {
                                ItemsList.map((item, index) => (
                                    <div key={index} className='text-[#263800] text-center flex flex-col py-[32px] items-center bg-[#FFFCEC] rounded-[15px] shadow-md w-[238px] h-[288px]'>
                                        <Image
                                            src={item.src}
                                            alt=''
                                            width='64'
                                            height='64'
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto"
                                            }} />
                                        <h2 className='text-lg font-bold pt-6 w-[190px] leading-[24px]'>{item.title}</h2>
                                        <p className='mt-4 px-2 text-[18px] h-[72px] leading-[24px]'>{item.desc}</p>
                                    </div>))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute z-0 bottom-0 right-0 bg-[#FFF6C9] h-[584px] w-[45%] sm:flex hidden'></div>


            {/* {'Mobile'} */}

            <div className='sm:hidden mt-[96px]'>
                <h1 className='relative text-[32px] text-primary font-bold uppercase text-center leading-[40px] z-20'>your<span className='text-seccondary'> delivery</span>to a <span className='text-seccondary'>healthy </span>life</h1>
                <div className='text-[#263800] text-[16px] text-center flex flex-col space-y-6 px-4 mt-4 leading-[24px] z-10'>
                    <p className='z-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nulla iaculis elementum cursus feugiat nibh aliquam pellentesque congue. Cursus bibendum velit eu dolor mattis mollis magnis odio.</p>
                    <p className='z-10'>Laoreet nunc turpis mauris id potenti dolor, mi. At tortor, viverra id montes, ac nibh nullam venenatis. Ullamcorper sem egestas diam diam egestas eget. Blandit odio consectetur mauris nunc.</p>
                </div>
                <div className='relative h-[628px] max-w-[428px] z-20'>
                    <div className=' absolute h-[628px] w-[428px]  -top-[28px]' style={{ backgroundImage: `url('/mobile_aboutus.png')`, background: 'contain' }}>
                    </div>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 m-4'>
                    {
                        ItemsList.map((item, index) => (
                            <div key={index} className='text-[#263800] text-center flex flex-col py-[32px] items-center bg-[#FFFCEC] rounded-[15px] shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] max-w-[190px] min-w-[150px] max-h-[244px] text-[14px]'>
                                <Image
                                    src={item.src}
                                    alt=''
                                    width='48'
                                    height='48'
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                                <h2 className='font-bold my-4 w-[190px] leading-[20px] text-center px-[21px]'>{item.title}</h2>
                                <p className='pb-8 max-w-[158px] mx-4 min-w-[100px] text-[14px]'>{item.desc}</p>
                            </div>))}
                </div>
                <div className='bg-[#FFF6C9] absolute top-[82px] right-0 w-[95%] h-[653px] rounded-tl-[300px] rounded-bl-[15px]'></div>
            </div>

        </div>
    );
}

export default AboutUS