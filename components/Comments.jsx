"use client"
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteRight } from "react-icons/bi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import BgImage from '../public/commentsbg.png';
import next from 'next';
import { useState } from 'react';
import { useRef } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from 'react';




function Comments() {

    const CommentsItems = [
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et accumsan a viverra turpis mauris amet, in quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            src: '/Photo.jpg',
            name: 'Jane Smith',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et accumsan a viverra turpis mauris amet, in quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            src: '/Photo.jpg',
            name: 'Jane Smith',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et accumsan a viverra turpis mauris amet, in quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            src: '/Photo.jpg',
            name: 'Jane Smith',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et accumsan a viverra turpis mauris amet, in quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            src: '/Photo.jpg',
            name: 'Jane Smith',
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et accumsan a viverra turpis mauris amet, in quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            src: '/Photo.jpg',
            name: 'Jane Smith',
        }
    ]

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);


    const ratingOptions = [1, 2, 3, 4, 5,]

    return (
        <div className='relative'>
            <div className='sm:flex flex-col hidden mt-[96px]'>
                <div className='container z-30'>
                    <div className="mb-16">
                        <h1 className='text-primary text-center text-[32px] uppercase leading-[37,5px] '>Custommers'</h1>
                        <h2 className='text-seccondary text-center text-[48px] uppercase font-semibold leading-[56,3px]'>Feedback</h2>
                    </div>
                </div>
                <Slider className='w-full z-30' infinite speed={300} dots={false} centerPadding={0} slidesToShow={4} ref={sliderRef} arrows={false}>
                    {CommentsItems.map((item, index) => (
                        <div key={index} className='text-[#263800] bg-[#FFFCEC] max-w-[414px] shadow-xl mr-6 p-6 rounded-[15px] mb-[38px]'>
                            <BiSolidQuoteRight className='w-[40px] h-[40px] text-seccondary' />
                            <p className='mt-6'>{item.desc}</p>
                            <div className='flex mt-6'>
                                <Image src={item.src} alt='' width='46' height='46' />
                                <div className='flex flex-col ml-[15px]'>
                                    <h3>{item.name}</h3>
                                    <div className='flex'>
                                        {ratingOptions.map((item, index) => (
                                            <MdOutlineStarPurple500 key={index} className='text-seccondary' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='container z-50 flex justify-end relative'>
                <div className='flex space-x-4 w-[80px]'>
                        <div className='w-8 h-8 rounded-[6px] border-2 border-[#354909] cursor-pointer flex items-center justify-center' onClick={() => sliderRef.current.slickPrev()}>
                            <FaArrowLeft className='text-[#354909]' />
                        </div>
                        <div className='w-8 h-8 rounded-[6px] border-2 border-[#354909] cursor-pointer flex items-center justify-center' onClick={() => sliderRef.current.slickNext()}>
                            <FaArrowRight className='text-[#354909]' />
                        </div>
                    </div>
                </div>
                <div className=' absolute h-[1654px] w-[1106px] -top-[25px] overflow-hidden' style={{ backgroundImage: `url('/commentsbg.png')`, background: 'contain', backgroundRepeat: 'no-repeat'}}></div>
            </div>



            {/* {'Mobile'} */}

            <div className='sm:hidden mt-[96px]'>
                <div className='container mx-auto z-30'>
                    <div className="mb-16">
                        <h1 className='text-primary text-center text-[32px] uppercase leading-[37,5px] '>Custommers'</h1>
                        <h2 className='text-seccondary text-center text-[48px] uppercase font-semibold leading-[56,3px]'>Feedback</h2>
                    </div>
                </div>
                <Slider className='w-full z-30' infinite speed={300} dots={false} slidesToShow={1.1} centerPadding={1} ref={sliderRef} arrows={false}>
                    {CommentsItems.map((item, index) => (
                        <div key={index} className='text-[#263800] bg-[#FFFCEC] max-w-[364px] shadow-[2px_6px_15px_0_rgba(0,0,0,0.25)] ml-[57px] p-6 rounded-[15px] mb-12'>
                            <BiSolidQuoteRight className='w-[40px] h-[40px] text-seccondary' />
                            <p className='mt-6'>{item.desc}</p>
                            <div className='flex mt-6'>
                                <Image src={item.src} alt='' width='46' height='46' />
                                <div className='flex flex-col ml-[15px]'>
                                    <h3>{item.name}</h3>
                                    <div className='flex'>
                                        {ratingOptions.map((item, index) => (
                                            <MdOutlineStarPurple500 key={index} className='text-seccondary' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className=' z-30 flex justify-end relative mr-[48px]'>
                    <div className='flex space-x-4 w-[80px]'>
                        <div className='w-8 h-8 rounded-[6px] border-2 border-[#354909] cursor-pointer flex items-center justify-center' onClick={() => sliderRef.current.slickPrev()}>
                            <FaArrowLeft className='text-[#354909]' />
                        </div>
                        <div className='w-8 h-8 rounded-[6px] border-2 border-[#354909] cursor-pointer flex items-center justify-center' onClick={() => sliderRef.current.slickNext()}>
                            <FaArrowRight className='text-[#354909]' />
                        </div>
                    </div>
                </div>
                <div className=' absolute h-[845px] w-[549px] overflow-hidden -left-[201px] -top-[145px] z-0' style={{ backgroundImage: `url('/comment-mb.png')`, background: 'contain', backgroundRepeat: 'no-repeat'}}></div>
            </div>
        </div>
    )
}

export default Comments