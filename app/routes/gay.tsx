import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const handleNoMouseEnter = () => {
    const newTop = Math.random() * 80 + 'vh';
    const newLeft = Math.random() * 80 + 'vw';
    setPosition({ top: newTop, left: newLeft });
  };

  const handleYesClick = () => {
    alert('คุณเลือก "ใช่"');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">คุณเป็นเกย์หรือไม่?</h1>
        <div className="relative w-full h-24 flex justify-center items-center">
          <button
            onClick={handleYesClick}
            className="absolute left-1/4 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            ใช่
          </button>
          <button
            onMouseEnter={handleNoMouseEnter}
            style={{ top: position.top, left: position.left }}
            className="absolute px-6 py-3 bg-red-500 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          >
            ไม่ใช่
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
