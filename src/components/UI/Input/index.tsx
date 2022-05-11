import styles from '@styles/UI/Input.module.scss';

type Handler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;

interface Props {
  id: string;
  label: string;
  value?: string;
  error: boolean;
  type?: string;
  onChange: Handler;
  onBlur?: Handler;
}

const Input: React.FC<Props> = ({ id, label, value, error, onChange, onBlur, type = "text" }) => {
  return (
    <div className={styles.container}>
      <label className={error ? styles.error : ''} htmlFor={id}>
        {label}
      </label>
      <input type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} />
    </div>
  )
}

export default Input;