import { useState } from 'react';

import BlogList from '../components/BlogList';
import { blogsData } from '../assests/data/blogsData';

const Home = () => {
  const [blogs, setBlogs] = useState(blogsData);
  return (
    <>
      <div className='container'>
        <BlogList gridCol='md:grid-cols-2 2xl:grid-cols-3' blogs={blogs} title={`Your Daily Blogs!`} />
        <BlogList
          gridCol='md:grid-cols-2'
          blogs={blogs.filter((blog) => blog.author === 'Noman Sheikh')}
          title={`Noman's Blogs!`}
        />
      </div>
    </>
  );
};

export default Home;
