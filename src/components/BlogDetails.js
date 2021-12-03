import { useParams } from 'react-router';
import moment from 'moment';

import useFetch from '../hooks/useFetch';

function BlogDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`http://localhost:8000/blogs/${id}`, 200);

  const { title, author, content, date } = data || {};

  return (
    <div>
      {loading && <div className='text-6xl font-extrabold flex justify-center h-screen items-center'>Loading...</div>}
      {error && <div className='text-4xl font-extrabold flex justify-center items-center h-screen'>{error}</div>}

      {data && (
        <article className='container'>
          <h2 className='primaryHeading'>{title}</h2>
          <span className='figure__author text-center text-sm mb-6'>
            Written by {author} on <span className='text-black-light'>{moment(date).format('MMMM Do YYYY')}</span>
          </span>
          <p className='max-w-5xl mx-auto'>{content}</p>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
