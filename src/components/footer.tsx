import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='z-1 bg-white sticky bottom-0'>
        <div id="icons" className="flex items-center justify-center h-10 gap-[2vh]">
            <a target="_blank" rel="noreferrer" className='transition-all transform hover:scale-[1.1]' href="https://www.instagram.com/curbside.bcd/"><i className="transition-all hover:text-gray-700 text-2xl fa-brands fa-facebook-f"></i>facebook.</a>
            <a target="_blank" rel="noreferrer" className='transition-all transform hover:scale-[1.1]' href="https://www.facebook.com/Curbside.bcd/"><i className="transition-all hover:text-gray-700 text-2xl fa-brands fa-instagram"></i>instagram.</a>
        </div>
        <div className="flex flex-col items-center justify-center bottom-0">
                <Link to="/spot" className="transition-all font-[Rubik] text-s hover:text-gray-700">curbside coffee.</Link>
        </div>
      </div>
    );
  }
  
  export default Footer;
  