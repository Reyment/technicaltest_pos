import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', formData);
            console.log('Login successful:', response.data);
            // Clear form fields after successful login
            setFormData({
                email: '',
                password: '',
            });
            // Show success message with SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Login successful',
                text: 'You have successfully logged in!',
            }).then(() => {
                // Redirect to /home after successful login
                window.location.href = '/home';

            });
        } catch (error) {
            console.error('Login failed:', error);
            // Show error message with SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Invalid email or password. Please try again.',
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <button type="submit" className="w-full bg-[#C0772C] text-white px-4 py-2 rounded-md hover:bg-[#642C0C] focus:outline-none focus:bg-[#642C0C]">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
