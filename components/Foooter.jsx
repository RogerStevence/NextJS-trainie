import React from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterestAlt, BiLogoInstagramAlt } from "react-icons/bi";
import Link from 'next/link';
import Image from "next/legacy/image";
import Phone from '../public/phone-icon.png'
import ScrollLink from './ScrollLink';


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
const firstCol = [
    {
        title: 'About US',
        id: 'about'
    },
    {
        title: 'Programs',
        id: 'programs'
    },
    {
        title: 'delivery',
        id: 'delivery'
    },
];
const secCol = [
    {
        title: 'menu',
        id: 'menu'
    },
    {
        title: 'calculator',
        id: 'calculator'
    },
    {
        title: 'feedback',
        id: 'feedback'
    },
];

const fitsMob = [
    {
        title: 'About US'
    },
    {
        title: 'Programs'
    },
    {
        title: 'menu'
    },
];

const secMob = [
    {
        title: 'calculator'
    },
    {
        title: 'delivery'
    },
    {
        title: 'feedback'
    },
]


const thirdCol = [
    {
        title: '099-900-99-00',
        src: '/phoneSVG.svg'
    },
    {
        title: 'eatme@food.com',
        src: '/emailSVG.svg'
    },
    {
        title: 'Shevchenko Str. 100',
        src: '/mapSVG.svg'
    },
]

function Foooter() {
    return (
        <div className='bg-[#263800D9] backdrop-blur-md  bg-opacity-85 z-50' id='contacts'>
            <div className='container mx-auto mt-[124px] sm:block hidden'>
                <div className='flex justify-between pt-[40px]'>
                    <div className='flex flex-col space-y-8'>
                        <Link href='/' className='text-[#FFFBE5] text-[32px] text-center font-thin'><span className='font-semibold'>eat</span>me</Link>
                        <div className='flex space-x-6'>
                            {SocialIcons.map((item, index) => {
                                const IconComponent = {
                                    BiLogoFacebook,
                                    BiLogoTwitter,
                                    BiLogoInstagramAlt,
                                    BiLogoPinterestAlt,
                                }[item.title];
                                return (
                                    <Link key={index} href='/'>
                                        <IconComponent size={32} className='hover:text-seccondary duration-500 active:text-[#b99400]' />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col space-y-6'>
                        {firstCol.map((item, index) => {
                            return (
                                <ScrollLink key={index} id={item.id}>
                                    <p className='uppercase hover:text-seccondary duration-500 active:text-[#b99400]'>{item.title}</p>
                                </ScrollLink>
                            );
                        })}
                    </div>
                    <div className='flex flex-col space-y-6'>
                        {secCol.map((item, index) => {
                            return (
                                <ScrollLink key={index} id={item.id}>
                                    <p className='uppercase hover:text-seccondary duration-500 active:text-[#b99400]'>{item.title}</p>
                                </ScrollLink>
                            );
                        })}
                    </div>
                    <div className='flex flex-col space-y-6'>
                        {thirdCol.map((item, index) => {
                            return (
                                <div key={index} href='/' className='flex space-x-3'>
                                    <Image
                                        src={item.src}
                                        alt=""
                                        width={24}
                                        height={18} />
                                    <p>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex flex-col'>
                        <p>NEWSLETTER</p>
                        <input type="text" name="" id="" placeholder='Enter your email' maxLength="20" className='rounded-[8px] px-[13px] pl-[16px] mt-[18px] bg-[#FFFCEC40] placeholder-[#1D1912] h-12' />
                        <button className='w-full min-w-[100px] max-w-[268px] h-[48px] rounded-[8px] bg-[#ECBD00] text-[#FFFCEC] mt-[8px] cursor-pointer uppercase shadow-md hover:bg-[#ecbd00a9] focus:bg-[#b99400] duration-150'>subscribe</button>

                    </div>
                </div>
                <div className='border-solid border-t-2 border-[#ECBD00] w-full mt-20 flex justify-between pb-10'>
                    <p className='mt-[18px]'>&copy; 2024 Your Company Name. All rights reserved.</p>
                    <div className='flex mt-[18px] space-x-[34px] text-[14px]'>
                        <Link href='/' className='hover:text-seccondary duration-500 active:text-[#b99400]'>TERMS & CONDITIONS</Link>
                        <Link href='/' className='hover:text-seccondary duration-500 active:text-[#b99400]'>PRIVACY POLICY</Link>
                    </div>
                </div>
            </div>

            {/* {'Mobile'} */}

            <div className='sm:hidden '>
                <div className='flex justify-between flex-col mt-8 py-8 mx-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[#FFFBE5] text-[32px] text-center font-thin'><span className='font-semibold'>eat</span>me</h1>
                        <div className='flex space-x-6'>
                            {SocialIcons.map((item, index) => {
                                const IconComponent = {
                                    BiLogoFacebook,
                                    BiLogoTwitter,
                                    BiLogoInstagramAlt,
                                    BiLogoPinterestAlt,
                                }[item.title];
                                return (
                                    <Link key={index} href='/'>
                                        <IconComponent size={32} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex mt-12 font-thin justify-center space-x-16'>
                        <div className='flex flex-col space-y-6'>
                            {fitsMob.map((item, index) => {
                                return (
                                    <Link key={index} href='/'>
                                        <p className='uppercase'>{item.title}</p>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className='flex flex-col space-y-6'>
                            {secMob.map((item, index) => {
                                return (
                                    <Link key={index} href='/'>
                                        <p className='uppercase'>{item.title}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col mt-12 h-[75px]'>
                        <p className='mb-2'>NEWSLETTER</p>
                        <div className='relative'>
                            <input type="text" name="" id="" maxLength="25" placeholder='Enter your email' className='rounded-[8px] px-[13px] pl-[16px] bg-[#FFFCEC40] absolute placeholder-[#1D1912] h-12 w-full' />
                            <button className='w-full min-w-[100px] max-w-[140px] h-[48px] rounded-[8px] bg-[#ECBD00] text-[#FFFCEC] cursor-pointer uppercase shadow-md absolute top-0 right-0 hover:bg-[#ecbd00a9] focus:bg-[#b99400] duration-150'>subscribe</button>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-6 items-center mt-12'>
                        <div className='flex flex-col space-y-6'>
                            {thirdCol.map((item, index) => {
                                return (
                                    <div key={index} href='/' className='flex space-x-3'>
                                        <Image
                                            src={item.src}
                                            alt=""
                                            width={24}
                                            height={18} />
                                        <p>{item.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className='flex space-x-[33px] text-[16px] uppercase leading-[18.78px] mx-8 max-w-[332px] mb-4 font-thin'>
                            <Link href='/' >TERMS & CONDITIONS</Link>
                            <Link href='/' >PRIVACY POLICY</Link>
                        </div>
                        <div className='border-solid border-t-2 border-[#ECBD00] w-full flex justify-center'>
                            <p className='mt-4 text-[12px] uppercase font-thin'>&copy; 2024 Your Company Name. All rights reserved.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Foooter