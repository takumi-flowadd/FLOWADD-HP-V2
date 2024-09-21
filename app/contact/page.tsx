import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContacrForm";

export default function Page () {
    return (
        <div className={styles.container}>
            <p className={styles.texttop}>以下のフォーム、もしくはInstagramよりお気軽にお問合せくだいませ。</p>
            <ContactForm />
            <p className={styles.text}>
            ご不明点やご不安なことがたくさんあると思います。            
            <br />
            できるだけ早い返信を心がけますが最大3日ほどいただく場合がございます。
            </p>
        </div>
    );
}