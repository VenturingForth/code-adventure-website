import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-teal-900 p-4 font-bold">
            <Link className="m-1 p-1" href=".">Home</Link>
            <Link className="m-1 p-1" href="./projects">Projects</Link>
            <Link className="m-1 p-1" href="./cv">Curriculum Vitae</Link>
            <Link className="m-1 p-1" href="./blog">Blog</Link>
        </nav>
    )
}