import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((estate) => estate.id === idInt);
  return (
    <div>
      <Helmet>
        <title> Estate Details -PrimeSquare Properties </title>
      </Helmet>
      <div className='flex  justify-between  py-14 gap-12 items-center mb-40'>
        <div className='p-16 bg-[#1313130D] flex justify-center items-center rounded-2xl flex-1'>
          <img className='w-[425px] h-[565px]' src={estate.image} alt='' />
        </div>
        <div className='flex-1 text-left space-y-8'>
          <h1 className='  text-4xl  font-bold'>{estate.estate_title}</h1>
          <p className='nav-font font-medium'>Type: {estate.segment_name}</p>
          <p className='nav-font font-medium'>Location: {estate.location}</p>
          <p className='nav-font font-medium'>
            {" "}
            Rent or Sell: <span className='capitalize'>
              {estate.status}
            </span>{" "}
          </p>
          <p>
            {" "}
            <span className='font-bold'>Description: </span>{" "}
            {estate.description}
          </p>
          <div className='flex items-center gap-4'>
            <h1 className='nav-font font-medium'>Facility:</h1>
            <div className='flex  gap-3'>
              {estate.facilities.map((facility, index) => (
                <p
                  className=' py-2 px-4 bg-[#f3f3f3] text-[14px] font-medium nav-font rounded-3xl'
                  key={index}>
                  {facility}
                </p>
              ))}
            </div>
          </div>

          <p className='nav-font font-medium'>Area: {estate.area}</p>
          <p className='nav-font font-medium'>Price: {estate.price}</p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
