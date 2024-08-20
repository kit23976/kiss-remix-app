import { useParams } from "@remix-run/react";
import AppMenu from "./Template/menu";


export default function Getcard () {
    const myParams = useParams();

    return(
        <>
        df: {myParams.cardId}
        </>
      
    );

}
