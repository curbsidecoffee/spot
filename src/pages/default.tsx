import React from 'react';
import '../styles/App.css';
import '../styles/Nav.css';
import Curb from '../assets/curb.webp'
import Menu from '../assets/menu.jpg'
import Menu2 from '../assets/menu2.jpg'
import Logo from '../assets/logo.svg'
import Main1 from '../assets/main1.webp'
import Main2 from '../assets/main2.webp'
import Main3 from '../assets/main3.webp'
import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/loading';

//scrollFunction
function scrollToSection(elementRef: any) {
  window.scrollTo(
      {
          top: elementRef.current.offsetTop,
          behavior: 'smooth'
      }
  )
}

//Fonts available Rubik (Headers), Heebo (Sub-Headers), Poiret One (Paragraphs)
const Default = () => {
    const params = useParams();
    const home = useRef(null);
    const coffee = useRef(null);
    const about = useRef(null);
    const [menu, setMenu] = useState(true);
    const [toggle, setToggle] = useState('hidden opacity-0');
    const [isLoading, setIsLoading] = useState(true);
    const loading = (x: boolean)=> {
        if (x) {
            return 'hidden'
        } else {
            return 'visible'
        }
    }
    const done = (x: boolean)=> {
        if (!x) {
            return 'hidden'
        } else {
            return 'visible'
        }
    }
    const sectionChooser = (x: string) => {
        switch (x) {
            case "home":
                scrollToSection(home)
                break;
            case "coffee":
                scrollToSection(coffee)
                break;
            case "about":
                scrollToSection(about)
                break;
        }
    }
    useEffect(() => {
        if (params.section != null) { 
            sectionChooser(params.section)
        } else
            scrollToSection(home)
    }, [isLoading]);
  return (
<div>
        {/*Nav Bar */}
        <div className="z-[1] sticky top-0 shadow-2xl bg-white">
        <nav className="flex justify-between items-center w-[80%] mx-auto h-[8vh]">
            <div className="flex items-center">
                <Link to="/spot" className="hidden lg:block transition-all transform hover:scale-[1.2] w-[5vh]"><img src={Logo} alt="LOGO" /></Link>
                <Link to="/spot" className="transition-all font-[Rubik] text-2xl hover:text-gray-600">curbside coffee.</Link>
            </div>
            <div className="">
                <button onClick={() => (toggle==='hidden opacity-0') ? setToggle('visible opacity-100') : setToggle('hidden opacity-0')} data-collapse-toggle="buttons-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
                hover:bg-gray-100 focus:outline-none focus:ring-2" aria-controls="buttons-mob" aria-expanded="false">
                    <i className="fas fa-bars text-lg"></i>
                </button>
                <div id="buttons-full">
                    <ul className="hidden md:flex items-center gap-6">
                        <li onClick={() => scrollToSection(home)} className="transition-all transform hover:scale-[1.1] text-gray-800 hover:text-gray-500"><button>Home</button></li>
                        <li onClick={() => scrollToSection(coffee)} className="transition-all transform hover:scale-[1.1] text-gray-800 hover:text-gray-500"><button>Coffee</button></li>
                        <li onClick={() => scrollToSection(about)} className="transition-all transform hover:scale-[1.1] text-gray-800 hover:text-gray-500"><button>About Us</button></li>
                        <li className="transition-all transform hover:scale-[1.1] bg-gray-200 border-1 rounded-xl px-3 py-1 ml-[2vh] hover:bg-gray-300"><Link to="/bookings">Book the curb<i className='fa fa-paper-plane ml-2'></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="buttons-mob" className={toggle + "top-0 shadow-2xl border-b"}>
            <ul className="overflow-hidden block md:hidden text-center">
                <li onClick={() => scrollToSection(home)} className="transition-all transform hover:scale-[1.05] hover:bg-gray-200"><button>Home</button></li>
                <li onClick={() => scrollToSection(coffee)} className="transition-all transform hover:scale-[1.05] hover:bg-gray-200"><button>Coffee</button></li>
                <li onClick={() => scrollToSection(about)} className="transition-all transform hover:scale-[1.05] hover:bg-gray-200"><button>About Us</button></li>
                <li className="pl-3 transition-all transform hover:scale-[1.05] hover:bg-gray-200"><Link to="/bookings">Book the curb<i className='fa fa-paper-plane ml-2'></i></Link></li>
            </ul>
        </div>
    </div>
    {/*Nav Bar */}
    {/*Loading Screen */}
    <div className={done(isLoading)}>
        <Loading/>
    </div>
    {/*Loading Screen */}
    <div id="body" className={(loading(isLoading))}>
        <div className='overflow-auto cursor-default'>
        <section ref={home} className='bg-gradient-to-b from-[#EDEDE9] to-[#F5EBE0]'>
        <div className='flex flex-col w-[80%] mx-auto h-dvh items-center justify-center text-center gap-[2rem]'>
            <div className='font-[heebo] text-4xl'>
                We love <div className='pl-1 animate-bounce inline-block text-[#A89680] font-extrabold'><button onClick={() => scrollToSection(coffee)}>coffee.</button></div> <br />
                So do you.
            </div>
            {/* Mobile */}
            <div className='w-[35vh] border-solid rounded-2xl shadow-2xl'>
                <img src={Curb} alt="" onLoad={()=>setIsLoading(false)}/>
            </div>
            {/* Mobile */}
            <div className='font-[heebo] text-3xl text-justify px-5 mt-10'>
            we got a lot of <div className='inline-block text-[#A89680] font-extrabold'>good</div> food and beverages actually...
            </div>
        </div>
        </section>
        <section ref={coffee} className='bg-gradient-to-b from-[#F5EBE0] to-[#E3D5CA]'>
        <div className='flex flex-col w-[80%] mx-auto h-dvh items-center justify-center gap-[1vh] lg:flex-row lg:w-[60%] lg:justify-between'>
            <div className='font-[rubik] text-3xl text-center font-extrabold lg:hidden'>
                Here's our menu
            </div>
            <div className='font-[heebo] text-2xl lg:hidden'>
                if you're wondering...
            </div>
                {/*Desktop */}
            <div className='font-[heebo] text-3xl text-start px-5 mt-10 hidden lg:inline-block'>
            <div className='font-[rubik] text-6xl text-start font-extrabold'>
                Here's our menu
                <div className='font-[heebo] text-4xl mt-10'>
                if you're wondering...
                </div>
            </div>
                <div className='font-[rubik] font-extrabold text-4xl mt-20'>we're open</div> 
                <div className=' text-[#6D5941] text-3xl font-extrabold mb-20 mt-3'>10:00 A.M. - 5:00 P.M.</div> 
                <div className='animate-bounce'>that's right come grab your coffee.</div>
            </div>
            {/*Desktop */}
            <div className='w-[45vh] lg:w-[55vh] shadow-2xl mt-5 lg:w-[50vh] border-white border-8 rounded-2xl relative'>
            <img className={(menu ? "hidden" : "visible")} src={Menu2} alt="" />
            <img className={(menu ? "visible" : "hidden")} src={Menu} alt="" /> <div className='absolute right-0 top-[11rem] lg:top-[18rem] lg:mr-[-5rem]'><button onClick={ ()=> menu ? setMenu(false) : setMenu(true)}><i className="animate-bounce fa-solid fa-arrow-right text-2xl lg:text-5xl"></i></button></div>
            </div>
            <div className='font-[heebo] text-3xl text-start px-5 mt-10 lg:hidden'>
            <div className='font-[rubik] font-extrabold mb-2'>we're open</div> 
            <div className=' text-[#6D5941] text-2xl font-extrabold mb-5'>10:00 A.M. - 5:00 P.M.</div> that's right come grab your coffee.
            </div>
        </div>
        </section>
        <section ref={about} className='bg-gradient-to-b from-[#E3D5CA] to-[#D6CCC2]'>
        <div className='flex flex-col w-[80%] mx-auto justify-center h-dvh gap-[2vh] lg:hidden'>
            <div className='font-[rubik] text-4xl text-start'>
                WHAT IS <div className='animate-pulse inline-block'>CURBSIDE?</div>
            </div>
            <div className='font-[heebo] text-2xl text-start'>
                created by young entrepreneurs during the pandemic, 
                it's a safe place for everyone to enjoy 
                coffee and good company.
            </div>
            <div className='font-[rubik] text-4xl text-start mt-10'>
                WHO ARE <div className='animate-pulse inline-block'>WE?</div>
            </div>
            <div className='font-[heebo] text-2xl text-start'>
                we love coffee and house music. so come along and join the curbside community.
            </div>
            <div className='font-[rubik] text-4xl text-start mt-10'>
                WHERE IS IT?
            </div>
            <div className='font-[heebo] text-2xl text-start'>
                located in front of the back entrance of L' Fisher chalet.
            </div>
        </div>
                {/*Desktop */}
            <div className='flex flex-row w-[80%] mx-auto items-center justify-center h-dvh gap-[10vh] hidden lg:flex'>
                <div className='flex flex-col w-[80%] mx-auto justify-center h-dvh gap-[2vh] hidden lg:flex'>
                    <div className='font-[rubik] text-4xl text-start'>
                        WHAT IS <div className='animate-pulse inline-block'>CURBSIDE?</div>
                    </div>
                    <div className='font-[heebo] text-2xl text-start'>
                        created by young entrepreneurs during the pandemic, 
                        it's a safe place for everyone to enjoy 
                        coffee and good company.
                    </div>
                    <div className='font-[rubik] text-4xl text-start mt-10'>
                        WHO ARE <div className='animate-pulse inline-block'>WE?</div>
                    </div>
                    <div className='font-[heebo] text-2xl text-start'>
                        we love coffee and house music. so come along and join the curbside community.
                    </div>
                    <div className='font-[rubik] text-4xl text-start mt-10'>
                        WHERE IS IT?
                    </div>
                    <div className='font-[heebo] text-2xl text-start'>
                        located in front of the back entrance of L' Fisher chalet.
                    </div>
                </div>
                <div className='flex flex-col w-[80%] mx-auto justify-center h-dvh gap-[2vh] hidden lg:flex'>
                    <div className='font-[rubik] text-start text-4xl mt-4'>
                        ADDRESS
                    </div>
                    <div className='font-[heebo] text-start text-2xl'>
                    27, Cor. 14th, Aguinaldo Street, Bacolod, 6100 Negros Occidental
                    </div>
                    <div className='font-[rubik] text-start text-4xl mt-4'>
                        CONTACT
                    </div>
                    <div id="icons" className="flex">
                        <a className='transition-all transform hover:scale-[1.1]' 
                        href="https://www.instagram.com/curbside.bcd/">
                            <i className="transition-all hover:text-gray-700 text-2xl fa-brands fa-facebook-f"></i>facebook.
                        <div>https://www.facebook.com/Curbside.bcd</div></a>
                    </div>
                    <div id="icons" className="flex">
                        <a className='transition-all transform hover:scale-[1.1]' 
                        href="https://www.facebook.com/Curbside.bcd/">
                            <i className="transition-all hover:text-gray-700 text-2xl fa-brands fa-instagram"></i>instagram.
                            <div>https://www.instagram.com/curbside.bcd/</div></a>
                    </div>
                    <div className='font-[heebo] text-center text-sm mt-20 transition-all transform hover:scale-[1.1]'>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paolo-juan-saturnino-9abbbb226/">Website by <div className='font-[rubik] '>Paolo Juan Saturnino</div></a>
                    </div>
                </div>
            </div>
                {/*Desktop */}
        </section>
        <section id="location" className='bg-gradient-to-b from-[#D6CCC2] to-[#F5EBE0]'>
        <div className='flex flex-col w-[80%] mx-auto h-80 gap-[2vh] lg:hidden'>
            <div className='font-[rubik] text-start text-4xl mt-4'>
                ADDRESS
            </div>
            <div className='font-[heebo] text-start text-2xl'>
            27, Cor. 14th, Aguinaldo Street, Bacolod, 6100 Negros Occidental
            </div>
            <div className='font-[heebo] text-center text-sm mt-20'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paolo-juan-saturnino-9abbbb226/">Website by <div className='font-[rubik] '>Paolo Juan Saturnino</div></a>
            </div>
        </div>
        </section>
        </div>
    </div>
</div>
  );
}


export default Default;
