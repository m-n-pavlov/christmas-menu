import Candy from "@/assets/images/Candy.png";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "15px",
        right: "15px",
        border: "none",
        padding: 0,
        background: "transparent", // прозрачный фон
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={Candy}
        alt="Scroll to top"
        style={{
          maxWidth: "50px", // ограничение максимального размера
          maxHeight: "50px", // ограничение по высоте
          width: "auto",
          height: "auto",
          display: "block",
        }}
      />
    </button>
  );
};

export default ScrollToTopButton;
