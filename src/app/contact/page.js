import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main className={styles.contactMain}>
      <h1>Contact Us!</h1>
      <input placeholder="Name"></input>
      <input placeholder="Email" type="email"></input>
      <textarea placeholder="Message"></textarea>
      <input
        type="Submit"
        placeholder="Submit"
        className={styles.submit}
      ></input>
    </main>
  );
}
