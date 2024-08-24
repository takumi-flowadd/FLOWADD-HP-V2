import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header () {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <Image
                    src="/logo-header.png"
                    alt="FLOWADDのロゴ1"
                    className={styles.logo}
                    width={648}
                    height={114}
                    priority
                />
            </Link>
            <Menu />
        </header>
    );
}