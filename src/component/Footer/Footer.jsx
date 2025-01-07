import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { MdOutlineSportsKabaddi } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
       <footer className="footer footer-center bg-base-300 text-base-content p-10">
  <aside>
  <MdOutlineSportsKabaddi className='text-6xl' />
    <p className="font-bold text-2xl">
    A Sports Equipment Store
    </p>
   
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://web.facebook.com/mdmosiur.rahman.9484941'>
       <FaFacebook className='text-4xl'></FaFacebook>
      </a>
      <a href='https://github.com/mosiur73/'>
       <FaGithub className='text-4xl'></FaGithub>
      </a>
      
    </div>
  </nav>
  <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
</footer>
        </div>
    );
};

export default Footer;