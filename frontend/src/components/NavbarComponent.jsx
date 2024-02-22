import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiHeart, FiLogIn, FiLogOut } from 'react-icons/fi';
import { useCart } from '../Contexts/CartContext';

const NavbarComponent = () => {
    const location = useLocation();
    const { cartItems } = useCart();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () => {
        setIsLoggedIn(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(true);
    };

    return (
        <nav className="bg-white h-16 text-black flex items-center justify-between px-20 min-w-fit">
            <div className="flex items-center gap-2">
                <Link to="/" className={`flex items-center ${location.pathname === '/' ? 'active' : 'inactive'}`} style={{ opacity: location.pathname === '/' ? 1 : 0.5 }}>
                    <img src="/logo.png" alt="Home" className="mb-1 w-26 mr-4" style={{ objectFit: 'cover', opacity: 1 }} />
                    <span className="text-xl font-semibold" style={{ color: '#C0772C', opacity: location.pathname === '/' ? 1 : 0.5 }}>Home</span>
                </Link>
                <Link to="/about" className={`ml-4 text-xl font-semibold ${location.pathname === '/about' ? 'active' : 'inactive'}`} style={{ color: '#C0772C', opacity: location.pathname === '/about' ? 1 : 0.5, marginLeft: "8px", marginRight: "8px" }}>About</Link>
                <Link to="/product" className={`ml-4 text-xl font-semibold ${location.pathname === '/product' ? 'active' : 'inactive'}`} style={{ color: '#C0772C', opacity: location.pathname === '/product' ? 1 : 0.5, marginLeft: "8px", marginRight: "8px" }}>Product</Link>
            </div>
            <div className="flex gap-4 items-center justify-center">
                <Link to="/cart" className="relative">
                    <FiShoppingCart size={22} style={{ color: '#C0772C' }} />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">{cartItems.length}</span>
                    )}
                </Link>
                <FiSearch size={22} style={{ color: '#C0772C' }} />
                <FiHeart size={22} style={{ color: '#C0772C' }} />
                {isLoggedIn ? (
                    <div className='bg-[#C0772C] px-3 py-2 rounded-sm flex items-center' onClick={handleLogout}>
                        <FiLogOut size={22} style={{ color: 'white' }} />
                        <span className="text-xl ml-2 text-white font-semibold">Logout</span>
                    </div>
                ) : (
                    <Link to="/register" className='bg-[#C0772C] px-3 py-2 rounded-sm flex items-center' onClick={handleLogin}>
                        <FiLogIn size={22} style={{ color: 'white' }} />
                        <span className="text-xl ml-2 text-white font-semibold">Sign Up</span>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavbarComponent;