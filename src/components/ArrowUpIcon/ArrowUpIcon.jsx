import React from "react";

const ArrowUpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L12 20M12 4L6 10M12 4L18 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
        width: "35px",
        height: "35px",
        border: "none",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",

        // Эффект стекла
        background: "#28332A77", // полупрозрачный фон
        backdropFilter: "blur(10px)", // размытие фона
        WebkitBackdropFilter: "blur(10px)", // для Safari
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // лёгкая тень
        color: "#fff",
        transition: "transform 0.2s, background-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <ArrowUpIcon />
    </button>
  );
};

export default ScrollToTopButton;
