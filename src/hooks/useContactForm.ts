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
  success: boolean;
}

const useContactForm: () => UseContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function sendForm(formDatas: FormDatas): Promise<void> {
    setLoading(true);
    setError(false);
    setSuccess(false);

    const handleSuccess = (): void => {
      setError(false);
      setSuccess(true);
    };

    if (process.env.NEXT_PUBLIC_MAIL_API_URL) {
      await axios
        .post(process.env.NEXT_PUBLIC_MAIL_API_URL as string, {
          fullName: formDatas.fullName.trim(),
          email: formDatas.email.trim(),
          message: formDatas.message,
        })
        .then((response) => {
          setLoading(false);
          response.status === 201 ? handleSuccess() : setError(true);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    } else {
      console.error('Please set MAIL_API_URL in env');
    }
  }

  return { actions: { sendForm }, loading, error, success };
};

export default useContactForm;
