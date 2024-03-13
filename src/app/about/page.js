import Image from "next/image";

import styles from "@/styles/About.module.css";

export default function About() {
    return (
        <div className={styles.about_container}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue sollicitudin augue sed scelerisque. Suspendisse potenti. Etiam bibendum pellentesque nulla, nec facilisis lectus hendrerit tincidunt. Donec nec cursus orci, at pulvinar nibh. Aenean imperdiet ligula quis eros varius euismod. Maecenas ante libero, ultrices in ullamcorper ut, elementum quis lacus. Vivamus a enim nec ipsum fermentum porttitor vel et eros.</p>
            <Image src="/images/charizard.png" width={300} height={293} alt="Charizard" />
        </div>
    )
}