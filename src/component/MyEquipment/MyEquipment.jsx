import React from 'react';
import { Tooltip } from 'react-tooltip';

const MyEquipment = () => {
    return (
       <div className='dark:bg-gray-500'>
         <div className=''>
            <button id='switch' className='btn btn-success'>switch</button>
           <div className='bg-red-500 dark:bg-gray-700 border-2 p-5 shadow-2xl rounded-xl  w-[300px] mx-auto my-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,<br />
             cum ea omnis corrupti magnam ipsa incidunt eaque. <br />
              Officia, voluptatibus at!
           </div>
        </div>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
          ◕‿‿◕
          </a>
<Tooltip id="my-tooltip" />

       </div>
    );
};

export default MyEquipment;