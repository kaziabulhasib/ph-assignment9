import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";

const Estates = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("estate.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);
  return (
    <div className='mb-40'>
      <h1 className='text-center text-5xl font-robo'>Estates</h1>

      <div className='grid grid-cols-3 gap-6 py-9'>
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estates;
