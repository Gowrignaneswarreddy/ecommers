import React,{Component} from "react";
import { Link } from "react-router-dom";
export default function EcomNav(){
    return(
        <>
        <h1 style={{position:"absolute",top:"20px",left:"620px",width:"400px",height:"50px",color:"#17153B",fontStyle:"italic",fontSize:"40px"}}>ECommerce Website</h1>
         <Link to="/reg"><button id="btn1" style={{color:"whitesmoke",backgroundColor:"#433878",border:"none",borderRadius:"15px"}}>Register</button></Link>
         <Link to="/log"><button id="btn2" style={{color:"whitesmoke",backgroundColor:"#433878",border:"none",borderRadius:"15px"}}>Login</button></Link>
        </>
    )
}