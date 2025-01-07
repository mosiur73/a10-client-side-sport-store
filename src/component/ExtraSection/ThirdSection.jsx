import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const ThirdSection = () => {
    return (
        <div className='lg:flex mt-10 justify-between'>
            <div className='w-1/2'>
            <Zoom>
                <img className='rounded-md' src="https://i.ibb.co.com/SczT4JR/chuttersnap-u5-XMXzdc-Er-I-unsplash.jpg" alt="" />
            </Zoom>
            </div>
            <div className='flex justify-center items-center'>
             <div>
                <Zoom >
                <h1 className='text-5xl mb-6'>We create new and <br /> interesting solutions</h1>

                </Zoom>
             <Zoom>
             <p className='text-gray-400'>
             Discover our commitment to innovation as we continuously develop <br />
              new and engaging solutions tailored to your needs. From cutting- <br />
              edge technologies to creative approaches, we strive to provide fresh <br />
              perspectives and exceed expectations in every endeavor.
             </p>
             </Zoom>
           
             
             </div>
            </div>
        </div>
    );
};

export default ThirdSection;