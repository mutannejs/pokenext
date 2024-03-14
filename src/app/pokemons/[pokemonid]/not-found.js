import Image from "next/image";

import styles from '@/styles/NotFound.module.css';
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={styles.notfound}>
            <div className={styles.text_container}>
                <h1>Pokemon não encontrado</h1>
                <p>Parece que não existe nenhum pokemon com esse número de Pokédex.</p>
                <Link href="/">Voltar para a Home</Link>
            </div>
            <Image
                src="/images/pikachu_crying.png"
                width={400}
                height={400}
                alt="Pikachu triste"
            />
        </div>
    )
}