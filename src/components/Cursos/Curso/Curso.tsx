import cursos from '../../../data/cursos.json'
import styles from './Curso.module.scss'
import { BiBuildings, BiCalendarCheck, BiTimeFive, BiCertification } from "react-icons/bi";

type props = typeof cursos[0] 

export default function Curso( {...curso}: props) {

    return (
        <div className={styles.curso}>
            <h3>{curso.nome}</h3>
            <div className={styles.curso__info}>
                <span><BiCalendarCheck className={styles.curso__info__icone} /> {curso.data}</span>
                <span><BiBuildings className={styles.curso__info__icone}/> {curso.escola}</span>
                <span><BiTimeFive className={styles.curso__info__icone}/> {curso.cargaHoraria}h</span>
                { curso.certificado != '' ? <span><a target={'_blank'} href={curso.certificado}><BiCertification className={styles.curso__info__icone}/> Certificado</a></span> : ''}
            </div>
        </div>
    )
}