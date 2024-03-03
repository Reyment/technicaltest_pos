// import React from 'react'
// import { useCart } from '../Contexts/CartContext';
// import { RxCaretRight } from 'react-icons/rx';
// import { Link } from 'react-router-dom';
// import NavbarComponent from '../components/NavbarComponent';
// import FooterComponent from '../components/FooterComponent';

// const Cart = () => {
//     const { cartItems } = useCart();




//     return (
//         <>
//             <NavbarComponent />
//             <div className='min-h-screen'>
//                 <section className='pb-8' id='Hero-cart'>
//                     <div className="  absolute z-30 px-20 pt-32">
//                         <h1 className='text-[#FFFFFF] text-6xl font-normal'>Cart</h1>
//                         <div className='flex gap-3'>
//                             <div className='flex items-center'>
//                                 <p className='text-[#CCC4B4]  pt-6 pb-6  '>Home</p>
//                                 <RxCaretRight className='ml-1 text-[#CCC4B4]' size={20} />
//                             </div>

//                             <div className='flex items-center'>
//                                 <p className='text-[#FFFFFF]  pt-6 pb-6  '>Cart</p>
//                                 <RxCaretRight className='ml-1 text-[#FFFFFF]' size={20} />
//                             </div>
//                         </div>

//                     </div>
//                     <div className='w-full relative'>
//                         <img
//                             src="/images/herocta.png"
//                             alt=""
//                             className='w-full  object-cover'
//                         />
//                         <img
//                             src="/effects/producteffect.png"
//                             alt=""
//                             className='w-full h-full  object-cover absolute top-0 left-0 z-20'
//                         />
//                     </div>
//                 </section>
//                 <section className='py-12'>
//                     <div className='px-20 flex gap-8'>
//                         <div className='w-3/4' >
//                             <table className="min-w-full divide-y divide-gray-200">
//                                 <thead className="bg-white">
//                                     <tr>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Image</th>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Name</th>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Price</th>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Quantity</th>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Subtotal</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-gray-200">
//                                     {cartItems.map(item => (
//                                         <tr key={item.id}>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <img src="/images/product1.png" alt="" className="h-12 w-12" />
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 {item.pd_name}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 {item.pd_price}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 {item.qty}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 {item.subtotal}
//                                             </td>

//                                         </tr>
//                                     ))}


//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className='bg-white w-1/3 py-4 px-12'>
//                             <h1 className='text-2xl font-bold text-center text-[#642C0C]'>Cart Totals</h1>
//                             <div className='flex justify-between py-6'>
//                                 <h5 className='text-[#642C0C]'>Subtotal</h5>
//                                 <h5 className='text-[#CCC4B4]'>Rp. 1.250,000.00</h5>
//                             </div>
//                             <div className='flex justify-between pb-6'>
//                                 <h5 className='text-[#642C0C]'>Total</h5>
//                                 <h5 className='text-xl font-bold text-[#642C0C]'>Rp. 1.350,000.00</h5>
//                             </div>
//                             <Link to="" >
//                                 <div className='bg-[#C0772C] text-white text-xl px-1 py-2 font-bold text-center'>
//                                     <h4>Continue to Payment</h4>

//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </section>

//             </div>
//             <FooterComponent />

//         </>

//     )


// }

// export default Cart


import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiHeart, FiTrash } from 'react-icons/fi';
import { CartContext } from '../Contexts/CartContext';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import Swal from 'sweetalert2';


const Cart = () => {
    const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    const handleChangeQty = (itemId, newQty) => {
        updateCartItemQuantity(itemId, newQty);
    };

    const subtotal = cartItems.reduce((total, item) => total + item.pd_price * item.qty, 0);

    const handleCheckout = async () => {
      try {

          Swal.fire({
              icon: 'success',
              title: 'Checkout Successful',
              text: 'Thank you for your purchase!',
          }).then(() => {
              // Pindahkan halaman ke Home setelah berhasil checkout
              window.location.href = '/home';
            });
      } catch (error) {
          console.error('Checkout failed:', error);
          // Tampilkan SweetAlert untuk checkout gagal
          Swal.fire({
              icon: 'error',
              title: 'Checkout Failed',
              text: 'Failed to process your order. Please try again later.',
          });
      }
  };
    return (
        <>
            <NavbarComponent />
            <div className="min-h-screen">
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-12">
                        <h2 className="text-2xl font-semibold text-center mb-6">My Cart</h2>
                        {cartItems.length === 0 && (
                            <p className="text-center">Your cart is empty.</p>
                        )}
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex items-center justify-between py-4 border-b border-gray-200">
                                <div className="flex items-center">
                                    <img src="/images/product1.png" alt={item.name} className="w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <p className="text-lg font-semibold">{item.pd_name}</p>
                                        <p className="text-gray-600">{item.pd_price}</p>
                                        <div className="flex items-center">
                                            <p className="text-gray-600">Qty:</p>
                                            <input
                                                type="number"
                                                value={item.qty}
                                                onChange={(e) => handleChangeQty(item.id, parseInt(e.target.value))}
                                                className="w-16 p-1 ml-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C0772C] focus:ring-opacity-75"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700 focus:outline-none focus:shadow-outline-red">
                                        <FiTrash size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center justify-between py-4">
                            <p className="text-lg font-semibold">Subtotal:</p>
                            <p className="text-lg font-semibold">{subtotal}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <button onClick={handleCheckout} className="bg-[#C0772C] px-3 py-2 rounded-sm flex items-center text-white">
                                <FiShoppingCart size={22} style={{ color: 'white' }} />
                                <span className="text-xl ml-2 font-semibold">Checkout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    );
};

export default Cart;