
import Cabecalho from 'components/Cabecalho/Cabecalho'
import Cursos from 'components/Cursos/Cursos'
import styles from './Inicial.module.scss'

export default function Inicial() {
    return (
        <div className={styles.inicial}>
            <Cabecalho/>
            <Cursos/>
        </div>
    )
}