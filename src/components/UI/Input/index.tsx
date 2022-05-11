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
  multiline?: boolean;
  rows?: number;
}

const Input: React.FC<Props> = ({ id, label, value, error, onChange, onBlur, type = "text", rows, multiline }) => {
  return (
    <div className={styles.container}>
      <label className={error ? styles.error : ''} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <input type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} />
      )}
    </div>
  )
}

export default Input;