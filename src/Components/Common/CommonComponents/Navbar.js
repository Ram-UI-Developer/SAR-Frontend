import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShadow(true); // add shadow when scrolled down
            } else {
                setShadow(false); // remove shadow at top
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onLogOutHandler = () => {
        sessionStorage.clear();
        window.location = '/';
    }

    return (
        <nav
            className={`sticky top-0 bg-white/50 backdrop-blur-md transition-all duration-300 text-purple-900 ${shadow ? "shadow-lg" : ""
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold">
                        <img src="/logo192.png" alt="Logo" className="h-20 w-20" />
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink 
                            to="/students" 
                            className={({ isActive }) => 
                                `text-purple-900 hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium transition-transform duration-300 ${
                                    isActive ? "scale-125 text-purple-600 font-bold" : "scale-100"
                                }`
                            }
                        >
                            Students
                        </NavLink>
                        <NavLink 
                            to="/classes" 
                            className={({ isActive }) => 
                                `text-purple-900 hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium transition-transform duration-300 ${
                                    isActive ? "scale-125 text-purple-600 font-bold" : "scale-100"
                                }`
                            }
                        >
                            Classes
                        </NavLink>
                    
                    </div>
                    {/* Sign Out Button */}
                    <div className="space-x-6">
                        <button
                            onClick={onLogOutHandler}
                            class="relative px-4 py-1 border-2 border-purple-600 text-purple-600 font-bold transform skew-x-12 hover:bg-purple-600 hover:text-white transition rounded-md"
                        >
                            <span class="block transform -skew-x-12">Sign Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
