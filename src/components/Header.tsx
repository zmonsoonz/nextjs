"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const Header = () => {

    const pathname = usePathname();

    return (
        <header>
            <nav>
                <Link href="/" className={pathname == "/" ? styles.active : undefined}>Home</Link>
                <Link href="/about" className={pathname == "/about" ? styles.active : undefined}>About</Link>
                <Link href="/posts" className={pathname == "/posts" ? styles.active : undefined}>Posts</Link>
            </nav>
        </header>
    )
}

export default Header;