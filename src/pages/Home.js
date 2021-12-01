import { useState, useEffect, useCallback } from 'react';

import BlogList from '../components/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/blogs');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Could not fetch blogs. Received ${response.status}`);
      }

      setBlogs(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchBlogs();
    }, 3000);
  }, [fetchBlogs]);

  return (
    <>
      <div className='container'>
        {error && <div className='text-4xl font-extrabold flex justify-center items-center h-screen'>{error}</div>}

        {loading && <div className='text-6xl font-extrabold flex justify-center h-screen items-center'>Loading...</div>}

        {blogs && blogs.length === 0 && (
          <div className='text-6xl font-extrabold flex justify-center h-screen items-center'>No Blogs Found</div>
        )}

        {blogs && (
          <>
            <BlogList gridCol='md:grid-cols-2 2xl:grid-cols-3' blogs={blogs} title={`Your Daily Blogs!`} />
            <BlogList
              gridCol='md:grid-cols-2'
              blogs={blogs.filter((blog) => blog.author === 'Noman Sheikh')}
              title={`Noman's Blogs!`}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
