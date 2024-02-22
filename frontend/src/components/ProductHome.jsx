import React from 'react';

const ProductHome = () => {
    return (
        <section id='featured'>
            <div className=' p-16 px-20 '>
                <p className='text-sm text-[#959490]'>Discover</p>
                <h2 className='text-[#642C0C] text-4xl font-semibold py-2'>Featured</h2>
                <div className='flex justify-between items-center w-full'>
                    <p className='text-sm text-[#959490]'>Explore our selection of modern furniture for your home.</p>
                    <a href='' className='bg-[#C0772C]  py-1 px-2   rounded-sm flex items-center ' style={{ fontSize: '12px' }}>
                        <span className=" text-white font-normal  text-center">View All</span>
                    </a>
                </div>
                <div className='grid grid-cols-3 gap-12 py-8'>
                    <div className='shadow-xl rounded-lg bg-[#FFFFFF]'>
                        <img src="/images/product1.png" className='w-full h-72' alt="" />
                        <div className='px-4 py-5'>
                            <h4 className='text-[#642C0C] font-bold text-2xl pt-1-1'>Modern Minimalist Sofa</h4>
                            <p className='text-sm text-[#979390] py-1'>Elegan, Minimalis, Modern</p>
                            <h4 className='text-[#642C0C] font-semibold text-1xl'>Rp. 12.000.000.00</h4>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg bg-[#FFFFFF]'>
                        <img src="/images/product1.png" className='w-full h-72' alt="" />
                        <div className='px-4 py-5'>
                            <h4 className='text-[#642C0C] font-bold text-2xl pt-1-1'>Modern Minimalist Sofa</h4>
                            <p className='text-sm text-[#979390] py-1'>Elegan, Minimalis, Modern</p>
                            <h4 className='text-[#642C0C] font-semibold text-1xl'>Rp. 12.000.000.00</h4>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg bg-[#FFFFFF]'>
                        <img src="/images/product1.png" className='w-full h-72' alt="" />
                        <div className='px-4 py-5'>
                            <h4 className='text-[#642C0C] font-bold text-2xl pt-1-1'>Modern Minimalist Sofa</h4>
                            <p className='text-sm text-[#979390] py-1'>Elegan, Minimalis, Modern</p>
                            <h4 className='text-[#642C0C] font-semibold text-1xl'>Rp. 12.000.000.00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHome;
