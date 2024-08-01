import {  useState } from "react";

let nextId =0;

export default function CreateCard () {
     const [name,setName] = useState('');
     const [note,setNote] = useState('');
     const [cards,setCards] = useState([]);
      
     const handleClickAdd = (na:string, no:string) => {
        setCards([
            ...cards,
            {
                id: nextId++,
                name: na,
                note: no,
                
            }
        ]);
     }
       
     return (
        <div>
            <h1>เพิ่มข้อมูลนามบัคร</h1>
            <label>ชื่อ-สกุล</label><br />
            <input
                name="cName"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />
            <label>ข้อมูลผู้ถือบัตร</label><br />
            <textarea
                name="cNote"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            /><br />
            <button onClick={() => handleClickAdd(name,note)}>
                เพิ่มนามบัตร
            </button>
        <div>
        {
                JSON.stringify(cards,null, 2)
        }
        </div>
    </div>
     );
}