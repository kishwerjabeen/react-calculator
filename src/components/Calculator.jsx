import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState('');

    // e means event 
    const clickHandle = (e) => {
        // concat asliya karhy ha taky jo bhi value enter ho contact hojye ike 456
        setResult(result.concat(e.target.value));
    }

    return (
        <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">


            <div className='main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100'>

                {/* screen */}
                <div className="screen p-2">
                    <input type="text"
                    // fr display
                        value={result}
                        className='text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 bg-gray-100 text-2xl outline-none pt-10  rounded-lg text-right ' placeholder="0">

                    </input>
                </div>
                {/* brand */}
                <div className="brand  bg-gray-200 bg-opacity-90 flex justify-center mb-2 shadow-md text-gray-500 ">
                    <h1 className=' text-gray-900 text-xs font-bold'>Kishwar J.</h1>
                </div>

                {/* keyboard */}
                <div className="keyboard ">
                    {/* first line */}
                    <div className='flex justify-between m-2'>
                        <input type="button" value="C" className="bg-red-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />

                        <input type="button" value="<" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />

                        <input type="button" value="%" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />

                        <input type="button" value="/" className="bg-pink-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                    </div>
                    {/* second line */}
                    <div className="m-2 flex justify-between">
                        <input type="button" value="7" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="8" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="9" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="*" className="bg-green-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                    </div>

                    {/* third line */}
                    <div className="m-2 flex justify-between">
                        <input type="button" value="4" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="5" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="6" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="-" className="bg-indigo-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                    </div>

                    {/* fourth line  */}
                    <div className="m-2 flex justify-between">
                        <input type="button" onClick={clickHandle} value="1" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="2" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="3" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="+" className="bg-purple-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                    </div>
                    {/* 5th line     */}
                    <div className="m-2 flex justify-between">
                        <input type="button" value="0" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="00" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="." className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                        <input type="button" value="=" className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Calculator