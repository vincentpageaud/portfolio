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

    await axios
      .post('https://nocodeform.io/f/622b49c86ef669d838330ece', formDatas)
      .then((response) => {
        setLoading(false);
        response.status === 201 ? setError(false) : setError(true);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  return { actions: { sendForm }, loading, error };
};

export default useContactForm;
