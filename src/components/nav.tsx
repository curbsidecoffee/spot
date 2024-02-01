import React from 'react'
import Logo from '../assets/logo.svg'
import { useState} from 'react';
import { Link } from 'react-router-dom';

const Nav = ()=> {
    const [toggle, setToggle] = useState('hidden opacity-0');
    return (
<div className="z-[1] sticky top-0 shadow-2xl bg-white">
    {/*Nav Bar */}
    <div>
        <nav className="flex justify-between items-center w-[80%] mx-auto h-[8vh]">
            <div className="flex items-center">
                <Link className="hidden lg:block transition-all transform hover:scale-[1.2] w-[5vh]" to="/"><img src={Logo} alt="LOGO" /></Link>
                <Link className="transition-all font-[Rubik] text-2xl hover:text-gray-600" to="/">curbside coffee.</Link>
            </div>
            <div className="">
                <button onClick={() => (toggle==='hidden opacity-0') ? setToggle('visible opacity-100') : setToggle('hidden opacity-0')} data-collapse-toggle="buttons-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
                hover:bg-gray-100 focus:outline-none focus:ring-2" aria-controls="buttons-mob" aria-expanded="false">
                    <i className="fas fa-bars text-lg"></i>
                </button>
                <div id="buttons-full">
                    <ul className="hidden md:flex items-center gap-6">
                        <li className="transition-all transform hover:scale-[1.1] text-gray-800 hover:text-gray-500"><Link to="/welcome/home">Home</Link></li>
                        <li className="transition-all transform hover:scale-[1.1] text-gray-800 hover:text-gray-500"><Link to="/welcome/coffee">Coffee</Link></li>
                        <li className="transition-all transform hover:scale-[1.1] text-gray-800 hover:text-gray-500"><Link to="/welcome/about">About Us</Link></li>
                        <li className="transition-all transform hover:scale-[1.1] bg-gray-200 border-1 rounded-xl px-3 py-1 ml-[2vh] hover:bg-gray-300"><button>Book the curb<i className='fa fa-paper-plane ml-2'></i></button></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="buttons-mob" className={toggle + "top-0 shadow-2xl border-b"}>
            <ul className="overflow-hidden block md:hidden text-center">
                <li className="transition-all transform hover:scale-[1.05] hover:bg-gray-200"><Link to="/welcome/home">Home</Link></li>
                <li className="transition-all transform hover:scale-[1.05] hover:bg-gray-200"><Link to="/welcome/coffee">Coffee</Link></li>
                <li className="transition-all transform hover:scale-[1.05] hover:bg-gray-200"><Link to="/welcome/about">About Us</Link></li>
                <li className="pl-3 transition-all transform hover:scale-[1.05] hover:bg-gray-200"><button>Book the curb<i className='fa fa-paper-plane ml-2'></i></button></li>
            </ul>
        </div>
    </div>
    {/*Nav Bar */}
</div>
    );
}

export default Nav