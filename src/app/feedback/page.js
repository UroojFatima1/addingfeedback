"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(4, "Name must be at least 4 characters"),
    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required in correct format"),
    message: yup.string().required("Message is required"),
    score: yup.number().required("Please provide your feedback"),
});

export default function Feedback()
{
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm({ resolver: yupResolver(schema) });

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() =>
    {
        register("score");
    }, [register]);

    const onSubmit = async (data) =>
    {
        setIsSubmitting(true);

        try
        {
            const res = await fetch("/api/addfeedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok)
            {
                const text = await res.text(); // Instead of res.json()
                console.error("Server returned error page:", text);
                alert("Server error. Check console for details.");
                return;
            }

            const result = await res.json();
            console.log("Success:", result);

            reset();
            setRating(0);
            setIsSubmitted(true);
        } catch (err)
        {
            console.error("Network error:", err);
            alert("Failed to submit. Try again.");
        } finally
        {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-end mb-4">
                    <Link
                        href="/viewfeedback"
                        className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-200 transition"
                    >
                        View Feedbacks
                    </Link>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white rounded-2xl shadow-md p-8"
                >
                    <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        We are happy to hear!
                    </h4>

                    {isSubmitted && (
                        <div className="mb-4 text-green-600 font-semibold text-center">
                            Thanks for giving your valuable feedback!
                        </div>
                    )}

                    {/* Full Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Full Name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email Address */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Email Address"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            {...register("message")}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Message"
                        />

                    </div>

                    {/* Star Rating */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Rating</label>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className="text-2xl focus:outline-none"
                                    onClick={() =>
                                    {
                                        setRating(star);
                                        setValue("score", star);
                                    }}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                >
                                    <FaStar
                                        color={(hover || rating) >= star ? "#facc15" : "#d1d5db"}
                                    />
                                </button>
                            ))}
                        </div>
                        {errors.score && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.score.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </button>
                </form>
            </div>
        </div>
    );
}
