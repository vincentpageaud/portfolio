import { useEffect, useState } from 'react';

import useContactForm from 'hooks/useContactForm';
import useTranslation from 'hooks/useTranslation';

import styles from 'styles/Footer.module.css';

type Handler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;

const ContactForm: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const send = useTranslation('send');
  const sending = useTranslation('sending');
  const sent = useTranslation('sent');

  const { actions, loading: isSending, error, success } = useContactForm();

  const handleChange: Handler = (e) => {
    setContactForm({ ...contactForm, [e.target.id]: e.target.value });
  };

  const handleSubmit: () => void = () => {
    if (!isSending) actions.sendForm(contactForm);
  };

  useEffect(() => {
    if (success) {
      setIsSent(true);

      const clearInputs = (): void => {
        setContactForm({ fullName: '', email: '', message: '' });
        setIsSent(false);
      };

      setTimeout(clearInputs, 3000);
    }
  }, [success]);

  return (
    <form className={styles.formContainer}>
      <h1>{useTranslation('contactForm')}</h1>
      <label htmlFor="fullName">{useTranslation('fullName')}</label>
      <input type="text" id="fullName" value={contactForm.fullName} onChange={handleChange} />
      <label htmlFor="email">{useTranslation('mailAddress')}</label>
      <input type="email" id="email" value={contactForm.email} onChange={handleChange} />
      <label htmlFor="message">Message</label>
      <textarea name="" id="message" rows={10} value={contactForm.message} onChange={handleChange}></textarea>
      <div className={styles.error} style={{ opacity: error ? 1 : 0 }}>
        {useTranslation('networkError')}
      </div>
      <div
        // eslint-disable-next-line no-constant-condition
        className={`${styles.button} ${isSent || isSending || true ? styles.disabled : ''}`}
        onClick={handleSubmit}
        role="button"
        onKeyDown={() => []}
        tabIndex={0}
      >
        {isSent ? sent : isSending ? sending : send}
      </div>
    </form>
  );
};

export default ContactForm;
