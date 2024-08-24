import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <a href="/concept">FLOWADDとは</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/gallery">ギャラリー</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/news">ニュース</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/ordermade">オーダーメイド</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/contact">お問合せ</a>
                    </li>
                    <li className={styles.item}>
                        <a href="">shop</a>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©︎ FLOWADD All Right Reserved</p>
            <Image
                src="/logo-footer.png"
                alt="FLOWADDのロゴ1"
                className={styles.logo}
                width={1503}
                height={264}
                priority
            />
        </footer>
    );
}