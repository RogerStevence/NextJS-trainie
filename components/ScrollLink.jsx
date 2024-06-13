"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

function ScrollLink({ id, children }) {
    const handleClick = (e) => {
        e.preventDefault();

        const element = document.getElementById(id);

        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Link href={`#${id}`}>
            <div onClick={handleClick}>{children}</div>
        </Link>
    );
}

export default ScrollLink;