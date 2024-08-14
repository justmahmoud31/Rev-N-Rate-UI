/* eslint-disable */

import React, { useState } from "react";

const ProfileDataForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    website: "",
    visitors: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClassName =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400";

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-lg font-medium text-orange-500"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClassName}
            placeholder="7oda"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-lg font-medium text-orange-500"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClassName}
            placeholder="Marawan"
            required
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="phone"
            className="block mb-2 text-lg font-medium text-orange-500"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClassName}
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
      </div>


      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-lg font-medium text-orange-500"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClassName}
          placeholder="7oda@gmail.com"
          required
        />
      </div>


      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-lg font-medium text-orange-500"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className={inputClassName}
          placeholder="•••••••••"
          required
        />
      </div>

      <div className="flex items-center mb-6 gap-x-4" >
        <div className="flex items-center h-5">
          <input
            id="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="agreeToTerms"
          className="block  text-lg  font-medium text-orange-500"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-orange-700 hover:underline "
          >
            terms and conditions
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-orange-500 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  );
};

export default ProfileDataForm;
