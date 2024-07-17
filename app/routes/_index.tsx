import type { MetaFunction } from "@remix-run/node";
import MyCards from "./MyCards";

export const meta: MetaFunction = () => {
  return [
    { title: "Teerawat" },
    { name: "description", content: "Welcome to Remix!" },

  ];
};

export default function Index() {
  return (
    <MyCards />
    // <div className="font-sans p-4">
    //   <h1 className="text-3xl">Welcome to Remix</h1>
    //   <ul className="list-disc mt-4 pl-6 space-y-2">
    //     <li>
    //       <a
    //         className="text-blue-700 underline visited:text-purple-900"
    //         target="_blank"
    //         href="https://remix.run/start/quickstart"
    //         rel="noreferrer"
    //       >
    //         5m Quick Start
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="text-blue-700 underline visited:text-purple-900"
    //         target="_blank"
    //         href="https://remix.run/start/tutorial"
    //         rel="noreferrer"
    //       >
    //         30m Tutorial
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="text-blue-700 underline visited:text-purple-900"
    //         target="_blank"
    //         href="https://remix.run/docs"
    //         rel="noreferrer"
    //       >
    //         Remix Docs
    //       </a>
    //     </li>
    //   </ul>
    //   <hr />
    //   <hr className="m-4"/>
    //   <h1 className="text-3xl">Welcome to Teerawat</h1>
    //   <ul className="list-disc mt-4 pl-6 space-y-2">
    //     <li> Hello My teerawat </li>
    //     <li> Class IT </li>
    //     <li> Email: <a href="malto:teerawat.bar@rmutto.ac.th"> Contact me </a></li>
    //     <li><img src="photos\5.png" width="500" height="600"></img></li>
    //    </ul>
    // </div>
    
  );
}
