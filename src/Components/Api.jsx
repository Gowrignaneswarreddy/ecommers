import React, { useState, useEffect } from "react";
function Api() {
  const [api, setApi] = useState({ products: [] });  
  const [search, setSearch] = useState("");  //search
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")

      .then((res) => res.json())
      .then((val) => {
        setApi({ products: val });
      })  
  },[]);
  const valueSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "90px",justifyContent:"space-around",marginTop:"300px"}}>    
        <div id="back"></div>
        <h1 style={{position:"relative",top:"-350px",color:"#17153B",left:"40px",backgroundColor:"#E5D9F2"}}>Welcome to my shopping🛒🛒</h1>
      <input type="text" onChange={valueSearch} placeholder="Search Products"style={{width:"280px",height:"30px",borderRadius:"10px",position:"absolute",left:"70px",top:"20px",padding:"10px"}}/>
      <div style={{ display:"flex",flexWrap:"wrap"}}>
      {api.products
        .filter((x) => x.title.toLowerCase().includes(search))
        .map((x) => (
         <>
          <div key={x.id} style={{height:"300px",width:"300px",marginLeft:"150px",marginBottom:"100px",position:"relative",bottom:"350px"}}>
          <h3 style={{marginTop:"10px",color:"#17153B"}}>{x.title}</h3>
          <img src={x.image} alt="" style={{height:"250px",width:"250px",marginTop:"10px",boxShadow:" rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}/>
          <h3 style={{position:"relative",bottom:"-15px"}}>${x.price}</h3>
          <button style={{marginTop:"10px",marginBottom:"120px",position:"relative",left:"150px",bottom:"25px",height:"30px",width:"100px",backgroundColor:"#8967B3",color:"whitesmoke",borderRadius:"15px",border:"none"}}>Add to Cart</button>
          </div>
         </>
        )
        )}
       <footer style={{width:"100%"}}>
  <div className="footer-container">
    <div className="footer-section">
      <h4>Customer Service</h4>
      <a href="/help">Help & FAQs</a>
      <a href="/returns">Returns</a>
      <a href="/shipping-info">Shipping Info</a>
    </div>
    <div className="footer-section">
      <h4>Company Info</h4>
      <a href="/about-us">About Us</a>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-of-service">Terms of Service</a>
    </div>
    <div className="footer-section">
      <h4>Follow Us</h4>
      <a href="https://www.facebook.com">Facebook</a>
      <a href="https://www.instagram.com">Instagram</a>
    </div>
  </div>
  <p>&copy; 2024 Ecommerce Inc. All rights reserved.</p>
</footer>

      </div>
    </div>
  );
}
export default Api;

