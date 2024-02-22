import React from 'react'

const Testimony = () => {
    return (
        <section id='testimony'>
            <div className=' p-16 px-20 '>
                <h2 className='text-[#642C0C] text-4xl font-semibold py-2'>Happy Customers</h2>
                <p className='text-sm text-[#959490]'>Hear what our customers have to say about us</p>

                <div className='grid grid-cols-3 gap-5 py-8'>
                    <div className='shadow-xl rounded-lg bg-[#FFFFFF] p-3'>
                        <div className='px-4 py-5'>
                            <div className="flex">
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                            </div>
                            <p className='text-sm text-[#642C0C] py-1 font-semibold'>Our experience with this company has <br /> been outstanding.</p>
                            <img src="/images/person1.png" className='rounded-full mt-4 ' alt="Person" />
                            <h4 className='text-[#642C0C] font-bold text-2xl pt-1-1'>John Doe</h4>
                            <p className='text-sm text-[#CCC4B4]'>CEO, XYZ Company</p>

                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg bg-[#FFFFFF] p-3'>
                        <div className='px-4 py-5'>
                            <div className="flex">
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                            </div>
                            <p className='text-sm text-[#642C0C] py-1 font-semibold'>Their products are top-notch and their <br /> customer service is exceptional.</p>
                            <img src="/images/person1.png" className='rounded-full mt-4 ' alt="Person" />
                            <h4 className='text-[#642C0C] font-bold text-2xl pt-1-1'>John Doe</h4>
                            <p className='text-sm text-[#CCC4B4]'>CEO, XYZ Company</p>

                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg bg-[#FFFFFF] p-3'>
                        <div className='px-4 py-5'>
                            <div className="flex">
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                                <span className="text-yellow-400 text-[26px]">&#9733;</span>
                            </div>
                            <p className='text-sm text-[#642C0C] py-1 font-semibold'>I highly recommend this company for all <b></b> your furniture needs.</p>
                            <img src="/images/person1.png" className='rounded-full mt-4 ' alt="Person" />
                            <h4 className='text-[#642C0C] font-bold text-2xl pt-1-1'>John Doe</h4>
                            <p className='text-sm text-[#CCC4B4]'>CEO, XYZ Company</p>

                        </div>
                    </div>

                </div>
            </div>
        </section>)
}

export default Testimony