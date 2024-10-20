import cultureStyles from "./culture.module.css";
import InfoCard from "@/components/infoCard";
export default function Culture() {
  return <div className={cultureStyles.mainCulture}>
    <div className={cultureStyles.container}>
  <h1 className={cultureStyles.title}>Culture</h1>
  <div className={cultureStyles.content}>
  <p>Armadillos have a presence in cultures all over the world! They have a place in many indigenous cultures' stories and tales. Click on the cards below to learn more about Armadillos around the world!</p>
  <div className={cultureStyles.infoCards}>
  <InfoCard title="Mexico" content="In indigenous South American cultures around Mexico, the Armadillo is prominent throughout many stories, signifying bountiful crops and a good harvest." href="www.mexicolore.co.uk/aztecs/flora-and-fauna/armadillo"/>
  <InfoCard title="Argentina" content="In Argentinian cultures, the Armadillo is represented as clever and quick-witted, and it is found in many stories and tales, including 'The Armadillo and the Fox'." href="data.booksie.org/pratham-books/646-the-quirquincho-and-the-fox-a-folktale-from-argentina.pdf" />
  <InfoCard title="Bolivia" content="In Bolivia, the Armadillo is prized for its shell which is used to make musical instruments. There are stories about how its shell makes such brilliant music." href="worldstories.org.uk/reader/the-song-of-the-armadillo/english/369" />
  </div>
  </div>
  </div>
  </div>;
}
