
'use client'
import { useState, useEffect } from 'react';

const ResponsiveMessage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1023);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isMobile) return null;

    return (
        <div className="message-box">
            <h1>Oops! This site is best viewed on a Laptop</h1>
            <p>It seems like you're using a device other than a laptop. For the best experience, please visit this website on a laptop or desktop computer.</p>
            <p><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Click here for more information</a></p>
        </div>
    );
};

export default ResponsiveMessage;
