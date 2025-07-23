"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ViewFeedback()
{
    const [feedbacks, setFeedbacks] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        fetch("/api/getfeedback")
            .then((res) => res.json())
            .then((data) =>
            {
                setFeedbacks(data);
                setFiltered(data);
                setLoading(false);
            })
            .catch((err) =>
            {
                console.error("Error fetching feedback:", err);
                setLoading(false);
            });
    }, []);

    useEffect(() =>
    {
        const lowerSearch = searchTerm.toLowerCase();
        setFiltered(
            feedbacks.filter((fb) =>
                fb.name.toLowerCase().includes(lowerSearch) ||
                fb.email.toLowerCase().includes(lowerSearch) ||
                fb.message.toLowerCase().includes(lowerSearch)
            )
        );
    }, [searchTerm, feedbacks]);

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">All Feedback</h2>
                    <Link
                        href="/feedback"
                        className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-200 transition"
                    >
                        Add Feedback
                    </Link>
                </div>

                <input
                    type="text"
                    placeholder="Search by name, email or message..."
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                    {loading ? (
                        <p className="text-center text-gray-500">Loading feedback...</p>
                    ) : filtered.length > 0 ? (
                        filtered.map((fb, idx) => (
                            <div
                                key={idx}
                                className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        {fb.name} ({fb.email})
                                    </h4>
                                    <span className="text-yellow-500 font-bold">
                                        {"⭐".repeat(fb.score)}
                                    </span>
                                </div>
                                <p className="text-gray-600 whitespace-pre-line">{fb.message}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">No feedback found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
