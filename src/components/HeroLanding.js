import React from "react";
import styles from "./HeroLanding.module.css";

const HeroLanding = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}></div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>¡Bienvenido a mi sitio web!</h1>
        <p className={styles.subtitle}>Explora y descubre cosas increíbles.</p>
        <button className={styles.button}>Empezar</button>
      </div>
    </div>
  );
};

export default HeroLanding;
