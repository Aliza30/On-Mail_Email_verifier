import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        issue: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form or show a success message if needed
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-neutral-300 border border-gray-300 rounded-md shadow-sm  p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-neutral-300 border border-gray-300 rounded-md shadow-sm  p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number:</label>
                <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-neutral-300 border border-gray-300 rounded-md shadow-sm  p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Issue/Note:</label>
                <textarea
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="mt-1 block w-full bg-neutral-300 border border-gray-300 rounded-md shadow-sm  p-2"
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
