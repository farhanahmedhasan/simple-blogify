import moment from 'moment';

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
            <figure key={id} className='figure'>
              <div className='flex items-center justify-between'>
                <h2 className='figure__title'> {title}</h2>
                <span className='figure__date'>{moment().add(date, 'days').calendar()}</span>
              </div>

              <span className='figure__author'>by {author}</span>
              <p className='figure__content'>{content.substring(0, randomNumber(100, 120))} ...</p>
            </figure>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
