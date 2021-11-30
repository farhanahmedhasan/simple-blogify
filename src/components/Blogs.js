import { useState } from 'react';
import { blogsData } from '../assests/data/blogsData';

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  return (
    <div className='py-4 grid gap-4  grid-cols-2'>
      {blogs.map((blog) => {
        const { title, author, date, content, id } = blog;
        return (
          <figure key={id} className='figure'>
            <div className='flex items-center justify-between'>
              <h2 className='figure__title'> {title}</h2>
              <span className='figure__date'>{date}</span>
            </div>

            <span className='figure__author'>by {author}</span>
            <p className='figure__content'>{content.substring(0, 100)}...</p>
          </figure>
        );
      })}
    </div>
  );
};

export default Blogs;