import React,{useState} from "react"
function Card({cart,setCart,vaalue}){
    let[toggle,setToogle]=useState(true);
    return<>
<div className="col mb-5">
        <div className="card h-100">
      
    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{vaalue.valu}</div>
   
    <img className="card-img-top" src={vaalue.img} alt="..." />
   
    <div className="card-body p-4">
        <div className="text-center">
   
            <h5 className="fw-bolder">{vaalue.name}</h5>
   
            {/* <span className="text-muted text-decoration-line-through">$50.00</span> */}
            ${vaalue.rate}
        </div>
    </div>
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
            {toggle?<button className="btn btn-outline-dark mt-auto" 
            onClick={()=>{setCart(cart+1);setToogle(!toggle)}} >Add to cart</button>:
            <button className="btn btn-outline-dark mt-auto"
            onClick={()=>{setCart(cart-1);setToogle(!toggle)}} >Remove form cart</button>}
        </div>
            </div>
         </div>
    </div>
                   
                   
    </>
}
export default Card