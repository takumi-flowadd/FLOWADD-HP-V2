'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
    
    return (
        <div>
            <nav className={cx(styles.nav, isOpen && styles.open)}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/members">FLOWADDとは</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/gallery">ギャラリー</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/ordermade">オーダーメイド</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact">お問合せ</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="">shop</Link>
                    </li>
                </ul>
                <button className={cx(styles.button, styles.close)} onClick={close}>
                    <Image
                    src="/close.svg"
                    alt="閉じる"
                    width={24}
                    height={24}
                    priority
                    />
                </button>
            </nav>
            <button className={styles.button} onClick={open}>
                <Image src="/icon-menu.png" alt="メニュー" width={35} height={20} />
            </button>
        </div>
    )
}