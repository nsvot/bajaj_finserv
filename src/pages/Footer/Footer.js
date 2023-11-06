import React from "react";

const Footer = () => {
    return (
        <div className="mt-5 grid md:grid-cols-3 text-white w-auto bg-gradient-to-r from-[#1A2D6C] to-[#121E4A]">

            <div className="md:py-16 py-8 justify-between w-auto items-center">

                <div className="flex flex-col items-center w-auto justify-center gap-x-8">

                    <h1 className="text-3xl text-white font-semibold">Links</h1>

                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href="/">home</a>
                    </p>
                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href='#about'>about</a>
                    </p>
                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href='#architecture'>Architecture</a>
                    </p>

                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href='#feedback'>Feedback</a>
                    </p>
                </div>

            </div>

            <div className="md:py-16 py-8 justify-between w-auto items-center">

                <div className="flex flex-col items-center w-auto justify-center gap-x-8">

                    <h1 className="text-3xl text-white font-semibold">Solution</h1>

                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href="#white-detect">Whitener Detection</a>
                    </p>
                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href='#digital-detect'>Digital Forgery Detection</a>
                    </p>
                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href='#data-detect'>Data Manipulation Detection</a>
                    </p>

                </div>

            </div>

            <div className="md:py-16 py-8 justify-between w-auto items-center">

                <div className="flex flex-col items-center w-auto justify-center gap-x-8">

                    <h1 className="text-3xl text-white font-semibold">What we do ?</h1>

                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href="#white-detect">Digital Forgery Detection</a>
                    </p>
                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href='#digital-detect'>Data Manipulation Detection</a>
                    </p>
                    <p className="mt-2 opacity-50 text-lg text-center underline">
                        <a href='#data-detect'>Algorithmic Approach to Scribbling and Whitener Detection</a>
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Footer;
