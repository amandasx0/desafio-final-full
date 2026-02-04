import styles from "./style.module.scss";

const Button = ({
  variant = "container",
  children,
  onClick,
  background = "blue",
  borderRadius = false,
  isMobile = false,
  closeMenu,
}) => {
  return (
    <button
      closeMenu={closeMenu}
      onClick={onClick}
      className={`
                ${styles.button}
                ${variant === "container" ? styles.container : styles.outlined}
                ${background === "blue" ? styles.button : styles.orange}
                ${borderRadius && styles.borderRadius}
                ${isMobile && styles.isMobile}
         
                `}
    >
      {children}
    </button>
  );
};

export default Button;
