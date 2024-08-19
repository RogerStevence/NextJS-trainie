import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterestAlt, BiLogoInstagramAlt } from "react-icons/bi";
import { ImArrowRight2 } from "react-icons/im";
import CustomButton from './Button';
import CustomButtonMenu from './CustomButtonMenu';

const scrollToPersonalProgramDelivery = () => {
    const personalProgramElement = document.getElementById('delivery');
    if (personalProgramElement) {
        const elementPosition = personalProgramElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 50; 

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};
const scrollToPersonalProgramMenu = () => {
    const personalProgramElement = document.getElementById('menu');
    if (personalProgramElement) {
        const elementPosition = personalProgramElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 50; 

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

const Hero = () => {

    const IconsList = [
        {
            src: '/Fresh_Ingredients.svg',
            title: 'Fresh Ingredients'
        },
        {
            src: '/Affordable_Price.svg',
            title: 'Affordable Price'
        },
        {
            src: '/Delicious_Food.svg',
            title: 'Delicious Food'
        },
        {
            src: '/On-Time_Delivery.svg',
            title: 'On Time Delivery'
        },
    ];

    const SocialIcons = [
        {
            title: 'BiLogoFacebook'
        },
        {
            title: 'BiLogoTwitter'
        },
        {
            title: 'BiLogoInstagramAlt'
        },
        {
            title: 'BiLogoPinterestAlt'
        },
    ];


    return (
        <div className='container' id='hero'>
            <div className='sm:flex xl:flex justify-center items-center sm:mt-[101px] w-full cursor-default'>
                <div className='hidden sm:flex bg-[#46620B] rounded-l-[15px] z-10 h-[910px] w-[561px] relative'>
                    <div className='flex flex-col mx-[40px] mt-[160px] text-[20px] relative'>
                        <h1 className='sm:text-[48px] mb-[12px] font-bold text-[#FFFBE5]'>YOUR <span className='text-[#ECBD00]'>DELIVERY</span> TO A <span className='text-[#ECBD00]'>HEALTHY</span> LIFE</h1>
                        <p className='text-[#FFFBE5] mb-[32px]'>We save your time and money providing you with the most fresh and healthy food</p>
                        <div className='flex justify-center items-center mb-[317px] space-x-[18px] mr-6 font-[700] text-[18px] leading-[21px]'>
                            <CustomButton> ORDER NOW </CustomButton>
                            <CustomButtonMenu>SEE MENU</CustomButtonMenu>
                        </div>
                        <div className='flex justify-around items-center'>
                            {
                                IconsList.map((item, index) => (
                                    <div key={index} className='flex flex-col justify-center items-center hover:scale-110 duration-200 cursor-pointer'>
                                        <div className='rounded-[30px] bg-[#FFFCEC1A] shadow-md w-[48px] h-[48px] flex justify-center items-center'>
                                            <Image
                                                src={item.src}
                                                alt=""
                                                width={24}
                                                height={24}
                                                style={{
                                                    maxWidth: "100%",
                                                    height: "auto"
                                                }} />
                                        </div>
                                        <p className='text-[14px] text-center mt-[12px] w-[70px]'>{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className=' h-[910px] w-[880px] z-20 rounded-br-[300px]  rounded-tr-[15px] min-w-[880px] hidden sm:flex' style={{ backgroundImage: `url('/hero.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </div>



                {/* {'Mobile'} */}

                <div className="sm:hidden flex flex-col min-w-[320px] max-w-[396px] mt-[56px] max-h-[764px] h-[100%] mr-8">
                    <div
                        className="rounded-tr-[15px] px-4 max-h-[164px]"
                        style={{
                            backgroundImage: 'linear-gradient(86.75deg, #F1CE56 -0.19%, #EEC84B 23.47%, #DAA82B 97.86%)'
                        }}
                    >
                        <h1 className="pt-8 pb-3 text-[#FFFBE6] text-center text-[8vw] sm:text-[36px] font-bold h-[35vw] sm:h-[142px] ">
                            YOUR <span className="text-primary">DELIVERY</span> TO A <span className="text-primary">HEALTHY</span> LIFE
                        </h1>
                    </div>
                    <div
                        className="h-[100%] w-[100%] min-w-[250px] max-w-[396px] min-h-[450px] max-h-[479px] -mt-[1px] bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: `url('/mobile-hero.png')`,
                        }}
                    >
                        <p className="text-primary text-center px-4 font-semibold">We save your time and money providing you with the most fresh and healthy food</p>
                    </div>
                    <div
                        className="h-[35vw] sm:h-[143px] rounded-br-[130px] flex flex-col items-center space-y-2 relative -mt-[9px]"
                        style={{
                            backgroundImage: 'linear-gradient(92.49deg, #E7BD3E 3.73%, #D2A129 77.66%, #CF9E27 97.32%)'
                        }}
                    >
                        <button className="w-[50%] h-[14vw] sm:w-[190px] sm:h-[56px] rounded-[8px] bg-primary uppercase font-semibold" onClick={scrollToPersonalProgramDelivery}>order now</button>
                        <button className="w-[50%] h-[14vw] sm:w-[190px] sm:h-[56px] rounded-[8px] border-white border-2 uppercase font-semibold" onClick={scrollToPersonalProgramMenu}>see menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero



