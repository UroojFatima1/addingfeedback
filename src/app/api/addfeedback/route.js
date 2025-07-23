import { connectDB } from "@/lib/dbconnect";
import Feedback from "@/model/Feedback";

export async function POST(req)
{
    try
    {
        await connectDB();

        const body = await req.json();

        const saved = await Feedback.create(body);
        console.log("MongoDB saved");
        return new Response(JSON.stringify(saved), {
            status: 201,
        });
    } catch (err)
    {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
    }
}
