import React, { useState, useRef, useEffect} from "react";
import Nav from '../components/nav'
import '../styles/booking.css'
import Curly from '../assets/curved-arrow.svg'
import Main1 from '../assets/main1.webp'
import Main2 from '../assets/main2.webp'
import Main3 from '../assets/main3.webp'
import Loading from "../components/loading";

//scrollFunction
function scrollToSection(elementRef: any) {
    window.scrollTo(
        {
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        }
    )
  }
  
const Book = () => {
    const [isLoading, setIsLoading] = useState(true);
    const top = useRef(null);
    useEffect(()=>{
        scrollToSection(top);
    }, [isLoading])
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
    return(
        <div>
            <Nav />
            {/*Loading Screen */}
            <div className={done(isLoading)}>
                <Loading/>
            </div>
            {/*Loading Screen */}
            <div id="body" className={(loading(isLoading))}>
                <section className="bg-gradient-to-t from-[white] to-[#F0E1A8]">
                    <div>
                        <div ref={top} className="w-[80%] mx-auto flex flex-col items-center justify-center gap-[10vh] h-[750px]">
                            <div>
                                <div className="text-5xl font-[Rubik] text-center">
                                    NEED A BOOKING?
                                </div>
                                <div className="text-3xl font-[heebo] mt-5 text-center">
                                    you can rent out the curbside tree house for your meetings, get togethers, and more...
                                </div>
                            </div>
                            <div>
                                <div className="text-5xl font-[Rubik] text-center">
                                        JUST LET US KNOW AHEAD OF TIME.
                                </div>
                                <div className="text-3xl font-[heebo] mt-5 text-center">
                                    we also do pop-ups so you can physically take us anywhere. 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gradient-to-b from-[white] to-[white] h-[600px]">
                    <div className="flex flex-row items-center justify-center mx-auto h-[200px]">
                        <div className="text-3xl font-[rubik] text-center font-extrabold lg:text-5xl">
                            you can always contact us through these platforms.
                        </div>
                    </div>
                    <div className="h-[100px] w-[80%] mx-auto flex justify-center gap-[10vh] flex-row">
                        <div className="">
                            <a target="_blank" rel="noreferrer" 
                            className='' 
                            href="https://www.instagram.com/curbside.bcd/">
                                <i className="animate-bounce transition-all transform lg:hover:scale-[1.1] transition-all hover:text-gray-700 text-8xl fa-brands fa-instagram"></i></a>
                        </div>
                        <div className="">
                            <a target="_blank" rel="noreferrer" 
                            className='' 
                            href="https://www.facebook.com/Curbside.bcd/">
                                <i className="animate-bounce transition-all transition-all transform lg:hover:scale-[1.1] hover:text-gray-700 text-8xl fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center mx-auto py-[2rem]">
                        <div className="text-2xl font-[heebo] text-center font-extrabold lg:text-5xl">
                            curbside.coffee.bcd@gmail.com
                        </div>
                    </div>
                </section>
                <section className="bg-gradient-to-b from-[white] to-[#F0E1A8]">
                    <div className="flex flex-row items-end justify-center mx-auto py-[2rem]">
                        <div className="text-5xl font-[rubik] text-center font-extrabold">
                            some snaps.
                        </div>
                    </div>
                    <div className="h-dvh w-[80%] mx-auto flex flex-col items-center justify-center gap-[10vh] lg:flex-row">
                        <div className="w-[40vh] border-white border-8 rounded-lg shadow-2xl">
                                    <img src={Main1} alt="" />
                        </div>
                        <div className="hidden w-[40vh] border-white border-8 rounded-lg lg:inline-block shadow-2xl">
                                    <img src={Main3} alt="" />
                        </div>
                        <div className="w-[40vh] border-white border-8 rounded-lg shadow-2xl" onLoad={()=>setIsLoading(false)}>
                                    <img src={Main2} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Book;