import React from 'react'

const FooterComponent = () => {
    return (
        <footer className="bg-[#642C0C] text-white py-10 px-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="mb-8 md:col-start-1 -mt-3">
                        <img src="/images/logofooter.png" alt="Home" className="mb-1 w-26 mr-4" style={{ objectFit: 'cover', opacity: 1 }} />
                        <p className='text-sm mt-2'>Solutions</p>
                        <h2 className='text-4xl py-2  '>Get in Touch</h2>
                        <p className='text-sm'>Have a question or need assistance? Feel free to reach out to us!</p>
                    </div>
                    <div className='flex justify-between gap-32 pr-12'>
                        <div className="mb-8 md:col-start-2">
                            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                            <ul className="text-sm">
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Products</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">About</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>

                        <div className="mb-8 md:col-start-3">
                            <h2 className="text-xl font-semibold mb-4">Help</h2>
                            <ul className="text-sm">
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Payment Option</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Return</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="mb-8 md:col-start-3">
                            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                            <ul className="text-sm">
                                <li className="mb-2"><p  >contact@furniture.com</p></li>
                                <li className="mb-2"><p  >Jl. Gatot Subroto, Bandung</p></li>
                                <li className="mb-2"><p >+62 00225 555</p></li>

                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default FooterComponent