import scienceStyles from './science.module.css'
import FunFact from '@/components/funFact';
import Armadillo from '../images/Armadillo-science.jpeg'
export default function Science() {
  return <main className={scienceStyles.main}>
    <div className={scienceStyles.content}>
<h1 className={scienceStyles.title}>Armadillos in Science</h1>
<p>Armadillos have many uses in the scientific field! Armadillos have a ton of unique quirks that make them very useful for both medicinal and scientific research! Some things that researchers use armadillos for include:</p>
<ul>
  <li>Reproduction Research</li>
  <li>Leprosy Research</li>
  <li>Chagas Disease</li>
  <li>And More!</li>
</ul>
</div>
<FunFact desc="Armadillos are some of the only mammals that can produce genetically identical offspring! They can have up to four children that are genetically identical to their parents!" />
<div className={scienceStyles.content2}>
<p>Armadillos' body temperature also is similar in temperature to our skin, which makes armadillos vital in research regarding skin-borne diseases and discovering cures to ailments!</p>
<img src={Armadillo.src} alt="A photo of an Armadillo" width="490" className={scienceStyles.photo} />
</div>



<svg width="0" height="0" viewBox="0 0 488 309" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <clipPath id="photo">
<path d="M452.244 60.855C487.099 -15.6991 299.938 11.8856 299.938 11.8856C299.938 11.8856 174.108 -13.738 120.026 11.8856C65.9439 37.5091 -17.0498 302.802 88.3932 275.22C193.836 247.639 333.548 334.98 442.945 284.414C552.341 233.848 417.388 137.409 452.244 60.855Z" stroke="black"/>
</clipPath> 
</defs>
</svg>

  </main>;
}
