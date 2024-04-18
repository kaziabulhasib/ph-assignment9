import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Helmet>
        <title> Profile -PrimeSquare Properties </title>
      </Helmet>
      {/* <div className='flex flex-col max-w-md p-6 bg-gray-50 text-gray-800'>
        <img
          src='https://images.unsplash.com/photo-1680276258815-cc900142a0b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className='flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square'
        />
        <div>
          <h2 className='text-xl font-semibold'>Leroy Jenkins</h2>
          <span className='block pb-2 text-sm text-gray-600'>
            CTO of Company Inc.
          </span>
          <Link to='/'>
            <button
              type='button'
              className='px-8 py-3 mt-8 font-semibold  rounded-lg border-gray-300 text-gray-800 border-2 '>
              Update Profile
            </button>
          </Link>
        </div>
      </div> */}

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
