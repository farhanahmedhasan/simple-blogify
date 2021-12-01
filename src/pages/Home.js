import { useState } from 'react';

import BlogList from '../components/BlogList';
import { blogsData } from '../assests/data/blogsData';

const Home = () => {
  const [blogs, setBlogs] = useState(blogsData);
  return (
    <>
      <div className='container'>
        <BlogList md={2} xl={2} Xxl={4} blogs={blogs} title={`Your Daily Blogs!`} />
        <BlogList md={2} blogs={blogs.filter((blog) => blog.author === 'Noman Sheikh')} title={`Noman's Blogs!`} />
      </div>
    </>
  );
};

export default Home;
