import React from 'react';

const Benefit = () => {
    return (
        <section className='py-8' id='benefit'>
            <div className="text-black text-4xl font-bold absolute z-30 px-20 pt-24">
                <p className='text-sm text-[#CCC4B4] pb-2'>Discover</p>
                <h1 className='text-[#FFFFFF] text-5xl font-normal'>Experience Modern <br /> Furniture Like Never <br /> Before</h1>
                <p className='text-[#CCC4B4] text-sm pt-6 pb-6  '>At our online store, we offer a wide range of modern furniture that <br /> combines quality craftsmanship, innovative design, and sustainable <br /> materials. Whether you're looking for a statement piece or a complete <br /> home makeover, our collection has something for every style and <br /> budget.</p>
                <div className='grid grid-cols-2'>
                    <div>
                        <h5 className='text-sm font-semibold text-white'>Quality</h5>
                        <p className='text-sm font-normal text-[#CCC4B4]'>Experience the finest craftsmanship and <br /> attention to detail in every piece.</p>
                    </div>
                    <div>
                        <h5 className='text-sm font-semibold text-white'>Design</h5>
                        <p className='text-sm font-normal text-[#CCC4B4]'>Discover modern furniture designs that are <br /> both functional and aesthetically pleasing.</p>
                    </div>

                </div>

            </div>
            <div className='w-full relative'>
                <img
                    src="/images/herobenefit.png"
                    alt=""
                    className='w-full max-h-[580px] object-cover'
                />
                <img
                    src="/effects/redeffect.png"
                    alt=""
                    className='w-1/2 max-h-[580px] object-cover absolute top-0 left-0 z-20'
                />
            </div>
        </section>
    );
};

export default Benefit;
