import styles from "./Section.module.scss";

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </section>
);

export default Section;
