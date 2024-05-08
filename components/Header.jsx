"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu, AiOutLineClose } from 'react-icons/ai';
import { MdPhoneInTalk } from "react-icons/md";
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterestAlt, BiLogoInstagramAlt } from "react-icons/bi";


const Header = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const linksList = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'About US',
            href: '/AboutUS'
        },
        {
            title: 'Programs',
            href: '/Programs'
        },
        {
            title: 'Calculator',
            href: '/Calculator'
        },
        {
            title: 'Delivery',
            href: '/Delivery'
        },
        {
            title: 'Feedback',
            href: '/Feedback'
        },
        {
            title: 'Contacts',
            href: '/Contacts'
        }
    ];

    const menuContacts = [
        {
            title: '099-900-99-00',
            src: '/menu-phone.png'
        },
        {
            title: 'eatme@food.com',
            src: '/menu-mail.png'
        },
        {
            title: 'Shevchenko Str. 100',
            src: '/menu-map.png'
        },
    ]

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
        <div className='fixed left-0 top-0 w-full z-40 bg-[#FFFBE6]'>
            <div className=' container mx-auto'>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <h1 className='hidden sm:flex text-primary text-[32px]'><span className='font-medium'>eat</span>me</h1>
                    </Link>
                    <div className='text-[18px] flex uppercase items-center text-primary'>
                        <ul className='hidden sm:flex justify-between'>
                            {linksList.map((link, index) => (
                                <li key={index} className='pl-[32px] whitespace-nowrap'>
                                    <Link href={link.href}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className=''> 
                    <div className='flex w-[100%] max-w-[428px] items-center justify-between flex-wrap z-50 sm:hidden'>
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
                                {linksList.map((link, index) => (
                                    <div>
                                        <li key={index} className='py-3 text-[16px] font-semibold hover:text-[#1e250c]'>
                                            <Link href={link.href}>{link.title}</Link>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <div className='flex flex-col space-y-6'>
                                {menuContacts.map((item, index) => {
                                    return (
                                        <div key={index} href='/' className='flex space-x-3 text-primary text-[18px] w-full'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header