import { useState } from "react";
import { cards } from "./data";
import AppMenu from "./Template/menu";

function IsMember({ active }: { active: boolean }) {
  return active ? <span>✅ Hi, VIP Member.</span> : <span>❌ You are not a Member!</span>;
}

function Profile({
  id,
  name,
  bio, // Updated to match the data structure
  bgProd, // Updated to match the data structure
  userIcon,
  userName,
  createdAt,
  active,
}: {
  id: number;
  name: string;
  bio: string; // Updated to match the data structure
  bgProd: string; // Updated to match the data structure
  userIcon: string;
  userName: string;
  createdAt: string;
  active: boolean;
}) {
  return (
    
    <div className="max-w-sm lg:max-w-full lg:flex p-3 mt-3 rounded-xl">

      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${bgProd})` }} // Updated to match the data structure
        title="Background Image"
      ></div>
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <IsMember active={active} />
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{bio}</p> {/* Updated to match the data structure */}
        </div>
        <div className="flex items-center">
          <img
            src={userIcon}
            className="w-10 h-10 rounded-full mr-4"
            alt="Avatar"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{userName}</p>
            <p className="text-gray-600">{createdAt}</p>
          </div>
        </div>
        <div id="btn-detail">
          <a href={`/cards/${id}`}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2"
            >
              View More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MyCards() {
  const [btnactive, setActive] = useState(true);

  const name = "Krisanon";
  const note = "HI ";

  const items = cards.filter((cardItems) => cardItems.active === btnactive);

  const cardItems = items.map((cardItem, index) => (
    <Profile
      key={index}
      id={cardItem.id}
      name={cardItem.name}
      bio={cardItem.bio} // Updated to match the data structure
      bgProd={cardItem.bgProd} // Updated to match the data structure
      userIcon={cardItem.userIcon}
      userName={cardItem.userName}
      createdAt={cardItem.createdAt}
      active={cardItem.active}
    />
  ));

  function handleClickActive() {
    console.log("--> This is Active");
    setActive(true);
  }

  function handleClicknonActive() {
    console.log("--> This is Non Active");
    setActive(false);
  }

  return (
    <>
      <AppMenu />
      <main className="container justify-center flex pt-4">
        <section className="banner bg-gray-200 p-3 rounded-xl">
          <h1 className="text-3xl font-bold">My Cards: {name}</h1>
          <div className="flex flex-row">
            <div className="bg-gray-300 rounded-3xl m-2 p-3 text-blue-500 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clipRule="evenodd"
                />
              </svg>
              {note}
            </div>
          </div>
          <section>
            <button
              className="bg-green-700 rounded-3xl text-white p-3"
              onClick={handleClickActive}
            >
              Active
            </button>
            <button
              className="bg-green-700 rounded-3xl text-white p-3 ml-3"
              onClick={handleClicknonActive}
            >
              Non-Active
            </button>


            <hr className="m-3" />
              <section className="cards bg-gray-200 rounded-xl">{cardItems}</section>
            <hr />

            
          </section>
        </section>
        
      </main>
    </>
  );
}
