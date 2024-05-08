"use client"
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteRight } from "react-icons/bi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import BgImage from '../public/commentsbg.png';


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
        }
    ]

    const CustomArrows = ({ onClick, direction }) => {
        return (
            <div
                className={`custom-arrow ${direction === 'prev' ? 'right-[258px] flex items-center justify-center' : ' flex items-center justify-center'} z-40 absolute bottom-[-12px] right-[210px] rounded-[6px] border-2 border-[#354909] cursor-pointer text-[#354909] w-8 h-8`}
                onClick={onClick}
            >
                {direction === 'prev' ? '<-' : '->'}
            </div>
        );
    };

    const ratingOptions = [1, 2, 3, 4, 5]

    return (
        <div className='relative'>
            <div className='container mx-auto z-30'>
                <div className="mb-16">
                    <h1 className='text-primary text-center text-[32px] uppercase leading-[37,5px] '>Custommers'</h1>
                    <h2 className='text-seccondary text-center text-[48px] uppercase font-semibold leading-[56,3px]'>Feedback</h2>
                </div>
            </div>
            <Slider className='w-full z-30' infinite speed={300} dots={false} centerPadding={0} prevArrow={<CustomArrows direction="prev"/>}
                nextArrow={<CustomArrows direction="next" />}>
                {CommentsItems.map((item, index) => (
                    <div key={index} className='text-[#263800] bg-[#FFFCEC] max-w-[414px] shadow-xl mr-6 p-6 rounded-[15px] mb-12'>
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
            <div className='absolute -top-[25px] left-0'>
                <Image
                    src={BgImage}
                    alt=''
                    width='0'
                    height='0'
                />
            </div>
        </div>
    )
}

export default Comments