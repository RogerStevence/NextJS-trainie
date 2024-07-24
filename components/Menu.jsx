'use client';
import React from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { useState } from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Menu() {

    function renderWeekDays() {
        const today = new Date();
        const startOfCurrentWeek = startOfWeek(today);

        const [activeIndex, setActiveIndex] = useState(null);

        const weekDays = [];

        for (let i = 0; i < 7; i++) {
            const currentDate = addDays(startOfCurrentWeek, i);
            const dayOfWeek = format(currentDate, 'EEE');
            const date = format(currentDate, 'dd.MM');

            weekDays.push(
                <button
                    key={i}
                    className={` py-[12px] w-[145px] rounded-md shadow-md duration-300 hover:shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] ${activeIndex === i ? 'bg-[#ECBD00] text-white' : 'bg-[#FFFCEC] text-[#263800]'}`}
                    style={{
                        backgroundColor: activeIndex === i ? '#ECBD00' : '#FFFCEC',
                    }}
                    onClick={() => setActiveIndex(i)}
                >
                    {dayOfWeek} / {date}
                </button>
            );
        }

        return weekDays;
    }

    const menuItems = [
        {
            name: 'VEGAN'
        },
        {
            name: 'WEIGHT BALANCE'
        },
        {
            name: 'WEIGHT LOSS'
        },
        {
            name: 'WEIGHT SET'
        }
    ]

    const menuItem = [
        {
            src: '/menu1.png',
            title: 'Fresh Salad',
            ccal: '300',
            prots: '20g',
            fats: '5g',
            carbs: '17g',
            values: [
                {
                    title: 'ccal'
                },
                {
                    title: 'prots'
                },
                {
                    title: 'fats'
                },
                {
                    title: 'carbs'
                },
            ]
        },
        {
            src: '/menu2.png',
            title: 'Fruits & Nuts Oatmeal',
            ccal: '400',
            prots: '20g',
            fats: '5g',
            carbs: '17g',
            values: [
                {
                    title: 'ccal'
                },
                {
                    title: 'prots'
                },
                {
                    title: 'fats'
                },
                {
                    title: 'carbs'
                },
            ]
        },
        {
            src: '/menu3.png',
            title: 'Pumpkin Cream Soup',
            ccal: '300',
            prots: '20g',
            fats: '5g',
            carbs: '17g',
            values: [
                {
                    title: 'ccal'
                },
                {
                    title: 'prots'
                },
                {
                    title: 'fats'
                },
                {
                    title: 'carbs'
                },
            ]
        },
        {
            src: '/menu4.png',
            title: 'Tomato Spaghetti',
            ccal: '300',
            prots: '20g',
            fats: '5g',
            carbs: '17g',
            values: [
                {
                    title: 'ccal'
                },
                {
                    title: 'prots'
                },
                {
                    title: 'fats'
                },
                {
                    title: 'carbs'
                },
            ]
        },
        {
            src: '/menu5.png',
            title: 'Fresh Salad & Salmon',
            ccal: '300',
            prots: '20g',
            fats: '5g',
            carbs: '17g',
            values: [
                {
                    title: 'ccal'
                },
                {
                    title: 'prots'
                },
                {
                    title: 'fats'
                },
                {
                    title: 'carbs'
                },
            ]
        }
    ]


    return (
        <div className='relative' id='menu'>
            {/* Desktop Version */}
            <div className='mt-[248px] sm:block hidden'>
                <div className='container z-30 relative'>
                    <div className="mb-16">
                        <h1 className='text-primary text-center text-[32px] uppercase leading-[38px]'>Our</h1>
                        <h2 className='text-seccondary text-center text-[48px] uppercase font-semibold leading-[58px]'>menu</h2>
                    </div>
                    <div className='flex space-x-[32px]'>
                        {
                            menuItems.map((item, index) => (
                                <div key={index} className='flex space-x-2'>
                                    <input type="radio" name="menuItems" value={item.name} />
                                    <label className='text-primary'>
                                        {item.name}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex space-x-[32px] mt-[40px]'>
                        <div className="w-full text-black flex space-x-[16px] uppercase">
                            {renderWeekDays()}
                        </div>
                    </div>
                    <div className='flex space-x-[24px] relative mt-[70px]'>
                        {menuItem.map((item, index) => (
                            <div key={index} className='bg-[#FFFCEC] w-[100%] max-w-[1436px] flex flex-col items-center text-center drop-shadow-xl rounded-[15px]'>
                                <Image
                                    src={item.src}
                                    alt=''
                                    width={244}
                                    height={244}
                                    className='rounded-full absolute -top-[24px] drop-shadow-md'
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        objectFit: "contain"
                                    }} />
                                <h3 className='mt-[224px] text-[#263800]'>{item.title}</h3>
                                <div className='flex w-full justify-between pl-[21px] pr-[16px] text-seccondary text-[18px]'>
                                    {item.values.map((value, idx) => (
                                        <div key={idx} className='mb-[16px]'>
                                            <p>{item[value.title]}</p>
                                            <p className='text-primary text-[14px]'>{value.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='absolute z-10 top-[75%] left-0 bg-[#FFF1AC80] w-[100%] h-[864px] max-w-[1436px] rounded-tr-[350px] sm:block hidden'></div>

            {/* Mobile Version */}
            <div className='sm:hidden z-20 relative mt-[111px]'>
                <div>
                    <h1 className='text-primary text-center text-[20px] uppercase leading-[23px]'>Our</h1>
                    <h2 className='text-seccondary text-center text-[32px] uppercase font-semibold leading-[37px]'>menu</h2>
                </div>
                <div className='grid grid-flow-col grid-rows-2 gap-4 mt-8 mx-[37px]'>
                    {
                        menuItems.map((item, index) => (
                            <div key={index}>
                                <label className='text-primary flex space-x-3'>
                                    <input type="radio" name="menuItems" value={item.name} />
                                    <div>{item.name}</div>
                                </label>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-[40px] z-30 relative'>
                    <Slider className='marginmid' infinite speed={300} dots={false} arrows={false} slidesToShow={3}>
                        {renderWeekDays()}
                    </Slider>
                </div>
                <div className='flex space-x-[24px] z-40 '>
                    <Slider className='w-[100%] relative paddings midPaddings' infinite speed={300} dots={false} arrows={false} slidesToShow={1.5}>
                        {menuItem.map((item, index) => (
                            <div key={index} className='bg-[#FFFCEC] max-w-[268px] min-w-[235px] h-[315px] flex flex-col items-center text-center drop-shadow-xl rounded-[15px] ml-4'>
                                <div className='h-[231px]'>
                                    <Image
                                        src={item.src}
                                        alt=''
                                        width={231}
                                        height={231}
                                        className='rounded-full absolute -top-[24px] drop-shadow-md'
                                        style={{
                                            top: '25%',
                                            transform: 'translate(8%, -40%)',
                                            height: "auto",
                                            objectFit: "contain"
                                        }} />
                                </div>
                                <h3 className=' text-[#263800]'>{item.title}</h3>
                                <div className='flex max-w-[250px] w-full justify-between pl-[21px] pr-[16px] text-seccondary text-[18px]'>
                                    {item.values.map((value, idx) => (
                                        <div key={idx} className='mb-[16px]'>
                                            <p>{item[value.title]}</p>
                                            <p className='text-primary text-[14px]'>{value.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='absolute z-0 top-[0] left-0 bg-[#F4F4D0] w-[90%] h-[1252px] max-w-[1436px] rounded-tr-[350px] sm:hidden'></div>
        </div>
    );
}

export default Menu