import React, { useEffect, useRef, useState } from 'react';
import css from './Range.module.css';

const RangeComponent = ({ value, setValue }) => {

    const rangeRef = useRef(null);
    const bubbleRef = useRef(null);
    

    useEffect(() => {
        const range = rangeRef.current;
        const bubble = bubbleRef.current;

        const handleInput = () => {
            setBubble(range, bubble);
            setValue(range.value);
        };

        range.addEventListener('input', handleInput);
        setBubble(range, bubble); // Инициализация позиции пузырька

        return () => {
            range.removeEventListener('input', handleInput);
        };
    }, []);

    const setBubble = (range, bubble) => {
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = val;
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    };

    return (
        <div className={css.range_wrap}>
            <input
                ref={rangeRef}
                type="range"
                className={css.range}
                min="0"
                max="100"
                defaultValue="0"
                onChange={() => setValue(rangeRef.current.value)}
            />
            <div ref={bubbleRef} className={css.bubble}>
                {value}
            </div>
        </div>
    );
};

export default RangeComponent;