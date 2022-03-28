import { useState } from 'react';
import axios from 'axios';

interface FormDatas {
  fullName: string;
  email: string;
  message: string;
}

interface UseContactForm {
  actions: {
    sendForm: (formDatas: FormDatas) => Promise<void>;
  };
  loading: boolean;
  error: boolean;
}

const useContactForm: () => UseContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function sendForm(formDatas: FormDatas): Promise<void> {
    setLoading(true);
    setError(false);

    if (process.env.NEXT_PUBLIC_MAIL_API_URL) {
      await axios
        .post(process.env.NEXT_PUBLIC_MAIL_API_URL as string, {
          fullName: formDatas.fullName.trim(),
          email: formDatas.email.trim(),
          message: formDatas.message,
        })
        .then((response) => {
          setLoading(false);
          response.status === 201 ? setError(false) : setError(true);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    } else {
      console.error('Please set MAIL_API_URL in env');
    }
  }

  return { actions: { sendForm }, loading, error };
};

export default useContactForm;
