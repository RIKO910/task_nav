import Nav from "./Component/Nav/Nav";
import Sidebar from "./Component/Sidebar/Sidebar";
import React, {useEffect, useState} from "react";

export default function App() {
    const [navName,setNavName] =useState([]);
    useEffect(() => {
        const fatchName = async ()=>{
            const res =await fetch('/nav.json');
            const data =await res.json();
            setNavName(data);
        }
        fatchName();
    }, []);
    console.log(navName);
    return (
        <div>
            <Nav navName={navName}></Nav>
            <Sidebar>
                ..................................
                <br/>
                ..................................
            </Sidebar>
        </div>
    )
}