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
  const [formError, setFormError] = useState({
    fullName: false,
    email: false,
    message: false,
  });
  const nameReg = /^[A-Za-zÀ-ÖØ-öø-ÿ ,.'-]*$/;
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const send = useTranslation('send');
  const sending = useTranslation('sending');
  const sent = useTranslation('sent');

  const { actions, loading: isSending, error, success } = useContactForm();

  const handleBlur: Handler = (e) => {
    switch (e.target.id) {
      case 'fullName':
        setFormError({ ...formError, fullName: !nameReg.test(e.target.value) || e.target.value.length === 0 });
        break;
      case 'email':
        setFormError({ ...formError, email: !emailReg.test(e.target.value) });
        break;
      case 'message':
        setFormError({ ...formError, message: e.target.value.length === 0 });
        console.log(e.target.value.length);
        break;
    }
  };

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

  const isInputError =
    formError.fullName ||
    formError.email ||
    formError.message ||
    contactForm.fullName.length === 0 ||
    contactForm.email.length === 0 ||
    contactForm.message.length === 0;

  return (
    <form className={styles.formContainer}>
      <h1>{useTranslation('contactForm')}</h1>
      <label className={formError.fullName ? styles.error : ''} htmlFor="fullName">
        {useTranslation('fullName')}
      </label>
      <input type="text" id="fullName" value={contactForm.fullName} onChange={handleChange} onBlur={handleBlur} />
      <label className={formError.email ? styles.error : ''} htmlFor="email">
        {useTranslation('mailAddress')}
      </label>
      <input type="email" id="email" value={contactForm.email} onChange={handleChange} onBlur={handleBlur} />
      <label className={formError.message ? styles.error : ''} htmlFor="message">
        Message
      </label>
      <textarea
        name=""
        id="message"
        rows={10}
        value={contactForm.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className={styles.error} style={{ opacity: error ? 1 : 0 }}>
        {useTranslation('networkError')}
      </div>
      <div
        className={`${styles.button} ${isSent || isSending || isInputError ? styles.disabled : ''}`}
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
