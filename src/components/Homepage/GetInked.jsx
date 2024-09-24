import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';

const GetInked = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_9o5p7vl',  // Replace with your EmailJS service ID
      'template_ljfmnaq', // Replace with your EmailJS template ID
      formData,
      'nJvTG0rcW4zL_u0jh' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Details sent successfully!'); // Show success message
      }, (error) => {
        console.error('FAILED...', error);
        toast.error('Failed to send your message, please try again.'); // Show error message
      });

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto py-10">
      <Toaster /> {/* Add Toaster component here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Column 1: Map */}
        <div className='my-10'>
          <iframe
            title="Tattoo Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5491975855434!2d78.59182117509872!3d11.146913452250649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babab4424c5b7ab%3A0xc3717185f467352c!2sMIRROR%20TATTOOS%20%26%20Piercing!5e0!3m2!1sen!2sin!4v1727153136287!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Column 2: Contact Form */}
        <div className="p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4"> Get Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black text-white border-b border-gray-600 focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black text-white border-b border-gray-600 focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black text-white border-b border-gray-600 focus:outline-none focus:border-yellow-500"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInked;
