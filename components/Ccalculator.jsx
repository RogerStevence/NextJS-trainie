"use client"
import React, { useState } from 'react';
import { MdOutlineDirectionsRun } from "react-icons/md";
import { IoIosFemale } from "react-icons/io";
import { IoIosMale } from "react-icons/io";
import { useEffect } from 'react';

const buttonClasses = 'text-[#263800] py-2 px-4 rounded-[8px] shadow-xl focus:outline-none flex items-center';
const inputRangeClasses = 'sm:max-w-[328px] max-w-[267px] appearance-none w-full h-[2px] bg-[#263800] rounded-lg outline-none';
const selectClasses = 'w-full bg-[#FFFCEC] text-zinc-700 py-2 px-3 rounded-lg focus:outline-none shadow-[0px_4px_15px_0_rgba(0,0,0,0.25)]';

const CalorieCalculator = () => {
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState(30);
    const [weight, setWeight] = useState(55);
    const [height, setHeight] = useState(170);
    const [goal, setGoal] = useState('WEIGHT BALANCE');
    const [selectedItems, setSelectedItems] = useState(Array.from({ length: 5 }, () => false));
    const [isSelectionFixed, setIsSelectionFixed] = useState(false);

    // Function to toggle the selected state of a specific item and all items before or after it
    const toggleItem = index => {
        setSelectedItems(prevState => {
            const newState = [...prevState];
            // Toggle the selected state for the clicked item
            newState[index] = !newState[index];
            // If the item is selected, mark all previous items as selected
            if (newState[index]) {
                for (let i = 0; i < index; i++) {
                    newState[i] = true;
                }
            } else {
                // If the item is deselected, mark all subsequent items as deselected
                for (let i = index + 1; i < newState.length; i++) {
                    newState[i] = false;
                }
            }
            return newState;
        });
        // If item is toggled after selection fixation, unfixed the selection
        if (isSelectionFixed) {
            setIsSelectionFixed(false);
        }
    };

    // Function to fix the selection up to the clicked item
    const fixSelection = index => {
        setSelectedItems(prevState => {
            const newState = [...prevState];
            // Mark all items up to the clicked item as selected
            for (let i = 0; i <= index; i++) {
                newState[i] = true;
            }
            return newState;
        });
        // Set the selection as fixed
        setIsSelectionFixed(true);
    };

    // Function to deselect items above the clicked item
    const deselectAbove = index => {
        setSelectedItems(prevState => {
            const newState = [...prevState];
            // Deselect all items above the clicked item
            for (let i = index + 1; i < newState.length; i++) {
                newState[i] = false;
            }
            return newState;
        });
    };

    useEffect(() => {
        const slideValue = document.querySelector("span");
        const inputSlider = document.querySelector("input");

        const handleInput = () => {
            let value = inputSlider.value;
            slideValue.textContent = value;
            slideValue.style.left = (value / 2) + "%";
            slideValue.classList.add("show");
        };

        const handleBlur = () => {
            slideValue.classList.remove("show");
        };

        inputSlider.addEventListener('input', handleInput);
        inputSlider.addEventListener('blur', handleBlur);

        return () => {
            inputSlider.removeEventListener('input', handleInput);
            inputSlider.removeEventListener('blur', handleBlur);
        };
    }, []);



    return (
        <div className="">
            <div className=' mt-[248px] sm:block hidden'>
                <div className='container z-30 relative '>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-primary text-center text-[32px] uppercase leading-[38px]'>CALORIE</h1>
                        <h2 className='text-seccondary text-center text-[48px] uppercase font-semibold leading-[58px]'>CALCULATOR</h2>
                        <p className='text-[18px] text-primary text-center pt-[17px] pb-[58px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quasi quidem nesciunt autem vel temporibus doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quasi quidem nesciunt autem vel temporibus doloremque?</p>
                    </div>
                    <div className='flex space-x-6'>
                        <div className="w-full mx-auto bg-[#FFFBE6] p-6 rounded-lg shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)]">
                            <div className="flex space-x-6">
                                <button className={buttonClasses + (gender === 'male' ? ' bg-[#ECBD00] text-white' : '')} onClick={() => setGender('male')}>MALE <IoIosMale className='h-full w-full pl-2' /></button>
                                <button className={buttonClasses + (gender === 'female' ? ' bg-[#ECBD00] text-white' : '')} onClick={() => setGender('female')}>FEMALE <IoIosFemale className='h-full w-full pl-2' /></button>
                            </div>
                            <div className="flex flex-wrap justify-between mt-8">
                                <div className="w-full md:w-1/2 p-4">
                                    <div className="mt-[24px] flex flex-col space-y-4">
                                        <label className="block text-[#263800]">ACTIVITY</label>
                                        <div className="flex space-x-[13.3px] mt-2">
                                            {selectedItems.map((selected, index) => (
                                                <MdOutlineDirectionsRun
                                                    key={index}
                                                    className={`text-black h-[40px] w-[40px] font-semibold ${selected || (isSelectionFixed && index < selectedItems.indexOf(true)) ? 'text-green-600' : ''}`}
                                                    onClick={() => {
                                                        if (!selected || (isSelectionFixed && index < selectedItems.indexOf(true))) {
                                                            fixSelection(index);
                                                        } else {
                                                            deselectAbove(index);
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-green-600">medium</span>
                                    </div>
                                    <div className="mt-6 w-[100%] max-w-[289px] min-w-[100px]">
                                    <label className="block text-[#263800] mb-4">GOAL</label>
                                        <select className={selectClasses} value={goal} onChange={(e) => setGoal(e.target.value)}>
                                            <option>WEIGHT BALANCE</option>
                                            <option>WEIGHT LOSS</option>
                                            <option>WEIGHT GAIN</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-6 w-[50%] flex flex-col space-y-[69px]">
                                    <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                        <label className="block text-zinc-700 w-[100px]">AGE</label>
                                        <input type="range" min="0" max="100" value={age} className={inputRangeClasses} onInput={(e) => setAge(e.target.value)} />
                                    </div>
                                    <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                        <label className="block text-zinc-700 w-[100px]">WEIGHT</label>
                                        <input type="range" min="0" max="200" value={weight} className={inputRangeClasses} onInput={(e) => setWeight(e.target.value)} />
                                    </div>
                                    <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                        <label className="block text-zinc-700 w-[100px]">HEIGHT</label>
                                        <input type="range" min="0" max="250" value={height} className={inputRangeClasses} onInput={(e) => setHeight(e.target.value)} />
                                    </div>
                                    {/* <div className="range">
                                    <div className="sliderValue">
                                        <span>100</span>
                                    </div>
                                    <div className="field">
                                        <div className="value left">0</div>
                                        <input type="range" min="10" max="200" defaultValue="100" step="1" />
                                        <div className="value right">200</div>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4 bg-yellow-50 rounded-lg shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] flex flex-col items-center pt-[119px] mx-auto">
                            <h2 className="text-[18px] text-[#263800]">YOUR DAILY RATE</h2>
                            <p className="text-5xl text-seccondary font-semibold mt-[12px]">1563 ccal</p>
                            <button className="mt-6 w-[100%] min-w-[100px] max-w-[268px] text-[#263800] text-[18px] border-2 border-[#263800] font-bold py-2 px-4 rounded-lg focus:outline-none">SEE MENU</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* {'Mobile'} */}

            <div className='z-30 relative sm:hidden mt-[96px]'>
                <div className='flex flex-col items-center mx-8'>
                    <h1 className='text-primary text-center text-[20px] uppercase leading-[23.48px]'>CALORIE</h1>
                    <h2 className='text-seccondary text-center text-[32px] uppercase font-semibold leading-[37.57px]'>CALCULATOR</h2>
                    <p className='text-[14px] text-primary text-center pt-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget justo, neque, a vitae neque phasellus ultrices. Nunc vel amet, adipiscing erat pulvinar id vestibulum, malesuada morbi. </p>
                </div>
                <div className='flex flex-col space-y-8 mt-8 ml-4'>
                    <div className="max-w-[396px] bg-[#FFFBE6] py-8 px-4 rounded-lg shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)]">
                        <div className="flex justify-center space-x-6">
                            <button className={buttonClasses + (gender === 'male' ? ' bg-[#ECBD00] text-white' : '')} onClick={() => setGender('male')}>MALE <IoIosMale className='h-full w-full pl-2' /></button>
                            <button className={buttonClasses + (gender === 'female' ? ' bg-[#ECBD00] text-white' : '')} onClick={() => setGender('female')}>FEMALE <IoIosFemale className='h-full w-full pl-2' /></button>
                        </div>
                        <div className="flex flex-wrap justify-between mt-8">
                            <div className="w-full md:w-1/2">
                                <label className="block text-black">ACTIVITY</label>
                                <div className="mt-[24px] flex items-center">
                                    <div className="flex space-x-[13.3px] mt-2">
                                        {selectedItems.map((selected, index) => (
                                            <MdOutlineDirectionsRun
                                                key={index}
                                                className={`text-black h-[40px] w-[40px] font-semibold ${selected || (isSelectionFixed && index < selectedItems.indexOf(true)) ? 'text-green-600' : ''}`}
                                                onClick={() => {
                                                    if (!selected || (isSelectionFixed && index < selectedItems.indexOf(true))) {
                                                        fixSelection(index);
                                                    } else {
                                                        deselectAbove(index);
                                                    }
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-green-600 ml-8">medium</span>
                                </div>
                                <div className="mt-6 w-[100%] max-w-[289px] min-w-[100px]">
                                    <label className="block text-[#263800] mb-4">GOAL</label>
                                    <select className={selectClasses} value={goal} onChange={(e) => setGoal(e.target.value)}>
                                        <option>WEIGHT BALANCE</option>
                                        <option>WEIGHT LOSS</option>
                                        <option>WEIGHT GAIN</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-12 w-[100%] flex flex-col space-y-[69px]">
                                <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                    <label className="block text-zinc-700 w-[100px]">AGE</label>
                                    <input type="range" min="0" max="100" value={age} className={inputRangeClasses} onInput={(e) => setAge(e.target.value)} />
                                </div>
                                <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                    <label className="block text-zinc-700 w-[100px]">WEIGHT</label>
                                    <input type="range" min="0" max="200" value={weight} className={inputRangeClasses} onInput={(e) => setWeight(e.target.value)} />
                                </div>
                                <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                    <label className="block text-zinc-700 w-[100px]">HEIGHT</label>
                                    <input type="range" min="0" max="250" value={height} className={inputRangeClasses} onInput={(e) => setHeight(e.target.value)} />
                                </div>
                                {/* <div className="range">
                                    <div className="sliderValue">
                                        <span>100</span>
                                    </div>
                                    <div className="field">
                                        <div className="value left">0</div>
                                        <input type="range" min="10" max="200" defaultValue="100" step="1" />
                                        <div className="value right">200</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[396px] md:w-1/3 p-4 bg-yellow-50 rounded-lg shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] flex flex-col items-center py-8">
                        <h2 className="text-[#263800] leading-[18.78px]">YOUR DAILY RATE</h2>
                        <p className="text-[36px] text-seccondary font-semibold mb-4 mt-2 leading-[43.2px]">1563 ccal</p>
                        <button className="w-[100%] min-w-[100px] max-w-[268px] text-[#263800] text-[18px] border-2 border-[#263800] font-bold py-2 px-4 rounded-lg focus:outline-none">SEE MENU</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalorieCalculator