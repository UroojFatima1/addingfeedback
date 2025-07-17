"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";


export default function Contact() {

    const schema = yup.object().shape({
    name: yup.string().required("Name is required").min(4, "Name must be at least 4 characters"),
    email: yup.string().email("Invalid email").required("Email is required in correct format"),
    subject: yup.string().required("Subject is required").min(5, "Subject must be at least 5 characters"),
    message: yup.string().required("Message is required").min(10, "Message is too short"),});

    const [isSubmitting,setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit,formState:{errors},reset } = useForm({resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    setIsSubmitting(true);

    setTimeout(() => {
    reset(); 
    setIsSubmitting(false);
    setIsSubmitted(true); 
  }, 1000);

  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-md p-8"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h3>

          {isSubmitted && (
  <div className="mb-4 text-green-600 text-center font-medium">
    Submitted successfully!
  </div>
)}


          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Full Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 mb-2">
              Subject
            </label>
            <input
              id="subject"
              {...register("subject", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Subject"
            />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Your Message"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}

          </div>

          <button
  type="submit"
  disabled={isSubmitting || isSubmitted}
  className={`w-full flex items-center justify-center gap-2 ${
    isSubmitted ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
  } text-white font-semibold py-2 px-4 rounded-lg transition duration-200`}
>
  {isSubmitting && (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
      />
    </svg>
  )}
  {isSubmitting ? "Sending..." : isSubmitted ? "Submitted" : "Send Message"}
</button>



        </form>

        {/* Contact Links */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Links
          </h3>

          <div className="space-y-4 text-gray-700 text-base">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:abc@xloop.com"
                className="text-indigo-600 hover:underline"
              >
                abc@xloop.com
              </a>
            </p>

            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+92312025890"
                className="text-indigo-600 hover:underline"
              >
                +92 (312) 025890
              </a>
            </p>

            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/company/xloopdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                linkedin.com/in/xloop
              </a>
            </p>

            <p>
              <span className="font-semibold">GitHub:</span>{" "}
              <a
                href="https://github.com/UroojFatima1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                github.com/UroojFatima1
              </a>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}
