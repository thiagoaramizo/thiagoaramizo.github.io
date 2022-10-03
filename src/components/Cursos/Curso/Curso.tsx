import cursos from '../../../data/cursos.json'
import styles from './Curso.module.scss'
import { BiBuildings, BiCalendarCheck, BiTimeFive, BiCertification } from "react-icons/bi";

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


export default function Curso( {...curso}: cursoType) {

    return (
        <div className={styles.curso}>
            <h3>{curso.name}</h3>
            <div className={styles.curso__info}>
                <span><BiCalendarCheck className={styles.curso__info__icone} /> {curso.lastAccessTime}</span>
                <span><BiBuildings className={styles.curso__info__icone}/> Alura</span>
                <span><BiTimeFive className={styles.curso__info__icone}/> {curso.finishedCourses}/{curso.totalCourses}</span>
            </div>
        </div>
    )
}