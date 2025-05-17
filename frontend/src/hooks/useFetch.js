'use client'
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]); // default to empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const result = await res.json();

        // If result.data exists, use it. Otherwise, assume result itself is the data.
        setData(result.data || result);
        setError('');
      } catch (err) {
        setError(err.message || "Something went wrong");
        setData([]); // fallback to empty array to prevent map crash
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
