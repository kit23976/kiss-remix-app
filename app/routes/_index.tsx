import type { MetaFunction } from "@remix-run/node";
import MyCards from "./card.MyCards.js";
import AppMenu from './Template/menu.js'; 
import CreateCard from './CreateCard.js';

export const meta: MetaFunction = () => {
  return [
    { title: "Krisanon" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function EProject() {
  return (
    <>
      {/* <AppMenu /> */}
      <main>
        <MyCards />
      </main>
    </>
  );
}
