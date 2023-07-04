import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, fitraFotos, setItens}) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag, indice) => {
          return (
          <li 
            key={indice}
            onClick={()=>fitraFotos(tag)}
          >{tag}</li>
          )
        })}
        <li onClick={()=>setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
