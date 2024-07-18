import { useState } from "react";
import { cards } from "./data";

function IsMember ( { act } : {act: boolean}) {
    if (act)
        return <span >✅ Hi, VIP Member</span>
    else 
        return <span>❌ Member Only!</span>
}



function Profiles({id, nam, bio, bgp, imgu, usrn, cdat, act,} : {id:number, nam:string, bio:any, bgp:string, imgu:string, usrn:string, cdat:string, act:boolean}) 
{
  return (

    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4 shadow-md rounded-lg overflow-hidden">
      <div
        className="m-6 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${bgp})`, color: "blue" }}
        title="fook"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            {/* <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>  */}
            <IsMember 
               act={act}
            />
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p className="text-gray-700 text-base">
              {bio}
          </p>
        </div>
        <div className="flex items-center">
          <img
              className="w-12 h-12 rounded-full mr-4"
              src={imgu}
              alt={nam}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{usrn}</p>
            <p className="text-gray-600">{cdat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyCards() {
  const [active, setActive] = useState(true);


  const name = "Krisanon Neamsud";
  const note = "#Web Programming #Softwareengineering";
  const chk = true;

  const items = cards.filter(cardItem =>
    cardItem.active === active


  ) ;

  const cardItems = items.map(cardItem => 
    <Profiles 
      id={cardItem.id} 
      nam={cardItem.name}
      bio={cardItem.bio}
      bgp={cardItem.bgProd}
      imgu={cardItem.userIcon}
      usrn={cardItem.userName}
      cdat={cardItem.createdAt}
      act={cardItem.active}

      />
    // <>
    //    {cardItem.userName}<br />
    //    {cardItem.bio}<br />
    //    <img src={cardItem.bgProd} alt="" width="20" height="20" />
    // </>
  );

  return (
    <div className="m-3	bg-indigo-500 p-10 font-semibold">
      <center>
      <div className="flex flex-row">
      <h1 className="basis-1/2 m-3 text-2xl bg-lime-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block">
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
        </svg>
        My Cards : {name}
      </h1>
        <h1 className="basis-1/2 m-3 text-2xl	bg-lime-500"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        MISSYOU </h1>
      </div>
      </center>
      <center>
      <div>{note}</div>
      </center>

      <hr />
      {/* <center><Profiles /></center> */}

      {cardItems}
      <button className="w-1/2 px-6 py-3 mt-8 rounded-lg text-white font-semibold bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-300" onClick={handleClickActive}> Active</button>
      <button className="w-1/2 px-6 py-3 mt-8 rounded-lg text-white font-semibold bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300" onClick={handleClickNonActive}> Non Active</button>

    </div>
    
    
  );
  function handleClickActive (){
    setActive(true);
    alert("Active   "+ active);
    
  }
  
  function handleClickNonActive (){
    setActive(false);
    alert("NonActiv   "+ active);
  }
}
