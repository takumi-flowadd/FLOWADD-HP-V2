import Image from 'next/image';
import { getAmbassadorList } from '@/app/_libs/microcms';
import { AMBASSADOR_LIST_LIMIT } from '@/app/_constants';
import styles from './page.module.css';

export default async function page () {
  const data = await getAmbassadorList({ limit: AMBASSADOR_LIST_LIMIT });
    return (
        <div className={styles.container}>
        {data.contents.length === 0 ? (
          <p className={styles.empty}>メンバーが登録されていません。</p>
        ) : (
          <ul>
            {data.contents.map((ambassador) => (
              <li key={ambassador.id} className={styles.list}>
                <Image
                  src={ambassador.image.url}
                  alt=""
                  width={ambassador.image.width}
                  height={ambassador.image.height}
                  className={styles.image}
                />
                <dl>
                  <dt className={styles.name}>{ambassador.name}</dt>
                  <dd className={styles.username}>{ambassador.username}</dd>
                  <dd className={styles.profile}>{ambassador.profile}</dd>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}