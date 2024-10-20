import React, { useState } from 'react';
import 'jquery-toast-plugin/dist/jquery.toast.min.css';
import "jquery-toast-plugin";

export default function Contactus() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            window.$.toast({
                heading: "Error",
                text: "Please fill out all fields.",
                icon: "error",
                loaderBg: "#f44336",
                position: "top-right",
            });
        } else {
            // handle form submit logic, e.g., via fetch API
            window.$.toast({
                heading: "Success",
                text: "Your message has been sent!",
                icon: "success",
                loaderBg: "#4CAF50",
                position: "top-right",
            });
            setFormData({ name: '', email: '', phone: '', message: '' });
        }
    };

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">Give us your feedback</h2>
                <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" placeholder="Your Phone" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">E-Mail</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Comment your feedback</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}