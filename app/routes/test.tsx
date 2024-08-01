import { useState } from "react";

export default function CreateCard() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cards, setCards] = useState<{ id: number; name: string; phone: string; address: string; imageUrl: string }[]>([]);
  const [nextId, setNextId] = useState(0);
  const [selectedCard, setSelectedCard] = useState<{ id: number; name: string; phone: string; address: string; imageUrl: string } | null>(null);

  const handleClickAdd = () => {
    if (!name || !phone) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }
    setCards([
      ...cards,
      {
        id: nextId,
        name: name,
        phone: phone,
        address: address,
        imageUrl: imageUrl,
      },
    ]);
    setNextId(nextId + 1);
    setName("");
    setPhone("");
    setAddress("");
    setImageUrl("");
  };

  const handleViewDetails = (card: { id: number; name: string; phone: string; address: string; imageUrl: string }) => {
    setSelectedCard(card);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedCard(null);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-gray-200">
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md"
          onClick={handleOutsideClick}
        >
          <div className="bg-gray-800 w-full max-w-3xl p-6 border border-gray-700 rounded-lg shadow-2xl overflow-auto relative">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 transition duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-3xl font-semibold mb-6">รายละเอียดนามบัตร</h2>
            <div className="flex items-center mb-6">
              {selectedCard.imageUrl && (
                <img
                  src={selectedCard.imageUrl}
                  alt={`Image for ${selectedCard.name}`}
                  className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-gray-700"
                />
              )}
              <div className="ml-4">
                <p className="text-xl font-bold text-gray-100">{selectedCard.name}</p>
                <p className="text-sm text-gray-400">{selectedCard.phone}</p>
                <p className="text-sm text-gray-400">{selectedCard.address}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400"><strong>ID:</strong> {selectedCard.id}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCard(null)}
              className="w-full inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-6"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
      <h1 className="text-4xl font-bold mb-6">เพิ่มข้อมูลนามบัตร</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">ชื่อ-สกุล</label>
          <input
            name="cName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรอกชื่อ-สกุล"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">เบอร์โทรศัพท์</label>
          <input
            name="cPhone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรอกเบอร์โทรศัพท์"
            type="tel"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">ที่อยู่</label>
          <textarea
            name="cAddress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรอกที่อยู่"
            rows={4}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">URL รูปภาพ</label>
          <input
            name="cImageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="กรอกรูปภาพ URL"
          />
        </div>
        <button
          onClick={handleClickAdd}
          className="w-full inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          เพิ่มนามบัตร
        </button>
      </div>
      <div className="mt-8">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ชื่อ-สกุล</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">เบอร์โทรศัพท์</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ที่อยู่</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">รูปภาพ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">รายละเอียด</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {cards.map((card) => (
              <tr key={card.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{card.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{card.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{card.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{card.address}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {card.imageUrl && (
                    <img src={card.imageUrl} alt={`Image for ${card.name}`} className="w-16 h-16 object-cover rounded-md" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    onClick={() => handleViewDetails(card)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    ดูรายละเอียด
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
