import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import Cards from "./Cards";
import fotos from './fotos.json'


export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto)=> {
      return foto.tag === tag;
    })
    setItens(novasFotos)
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela Galeria</h2>
      <Tags tags={tags} fitraFotos={filtraFotos} setItens={setItens}/>
      <Cards styles={styles} itens={itens}/>
    </section>
  );
}
