import { useEffect, useState } from 'react';

import Input from '@UI/Input';
import Button from '@UI/Button';
import useContactForm from '@hooks/useContactForm';
import useTranslation from '@hooks/useTranslation';

import styles from '@styles/Footer.module.css';

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
    <form
      className={styles.formContainer}
      onSubmit={(e) => e.preventDefault()}
    >
      <h1>{useTranslation('contactForm')}</h1>
      <Input
        id="fullName"
        label={useTranslation('fullName')}
        value={contactForm.fullName} 
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        error={formError.fullName}
      />
      <Input
        type="email" 
        id="email"
        label={useTranslation('mailAddress')}
        value={contactForm.email}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        error={formError.email}
      />
      <Input
        id="message"
        rows={10}
        label="Message"
        value={contactForm.message}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        error={formError.message}
        multiline
      />
      <div className={styles.error} style={{ opacity: error ? 1 : 0 }}>
        {useTranslation('networkError')}
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isSent || isSending || isInputError}
      >
        {isSent ? sent : isSending ? sending : send}
      </Button>
    </form>
  );
};

export default ContactForm;
