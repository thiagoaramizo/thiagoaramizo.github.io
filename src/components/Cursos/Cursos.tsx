import cursos from '../../data/cursos.json'
import Curso from './Curso/Curso'
import styles from './Cursos.module.scss'

export default function Cursos() {

    return (
        <section className={styles.cursos}>
            <h2>//Formação complementar ({cursos.length})</h2>

            <div className={styles.cursos__lista}>
                {
                    cursos.map( (curso) => (
                        <Curso key={curso.id} {...curso}/>
                    ))
                }
            </div>
        </section>
    )
}