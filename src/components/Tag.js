import React, { useState } from "react"
import useGif from "../hooks/useGif";
import Spinner from './Spinner';

const Tag= ()=>{
    const [Search_tag,setSearch_tag]=useState('meme');

    const {gif,loading,fetchData}=useGif(Search_tag); 

    return(
        <div className=" w-3/4 sm:w-1/2 bg-[#359ff5] rounded-lg border border-blue-800 flex flex-col items-center gap-y-5 mt-[15px] sm:mb-[50px] mb-[100px]">
            <h1 className="mt-[15px] text-2xl italic underline font-bold">
                Random {Search_tag} GIF
            </h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" />)
            }
            
            <input className="w-10/12 py-2 rounded-lg mb-[3px] text-center" onChange={(event)=>setSearch_tag(event.target.value)} value={Search_tag} />

            <button onClick={()=>fetchData(Search_tag)} className="bg-[#142b57] w-10/12  text-lg rounded-lg mb-[20px] py-2 text-white">
                Generate
            </button>
        </div>
    )
}

export default Tag