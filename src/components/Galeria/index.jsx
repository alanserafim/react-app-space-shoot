import React from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import Cards from "./Cards";
import fotos from './fotos.json'


export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela Galeria</h2>
      <Tags />
      <Cards styles={styles} itens={fotos}/>
    </section>
  );
}
