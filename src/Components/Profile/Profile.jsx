import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Helmet>
        <title> Profile -PrimeSquare </title>
      </Helmet>

      <div className='max-w-md mx-auto mt-32'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'>
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Enter your name'
              value='John Doe'
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Enter your email'
              value='john@example.com'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='photoURL'>
              Photo URL
            </label>
            <div className='flex'>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='photoURL'
                type='url'
                placeholder='Enter photo URL'
                value='https://example.com/photo.jpg'
                readOnly
              />
              <button
                className='ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
                onClick={() => alert("Edit photo URL")}>
                Edit
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
