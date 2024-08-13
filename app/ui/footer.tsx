import Link from "next/link"

export default function Footer() {
    return (
      <footer className="p-4 text-center bg-emerald-950">
        <p>&copy; Joshua Robinson 2024</p>
        <address>
          <Link href="mailto:joshua@codeadventure.uk">joshua@codeadventure.uk</Link>
        </address>
      </footer>
    )
}