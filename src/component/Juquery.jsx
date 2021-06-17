import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import '../css/Juquery.css';
const Juquery=()=>{
    return(
        <div className='juquery'>
            <Navbar/>
            <div className='juquery__content'>
                {/* <Sidebar/> */}
                <Feed/>
                {/* <Widget/> */}
            </div>
        </div>
    );
};
export default Juquery;