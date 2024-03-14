import Image from "next/image";

import styles from "@/styles/About.module.css";

export const metadata = {
    title: "Sobre"
}

export default function About() {
    return (
        <div className={styles.about_container}>
            <h1>Sobre o projeto</h1>
            <p>Esse é o projeto final desenvolvido no curso de <span className={styles.nextjs}>Next.js</span> realizado pelo <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft">Hora de Codar</a>, trazendo algumas diferenças do código apresentado no curso, como a adequação dele para a versão 14 do framework.</p>
            <Image src="/images/charizard.png" width={300} height={293} alt="Charizard" />
        </div>
    )
}