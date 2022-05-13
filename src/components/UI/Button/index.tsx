import styles from "@styles/UI/Button.module.scss";

interface Props {
  onClick?: () => void;
  disabled: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button 
      className={`${styles.button} ${disabled ? styles.disabled : ''}`} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;