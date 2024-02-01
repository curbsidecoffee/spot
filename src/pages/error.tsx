import React from "react";
import Nav from "../components/nav";

const Error = () => {
    return(
        <div>
            <Nav/>
            <div className='h-dvh w-[80%] mx-auto flex flex-col items-center justify-center gap-[5rem]'>   
                <div className="text-center text-5xl text-[Rubik]">
                    Oops! The Page you're looking for does not exist!
                </div>
                <div className="text-center text-3xl text-[Heebo]">
                    You might want to go back to the homepage.
                </div>
            </div>
        </div>
    );
}

export default Error