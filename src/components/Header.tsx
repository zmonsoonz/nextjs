"use client"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/posts">Posts</Link>
            </nav>
        </header>
    )
}

export default Header;