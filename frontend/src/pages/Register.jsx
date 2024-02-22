import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users', formData);
            console.log('Registration successful:', response.data);
            // Clear form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                phone: '',
                address: ''
            });
    
            // Show success message with SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Registration successful',
                text: 'Your account has been created successfully!',
            }).then((result) => {
                // Redirect to login page
                window.location.href = '/login';
            });
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <button type="submit" className="w-full bg-[#C0772C] text-white px-4 py-2 rounded-md hover:bg-[#642C0C] focus:outline-none focus:bg-[#642C0C]">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
