import React from 'react';
import { RxCaretRight } from 'react-icons/rx';

const CTA = () => {
    return (
        <section className='py-8' id='CTA'>
            <div className="  absolute z-30 px-20 pt-[90px]">
                <h1 className='text-[#FFFFFF] text-5xl font-normal'>Discover Our Latest  <br />Furniture Collections</h1>
                <p className='text-[#CCC4B4] text-sm pt-6 pb-6  '>Explore our new arrivals and seasonal collections to find the perfect <br /> furniture for your home.</p>
                <div className='flex gap-2 pt-3'>
                    <div className='px-3 py-1  bg-[#C0772C]'>
                        <h5 className='text-white font-semibold'>Shop Now</h5>
                    </div>
                    <div className='flex justify-center'>
                        <div className='px-3 py-1 flex border-2 border-[#C0772C] items-center font-semibold'>
                            <h5 className='text-white'>Sign Up </h5>
                            <RxCaretRight className='ml-1 text-white' size={20} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full relative'>
                <img
                    src="/images/herocta.png"
                    alt=""
                    className='w-full  object-cover'
                />
                <img
                    src="/effects/redeffectcta.png"
                    alt=""
                    className='w-1/2  object-cover absolute top-0 left-0 z-20'
                />
            </div>
        </section>
    );
};

export default CTA;
