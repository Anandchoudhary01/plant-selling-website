// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// function SignupPage() {
//   return (
//     <div>
//     <div className="flex items-center justify-center min-h-screen bg-green-100">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
//         {/* Title */}
//         <div className="text-center mb-6">
//           <h1 className="text-4xl font-bold text-green-600">TreeShop</h1>
//           <p className="text-gray-600">Create Your Account</p>
//         </div>

//         {/* Signup Form */}
//         <form className="space-y-6">
//           {/* First Name */}
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               placeholder="Enter your first name"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600"
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               placeholder="Enter your last name"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Create a password"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               placeholder="Confirm your password"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600"
//             />
//           </div>

//           {/* Date of Birth */}
//           <div>
//             <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dob"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600"
//             />
//           </div>

        

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-green-700"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Already Registered */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <Link to="/login" className="text-green-600 font-bold hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default SignupPage;





import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    alert("Signup Successful!");
    // Add backend API integration here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-8">
        <div className="flex justify-center items-center mb-6">
          <FaLeaf className="text-green-700 text-4xl" />
          <h1 className="text-2xl font-bold text-green-700 ml-2">TreeShop Signup</h1>
        </div>

        <p className="text-gray-600 text-sm text-center mb-6">
          Join us in making the world greener. Create your account below.
        </p>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-600 text-sm text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

