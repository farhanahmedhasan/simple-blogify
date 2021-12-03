import moment from 'moment';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title, gridCol }) => {
  const randomNumber = (max, min) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  };

  return (
    <>
      <h2 className='primaryHeading'>{title}</h2>
      <div className={`py-4 grid gap-4 grid-cols-1 ${gridCol}`}>
        {blogs.map((blog) => {
          const { title, author, date, content, id } = blog;
          return (
            <Link to={`/blogs/${id}`} key={id}>
              <figure className='figure'>
                <div className='flex items-center justify-between'>
                  <h2 className='figure__title'> {title}</h2>
                  <span className='figure__date'>{moment(date).format('MMMM Do YYYY')}</span>
                </div>
                <span className='figure__author'>by {author}</span>
                <p className='figure__content'>{content.substring(0, randomNumber(100, 120))} ...</p>
              </figure>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
