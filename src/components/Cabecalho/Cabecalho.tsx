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
                        <h1 className={styles.cabecalho__destaque__titulo}>{'{thiagoAramizo}'}</h1>
                        <span>//Desenvolvedor Front-End e UI Designer</span>
                        <Contato/>
                    </div>
                </div>
            </section>
    )
}