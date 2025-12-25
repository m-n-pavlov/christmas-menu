import { useEffect } from "react";
import styles from "./Snow.module.css";

function Snow() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = styles.container;
    document.body.appendChild(container);

    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = styles.snowflake;
      snowflake.textContent = "❄";
      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.fontSize = 10 + Math.random() * 20 + "px";
      snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";
      snowflake.style.opacity = Math.random();
      container.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, parseFloat(snowflake.style.animationDuration) * 1000);
    };

    const interval = setInterval(createSnowflake, 800);

    return () => {
      clearInterval(interval);
      container.remove();
    };
  }, []);

  return null;
}

export default Snow;
