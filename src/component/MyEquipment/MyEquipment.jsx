import React from 'react';
import { Fade, Flip, Zoom } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';





// import required modules


const MyEquipment = () => {
    return (
       <div className='dark:bg-gray-500'>
         <div className=''>
            
           <div className='bg-red-500 dark:bg-gray-700 border-2 p-5 shadow-2xl rounded-xl  w-[300px] mx-auto my-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,<br />
             cum ea omnis corrupti magnam ipsa incidunt eaque. <br />
              Officia, voluptatibus at!
           </div>
           <Fade Right>
             <p>I will gently appear as I enter the viewport</p>
            </Fade>
            <Zoom>
            <div className='bg-red-500 dark:bg-gray-700 border-2 p-5 shadow-2xl rounded-xl  w-[300px] mx-auto my-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,<br />
             cum ea omnis corrupti magnam ipsa incidunt eaque. <br />
              Officia, voluptatibus at!
           </div>
            </Zoom>
            <Flip>
            <div className='bg-red-500 dark:bg-gray-700 border-2 p-5 shadow-2xl rounded-xl  w-[300px] mx-auto my-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,<br />
             cum ea omnis corrupti magnam ipsa incidunt eaque. <br />
              Officia, voluptatibus at!
           </div>
            </Flip>
        </div>
       
<Tooltip id="my-tooltip" />

       </div>
    );
};

export default MyEquipment;