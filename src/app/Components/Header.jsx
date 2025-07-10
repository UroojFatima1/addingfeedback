import Link from "next/link"

export default function Header()
{
    return (
        <header className="bg-gray-800 text-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="text-xl font-bold">MySite</div>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-yellow-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-yellow-400">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-yellow-400">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}