import React, { useState } from 'react'

function tets({ item }) {

    const [selected, setSelected] = useState(false);
    const toggleItem = (value) => setSelected(value);

    return (
        <div className='relative flex flex-col h-[704px] w-full rounded-[15px] bg-no-repeat bg-cover bg-center text-left overflow-hidden' style={{ backgroundImage: `url(${item.src})` }}>
            <div className={`px-[16px] ${selected ? 'hidden ' : 'flex flex-row space-x-3 backdrop-blur-[15px] rounded-t-[15px]'}`}>
                <h3 className='text-9xl'>{item.number}</h3>
                <h4 className={`text-[32px] ${selected ? 'font-semibold flex items-center' : 'font-semibold flex items-center'}`}>{item.title}</h4>
            </div>
            <div
                onMouseEnter={() => toggleItem(true)}
                onMouseLeave={() => toggleItem(false)}
                className='absolute top-0 bottom-0 left-0 right-0 pt-[32px] w-full text-primary overflow-hidden'
            >
                <div className={`absolute top-0 flex flex-col justify-between w-full h-full transform ${selected ? 'backdrop-blur-[15px]' : 'backdrop-blur-[0]'}`}>
                    <div className={`px-[16px] ${selected ? 'flex flex-row space-x-3 backdrop-blur-[15px] rounded-t-[15px] text-[white]' : 'hidden'}`}>
                        <h3 className='text-9xl'>{item.number}</h3>
                        <h4 className={`text-[32px] ${selected ? 'font-semibold flex items-center' : 'font-semibold flex items-center'}`}>{item.title}</h4>
                    </div>
                    <p className={`p-4 absolute top-[25%] w-full transition-transform duration-1000 transform ${selected ? 'translate-y-[0] opacity-100 ' : '-translate-y-full opacity-0 '}`} style={{ wordWrap: 'break-word' }}>
                        {item.desc}
                    </p>
                </div>
                <button className={`absolute bottom-[0] p-4 flex w-full bg-seccondary justify-center items-center  ${selected ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>link</button>
            </div>
        </div >
    )
}

export default tets