"use client"
import { useState } from "react";
import Image from 'next/image';
import BgImage from '../public/PersonalProgramBG.png';
import CustomButton from './Button';

function Calculatortest() {
    const [typeOfHavchik, setHavchik] = useState(0);
    const [calories, setCalories] = useState(0);
    const [days, setDays] = useState(0);
    // const [needs, setGender] = useState(0);

    const items = [
        {
            title: "01",
            name: "MY GOAL",
            type: "radio",
            state: "havchik",
            values: [
                {
                    title: "Vegan",
                    value: 5,
                },
                {
                    title: "WEIGHT BALANCE",
                    value: 10,
                },
                {
                    title: "WEIGHT LOSS",
                    value: 15,
                },
                {
                    title: "WEIGHT SET",
                    value: 20,
                },
            ],
        },
        {
            title: "02",
            name: "REQUIRED CALORIES",
            type: "radio",
            state: "calories",
            values: [
                {
                    title: "1000",
                    value: 5,
                },
                {
                    title: "1200",
                    value: 10,
                },
                {
                    title: "1400",
                    value: 15,
                },
                {
                    title: "1600",
                    value: 20,
                },
            ],
        },
        {
            title: "03",
            name: "DELIVERY PERIOD",
            type: "radio",
            state: "days",
            values: [
                {
                    title: "1 day",
                    value: 0.99,
                },
                {
                    title: "2 day",
                    value: 2,
                },
                {
                    title: "3 day",
                    value: 3,
                },
                {
                    title: "4 day",
                    value: 4,
                },
            ],
        },
        {
            title: "04",
            name: "SPECIAL NEEDS",
            type: "text",
        },
    ];

    const renderInput = (item) => {
        switch (item.type) {
            case "radio":
                return item.values.map(({ title, value }, idx) => (
                    <label key={idx} className="flex space-x-1">
                        <input
                            name={item.state}
                            type="radio"
                            onChange={() => {
                                switch (item.state) {
                                    case "havchik":
                                        setHavchik(value);
                                        break;
                                    case "calories":
                                        setCalories(value);
                                        break;
                                    default:
                                        setDays(value);
                                        break;
                                }
                            }}
                            value={value}
                        />
                        <div>{title}</div>
                    </label>
                ));
            case "text":
                return <input type="text" className="drop-shadow-md focus:outline-none bg-[#FFFCEC] pl-4 py-[11px] w-[75%] min-w-[200px]" placeholder='Add a comment...' />;
            default:
        }
    };

    const calculateResult = () => {
        return typeOfHavchik + calories + days;
    };

    return (
        <div className='relative mt-[224px]'>
            <div className='container z-30 relative'>
                <div className='flex flex-col'>
                    <div className="mb-16">
                        <h1 className='text-primary text-center text-[32px] uppercase leading-[38px]'>Make</h1>
                        <h2 className='text-seccondary text-center text-[48px] uppercase font-semibold leading-[58px]'>a personal program</h2>
                    </div>
                    <div className='flex uppercase space-x-3 h-[586px]'>
                        <div className='text-[#263800] bg-[#FFFCEC] shadow-md rounded-[15px] py-[40px] pl-6 w-full space-y-[32px]'>
                            {items.map((item, idx) => {
                                return (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <h1 className='text-seccondary text-[64px] w-[75px] text-center'>{item.title}</h1>
                                        <div className='flex flex-col space-y-3 w-full'>
                                            <h2 className='font-semibold'>{item.name}</h2>
                                            <div className="flex space-x-4 w-full">{renderInput(item)}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='w-3/5 max-w-3/5 bg-[#FFFCEC] rounded-[15px] px-[36px] pt-10 flex flex-col space-y-3 relative'>
                            <h1 className='text-seccondary text-center text-[32px]'>your order</h1>
                            <div className="flex flex-col space-y-6 justify-around">
                                <div className='flex justify-between text-[#263800]'>
                                    <h2 className="pr-[20px] text-[#263800]">PROGRAM:</h2>
                                    <h3 className="font-semibold">{
                                        items.find(item => item.state === "havchik").values.find(({ value }) => value === typeOfHavchik)?.title
                                    }</h3>
                                </div>
                                <div className='flex justify-between text-[#263800] '>
                                    <h2 className="pr-[20px] text-[#263800]">CALORIES:</h2>
                                    <h3 className="font-semibold">{
                                        items.find(item => item.state === "calories").values.find(({ value }) => value === calories)?.title
                                    }
                                    </h3>
                                </div>
                                <div className='flex justify-between text-[#263800]'>
                                    <h2 className="pr-[20px] text-[#263800]">DELIVERY PERIOD:</h2>
                                    <h3 className="font-semibold">{
                                        items.find(item => item.state === "days").values.find(({ value }) => value === days)?.title
                                    }</h3>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 justify-around">
                                <div className='pt-[74px] border-b-[2px] border-[#46620B] w-full ' />
                                <div className="text-[#263800] flex justify-between">
                                    <h2>Program Price:</h2>
                                    <h3>${calculateResult()}</h3></div>
                                <div className="text-[#263800] flex justify-between">
                                    <h2>Discount:</h2>
                                    <h3>$0</h3></div>
                                <div>
                                    <div className="text-[#263800] text-2xl font-semibold flex justify-between mt-2">
                                        <h2>Total Price:</h2>
                                        <h3>${calculateResult()}</h3></div>
                                </div>
                                <button className='w-full bg-[#ECBD00] absolute bottom-0 left-0 rounded-b-[15px] h-[72px] mt-[32px] uppercase font-semibold text-[18px]'>order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute -top-[120px] right-0'>
                <Image className='rounded-l-full'
                    src={BgImage}
                    alt=''
                    width='full'
                />
            </div>
        </div>
    );
}

export default Calculatortest;
