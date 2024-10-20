import styles from "./funFact.module.css";

export default function FunFact({ desc }) {
  return (
    <main className={styles.factBox}>
      <h1>Fun Fact!</h1>
      <p>{desc}</p>
    </main>
  );
}
