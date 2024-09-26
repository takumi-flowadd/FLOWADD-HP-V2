"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import { sendGAEvent } from '@next/third-parties/google';
import styles from "./index.module.css";

const initialState = {
    status: "",
    message: "",
}

export default function ContactForm() {
    const [state, formAction] = useFormState(createContactData, initialState);
    console.log(state);

    const handleSubmit = () => {
        sendGAEvent({ event: 'contact', value: 'submit' });
      };

    if (state.status === "success") {
      return (
        <p className={styles.success}>
          お問い合わせいただき、ありがとうございます。
          <br />
          お返事まで今しばらくお待ちください。
        </p>
      );
    }
    return (
        <form className={styles.form} action={formAction} onSubmit={handleSubmit}>
            <dl className={styles.formarea}>
                <dt className={styles.required}>姓</dt>
                <dd><input className={styles.textfield} type="text" id="lastname" name="lastname" required/></dd>
                <dt className={styles.required}>名</dt>
                <dd><input className={styles.textfield} type="text" id="firstname" name="firstname" required/></dd>
                <dt className={styles.required}>会社名</dt>
                <dd><input className={styles.textfield} type="text" id="company" name="company"/></dd>
                <dt className={styles.required}>メールアドレス</dt>
                <dd><input className={styles.textfield} type="text" id="email" name="email" required/></dd>
                <dt className={styles.required}>お電話番号</dt>
                <dd><input className={styles.textfield} type="text" id="phone" name="phone" required/></dd>
                <dt className={styles.required}>お問合せ内容</dt>
                <dd>
                    <textarea className={styles.textarea} id="message" name="message" />
                </dd>
                <div className={styles.actions}>
                    {state.status === "error" && (
                        <p className={styles.error}>{state.message}</p>
                    )}
                    <input type="submit" value="送信する" className={styles.button} />
                </div>
            </dl>
        </form>
    );
}