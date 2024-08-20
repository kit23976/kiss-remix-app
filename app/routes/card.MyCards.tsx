import { useState } from "react";
import { cards } from "./data";

function IsMember({ act }: { act: boolean }) {
  return act ? <span>✅ Hi, VIP Member</span> : <span>❌ Member Only!</span>;
}

function Profiles({
  id,
  nam,
  act,
}: {
  id: number;
  nam: string;
  act: boolean;
}) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {nam}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <a
            href={`/view/${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ดูข้อมูล
          </a>
      </td>
    </tr>
  );
}

export default function MyCards() {
  const [active, setActive] = useState(true);

  const items = cards.filter(cardItem => cardItem.active === active);

  return (
    <div className="m-3 bg-indigo-500 p-10 font-semibold">
      <center>
        <div className="flex flex-row">
          <h1 className="basis-1/2 m-3 text-2xl bg-lime-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block">
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>
            My Cards : Krisanon Neamsud
          </h1>
          <h1 className="basis-1/2 m-3 text-2xl bg-lime-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            MISSYOU
          </h1>
        </div>
        <div className="mb-4 text-center">
          <div>#Web Programming #Softwareengineering</div>
        </div>
        <hr />
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map(cardItem => (
              <Profiles
                key={cardItem.id}
                id={cardItem.id}
                nam={cardItem.name}
                act={cardItem.active}
              />
            ))}
          </tbody>
        </table>
        <div className="mt-8 flex justify-around">
          <button
            className="w-1/2 px-6 py-3 rounded-lg text-white font-semibold bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-300"
            onClick={() => {
              console.log('Active button clicked');
              setActive(true);
            }}
          >
            Active
          </button>
          <button
            className="w-1/2 px-6 py-3 rounded-lg text-white font-semibold bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
            onClick={() => {
              console.log('Non Active button clicked');
              setActive(false);
            }}
          >
            Non Active
          </button>
        </div>
      </center>
    </div>
  );
}
