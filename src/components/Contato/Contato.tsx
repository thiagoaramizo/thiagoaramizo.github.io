import styles from './Contato.module.scss'
import { FaLinkedin, FaEnvelopeSquare, FaWhatsappSquare, FaGithubSquare } from "react-icons/fa";

export default function Contato() {
    const contatos = {
        linkedin: "#",
        github: "#",
        whatsapp: "#",
        email: "#"
    }

    return (
        <div className={styles.contato}>
            <div className={styles.contato__texto}>Fale comigo:</div>
            <a target={'_blank'} href={contatos.linkedin}><FaLinkedin className={styles.contato__icone}/></a>
            <a target={'_blank'} href={contatos.github}><FaGithubSquare className={styles.contato__icone}/></a>
            <a target={'_blank'} href={contatos.whatsapp}><FaWhatsappSquare className={styles.contato__icone}/></a>
            <a target={'_blank'} href={contatos.email}><FaEnvelopeSquare className={styles.contato__icone}/></a>
        </div>
    )

}