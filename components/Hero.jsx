import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Fresh_Ingredients from '../public/Fresh_Ingredients.png';
import Affordable_Price from '../public/Affordable_Price.png';
import Delicious_Food from '../public/Delicious_Food.png';
import OnTime from '../public/On-Time_Delivery.png';
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterestAlt, BiLogoInstagramAlt } from "react-icons/bi";
import { ImArrowRight2 } from "react-icons/im";
import CustomButton from './Button';
import { LuArrowDownSquare } from "react-icons/lu";



const Hero = () => {

    const IconsList = [
        {
            src: '/Fresh_Ingredients.png',
            title: 'Fresh Ingredients'
        },
        {
            src: '/Affordable_Price.png',
            title: 'Affordable Price'
        },
        {
            src: '/Delicious_Food.png',
            title: 'Delicious Food'
        },
        {
            src: '/On-Time_Delivery.png',
            title: 'On Time Delivery'
        },
    ];

    const SocialIcons = [
        {
            title: 'BiLogoFacebook'
        },
        {
            title: 'BiLogoTwitter'
        },
        {
            title: 'BiLogoInstagramAlt'
        },
        {
            title: 'BiLogoPinterestAlt'
        },
    ];


    return (
        <div className='container mx-auto'>
            <div className='sm:flex justify-center items-center mt-[101px]'>
                <div className='hidden sm:flex bg-[#46620B] rounded-l-[15px] z-10 h-[910px] w-[561px]'>
                    <div className='flex flex-col mx-[40px] mt-[160px] text-[20px]'>
                        <h1 className='sm:text-[48px] mb-[12px] font-bold text-[#FFFBE5]'>YOUR <span className='text-[#ECBD00]'>DELIVERY</span> TO A <span className='text-[#ECBD00]'>HEALTHY</span> LIFE</h1>
                        <p className='text-[#FFFBE5] mb-[32px]'>We save your time and money providing you with the most fresh and healthy food</p>
                        <div className='flex justify-center items-center mb-[317px]'>
                            <CustomButton> ORDER NOW </CustomButton>
                            <button className='w-full h-[56px] rounded-[8px]  border-white border-2 mx-[9px]'>SEE MENU</button>
                        </div>
                        <div className='flex justify-around items-center'>
                            {
                                IconsList.map((item, index) => (
                                    <div key={index} className='flex flex-col justify-center items-center'>
                                        <div className='rounded-[30px] bg-[#FFFCEC1A] shadow-md w-[48px] h-[48px] flex justify-center items-center'>
                                            <Image
                                                src={item.src}
                                                alt=""
                                                width={24}
                                                height={24} />
                                        </div>
                                        <p className='text-[14px] text-center mt-[12px] w-[70px]'>{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className=' h-[910px] w-[876px] z-20 rounded-br-[300px] min-w-[876px] hidden sm:flex' style={{ backgroundImage: `url('/hero.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
                </div>
                <div className='hidden absolute top-[357px] left-0 sm:flex flex-col h-[400px] items-center justify-around text-[#46620B]'>
                    {SocialIcons.map((item, index) => {
                        const IconComponent = {
                            BiLogoFacebook,
                            BiLogoTwitter,
                            BiLogoInstagramAlt,
                            BiLogoPinterestAlt,
                        }[item.title];
                        return (
                            <Link key={index} href='/'>
                                <IconComponent size={24} />
                            </Link>
                        );
                    })}
                    <Link href='\' className='-rotate-90 uppercase font-bold mt-[40px]'>
                        <p>follow us</p>
                    </Link>
                </div>
                <div className='hidden absolute top-[357px] right-0 sm:flex flex-col h-[400px] items-center justify-around mr-[5px] text-[#46620B]'>
                    <div className='rotate-90 border-b-2 border-[#46620B] w-[224px]'></div>
                    <Link href='\' className='rotate-90 uppercase font-bold mt-[40px]'>
                        <p className='flex items-center'>Next <ImArrowRight2 size={16} /></p>
                    </Link>
                </div>

                {/* {'Mobile'} */}

                <div className='sm:hidden flex flex-col w-[396px]'>
                    <div className='rounded-tr-[15px] px-4 ' style={{ backgroundImage: ' linear-gradient(86.75deg, #F1CE56 -0.19%, #EEC84B 23.47%, #DAA82B 97.86%)' }}>
                        <h1 className='pt-8 pb-3 text-[#FFFBE6] text-center text-[36px] font-bold h-[142px]'>YOUR <span className='text-primary'>DELIVERY</span> TO A <span className='text-primary'>HEALTHY</span> LIFE</h1>
                    </div>
                    <div className='h-[479px] w-[396px] -mt-[1px] ' style={{ backgroundImage: `url('/mobile-hero.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <p className='text-primary text-center px-4 font-semibold '>We save your time and money providing you with the most fresh and healthy food</p>
                    </div>
                    <div className='h-[143px] rounded-br-[130px] flex flex-col items-center space-y-2 relative -mt-[9px]' style={{ backgroundImage: 'linear-gradient(92.49deg, #E7BD3E 3.73%, #D2A129 77.66%, #CF9E27 97.32%)' }}>
                        <button className='w-[190px] h-[56px] rounded-[8px] bg-primary uppercase font-semibold'>order now</button>
                        <button className='w-[190px] h-[56px] rounded-[8px]  border-white border-2 mx-[9px] uppercase font-semibold'>see menu</button>
                        <Link href='/'>
                            <LuArrowDownSquare className='text-[#46620B] w-8 h-8 absolute bottom-0 -right-4' />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero



