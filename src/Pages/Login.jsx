import React from "react";
import { Link } from "react-router-dom";
export default function Login(){
    const logValid=()=>{
        let log=document.getElementById("email1")
        let log1=document.getElementById("pass1")
        if((log.value)=== window.localStorage.getItem("email") &&(log1.value)=== window.localStorage.setItem("password")){
            window.open("./")
        }
else{
    alert("enter Valid Data")
}
    }
    return(
        <>
         <div style={{height:"100px",width:"300px",position:"absolute",left:"350px",padding:"200px",top:"100px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",borderRadius:"90px",backgroundColor:"#E4B1F0"}}>
        <h1 style={{marginBottom:"5px",position:"absolute",top:"70px",left:"300px",color:"#17153B"}}>Login Page!</h1>

        <label htmlFor="" >Email</label>
        <input type="text"  id="email1" style={{marginLeft:"69px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}}/>
        <label htmlFor="" style={{position:"relative",bottom:"-15px"}}>Password</label>
        <input type="text"  id="pass1" style={{marginLeft:"109px",padding:"10px",marginBottom:"10px",borderRadius:"15px",position:"relative",bottom:"15px"}}/>
       <Link to="/"><button onChange={logValid} style={{marginLeft:"150px",width:"100px",height:"40px",color:"white",borderRadius:"21px",marginTop:"20px",backgroundColor:"#17153B"}}>Login</button></Link>
         <p className="toggle-link" style={{position:"absolute",left:"300px"}}>
        Don't have an account? <Link to="/">Sign Up</Link>
      </p>
        </div>
        </>
    )
}