import cursos from '../../data/cursos.json'
import Curso from './Curso/Curso'
import styles from './Cursos.module.scss'

export default function Cursos() {

    return (
        <div className={styles.cursos}>
            <h2>Formação complementar</h2>

            {
                cursos.map( (curso) => (
                    <Curso key={curso.id} {...curso}/>
                ))
            }
        </div>
    )
}