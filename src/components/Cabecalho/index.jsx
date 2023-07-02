import logo from "./img/logo.png"
import search from "./img/search.png"
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Space Shoot" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input}type="text" name="" id="" placeholder="O que você procura?"/>
                <img src={search} alt="ícone de lupa" />
            </div>
        </header>
    )
}