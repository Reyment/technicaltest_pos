import React from 'react'
import { useCart } from '../Contexts/CartContext';
import { RxCaretRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems } = useCart();



    return (
        <div className='min-h-screen'>
            <section className='pb-8' id='Hero-cart'>
                <div className="  absolute z-30 px-20 pt-32">
                    <h1 className='text-[#FFFFFF] text-6xl font-normal'>Cart</h1>
                    <div className='flex gap-3'>
                        <div className='flex items-center'>
                            <p className='text-[#CCC4B4]  pt-6 pb-6  '>Home</p>
                            <RxCaretRight className='ml-1 text-[#CCC4B4]' size={20} />
                        </div>

                        <div className='flex items-center'>
                            <p className='text-[#FFFFFF]  pt-6 pb-6  '>Cart</p>
                            <RxCaretRight className='ml-1 text-[#FFFFFF]' size={20} />
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
                        src="/effects/producteffect.png"
                        alt=""
                        className='w-full h-full  object-cover absolute top-0 left-0 z-20'
                    />
                </div>
            </section>
            <section className='py-12'>
                <div className='px-20 flex gap-8'>
                    <div className='w-3/4' >
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Image</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Price</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Quantity</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <img src={item.image} alt={item.name} className="h-12 w-12" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.price}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.qty}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.subtotal}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-white w-1/3 py-4 px-12'>
                        <h1 className='text-2xl font-bold text-center text-[#642C0C]'>Cart Totals</h1>
                        <div className='flex justify-between py-6'>
                            <h5 className='text-[#642C0C]'>Subtotal</h5>
                            <h5 className='text-[#CCC4B4]'>Rp. 1.250,000.00</h5>
                        </div>
                        <div className='flex justify-between pb-6'>
                            <h5 className='text-[#642C0C]'>Total</h5>
                            <h5 className='text-xl font-bold text-[#642C0C]'>Rp. 1.350,000.00</h5>
                        </div>
                        <Link to="" >
                            <div className='bg-[#C0772C] text-white text-xl px-1 py-2 font-bold text-center'>
                            <h4>Continue to Payment</h4>

                            </div>
                        </Link>
                    </div>
                </div>
            </section>

        </div>)
}

export default Cart