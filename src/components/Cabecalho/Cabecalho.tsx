import Contato from "components/Contato/Contato";
import AnimacaoDestaque from "pages/Inicial/AnimacaoDestaque/AnimacaoDestaque";
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <section className={styles.cabecalho}>
                <div className={styles.cabecalho__destaque}>
                    <div className={styles.cabecalho__destaque__imagem}>
                        <AnimacaoDestaque/>
                    </div>
                    <div className={styles.cabecalho__destaque__texto}>
                        <h1 className={styles.cabecalho__destaque__titulo}>Thiago Aramizo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nisl ac mi pretium, vitae vestibulum diam pharetra. Donec nec ex ac est feugiat tincidunt ac sed tellus. Cras varius commodo sagittis. Sed facilisis tincidunt urna, non blandit dui. Curabitur feugiat porttitor turpis venenatis fermentum. Donec ut purus in neque tempus porta nec ac ipsum. Etiam imperdiet leo vitae nisl dignissim efficitur.</p>
                        <Contato/>
                    </div>
                </div>
            </section>
    )
}