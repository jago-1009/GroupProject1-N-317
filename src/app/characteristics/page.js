"use client";
import FunFact from "@/components/funFact";
import styles from "./characteristics.module.css";
import { useState } from "react";

export default function Characteristics() {
  const [fact, setFact] = useState(
    "Their armor isn't just for protection—it can also serve as camouflage in their natural habitat, blending with rocks and the ground."
  );
  const facts = [
    "Their armor isn't just for protection—it can also serve as camouflage in their natural habitat, blending with rocks and the ground.",
    "Armadillos are the only living mammals that wear such shells!",
    "Armadillos have poor eyesight, but a strong sense of smell.",
    "Most armadillos sleep up to 16 hours a day.",
  ];

  const changeFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
  };

  return (
    <main className={styles.main}>
      {/* <h1>Characteristics</h1> */}
      <div className={styles.cont}>
        <h1>Size</h1>
        <p>
          The smallest species of armadillo, the pink fairy armadillo, weighs
          around 85 g (3.0 oz) and is 13–15 cm (5.1–5.9 in) in total length. The
          largest species, the giant armadillo, can weigh up to 54 kg (119 lb),
          and can be 150 cm (59 in) long.
        </p>
        <img src="/size-compare.svg" />
      </div>
      <div className={styles.cont}>
        <h1>Body Temperature</h1>
        <p>
          In common with other xenarthrans, armadillos, in general, have low
          body temperatures of 33–36 °C (91–97 °F) and low basal metabolic rates
          (40–60% of that expected in placental mammals of their mass). This is
          particularly true of types that specialize in using termites as their
          primary food source (for example, Priodontes and Tolypeutes).
        </p>
      </div>
      <div className={styles.cont}>
        <h1>Skin</h1>
        <p>
          The armor is formed by plates of dermal bone covered in relatively
          small overlapping epidermal scales called "scutes" which are composed
          of keratin. The skin of an armadillo can glow under ultraviolet light.
          Most species have rigid shields over the shoulders and hips, with a
          number of bands separated by flexible skin covering the back and
          flanks. Additional armor covers the top of the head, the upper parts
          of the limbs, and the tail. The underside of the animal is never
          armored and is simply covered with soft skin and fur. This armor-like
          skin appears to be an important defense for many armadillos, although
          most escape predators by fleeing (often into thorny patches, from
          which their armor protects them) or digging to safety. Only the South
          American three-banded armadillos (Tolypeutes) rely heavily on their
          armor for protection.
        </p>
        <FunFact desc={fact}></FunFact>
        <button onClick={changeFact}>More Facts!</button>
      </div>
      <div className={styles.cont}>
        <h1>Defensive Behavior</h1>
        <p>
          When threatened by a predator, Tolypeutes species frequently roll up
          into a ball. Other armadillo species cannot roll up because they have
          too many plates. When surprised, the North American nine-banded
          armadillo tends to jump straight in the air, which can lead to a fatal
          collision with the undercarriage or fenders of passing vehicles.
        </p>
        <img src="/ball.jpg" />
      </div>
      <div className={styles.cont}>
        <h1>Movement</h1>
        <p>
          Armadillos have short legs, but can move quite quickly. The
          nine-banded armadillo is noted for its movement through water, which
          is accomplished via two different methods: it can walk underwater for
          short distances, holding its breath for as long as six minutes; or, to
          cross larger bodies of water, it can increase its buoyancy by
          swallowing air to inflate its stomach and intestines.
        </p>
        <img src="/swimmin.jpg" />
      </div>
      <div className={styles.cont}>
        <h1>Reproduction</h1>
        <p>
          Gestation lasts from 60 to 120 days, depending on species, although
          the nine-banded armadillo also exhibits delayed implantation, so the
          young are not typically born for eight months after mating. Most
          members of the genus Dasypus give birth to four monozygotic young
          (that is, identical quadruplets), but other species may have typical
          litter sizes that range from one to eight. The young are born with
          soft, leathery skin which hardens within a few weeks. They reach
          sexual maturity in three to twelve months, depending on the species.
          Armadillos are solitary animals that do not share their burrows with
          other adults.
        </p>
      </div>
    </main>
  );
}
