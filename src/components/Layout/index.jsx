import styles from "./style.module.scss";

export function Layout({ children, noPadding, noPaddingTopAndBottom }) {
  return (
    <div
      className={`
        ${styles.layout}
        ${noPadding && styles.noPadding}
        ${noPaddingTopAndBottom ? styles.noPaddingTopAndBottom : styles.normal}
      `}
    >
      {children}
    </div>
  );
}
