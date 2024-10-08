"use client";
import { useEffect, useId, useCallback } from 'react';
import Image from "next/image";
import ScrollLink from './ScrollLink';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu, AiOutLineClose } from 'react-icons/ai';
import { MdPhoneInTalk } from "react-icons/md";
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterestAlt, BiLogoInstagramAlt } from "react-icons/bi";
import { ImArrowRight2 } from "react-icons/im";
import { LuArrowDownSquare } from "react-icons/lu";
import { usePathname, useRouter } from 'next/navigation';
import { id } from 'date-fns/locale';
import _ from 'lodash';
import menu from '../public/menu-opened.svg';
import { FaHome } from "react-icons/fa";



const Header = () => {



    const router = useRouter();

    const pathname = usePathname();


    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const linksList = [
        {
            title: 'Home',
            href: 'hero',
            id: 1
        },
        {
            title: 'About US',
            href: 'about',
            id: 2
        },
        {
            title: 'Programs',
            href: 'programs',
            id: 3,
        },
        {
            title: 'Delivery',
            href: 'delivery',
            id: 4
        },
        {
            title: 'Menu',
            href: 'menu',
            id: 5
        },
        {
            title: 'Calculator',
            href: 'calculator',
            id: 6
        },
        {
            title: 'Feedback',
            href: 'feedback',
            id: 7
        },
        {
            title: 'Questions',
            href: 'questions',
            id: 8
        },
        {
            title: 'Contacts',
            href: 'contacts',
            id: 9
        }
    ];

    const [activeMenuItem, setActiveMenuItem] = useState(linksList[0].href);
    const [isScrolling, setIsScrolling] = useState(false);

    const linksListM = [
        {
            title: 'Home',
            href: '/',
            id: 15
        },
        {
            title: 'About US',
            href: '#about',
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
            link: 'https://www.facebook.com/',
            id: 11
        },
        {
            title: 'BiLogoTwitter',
            link: 'https://x.com/?lang=en',
            id: 12
        },
        {
            title: 'BiLogoInstagramAlt',
            link: 'https://www.instagram.com/',
            id: 13
        },
        {
            title: 'BiLogoPinterestAlt',
            link: 'https://www.pinterest.com/',
            id: 14
        },
    ];

    const scrollWithOffset = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - (id === 'about' ? 50 : 110);
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
    const scrollWithOffsetMobile = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - (id === 'about' ? -30 : 50);
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = useCallback(
        _.debounce(() => {
            if (isScrolling) return;

            let currentSection = '';
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            linksList.forEach(link => {
                const section = document.getElementById(link.href);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop - 110 && scrollPosition < sectionTop + sectionHeight - 110) {
                        if (link.href !== '') currentSection = link.href;
                    }
                }
            });

            if (windowHeight + scrollPosition >= documentHeight - 5) {
                currentSection = linksList[linksList.length - 1].href;
            }

            console.log('Current section:', currentSection);
            setActiveMenuItem(currentSection);
        }, 100),
        [isScrolling, linksList]
    );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);


    const handleClick = () => {
        if (activeMenuItem === 'hero') {
            scrollWithOffset('about');
            setActiveMenuItem('about');
        } else if (activeMenuItem === 'about') {
            scrollWithOffset('programs');
            setActiveMenuItem('programs');
        } else if (activeMenuItem === 'programs') {
            scrollWithOffset('delivery');
            setActiveMenuItem('delivery');
        } else if (activeMenuItem === 'delivery') {
            scrollWithOffset('menu');
            setActiveMenuItem('menu');
        } else if (activeMenuItem === 'menu') {
            scrollWithOffset('calculator');
            setActiveMenuItem('calculator');
        } else if (activeMenuItem === 'calculator') {
            scrollWithOffset('feedback');
            setActiveMenuItem('feedback');
        } else if (activeMenuItem === 'feedback') {
            scrollWithOffset('questions');
            setActiveMenuItem('questions');
        } else if (activeMenuItem === 'contacts') {
            scrollWithOffset('hero');
            setActiveMenuItem('hero');
        }
        else if (activeMenuItem === 'questions') {
            scrollWithOffset('hero');
            setActiveMenuItem('hero');
        }

    };

    const handleClickMobile = () => {
        if (activeMenuItem === 'hero') {
            scrollWithOffsetMobile('about');
            setActiveMenuItem('about');
        } else if (activeMenuItem === 'about') {
            scrollWithOffsetMobile('programs');
            setActiveMenuItem('programs');
        } else if (activeMenuItem === 'programs') {
            scrollWithOffsetMobile('delivery');
            setActiveMenuItem('delivery');
        } else if (activeMenuItem === 'delivery') {
            scrollWithOffsetMobile('menu');
            setActiveMenuItem('menu');
        } else if (activeMenuItem === 'menu') {
            scrollWithOffsetMobile('calculator');
            setActiveMenuItem('calculator');
        } else if (activeMenuItem === 'calculator') {
            scrollWithOffsetMobile('feedback');
            setActiveMenuItem('feedback');
        } else if (activeMenuItem === 'feedback') {
            scrollWithOffsetMobile('questions');
            setActiveMenuItem('questions');
        } else if (activeMenuItem === 'contacts') {
            scrollWithOffsetMobile('hero');
            setActiveMenuItem('hero');
        }
        else if (activeMenuItem === '') {
            scrollWithOffsetMobile('hero');
            setActiveMenuItem('hero');
        }

    };

    return (
        <div id='header'>
            <div className='fixed left-0 top-0 w-full z-50 bg-[#FFFBE6] pt-[31px]'>
                <div className=' container mx-auto relative sm:block hidden'>
                    <div className='flex justify-between items-center'>
                        <ScrollLink id='hero'>
                            <h1 className='hidden sm:flex text-primary text-[32px] leading-[37.57px]'><span className='font-[700]'>eat</span>me</h1>
                        </ScrollLink>
                        <div >
                            <ul className='text-[18px] leading-[21.13px] flex uppercase items-center text-primary space-x-8 font-semibold'>
                                {linksList.filter(link => link.id !== 5 && link.id !== 8).map((link, index) => (
                                    <React.Fragment key={index}>
                                        <ScrollLink id={link.href}>
                                            <li style={link.href === activeMenuItem ? { color: '#ECBD00', borderBottom: '2px solid #ECBD00' } : {}} className={'hover:text-[#ECBD00] hover:border-b-[2px] hover:border-[#ECBD00] duration-200 active:text-[#b99400] active:border-[#b99400]'} onClick={() => { if (link.href) { setActiveMenuItem(link.href) } else { console.log('error') } }}>{link.title}</li>
                                        </ScrollLink>
                                    </React.Fragment>
                                )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='hidden absolute top-[357px] -left-[123px] sm:flex flex-col h-[400px] items-center text-[#46620B]'>
                        {SocialIcons.map((item, index) => {
                            const IconComponent = {
                                BiLogoFacebook,
                                BiLogoTwitter,
                                BiLogoInstagramAlt,
                                BiLogoPinterestAlt,
                            }[item.title];
                            return (
                                <Link key={index} href={item.link} target='_blank' className='bg-[#FFFBE6] rounded-full mb-[17px] p-1'>
                                    <IconComponent size={24} className='hover:text-seccondary duration-500 active:text-[#b99400]' />
                                </Link>
                            );
                        })}
                        <Link href='https://www.google.co.uk/' className='-rotate-90 uppercase font-bold mt-[51px] hover:text-seccondary duration-500 bg-[#FFFBE6] rounded-md px-2 active:text-[#b99400]' target='_blank'>
                            <p>follow us</p>
                        </Link>
                    </div>

                    <div className='group uppercase font-bold w-[400px] flex items-center space-x-[40px] cursor-pointer' onClick={handleClick}>
                        {activeMenuItem === 'contacts' || activeMenuItem === 'questions' ? (
                            <div className='hidden absolute top-[509px] -right-[129px] sm:flex h-[50px] mr-[5px] text-[#46620B] z-0 w-[100px] rotate-90 bg-[#FFFBE6] rounded-full justify-between'>
                                <div className='group uppercase font-bold flex items-center cursor-pointer w-[100%] justify-center' onClick={handleClick}>
                                    <FaHome size={16} className='group-hover:text-seccondary duration-500'/>
                                    <p className='flex items-center group-hover:text-seccondary duration-500 pl-2'>
                                        HOME
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className='hidden absolute top-[509px] -right-[279px] sm:flex h-[50px] mr-[5px] text-[#46620B] z-0 w-[400px] rotate-90 bg-[#FFFBE6] pl-8 rounded-full'>
                                <div className='group uppercase font-bold w-[400px] flex items-center space-x-[40px] cursor-pointer' onClick={handleClick}>
                                    <div className=' border-b-2 border-[#46620B] w-[224px] group-hover:border-seccondary duration-200'></div>
                                    <p className='flex items-center group-hover:text-seccondary duration-500'>
                                        Next <ImArrowRight2 size={16} />
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

            </div>

            {/* {'Mobile'} */}

            <div className='min-w-[360px] max-w-[430px] w-[100%] fixed top-0 left-0 z-50 bg-[#FFFBE6]'>
                <div className='flex max-w-[428px] min-w-[360px] sm:hidden items-center justify-between  px-4'>
                    <div onClick={handleNav} className='text-primary sm:hidden z-50'>
                        {nav ? <Image
                            src={menu}
                            alt=''
                            width='24'
                            height='24'
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} /> : <AiOutlineMenu size={24} />}
                    </div>
                    <Link href='/'>
                        <h2 className='text-primary text-[32px] text-center flex-1 sm:hidden'><span className='font-medium'>eat</span>me</h2>
                    </Link>
                    <div className='text-primary sm:hidden z-10 '>
                        <MdPhoneInTalk size={24}></MdPhoneInTalk>
                    </div>
                </div>
                <div className={nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 flex pt-[32px] pl-8 w-full h-screen text-primary ease-in duration-300 bg-[#FFFBE6] z-40' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex pt-[32px] w-full h-screen text-primary ease-in duration-300'}>
                    <div className='flex flex-col justify-between'>
                        <ul className='text-[16px] uppercase flex flex-col space-y-6 mt-4'>
                            {linksList.filter(link => link.id !== 5).map((link, index) => (
                                <React.Fragment key={index}>
                                    <ScrollLink id={link.href}>
                                        <li style={link.href === activeMenuItem ? { color: '#ECBD00', borderBottom: '2px solid #ECBD00' } : {}} className={'duration-200 active:text-[#b99400] active:border-[#b99400]'} onClick={() => { if (link.href) { setActiveMenuItem(link.href) } else { console.log('error') } }}>{link.title}</li>
                                    </ScrollLink>
                                </React.Fragment>
                            )
                            )}
                        </ul>
                        <div className='flex flex-col space-y-6'>
                            {menuContacts.map((item) => {
                                return (
                                    <div key={item.id} href='/' className='flex space-x-3 text-primary text-[18px] w-full'>
                                        <Image
                                            src={item.src}
                                            alt=""
                                            width={24}
                                            height={18}
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto"
                                            }} />
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
                                            <IconComponent size={32} className='duration-500 active:text-[#b99400]' />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block sm:hidden' onClick={handleClickMobile}>
                    <LuArrowDownSquare className='text-[#46620B] w-8 h-8 absolute top-[90vh] custom:top-[95vh] right-[1.5vh]' />
                </div>
            </div>
        </div >
    );
}

export default Header