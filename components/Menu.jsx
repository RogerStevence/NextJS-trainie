'use client';
import React from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { useState } from 'react';
import Image from 'next/image';



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
                    key={i} className={` py-[10px] w-full max-w-[145px] rounded-md shadow-md ${activeIndex === i ? 'bg-[#ECBD00] text-white' : 'bg-[#FFFCEC] text-[#263800]'}`}
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
        <div className='relative mt-[224px]'>
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
                            <Image src={item.src} alt='' width='244' height='244' object-fit='containe' className='rounded-full absolute -top-[24px] drop-shadow-md' />
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
            <div className='absolute z-10 top-[75%] left-0 bg-[#FFF1AC80] w-[100%] h-[864px] max-w-[1436px] rounded-tr-[350px]'></div>
        </div>
    )
}

export default Menu