
import Cursos from 'components/Cursos/Cursos'
import style from './Inicial.module.scss'

export default function Inicial() {
    return (
        <div className={style.inicial}>
            <h1>Hello Word</h1>
            <Cursos/>
        </div>
    )
}