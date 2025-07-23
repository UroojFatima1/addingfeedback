import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    name: String,
    score: {
        type: Number,
        required: true
    },
    email: String,
    message: String
})

export default mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);