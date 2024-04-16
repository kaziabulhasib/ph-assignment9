import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const { estate_title, image, location, id } = estate;
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{estate_title}</h2>
        <p>{location}</p>
        <div className='card-actions justify-end'>
          <Link to={`/estate/${id}`}>
            <button className='btn  bg-[#e8e5e5]'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Estate;
