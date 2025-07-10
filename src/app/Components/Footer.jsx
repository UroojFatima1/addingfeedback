import Link from "next/link";

export default function Footer()
{
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm">
                    © {new Date().getFullYear()} MySite. All rights reserved.
                </div>

                <div className="mt-4 md:mt-0">
                    <a
                        href="https://github.com/UroojFatima1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 text-sm"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
