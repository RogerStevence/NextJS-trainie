import React from 'react';
import Image from 'next/image';
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
        <div className='relative mt-[314px]'>
            <div className='container mx-auto z-10 relative'>
                <div className={css.bg}></div>
                <div className='h-full w-full flex flex-col items-end'>
                    <h1 className='text-primary text-5xl sm:flex md:text-2xl lg:text-3xl xl:text-5xl'>YOUR <span className='text-seccondary'>DELIVERY</span> TO A <span className='text-seccondary'>HEALTHY</span> LIFE</h1>
                    <div className='flex flex-col items-end bg-[#FFF6C9] pt-6 pl-[144px] rounded-tl-[327px]'>
                        <p className='text-primary text-right  mb-[64px] max-w-[852px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nulla iaculis elementum cursus feugiat nibh aliquam pellentesque congue. Cursus bibendum velit eu dolor mattis mollis magnis odio. Laoreet nunc turpis mauris id potenti dolor, mi. At tortor, viverra id montes, ac nibh nullam venenatis. Ullamcorper sem egestas diam diam egestas eget. Blandit odio consectetur mauris nunc.
                            Laoreet nunc turpis mauris id potenti dolor, mi. At tortor, viverra id montes, ac nibh nullam venenatis. Ullamcorper sem egestas diam diam egestas eget. Blandit odio consectetur mauris nunc.</p>
                        <div className='flex items-center space-x-4  mb-[64px]'>
                            {
                                ItemsList.map((item, index) => (
                                    <div key={index} className='text-[#263800] text-center flex flex-col py-[32px] items-center bg-[#FFFCEC] rounded-[15px] shadow-md w-[238px] h-[288px]'>
                                        <Image src={item.src} alt='' width='64' height='64' />
                                        <h2 className='text-lg font-bold pt-6 w-[190px]'>{item.title}</h2>
                                        <p className='pt-4 pb-8'>{item.desc}</p>
                                    </div>))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute z-0 bottom-0 right-0 bg-[#FFF6C9] h-[calc(100%-3rem)] w-1/3'></div>

            {/* {'Mobile'} */}

            <div>
                
            </div>
            
        </div>
        
    )
}

export default AboutUS