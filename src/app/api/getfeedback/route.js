import { connectDB } from "@/lib/dbconnect";
import Feedback from "@/model/Feedback";
import { NextResponse } from "next/server";

export async function GET()
{
    try
    {
        await connectDB();
        const feedbacks = await Feedback.find().sort({ id: -1 });
        return NextResponse.json(feedbacks, { status: 200 });
    } catch (error)
    {
        console.error("Error getting feedback:", error);
        return NextResponse.json({ message: "Failed to fetch feedback" }, { status: 500 });
    }
}
