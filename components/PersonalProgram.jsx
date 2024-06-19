"use client"
import { useState } from "react";
import Image from 'next/image';
import BgImage from '../public/PersonalProgramBG.png';

function Calculatortest() {
    const [typeOfHavchik, setHavchik] = useState(0);
    const [calories, setCalories] = useState(0);
    const [days, setDays] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [h3Value, setH3Value] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setH3Value(inputValue);
            setInputValue(""); 
        }
    };

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
                {
                    title: "2200",
                    value: 25,
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
                    title: "5 days",
                    value: 2,
                },
                {
                    title: "7 days",
                    value: 3,
                },
                {
                    title: "14 days",
                    value: 4,
                },
                {
                    title: "30 days",
                    value: 5,
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
                    <label key={idx} className="flex space-x-2 radio_custom_label items-center">
                        <input
                            className="radio_custom"
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
                        <div className="leading-[21.13px] text-[18px]">{title}</div>
                    </label>
                ));
            case "text":
                return <input type="text" maxLength="64" className="drop-shadow-md focus:shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] focus:outline-none duration-100 focus:bg-[#fff1a2] bg-[#FFFCEC] pl-4 pr-2 py-[11px] w-[547px] min-w-[277px] h-[41px] text-[16px] leading-[18.78px]" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress} placeholder='Add a comment...' />;
            default:
        }
    };

    const calculateResult = () => {
        return typeOfHavchik + calories + days;
    };

    return (
        <div className='relative z-10' id="delivery">
            <div className='container z-30 relative sm:block hidden mt-[224px]'>
                <div className='flex flex-col z-30 relative'>
                    <div className="mb-16">
                        <h1 className='text-primary text-center text-[32px] uppercase leading-[38px] font-[500]'>Make</h1>
                        <h2 className='text-seccondary text-center text-[48px] uppercase leading-[56px] font-[700]'>a personal program</h2>
                    </div>
                    <div className='flex uppercase space-x-6 h-[586px]'>
                        <div className='text-[#263800] bg-[#FFFCEC] shadow-md rounded-[15px] py-[40px] pl-6 min-w-[871px] space-y-[64px]'>
                            {items.map((item, idx) => {
                                return (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <h1 className='text-seccondary text-[64px] w-[75px] text-center leading-[64px] font-[300]'>{item.title}</h1>
                                        <div className='flex flex-col space-y-[24px] w-full'>
                                            <h2 className='font-semibold leading-[28.18px]'>{item.name}</h2>
                                            <div className="flex space-x-8 w-full">{renderInput(item)}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='min-w-[545px] bg-[#FFFCEC] rounded-[15px] px-[36px] pt-10 flex flex-col relative'>
                            <h1 className='text-seccondary text-center text-[32px] leading-[38px] font-[500] mb-[43px]'>your order</h1>
                            <div className="flex flex-col space-y-4 justify-around font-[500] text-[18px] leading-[21px]">
                                <div className='flex justify-between items-center text-[#263800] h-[29px]'>
                                    <h2 className="pr-[20px] text-[#263800]">PROGRAM:</h2>
                                    <h3 className="font-[600] text-[24px] leading-[28px]">{
                                        items.find(item => item.state === "havchik").values.find(({ value }) => value === typeOfHavchik)?.title
                                    }</h3>
                                </div>
                                <div className='flex justify-between items-center text-[#263800] h-[29px]'>
                                    <h2 className="pr-[20px] text-[#263800]">CALORIES:</h2>
                                    <h3 className="font-[600] text-[24px] leading-[28px]">{
                                        items.find(item => item.state === "calories").values.find(({ value }) => value === calories)?.title
                                    }
                                    </h3>
                                </div>
                                <div className='flex justify-between items-center text-[#263800] h-[29px]'>
                                    <h2 className="pr-[20px] text-[#263800]">DELIVERY PERIOD:</h2>
                                    <h3 className="font-[600] text-[24px] leading-[28px]">{
                                        items.find(item => item.state === "days").values.find(({ value }) => value === days)?.title
                                    }</h3>
                                </div>
                                <div className='flex text-[#263800]'>
                                    <h2 className="pr-[20px] text-[#263800] text-[18px] max-w-[170px] min-w-[170px] h-[21px]">SPECIAL NEEDS:</h2>
                                    <p className="text-[16px] overflow-auto break-word h-[80px] w-full text-right">{h3Value ? h3Value : '—'}</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 justify-around">
                                <div className=' border-b-[2px] border-[#46620B] w-full ' />
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
                                <button className='w-full bg-[#ECBD00] absolute bottom-0 left-0 rounded-b-[15px] h-[72px] mt-[32px] uppercase font-[700] leading-[21px] text-[18px] text-[#FFFEFA] hover:bg-primary duration-500 hover:text-[20px] hover:text-seccondary active:bg-[#253406] active:text-[#b99400]'>order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute -top-[56px] -right-[231px] z-0 sm:block hidden'>
                    <Image className='rounded-l-full'
                        src={BgImage}
                        alt=''
                        width='full'
                    />
                </div>
                <div className=" bg-[#E9EDBA80] backdrop-blur-[4px] absolute w-[591px] h-[600px] -top-[56px] -right-[231px] rounded-tl-[500px]"></div>
            </div>
            <div className='absolute z-10 -top-[113px] left-[25%] bg-[#E9EDBA80]  rounded-bl-[350px] h-[655px] w-3/4 backdrop-blur-[15px]'></div>





            {/* {'Mobile'} */}

            <div className="sm:hidden">
                <div className="mb-16">
                    <h1 className='text-primary text-center text-[20px] uppercase leading-[23.5px]'>Make</h1>
                    <h2 className='text-seccondary text-center text-[32px] uppercase font-semibold leading-[37.5px]'>a personal program</h2>
                </div>
                <div className='uppercase mx-4'>
                    <div className='text-[#263800] bg-[#FFFCEC] shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] rounded-[15px] py-[40px] pl-6 w-full space-y-[32px]'>
                        {items.map((item, idx) => {
                            return (
                                <div key={idx} className="flex space-x-3">
                                    <div className='flex flex-col space-y-6 w-full'>
                                        <h1 className='text-seccondary text-[40px] font-thin leading-none flex items-center'>{item.title} <span className='font-semibold text-[20px] ml-6 text-[#263800]'>{item.name}</span></h1>
                                        <div className="flex flex-col w-full max-w-[200px] space-y-4 text-[#263800] ml-[74px]">{renderInput(item)}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='w-full bg-[#FFFCEC] rounded-[15px] px-[36px] flex flex-col relative shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] mt-8'>
                        <h1 className='text-seccondary text-center text-[24px] my-8'>your order</h1>
                        <div className="flex flex-col space-y-[18px] justify-around text-[16px]">
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
                        <div className="flex flex-col h-[271px] border-t-[2px] border-[#46620B] mt-8 pt-8">
                            {/* <div className='pt-[74px] border-b-[2px] border-[#46620B] w-full ' /> */}
                            <div className="text-[#263800] flex justify-between">
                                <h2>Program Price:</h2>
                                <h3>${calculateResult()}</h3></div>
                            <div className="text-[#263800] flex justify-between mt-[14px]">
                                <h2>Discount:</h2>
                                <h3>$0</h3></div>
                            <div className="text-[#263800] text-[20px] font-semibold flex justify-between my-6">
                                <h2>Total Price:</h2>
                                <h3>${calculateResult()}</h3>
                            </div>
                            <button className='w-full bg-[#ECBD00] absolute bottom-0 left-0 rounded-b-[15px] h-[72px] mt-[32px] uppercase font-semibold text-[18px]'>order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculatortest;
