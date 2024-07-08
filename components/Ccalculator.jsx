"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineDirectionsRun } from "react-icons/md";
import { IoIosFemale } from "react-icons/io";
import { IoIosMale } from "react-icons/io";
import CustomSelect from './CustomSelect';
import Range from './range'
import BigRange from './RangeBig'
import css from './Range.module.css'




const buttonClasses = 'text-[#263800] py-2 px-4 rounded-[8px] shadow-xl focus:outline-none flex items-center hover:shadow-[2px_6px_15px_0_rgba(0,0,0,0.25) focus:border-none hover:bg-[#b99400]] duration-200';
const inputRangeClasses = 'sm:max-w-[328px] max-w-[267px] appearance-none w-full h-[2px] bg-[#263800] rounded-lg outline-none relative';
const selectClasses = 'w-full bg-[#FFFCEC]  text-zinc-700 py-2 px-3 rounded-lg focus:outline-none shadow-[0px_4px_15px_0_rgba(0,0,0,0.25)]';



const CalorieCalculator = () => {

    const options = [
        {
            name: "WEIGHT BALANCE",
            value: 0
        },
        {
            name: "WEIGHT LOSS",
            value: 200
        },
        {
            name: "WEIGHT GAIN",
            value: 300
        }

    ];

    const runItems = [
        {
            id: 1,
            name: "Low",
            color: "red",
            value: 100
        },
        {
            id: 2,
            name: "Low medium",
            color: "orange",
            value: 200
        },
        {
            id: 3,
            name: "Medium",
            color: "green",
            value: 300
        },
        {
            id: 4,
            name: "High",
            color: "blue",
            value: 400
        },
        {
            id: 5,
            name: "Very high",
            color: "grey",
            value: 500
        }
    ];


    const [gender, setGender] = useState('male');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [goal, setGoal] = useState(options[0]);
    const [selectedItems, setSelectedItems] = useState(runItems.map(() => false));
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSelectionFixed, setIsSelectionFixed] = useState(false);
    const [finalResult, setFinalResult] = useState(0)

    const outputRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
    const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
    const outputRefsM = useRef([React.createRef(), React.createRef(), React.createRef()]);
    const inputRefsM = useRef([React.createRef(), React.createRef(), React.createRef()]);

    const calculateResult = () => {
        let result = 0;
        if (age != 0) {
            result += Number(age)
        }
        if (weight != 0) {
            result += Number(weight)
        }
        if (height != 0) {
            result += Number(height)
        }

        if (goal && goal.value != null) {
            result += Number(goal.value);
        }

        if (result !== 0) {
            if (gender === 'male') {
                result *= 1.5
            }
            if (gender === 'female') {
                result *= 1.2
            }
        }
        let activity = 0;
        selectedItems.forEach((e) => {
            if (e === true) {
                activity += 50
            }
        })
        result += activity

        result = Math.round(result);

        setFinalResult(result)
    }

    useEffect(() => {
        calculateResult();
    }, [age, gender, goal, selectedItems, weight, height])

    useEffect(() => {
        const handleInput = (index) => {
            const output = outputRefs.current[index].current;
            const input = inputRefs.current[index].current;
            const value = (input.value - input.min) / (input.max - input.min) * 100;
            output.innerHTML = input.value;
            output.style.left = `calc(${value}% - 15px)`;
            output.style.transform = `translateX(-${value}%)`;
        };

        const handleInputM = (index) => {
            const output = outputRefsM.current[index].current;
            const input = inputRefsM.current[index].current;
            const value = (input.value - input.min) / (input.max - input.min) * 100;
            output.innerHTML = input.value;
            output.style.left = `calc(${value}% - 16px)`;
            output.style.transform = `translateX(-${value}%)`;
        };

        inputRefs.current.forEach((inputRef, index) => {
            const input = inputRef.current;
            const output = outputRefs.current[index].current;

            if (input && output) {
                input.addEventListener('input', () => handleInput(index));
                handleInput(index);
            }
        });

        inputRefsM.current.forEach((inputRefM, index) => {
            const input = inputRefM.current;
            const output = outputRefsM.current[index].current;

            if (input && output) {
                input.addEventListener('input', () => handleInputM(index));
                handleInputM(index);
            }
        });
    }, []);



    const toggleItem = index => {
        setSelectedItems(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            if (newState[index]) {
                for (let i = 0; i < index; i++) {
                    newState[i] = true;
                }
            } else {
                for (let i = index + 1; i < newState.length; i++) {
                    newState[i] = false;
                }
            }
            return newState;
        });
        if (isSelectionFixed) {
            setIsSelectionFixed(false);
        }
    };

    const fixSelection = (index) => {
        const newSelectedItems = selectedItems.map((item, i) => i === index ? true : item);
        setSelectedItems(prevState => {
            const newState = [...prevState];
            for (let i = 0; i <= index; i++) {
                newState[i] = true;
            }
            return newState;
        });
        setSelectedItem(runItems[index]);
    };

    const deselectAbove = (index) => {
        const newSelectedItems = selectedItems.map((item, i) => i <= index ? item : false);
        setSelectedItems(newSelectedItems);
        setSelectedItem(runItems[index]);
    };


    return (
        <div id='calculator'>
            <div className=' mt-[248px] sm:block hidden'>
                <div className='container z-30 relative'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-primary text-center text-[32px] uppercase leading-[38px]'>CALORIE</h1>
                        <h2 className='text-seccondary text-center text-[48px] uppercase font-semibold leading-[58px]'>CALCULATOR</h2>
                        <p className='text-[18px] text-primary text-center pt-[17px] pb-[58px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quasi quidem nesciunt autem vel temporibus doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quasi quidem nesciunt autem vel temporibus doloremque?</p>
                    </div>
                    <div className='flex space-x-6'>
                        <div className="w-[998px] mx-auto bg-[#FFFBE6] p-6 rounded-lg shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)]">
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
                                                    className={`text-black h-[40px] w-[40px] font-semibold duration-150 cursor-pointer ${selected || (isSelectionFixed && index < selectedItems.indexOf(true)) ? 'text-green-600' : ''}`}
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
                                        <h3 className='h-[21px] duration-500' style={{ color: selectedItem ? selectedItem.color : 'black' }}>
                                            {selectedItem ? selectedItem.name : ''}
                                        </h3>
                                    </div>
                                    <div className="mt-6 w-[100%] max-w-[289px] min-w-[100px]">
                                        <label className="block text-[#263800] mb-4">GOAL</label>
                                        <div>
                                            <CustomSelect goal={goal} setGoal={setGoal} options={options} onChange={(event) => setGoal(options.find((e) => e.name === event.target.value))} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 w-[50%] flex flex-col space-y-[69px]">
                                    <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                        <label className="block text-zinc-700 w-[100px] uppercase">Age</label>
                                        <div className="relative w-full">
                                            <Range value={age} setValue={(e) => setAge(e)} />
                                        </div>
                                    </div>
                                    <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                        <label className="block text-zinc-700 w-[100px] uppercase">weight</label>
                                        <div className=" w-full relative">
                                            <Range value={weight} setValue={(e) => setWeight(e)} />
                                        </div>
                                    </div>
                                    <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                        <label className="block text-zinc-700 w-[100px] uppercase">HEIGHT</label>
                                        <div className="relative w-full">
                                            <BigRange value={height} setValue={(e) => setHeight(e)} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-[414px] md:w-1/3 p-4 bg-yellow-50 rounded-lg shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] flex flex-col items-center pt-[119px] mx-auto">
                            <h2 className="text-[18px] text-[#263800]">YOUR DAILY RATE</h2>
                            <p className="text-[48px] text-seccondary font-semibold mt-[12px] w-full text-center leading-[57.6px]">{finalResult} calories</p>
                            <button className="mt-6 w-[100%] min-w-[100px] max-w-[268px] h-[56px] text-[#263800] text-[18px] border-2 border-[#263800] font-bold py-2 px-4 rounded-lg focus:outline-none hover:bg-seccondary duration-300 hover:border-none hover:text-white active:bg-[#b99400] transition-[background-color]">SEE MENU</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* {'Mobile'} */}

            <div className='z-30 sm:hidden mt-[96px] relative'>
                <div className='flex flex-col items-center mx-8'>
                    <h1 className='text-primary text-center text-[20px] uppercase leading-[23.48px]'>CALORIE</h1>
                    <h2 className='text-seccondary text-center text-[32px] uppercase font-semibold leading-[37.57px]'>CALCULATOR</h2>
                    <p className='text-[14px] text-primary text-center pt-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget justo, neque, a vitae neque phasellus ultrices. Nunc vel amet, adipiscing erat pulvinar id vestibulum, malesuada morbi. </p>
                </div>
                <div className='flex flex-col space-y-8 mt-8 mx-4'>
                    <div className="max-w-[396px] w-[100%] bg-[#FFFBE6] py-8 px-4 rounded-lg shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)]">
                        <div className="flex justify-center space-x-6">
                            <button className={buttonClasses + (gender === 'male' ? ' bg-[#ECBD00] text-white' : '')} onClick={() => setGender('male')}>MALE <IoIosMale className='h-full w-full pl-2' /></button>
                            <button className={buttonClasses + (gender === 'female' ? ' bg-[#ECBD00] text-white' : '')} onClick={() => setGender('female')}>FEMALE <IoIosFemale className='h-full w-full pl-2' /></button>
                        </div>
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full md:w-1/2">
                                <label className="block text-black">ACTIVITY</label>
                                <div className="mt-[24px] flex items-center">
                                    <div className="flex space-x-[13.3px] mt-2 min-w-[200px]">
                                        {selectedItems.map((selected, index) => (
                                            <MdOutlineDirectionsRun
                                                key={index}
                                                className={`text-black h-[40px] w-[40px] font-semibold duration-150 cursor-pointer ${selected || (isSelectionFixed && index < selectedItems.indexOf(true)) ? 'text-green-600' : ''}`}
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
                                    <h3 className='h-[21px] duration-500 ml-3 text-center min-w-[96px]' style={{ color: selectedItem ? selectedItem.color : 'black' }}>
                                            {selectedItem ? selectedItem.name : ''}
                                        </h3>
                                </div>
                                <div className="mt-6 w-[100%] max-w-[289px] min-w-[100px]">
                                        <label className="block text-[#263800] mb-4">GOAL</label>
                                        <div>
                                            <CustomSelect goal={goal} setGoal={setGoal} options={options} onChange={(event) => setGoal(options.find((e) => e.name === event.target.value))} />
                                        </div>
                                    </div>
                            </div>
                            <div className="mt-20 w-full flex flex-col space-y-[69px]">
                                <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                    <label className="block text-zinc-700 w-[100px] uppercase">Age</label>
                                    <div className="relative w-full">
                                        <Range value={age} setValue={(e) => setAge(e)} />
                                    </div>
                                </div>
                                <div className='w-[100%] max-w-[442px] flex items-center'>
                                    <label className="block text-zinc-700 w-[100px] uppercase">weight</label>
                                    <div className="relative w-full">
                                        <Range value={weight} setValue={(e) => setWeight(e)} />
                                    </div>
                                </div>
                                <div className='w-[100%] max-w-[442px] flex items-center justify-between'>
                                    <label className="block text-zinc-700 w-[100px] uppercase">HEIGHT</label>
                                    <div className="relative w-full">
                                        <BigRange value={height} setValue={(e) => setHeight(e)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[396px] md:w-1/3 p-4 bg-yellow-50 rounded-lg shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] flex flex-col items-center py-8">
                        <h2 className="text-[#263800] leading-[18.78px]">YOUR DAILY RATE</h2>
                        <p className="text-[36px] text-seccondary font-semibold mt-[8px] w-full text-center leading-[43.2px]">{finalResult} calories</p>
                        <button className="w-[100%] min-w-[100px] max-w-[268px] text-[#263800] text-[18px] border-2 border-[#263800] font-bold py-2 px-4 rounded-lg focus:outline-none active:bg-[#b99400] transition-[background-color] duration-300 mt-4">SEE MENU</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalorieCalculator