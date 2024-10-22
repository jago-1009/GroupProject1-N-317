"use client";
import styles from "./habitat.module.css";
import FunFact from "@/components/funFact";
import { useState } from "react";

export default function Habitat() {
  const [currentImg, setImg] = useState(0);

  const images = [
    "/armadilloImg1.jpg",
    "/armadilloImg2.jpg",
    "/armadilloImg3.jpg",
    "/armadilloImg4.jpg",
    "/armadilloImg5.jpg",
    "/armadilloImg6.jpg",
    "/armadilloImg7.jpg",
  ];

  const nextImg = () => {
    if (currentImg == 6) {
      setImg(currentImg - 6);
    } else {
      setImg(currentImg + 1);
    }
  };

  const prevImg = () => {
    if (currentImg == 0) {
      setImg(currentImg + 6);
    } else {
      setImg(currentImg - 1);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.habitatBox}>
          <h1>Habitats</h1>
          <p>
            Armadillos originated from South America and were isolated there
            until the formation of the Isthmus of Panama. This allowed members
            of the family to migrate northward towards southern North America in
            the early Pleistocene, this formed part of the Great American
            Interchange.
          </p>
        </div>
        <div className={styles.dietBox}>
          <h1>Diet and Predation</h1>
          <p>
            Armadillo diets are mostly consisted of insects, grubs, and
            invertebrates. Some species feed mostly on ants and termites.
          </p>
          <p>
            Many species of Armadillos use sharp claws to dig up their food and
            dens. The nine-banded armadillo specifically likes to dig burrows in
            moist soil near creaks and streams where it likes to feed.
          </p>
          <p>
            Armadillos hunt for food with their sense of smell and dig their
            prey up, these claws are also used to dig their dwellings which are
            usually one room the size of the width of their body. With 3-5
            digging toes on their forefeet, these creatures have an easy time
            making the sand castles men dream of.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imgGallery}>
          <img src={images[currentImg]} alt="Armadillo" />
          <div className={styles.galleryBtn}>
            <button className={styles.btnLeft} onClick={prevImg}></button>
            <button className={styles.btnRight} onClick={nextImg}></button>
          </div>
        </div>
        <FunFact desc="Armadillo's have poor eyesight and need glasses to see."></FunFact>
      </div>
    </main>
  );
}
