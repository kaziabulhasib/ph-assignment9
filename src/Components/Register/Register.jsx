import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='hero min-h-screen bg-base-200 my-24'>
      <div className='hero-content flex-col '>
        <div className='text-center '>
          <h1 className='text-5xl font-bold'>Register Now!</h1>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                name='name'
                type='text'
                placeholder='Name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>PhotoUrl</span>
              </label>
              <input
                name='PhotoUrl'
                type='text'
                placeholder='PhotoUrl'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                name='password'
                type='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <p href='#' className='label-text-alt text-[12px] mt-6  '>
                  Already User ?{" "}
                  <Link
                    to='/login'
                    className='link-hover text-base ml-8 font-robo font-medium '>
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn bg-[#f2f2f2]'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
