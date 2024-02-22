import React from 'react';
import { RxCaretRight } from 'react-icons/rx';

const State = () => {
    return (
        <section id='state'>
            <div className='flex px-16  py-16'>
                <div >
                    <img src="/images/herostate.png" className='rounded-lg' alt="" />
                </div>
                <div className='px-8 pt-12'>
                    <p className='text-sm text-[#CCC4B4]'>Quality</p>
                    <h3 className='text-6xl text-[#642C0C] font-normal py-2'>Experience the Best in <br /> Modern Furniture</h3>
                    <p className='text-[#CCC4B4]'>Discover our impressive growth, exceptional customer satisfaction, and <br /> wide range of high-quality products.</p>
                    <div className='py-6 grid grid-cols-2'>
                        <div>
                            <h4 className='text-6xl font-semibold font-serif pb-4 text-[#642C0C]'>50%</h4>
                            <p className='text-sm text-[#CCC4B4]'>Increase in Customer Satisfaction</p>
                        </div>
                        <div>
                            <h4 className='text-6xl font-semibold font-serif pb-4 text-[#642C0C]'>50%</h4>
                            <p className='text-sm text-[#CCC4B4]'>Increase in Customer Satisfaction</p>
                        </div>
                    </div>
                    <div className='flex gap-2 pt-3'>
                        <div className='px-3 py-1 border-2 border-[#642C0C]'>
                            <h5 className='text-[#642C0C] font-semibold'>Learn More</h5>
                        </div>
                        <div className='flex justify-center'>
                            <div className='px-3 py-1 flex items-center font-semibold'>
                                <h5 className='text-[#642C0C]'>Sign Up </h5>
                                <RxCaretRight className='ml-1 text-[#642C0C]' size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default State;
