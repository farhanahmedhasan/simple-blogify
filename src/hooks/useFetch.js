import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, time = 400) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Could not fetch data. Received ${response.status}`);
      }
      setData(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, [url]);

  useEffect(() => {
    setTimeout(() => {
      fetchBlogs();
    }, time);

    //Clean the stats when component unmounts
    return () => {
      setData(null);
      setLoading(false);
      setError(null);
    };
  }, [fetchBlogs, time]);

  return { data, loading, error };
};

export default useFetch;
