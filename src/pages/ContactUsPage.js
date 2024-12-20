import React from 'react';


function ContactUsPage() {
  return (
    <div>
   

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLZH6srY1sgsZ3eaGGFDsBooP95VZ1Lqr3A&s" // Replace with a tree-themed image
          alt="Contact Us Banner"
          className="w-full fit h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We're here to help! Contact us via email, phone, or visit us at our location.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-600">Email</h3>
              <p className="text-gray-600">support@treeshop.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600">Address</h3>
              <p className="text-gray-600">123 Green Lane, TreeTown, Earth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Send Us a Message</h2>
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white font-bold py-3 px-6 rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">© 2024 TreeShop. All rights reserved.</p>
          <p>
            Follow us on{' '}
            <a href="#" className="underline hover:text-gray-300">
              Facebook
            </a>{' '}
            |{' '}
            <a href="#" className="underline hover:text-gray-300">
              Instagram
            </a>
          </p>
          <p>Email: support@treeshop.com | Phone: +1 234 567 890</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactUsPage;
