import cursos from '../../../data/cursos.json'
import styles from './Curso.module.scss'

type props = typeof cursos[0] 

export default function Curso( {...curso}: props) {

    return (
        <div className={styles.curso}>
            <h3>{curso.nome} - {curso.data}</h3>
            <span>Insituição: {curso.escola} | Carga Horária: {curso.cargaHoraria}h</span>
        </div>
    )
}