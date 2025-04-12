'use client';

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import MenuItem from "./MenuItem";

const MyMobileNav = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(prev => !prev);
    const handleClose = () => setShow(false);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [show])

    return (
        <div className="md:hidden relative z-50 ">
            <Menu size={29} onClick={handleToggle} className="cursor-pointer" />

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${show ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={handleClose}
            />

            {/* Nav Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-black/80 shadow-lg transition-transform duration-300 ease-in-out ${show ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <MenuItem method={handleClose} />
            </div>
        </div>
    );
};

export default MyMobileNav;
