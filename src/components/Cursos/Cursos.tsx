import { useEffect, useState } from 'react'
import cursos from '../../data/cursos.json'
import Curso from './Curso/Curso'
import styles from './Cursos.module.scss'

interface cursoType {
    author: string 
    code: string
    color: string
    finishedCourses: number 
    finishedSteps: number
    id: number 
    kind: string 
    lastAccessTime: number 
    name: string 
    totalCourses: number
    totalSteps: number
    url: string
}

export default function Cursos() {

    const [cursos, setCursos] = useState<cursoType[]>([])

    useEffect( () => {
        const aluraApi = 'https://www.alura.com.br/api/dashboard/c1c6e10478775682c8f700d6456de4a33aa2149722db71baeff41021b4902ed5'
        fetch(aluraApi).then(response => {
            response.json().then(respostaJson => {
                setCursos( respostaJson.guides )
            } )
        })
    }, [])

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