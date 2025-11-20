import React from 'react'

const Content = () => {
    return (
        <div className="min-h-screen flex flex-col text-purple-900">
            {/* Hero Section */}
            <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
                <h1 className="font-staatliches text-5xl md:text-7xl uppercase drop-shadow-lg">
                    Welcome to SAR
                </h1>
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-purple-500">
                    Manage students, attendance, and marks with ease — all in one place.
                </p>
                <div className="mt-8 flex space-x-4">
                    <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition">
                        Get Started
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-white hover:text-black transition">
                        Learn More
                    </button>
                </div>
            </main>

           
        </div>
    )
}

export default Content