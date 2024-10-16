import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div style={{
            height: "200px",
            width: "400px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            borderRadius: "15px",
            backgroundColor: "#FFCCCC",
            textAlign: "center",
            padding: "40px"
        }}>
            <h2 style={{ color: "#D8000C" }}>Error!</h2>
            <p>Something went wrong. Please check your input and try again.</p>
            <Link to="/"><button style={{ padding: "10px 20px", borderRadius: "10px", backgroundColor: "#17153B", color: "white" }}>Go Back</button></Link>
        </div>
    );
}
