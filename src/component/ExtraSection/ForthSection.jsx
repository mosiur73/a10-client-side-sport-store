import React from 'react';
import { Fade, Flip } from 'react-awesome-reveal';
import { FaArrowRight } from 'react-icons/fa';

const ForthSection = () => {
    return (
        <div className=' mt-10'>
            <h1 className='text-3xl font-bold mb-4'>Our articles</h1>
            <p className='text-gray-600 mb-10'>Explore insights and knowledge in our articles</p>
            <div className='lg:flex gap-6'>
           
         <Fade>
              
         <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
    className='w-80 h-80'
       src="https://i.ibb.co.com/sy23xT3/jon-del-rivero-Aj-F5fv4-a2-U-unsplash.jpg" 
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Make a splash: pool, open water</h2>
    <p>In sports, as in life, adversity is <br />
     inevitable. Whether it's an injury, a , <br />
      or a setback, how we respond to... <br /> </p>
      <button className='btn'>view more <FaArrowRight /></button>
  </div>
</div>
         </Fade>

<div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
    className='w-80 h-80'
       src="https://i.ibb.co.com/Svqyr7g/library-of-congress-Ogv2r-G6i2s-unsplash.jpg"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Pedal power: boost your <br /> cycling performance!</h2>
    <p>Pellentesque adipiscing commodo elit at <br />
     imperdiet dui. Massa sed elementum tempus <br /> 
     egestas sed sed. Tellus at urna ... </p>
    <button className='btn'>view more <FaArrowRight /></button>
  </div>
</div>



            </div>
        </div>
    );
};

export default ForthSection;