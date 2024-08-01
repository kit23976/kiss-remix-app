import { useState } from "react";
import { sculptureList } from './SculptureLists';

export default function EProject() {
    const [index, setIndex] = useState(0);
    const [sctList, setSctlist] = useState(sculptureList);




    function handleClickNext() {
        if (index < sculptureList.length -1 ) {
            setIndex(index + 1);
        } else {    
            setIndex(0);
        }
    }

    function handleBackClick() {
        if (index > sculptureList.length ) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }

    const sculpture = sculptureList[index];

    return (
        
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            
            <div className="container mx-auto p-6 flex flex-col flex-grow">
                <div className="sculpture-details flex-grow text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        <i>{sculpture.name}</i> โดย {sculpture.author}
                    </h2>
                    <h3 className="text-xl mb-4">
                        {index + 1} จาก {sculptureList.length}
                    </h3>
                    <img
                        src={sculpture.url}
                        title={sculpture.name}
                        alt={sculpture.name}
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-4"
                    />
                    <p className="text-lg mb-4">
                        {sculpture.description}
                    </p>
                    <a 
                        href={sculpture.paper} 
                        className="block text-xl font-semibold bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg mx-auto max-w-xs transition-all duration-300"
                    >
                        คลิ้ก ๆ ๆ ๆ
                    </a>
                </div>
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handleBackClick}
                        className="w-1/2 px-6 py-3 rounded-lg text-white font-semibold bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleClickNext}
                        className="w-1/2 px-6 py-3 rounded-lg text-white font-semibold bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
                    >
                        Next

                </button>
                
                </div>
            </div>

            
        </div>


    );
    
}

