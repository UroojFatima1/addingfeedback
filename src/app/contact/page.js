export default function Contact()
{
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>

                <div className="space-y-4 text-gray-700 text-base">
                    <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a href="mailto:hello@example.com" className="text-indigo-600 hover:underline">
                            abc@xloop.com
                        </a>
                    </p>

                    <p>
                        <span className="font-semibold">Phone:</span>{" "}
                        <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
                            +92 (312) 025890
                        </a>
                    </p>

                    <p>
                        <span className="font-semibold">LinkedIn:</span>{" "}
                        <a href="https://www.linkedin.com/company/xloopdigital/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                            linkedin.com/in/xloop
                        </a>
                    </p>

                    <p>
                        <span className="font-semibold">GitHub:</span>{" "}
                        <a href="https://github.com/UroojFatima1" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                            github.com/yourprofile
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
