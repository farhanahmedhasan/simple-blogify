import BlogList from '../components/BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch('https://api.jsonbin.io/b/61a8b0d50ddbee6f8b15e6d7');
  const blogs = data?.blogs;

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
