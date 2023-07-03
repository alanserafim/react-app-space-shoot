import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import Rodape from "../../components/Rodape";
import styles from './HomePage.module.scss'

export default function HomePage(){
  return (
    <>
      <Cabecalho/>
      <main>
        <section className={styles.principal}>
          <Menu />
         <Banner/>
        </section>
      </main>
      <Rodape/>
    </>
  );
}
