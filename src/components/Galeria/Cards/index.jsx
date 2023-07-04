import React from 'react'
import Card from './Card';


export default function Cards({styles, itens}) {
  return (
    <ul className={styles.galeria__cards}>
        {itens.map((foto) => {
          return (
              <Card key={foto.id} styles={styles} foto={foto}/>
          );
        })}
      </ul>
  )
}
