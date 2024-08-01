import { useState, useEffect } from "react";
import { sculptureList as initialSculptureList } from './SculptureLists';

export default function EProject() {
    const [index, setIndex] = useState(0);
    const [sctList, setSctlist] = useState(initialSculptureList);
    const [deletedItem, setDeletedItem] = useState(null);

    function handleClickNext() {
        setIndex((prevIndex) => (prevIndex < sctList.length - 1 ? prevIndex + 1 : 0));
    }

    function handleBackClick() {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sctList.length - 1));
    }

    function handleDeleteClick(id) {
        // เก็บข้อมูลของรายการที่ถูกลบ
        const itemToDelete = sctList.find((item) => item.id === id);
        setDeletedItem(itemToDelete);

        // ลบรายการที่เลือกออกจาก list
        setSctlist((prevList) => {
            const newList = prevList.filter((item) => item.id !== id);
            const newIndex = index >= newList.length ? newList.length - 1 : index;
            setIndex(newIndex);
            return newList;
        });
    }

    function handleUndoDelete() {
        if (!deletedItem) return;

        // เพิ่มรายการที่ลบกลับไปยัง list
        setSctlist((prevList) => {
            const newList = [...prevList, deletedItem];
            setDeletedItem(null);
            return newList;
        });

        // รีเซ็ต index ให้กลับไปที่รายการที่ถูกลบ
        setIndex((prevIndex) => Math.min(prevIndex, sctList.length - 1));
    }

    useEffect(() => {
        // Reset deleted item if the list is empty
        if (sctList.length === 0) {
            setDeletedItem(null);
        }
    }, [sctList]);

    const sculpture = sctList[index] || {};

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="container mx-auto p-6 flex flex-col flex-grow">
                <div className="sculpture-list mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-center">เว็บ กิจ อนิเมะเถื่อน</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {sctList.map((item, i) => (
                            <div
                                key={item.id}
                                className={`relative cursor-pointer p-4 border rounded-lg ${i === index ? 'border-red-600' : 'border-gray-700'}`}
                                onClick={() => setIndex(i)}
                            >
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    className="w-full h-32 object-cover mb-2 rounded-lg"
                                />
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-400">{item.author}</p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // ป้องกันการคลิกที่รูปจากการทำงาน
                                        handleDeleteClick(item.id);
                                    }}
                                    className="absolute top-2 right-2 px-4 py-2 rounded-lg text-white font-semibold bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
                                >
                                    ลบ
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {sctList.length > 0 && (
                    <div className="sculpture-details flex-grow text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            <i>{sculpture.name}</i> โดย {sculpture.author}
                        </h2>
                        <h3 className="text-xl mb-4">
                            {index + 1} จาก {sctList.length}
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
                        {deletedItem && (
                            <button
                                onClick={handleUndoDelete}
                                className="mt-4 px-6 py-3 rounded-lg text-white font-semibold bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                            >
                                ยกเลิก
                            </button>
                        )}
                    </div>
                )}
                {sctList.length === 0 && (
                    <div className="text-center text-xl mt-10">ไม่มีข้อมูล</div>
                )}
            </div>
        </div>
    );
}
