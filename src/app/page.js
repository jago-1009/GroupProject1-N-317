import styles from "./page.module.css";
import InfoCard from "@/components/infoCard";

export default function Home() {
  return (
    <main className={styles.mainHome}>
      <div className={styles.text}>
        <h1>Armadillos</h1>
        <p>
          Armadillos are mammals native to the Americas, belonging to the order
          Cingulata. Known for their distinctive leathery armor and sharp claws
          for digging, there are 21 species, varying in size and habitat. They
          can grow from 13 cm (5 in) to 150 cm (59 in), with some species like
          the Tolypeutes able to roll into a ball for protection. Armadillos are
          part of the Xenarthra superorder, related to anteaters and sloths.
          Recent research links them to the extinct glyptodonts, massive,
          armored creatures that lived over 12,000 years ago.
        </p>
      </div>

      <div className={styles.info}>
        <InfoCard
          content={"Armadillos, means 'little armored ones' in Spanish."}
        ></InfoCard>
      </div>
    </main>
  );
}
