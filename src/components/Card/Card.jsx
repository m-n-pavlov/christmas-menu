import styles from './Card.module.css';

export const Card = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};
