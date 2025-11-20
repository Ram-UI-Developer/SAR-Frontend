import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="fixed bottom-0 left-0 w-full text-center py-4 bg-black bg-opacity-20">
                <p className="text-sm">&copy; {new Date().getFullYear()} SAR. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer