import React from 'react';

const HeroHome = () => {
    return (
        <section id='heroHome'>
            <div className="text-black text-4xl font-bold absolute z-30 pl-20 pt-32">
                <h1 className='text-[#642C0C] text-6xl font-bold'>Discover the <span className='text-[#C0772C]'>Perfect <br /> Furniture</span> for Your <br /> Home</h1>
                <p className='text-[#C0772C] text-sm pt-4 pb-8 '>Transform your living space with our stylish and modern <br />furniture collections.</p>
                <div className='bg-[#C0772C]  py-0   rounded-sm flex items-center w-40' style={{ fontSize: '18px' }}>
                    <span className=" text-white font-semibold w-full text-center">Shop Now</span>
                </div>
            </div>
            <div className='w-full relative'>
                <img
                    src="/images/herohome.png"
                    alt=""
                    className='w-full max-h-[580px] object-cover'
                />
                <img
                    src="/effects/blur.png"
                    alt=""
                    className='w-full max-h-[580px] object-cover absolute top-0 left-0 z-20'
                />
            </div>
        </section>
    );
};

export default HeroHome;
