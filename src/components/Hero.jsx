import React from 'react'

function Hero() {
    return (
        <div className="flex justify-center bg-white " id='Home'>
        <div className="h-[500px] w-[50%] flex items-center justify-center mt-10">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    I'm Mahnoor Arshad
                </h1>
                <h2 className="text-3xl md:text-4xl m-10 mb-6">
                    Frontend Developer
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-gray-400">
                    Hi, I’m Mahnoor Arshad, a passionate Frontend Developer with a knack for creating visually stunning and highly functional web applications. With a strong foundation in HTML, CSS, and JavaScript, I thrive on turning complex designs into seamless user experiences.
                </p>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded">
                    Download CV
                </button>
            </div>
        </div>
    </div>
    );
  }
  

         
export default Hero

