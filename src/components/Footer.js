import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Link href="/faq" className={styles.link}>
            FAQ
          </Link>
          <Link href="/about" className={styles.link}>
            Nosotros
          </Link>
        </div>
        <p className={styles.text}>
          © {new Date().getFullYear()} Impactify. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
