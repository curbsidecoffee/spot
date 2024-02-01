import React from "react";
import Logo from '../assets/logo.svg'

const Loading = () =>{
    return(
        <div>
            <div className="bg-white h-dvh flex flex-col items-center justify-center mx-auto cursor-default z-2">
                <div className="animate-bounce font-[heebo] text-3xl">
                    brewing your favourite coffee..
                </div>
            </div>
        </div>
    );
}

export default Loading;