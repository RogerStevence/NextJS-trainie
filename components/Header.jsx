"use client";
import { useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu, AiOutLineClose } from 'react-icons/ai';
import { MdPhoneInTalk } from "react-icons/md";
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterestAlt, BiLogoInstagramAlt } from "react-icons/bi";
import { ImArrowRight2 } from "react-icons/im";
import CustomButton from './Button';
import { LuArrowDownSquare } from "react-icons/lu";


const Header = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const linksList = [
        {
            title: 'Home',
            href: '/',
            id: 1
        },
        {
            title: 'About US',
            href: '/',
            id: 2
        },
        {
            title: 'Programs',
            href: '/',
            id: 3,
        },
        {
            title: 'Calculator',
            href: '/',
            id: 4
        },
        {
            title: 'Delivery',
            href: '/',
            id: 5
        },
        {
            title: 'Feedback',
            href: '/',
            id: 6
        },
        {
            title: 'Contacts',
            href: '/',
            id: 7
        }
    ];

    const linksListM = [
        {
            title: 'Home',
            href: '/',
            id: 15
        },
        {
            title: 'About US',
            href: '/',
            id: 16
        },
        {
            title: 'Programs',
            href: '/',
            id: 17
        },
        {
            title: 'Calculator',
            href: '/',
            id: 18
        },
        {
            title: 'Delivery',
            href: '/',
            id: 19
        },
        {
            title: 'Feedback',
            href: '/',
            id: 20
        },
        {
            title: 'Contacts',
            href: '/',
            id: 21
        }
    ];

    const menuContacts = [
        {
            title: '099-900-99-00',
            src: '/menu-phone.png',
            id: 8
        },
        {
            title: 'eatme@food.com',
            src: '/menu-mail.png',
            id: 9
        },
        {
            title: 'Shevchenko Str. 100',
            src: '/menu-map.png',
            id: 10
        },
    ]

    const SocialIcons = [
        {
            title: 'BiLogoFacebook',
            id: 11
        },
        {
            title: 'BiLogoTwitter',
            id: 12
        },
        {
            title: 'BiLogoInstagramAlt',
            id: 13
        },
        {
            title: 'BiLogoPinterestAlt',
            id: 14
        },
    ];


    return (
        <div>
            <div className='fixed left-0 top-0 w-full z-50 bg-[#FFFBE6] pt-[31px]'>
                <div className=' container mx-auto relative sm:block hidden'>
                    <div className='flex justify-between items-center'>
                        <Link href='/'>
                            <h1 className='hidden sm:flex text-primary text-[32px] leading-[37.57px]'><span className='font-[700]'>eat</span>me</h1>
                        </Link>
                        <div >
                            <ul className='text-[18px] leading-[21.13px] flex uppercase items-center text-primary space-x-8 font-semibold'>
                                {linksList.map((link, index) => (
                                    <React.Fragment key={index}>
                                        <li className='hover:text-[#ECBD00] hover:border-b-[2px] hover:border-[#ECBD00]'>
                                            <Link href='/'>{link.title}</Link>
                                        </li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='hidden absolute top-[357px] -left-[117px] sm:flex flex-col h-[400px] items-center justify-around text-[#46620B]'>
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
                    <div className='hidden absolute top-[541px] -right-[279px] sm:flex h-[50px] mr-[5px] text-[#46620B] z-0 w-[400px] rotate-90'>
                        <Link href='\' className=' uppercase font-bold w-[400px] h-[] flex items-center space-x-[40px]'>
                            <div className=' border-b-2 border-[#46620B] w-[224px]'></div>
                            <p className='flex items-center'>Next <ImArrowRight2 size={16} /></p>
                        </Link>
                    </div>
                </div>

            </div>

            {/* {'Mobile'} */}

            <div className='w-[428px] fixed top-0 left-0 z-50 bg-[#FFFBE6]'>
                <div className='flex max-w-[428px] sm:hidden items-center justify-between flex-wrap px-4'>
                    <div onClick={handleNav} className='text-primary sm:hidden z-50'>
                        {nav ? <AiOutlineMenu size={24} /> : <AiOutlineMenu size={24} />}
                    </div>
                    <Link href='/'>
                        <h2 className='text-primary text-[32px] text-center flex-1 sm:hidden'><span className='font-medium'>eat</span>me</h2>
                    </Link>
                    <div className='text-primary sm:hidden z-10'>
                        <MdPhoneInTalk size={24}></MdPhoneInTalk>
                    </div>
                </div>
                <div className={nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 flex pt-[32px] pl-8 w-full h-screen text-primary ease-in duration-300 bg-[#FFFBE6] z-40' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex pt-[32px] w-full h-screen text-primary ease-in duration-300'}>
                    <div className='flex flex-col justify-between'>
                        <ul>
                            {linksListM.map((link, index) => (
                                <React.Fragment key={index}>
                                    <li className='py-3 text-[16px] font-semibold hover:text-[#1e250c]'>
                                        <Link href='/'>{link.title}</Link>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                        <div className='flex flex-col space-y-6'>
                            {menuContacts.map((item) => {
                                return (
                                    <div key={item.id * 10} href='/' className='flex space-x-3 text-primary text-[18px] w-full'>
                                        <Image
                                            src={item.src}
                                            alt=""
                                            width={24}
                                            height={18} />
                                        <p>{item.title}</p>
                                    </div>
                                );
                            })}
                            <div className='mt-8 border-t-[1px] border-primary w-[256px] flex pt-4 space-x-8 pb-8'>
                                {SocialIcons.map((item) => {
                                    const IconComponent = {
                                        BiLogoFacebook,
                                        BiLogoTwitter,
                                        BiLogoInstagramAlt,
                                        BiLogoPinterestAlt,
                                    }[item.title];
                                    return (
                                        <Link key={item.id * 10} href='/'>
                                            <IconComponent size={32} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header