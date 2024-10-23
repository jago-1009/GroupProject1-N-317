'use client'
import cultureStyles from "./culture.module.css";
import InfoCard from "@/components/infoCard";
import { useState } from "react";
export default function Culture() {
  const [params, setParams] = useState({
    adjective: "",
    name: "",
    verb1: "",
    verb2: "",
    verb3: "",
    object:"",
    waterName: "",
    action:"",
    verb4:"",
    object2:"",
    verb5:"",
    ending:"",
    
  });
  const [showing, setShowing] = useState(false)
  let text;
  if (showing == true) {
    text = "Hide"
  }
  else {
    text = "Show"
  }
  return <div className={cultureStyles.mainCulture}>
    <div className={cultureStyles.container}>
  <h1 className={cultureStyles.title}>Culture</h1>
  <div className={cultureStyles.content}>
  <p>Armadillos have a presence in cultures all over the world! They have a place in many indigenous cultures' stories and tales. Click on the cards below to learn more about Armadillos around the world!</p>
  <div className={cultureStyles.infoCards}>
  <InfoCard title="Mexico" content="In indigenous South American cultures around Mexico, the Armadillo is prominent throughout many stories, signifying bountiful crops and a good harvest." href="https://www.mexicolore.co.uk/aztecs/flora-and-fauna/armadillo"/>
  <InfoCard title="Argentina" content="In Argentinian cultures, the Armadillo is represented as clever and quick-witted, and it is found in many stories and tales, including &apos;The Armadillo and the Fox&apos;." href="https://data.booksie.org/pratham-books/646-the-quirquincho-and-the-fox-a-folktale-from-argentina.pdf" />
  <InfoCard title="Bolivia" content="In Bolivia, the Armadillo is prized for its shell which is used to make musical instruments. There are stories about how its shell makes such brilliant music." href="https://worldstories.org.uk/reader/the-song-of-the-armadillo/english/369" />
  </div>
  <div className={cultureStyles.madLib}>
  <h2>Want to write your own story about armadillos?</h2>
  <input className={cultureStyles.input} type="text" value={params.adjective} onChange={(e) => setParams({ ...params, adjective: e.target.value })} placeholder="An adjective" />
  <input className={cultureStyles.input} type="text" value={params.name} onChange={(e) => setParams({ ...params, name: e.target.value })} placeholder="A name" />
  <input className={cultureStyles.input} type="text" value={params.verb1} onChange={(e) => setParams({ ...params, verb1: e.target.value })} placeholder="A verb" />
  <input className={cultureStyles.input} type="text" value={params.verb2} onChange={(e) => setParams({ ...params, verb2: e.target.value })} placeholder="Another verb" />
  <input className={cultureStyles.input} type="text" value={params.verb3} onChange={(e) => setParams({ ...params, verb3: e.target.value })} placeholder="Another verb" />
  <input className={cultureStyles.input} type="text" value={params.object} onChange={(e) => setParams({ ...params, object: e.target.value })} placeholder="An object" />
  <input className={cultureStyles.input} type="text" value={params.waterName} onChange={(e) => setParams({ ...params, waterName: e.target.value })} placeholder="A body of water" />
  <input className={cultureStyles.input} type="text" value={params.action} onChange={(e) => setParams({ ...params, action: e.target.value })} placeholder="An action" />
  <input className={cultureStyles.input} type="text" value={params.verb4} onChange={(e) => setParams({ ...params, verb4: e.target.value })} placeholder="A past-tense verb" />
  <input className={cultureStyles.input} type="text" value={params.object2} onChange={(e) => setParams({ ...params, object2: e.target.value })} placeholder="Another object" />
  <input className={cultureStyles.input} type="text" value={params.verb5} onChange={(e) => setParams({ ...params, verb5: e.target.value })} placeholder="A past-tense verb" />
  <input className={cultureStyles.input} type="text" value={params.ending} onChange={(e) => setParams({ ...params, ending: e.target.value })} placeholder="Another adjective" />
  </div>
  <button className={cultureStyles.button} onClick={() => setShowing(!showing) }>{text} story</button>
  {showing && (
  <div className={cultureStyles.results}>
  <p>Once upon a time, there lived a {params.adjective} armadillo. Their name was {params.name}. {params.name} loved to {params.verb1}, {params.verb2}, and {params.verb3}. One day, {params.name} saw a {params.object} sitting in the {params.waterName}. {params.name} decided to {params.action} the {params.object}, and said &rdquo;I can&apos;t wait to go home and show my family this {params.object}!&rdquo; Once {params.name} came home, they showed the {params.object} to their family, who {params.verb4} after seeing it! {params.name} was confused until they looked closer. It was actually a {params.object2}! {params.name}'s family all {params.verb5}, and they all lived {params.ending}.</p>
  </div>
  )}
  </div>
  </div>
  <svg width="202" height="52" viewBox="0 0 202 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="button">
<path d="M1.29769 26.7804C1.82581 37.1253 -7.00437 48.9732 40.9068 49.9101C88.3321 51.9596 219.75 54.1847 198.709 26.7804C172.409 -7.47504 194.273 20.0464 108.084 4.52897C78.6753 -0.765699 37.9581 0.515486 27.5981 4.52897C13.6679 9.92555 -1.30701 20.8477 1.29769 26.7804Z" stroke="black"/>
</clipPath>
</defs>
</svg>

  </div>;
}
