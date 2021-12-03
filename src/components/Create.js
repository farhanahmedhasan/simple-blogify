import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import Input from './Input';
import usePost from '../hooks/usePost';

export const Create = () => {
  // const navigate = useNavigate();
  const [state, setState] = useState({ title: '', author: 'Farhan Ahmed Hasan', content: '' });
  const { success, loading, sendData } = usePost('http://localhost:8000/blogs');

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newState = { ...state, date: Date.now() };
    sendData(newState);
    setState({ title: '', author: 'Farhan Ahmed Hasan', content: '' });
    // navigate('/');
  };

  return (
    <div className='container'>
      <h2 className='primaryHeading'>Add a new Blog</h2>

      <form className='grid grid-cols-1 gap-4 place-items-center' onSubmit={handleSubmit}>
        <div className='w-3/6'>
          <label htmlFor='title'>Title :</label>
          <Input placeholder='Your blog title' idName='title' type='text' value={state.title} onChange={handleChange} />
        </div>

        {/* Select */}
        <div className='w-3/6'>
          <label htmlFor='author'>Author :</label>
          <select
            required
            value={state.author}
            onChange={handleChange}
            name='author'
            className='formControl cursor-pointer capitalize'
          >
            <option value='Farhan Ahmed Hasan' defaultValue>
              Farhan Ahmed Hasan
            </option>
            <option value='Noman Sheikh'>Noman Sheikh</option>
            <option value='Rayhan Rahat'>Rayhan Rahat</option>
            <option value='Fahad Sikhder'>Fahad Sikhder</option>
          </select>
        </div>

        <div className='w-3/6'>
          <label htmlFor='content'>Content :</label>
          <textarea
            required
            value={state.content}
            onChange={handleChange}
            className='formControl'
            id='content'
            name='content'
            rows='10'
            placeholder="Your Blog's Content"
          ></textarea>
        </div>

        {/* Button States */}
        {loading ? (
          <button className='btn btn--primary transition-all active:-translate-y-2 mt-4 mb-8' disabled>
            Processing...
          </button>
        ) : (
          <button className='btn btn--primary transition-all active:-translate-y-2 mt-4 mb-8'>Submit</button>
        )}
      </form>

      {/* Alert */}
      {success === 'success' && <div className='success'>Your Blog has been added successfully</div>}
      {success === 'error' && <div className='danger'>Something Went Wrong !! We couldn't create your blog</div>}
    </div>
  );
};
