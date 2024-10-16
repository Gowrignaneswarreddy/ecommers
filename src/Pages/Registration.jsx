import React from "react";
import { Link } from "react-router-dom";
export default function Registration(){
    const regValid=()=>{
        let ele=document.getElementById("name")
        let ele1=document.getElementById("email")
        let ele2=document.getElementById("pass")
        window.localStorage.setItem("name",ele.value)
        window.localStorage.setItem("email",ele1.value)
        window.localStorage.setItem("password",ele2.value)
    }
    return(
        <>
        <div style={{height:"100px",width:"300px",position:"absolute",left:"350px",padding:"200px",top:"100px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",borderRadius:"90px",backgroundColor:"#E4B1F0"}}>
       <h1 style={{marginBottom:"5px",position:"absolute",top:"70px",left:"220px",color:"#17153B"}}>Registration Page!</h1>

        <label htmlFor="" >UserName</label>
        <input type="text" style={{marginLeft:"40px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}} id="name"/>
        <label htmlFor="">Email</label>
        <input type="text" style={{marginLeft:"69px",padding:"10px",marginBottom:"10px",borderRadius:"15px"}} id="email"/>
        <label htmlFor="" style={{position:"relative",bottom:"-15px"}}>Password</label>
        <input type="text" style={{marginLeft:"109px",padding:"10px",marginBottom:"10px",borderRadius:"15px",position:"relative",bottom:"15px"}} id="pass"/>
       <Link to="/log"> <button onChange={regValid} style={{marginLeft:"150px",width:"100px",height:"40px",color:"white",borderRadius:"21px",marginTop:"20px",backgroundColor:"#17153B"}}>Register</button></Link>  
       <Link to="/"><button id='bt'>Cancel</button></Link>
       </div>  
    </>
    )
}