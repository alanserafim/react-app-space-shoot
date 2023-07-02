import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
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
    </>
  );
}
