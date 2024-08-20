import { useState } from "react";
import { sculptureList as initialSculptureList } from './SculptureLists';

export default function EProject() {
    const [sctList, setSctlist] = useState(initialSculptureList);

    function handleDeleteClick(id) {
        setSctlist((prevList) => prevList.filter((item) => item.id !== id));
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="container mx-auto p-6 flex flex-col flex-grow">
                <h2 className="text-3xl font-bold mb-4 text-center">Sculpture List</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sctList.map((sculpture) => (
                        <div key={sculpture.id} className="sculpture-item flex flex-col items-center">
                            <h3 className="text-2xl font-bold mb-2">
                                <i>{sculpture.name}</i> โดย {sculpture.author}
                            </h3>
                            <img
                                src={sculpture.url}
                                title={sculpture.name}
                                alt={sculpture.name}
                                className="w-full max-w-md rounded-lg shadow-lg mb-4"
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
                            <button
                                onClick={() => handleDeleteClick(sculpture.id)}
                                className="mt-4 px-6 py-3 rounded-lg text-white font-semibold bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
                            >
                                ลบ
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
