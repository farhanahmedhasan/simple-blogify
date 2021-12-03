import { useParams, useNavigate } from 'react-router';
import moment from 'moment';

import useFetch from '../hooks/useFetch';

function BlogDetails() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const { data, loading, error } = useFetch(`http://localhost:8000/blogs/${id}`, 200);

  const { title, author, content, date } = data || {};

  const deleteBlog = () => {
    console.log('delete blog');
    // if (author === 'Farhan Ahmed Hasan') {
    // fetch(`http://localhost:8000/blogs/${id}`, {
    // method: 'DELETE',
    // });
    // navigate('/');
    // }
  };

  return (
    <div>
      {loading && <div className='text-6xl font-extrabold flex justify-center h-screen items-center'>Loading...</div>}
      {error && <div className='text-4xl font-extrabold flex justify-center items-center h-screen'>{error}</div>}

      {data && (
        <article className='container'>
          <h2 className='primaryHeading'>{title}</h2>
          <span className='figure__author text-center text-sm mb-6 capitalize'>
            Written by {author} on <span className='text-black-light'>{moment(date).format('MMMM Do YYYY')}</span>
          </span>
          <p className='max-w-5xl mx-auto mb-6'>{content}</p>
          <div className='flex justify-center'>
            <button className='btn btn--primary' onClick={deleteBlog}>
              Delete Blog
            </button>
          </div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
