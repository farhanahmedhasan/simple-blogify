import { useState, useEffect } from 'react';

const usePost = (url) => {
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendData = async (newState) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newState),
      });

      setLoading(false);

      if (response.ok) {
        setSuccess('success');
      } else {
        setSuccess('error');
      }

      setTimeout(() => {
        setSuccess(null);
      }, 2500);
    } catch (error) {
      setLoading(false);
      setSuccess('error');
      setTimeout(() => {
        setSuccess(null);
      }, 2500);
    }
  };

  useEffect(() => {
    return () => {
      setSuccess(null);
      setLoading(null);
    };
  }, []);

  return { success, loading, sendData };
};

export default usePost;
