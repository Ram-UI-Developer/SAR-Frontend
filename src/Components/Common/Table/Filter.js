import React, { useState } from "react";
import { Search } from "../CommonComponents/Icons";

const Filter = ({ search, setSearch }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="p-2">
            <div
                className={`
                    flex items-center gap-2 border rounded-full transition-all duration-500 
                    ${open ? "w-full shadow-md px-3 py-2" : "w-12 p-0 cursor-pointer"}
                `}

            >
                {/* Rotating Icon */}
                <Search
                    onClick={() => setOpen(!open)}
                    className={`text-gray-600 transition-transform duration-700 inline-block w-6 h-6
                      ${open ? "rotate-[360deg]" : ""}`}
                    size={20}
                />

                {/* Expanding Input */}
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className={`
                        bg-transparent outline-none w-full transition-opacity duration-500 
                        ${open ? "opacity-100" : "opacity-0 pointer-events-none border-0"}
                    `}
                />
            </div>
        </div>
    );
};

export default Filter;
