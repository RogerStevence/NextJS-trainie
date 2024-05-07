"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Tets from './tets';

function Program() {

    const [selectedDescIndex, setSelectedDescIndex] = useState(null);

    const handleDesc = (item) => {
        item.active = !item.active;
    }

    const ProgramItems = [
        {
            number: '01',
            title: 'Vegan',
            src: '/1st_program.png',
            desc: 'lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1',
            active: false
        },
        {
            number: '02',
            title: 'WEIGHT BALANCE',
            src: '/2nd_program.png',
            desc: 'lorem2'
        },
        {
            number: '03',
            title: 'WEIGHT LOSS',
            src: '/3d_program.png',
            desc: 'lorem3'
        },
        {
            number: '04',
            title: 'WEIGHT SET',
            src: '/4th_program.png',
            desc: 'lorem4'
        },
    ]

    return (
        <div className='relative'>
            <div className='container mx-auto mt-[132px] max-w-[1440px] z-20 relative'>
                <div className='flex flex-col justify-center items-center max-w-[1440px] m-auto mb-[64px]'>
                    <h1 className='text-primary text-[32px] font-medium'>WHAT IS YOUR </h1>
                    <h2 className='text-seccondary text-5xl font-bold leading-[56.35px]'>PERFECT PROGRAM?</h2>
                </div>
                <div className='flex space-x-[24px]'>
                    {
                        ProgramItems.map((item, index) => (
                            <Tets key={index} item={item} />
                        ))
                    }
                </div>
            </div>
            <div className='absolute z-10 top-[50%] right-0 bg-[#E9EDBA80]  h-[1166px] w-2/3 rounded-bl-[350px] backdrop-blur-[15px]'></div>
        </div>
    )
}

export default Program