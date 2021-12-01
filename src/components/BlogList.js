const BlogList = ({ blogs, title, md, lg, xl, Xxl }) => {
  const randomNumber = (max, min) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  };

  return (
    <>
      <h2 className='primaryHeading'>{title}</h2>
      <div
        className={`py-4 grid gap-4 grid-cols-1 md:grid-cols-${md} lg:grid-cols-${lg} xl:grid-cols-${xl} 2xl:grid-cols-${Xxl}`}
      >
        <div className='hidden md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:grid-cols-4 lg:grid-cols-6 xl:grid-cols-2 xl:grid-cols-3 xl:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-3 2xl:grid-cols-4 2xl:grid-cols-6'></div>

        {blogs.map((blog) => {
          const { title, author, date, content, id } = blog;
          return (
            <figure key={id} className='figure'>
              <div className='flex items-center justify-between'>
                <h2 className='figure__title'> {title}</h2>
                <span className='figure__date'>{date}</span>
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
