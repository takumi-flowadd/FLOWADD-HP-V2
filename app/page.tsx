import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News }from "@/app/_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: '1',
      title: '渋谷にオフィスを移転しました',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '2',
      title: '当社CEOが業界リーダーTOP30に選出されました',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '3',
      title: 'テストの記事です',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/04/19',
      createdAt: '2023/04/19',
    },
  ],
};

export default function Home() {
  const sliceData: News = [];

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>FLOWADDのドライフラワーで特別な思い出をあなたのためだけに</h1>
        </div>
      </section>
      <section className={styles.news}>
          <h2 className={styles.newsTitle}>News</h2>
          <NewsList news={sliceData} />
          <div className={styles.newsLink}>
            <ButtonLink href="/news">もっとみる</ButtonLink>
          </div>
      </section>
    </>
  );
}