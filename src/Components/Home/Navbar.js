import { useState, useEffect } from "react";

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
                    <div className="space-x-6">
                        <button
                            onClick={() => { window.location = 'login' }}
                            class="relative px-4 py-1 border-2 border-purple-600 text-purple-600 font-bold transform skew-x-12 hover:bg-purple-600 hover:text-white transition rounded-md"
                        >
                            <span class="block transform -skew-x-12">Sign In</span>
                        </button>
                    </div>                   
                </div>
            </div>          
        </nav>
    );
}
