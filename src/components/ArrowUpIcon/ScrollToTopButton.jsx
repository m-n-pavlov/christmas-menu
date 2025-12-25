import Candy from "@/assets/images/Candy.png";
import styles from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={styles.button}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <img
        src={Candy}
        alt=""
        className={styles.image}
      />
    </button>
  );
};

export default ScrollToTopButton;
