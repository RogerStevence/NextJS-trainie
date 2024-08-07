"use client";
import React from 'react';
import Image from "next/image";
import { useState } from 'react';
import ProgramResp from './ProgramResp';
import ProgramMob from './ProgramMob';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BgImage from '../public/PersonalProgramBG.png';



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
        <div className='relative' id='programs'>
            <div className='hidden sm:block'>
                <div className='container mx-auto mt-[132px] max-w-[1440px] z-20 relative'>
                    <div className='flex flex-col justify-center items-center max-w-[1440px] m-auto mb-[64px]'>
                        <h1 className='text-primary text-[32px] font-medium leading-[38px]'>WHAT IS YOUR </h1>
                        <h2 className='text-seccondary text-5xl font-bold leading-[56.35px]'>PERFECT PROGRAM?</h2>
                    </div>
                    <div className='flex space-x-[24px]'>
                        {
                            ProgramItems.map((item, index) => (
                                <ProgramResp key={index} item={item} />
                            ))
                        }
                    </div>
                </div>
                <div className='absolute top-[50%] left-[25%] bg-[#E9EDBA80]  h-[542px] w-3/4 backdrop-blur-[15px]'></div>
                <div className='absolute top-[120%] -right-[0] z-[-1] sm:block hidden overflow-hidden pointer-events-none'>
                    <Image
                        className='rounded-l-full overflow-hidden z-[-1] relative'
                        src={BgImage}
                        alt=''
                        width='full'
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
            </div>

            {/* {'Mobile'} */}

            <div className='sm:hidden mt-[86px]'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-primary font-medium text-[20px]'>WHAT IS YOUR </h1>
                    <h2 className='text-seccondary text-[32px] font-semibold leading-[37.5px] text-center'>PERFECT PROGRAM?</h2>
                </div>

                <Slider infinite speed={300} dots={false} centerPadding={40} className='mt-8' centerMode={true} arrows={false} >
                    {
                        ProgramItems.map((item, index) => (
                            <ProgramMob key={index} item={item} />
                        ))
                    }
                </Slider>

            </div>
        </div>
    );
}

export default Program