import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card.jsx"
import"./App.css"
let vaalue=[{
  valu:"value",
  name:"Iphone 13",
  rate:"599",
  img:"https://th.bing.com/th?id=OIP.lW7hosughZhqtPp5_Quy3QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
},
{
  valu:"",
  name:"Iphone 13 pro",
  rate:"619",
  img:"https://th.bing.com/th?id=OIP.dVs8z0kGsB_seIbu07HJsAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
},
{
  valu:"value",
  name:"Iphone 14",
  rate:"799",
  img:"https://th.bing.com/th?id=OIP.DSfTIt2Kz96xHPCteB6mCQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
},
{
  valu:"value",
  name:"Iphone 14 pro",
  rate:"999",
  img:"https://th.bing.com/th?id=OIP.RMgSZevhD7HOhlr8MP_9KwHaHd&w=249&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
},
{
  valu:"",
  name:"Iphone 15 ",
  rate:"799",
  img:"https://th.bing.com/th?id=OIP.DSfTIt2Kz96xHPCteB6mCQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
},
{
  valu:"value",
  name:"Iphone 15 pro",
  rate:"1,199",
  img:"https://th.bing.com/th?id=OIP.lW7hosughZhqtPp5_Quy3QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
},
{
  valu:"value",
  name:"Iphone 12 pro",
  rate:"319",
  img:"https://th.bing.com/th/id/OIP.xLbmtT-dw4pB5PCskwE92gHaHa?pid=ImgDet&w=182&h=182&c=7"
},
{
  valu:"",
  name:"Iphone 11 pro",
  rate:"320",
  img:"https://th.bing.com/th/id/OIP.hHJz4SN3DbPPL8kA_NB4zgHaHa?pid=ImgDet&w=182&h=182&c=7"
}
]


function App(){
  let[cart,setCart] = useState(0)
  return<>
  <Navbar cart={cart} setCart={setCart}/>
  <section className="py-5">
   <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    { vaalue.map((e,i)=>{return <Card cart={cart} setCart={setCart} vaalue={e} key={i}/> })
}


   

   </div> 
   </div>
    </section>
  </>
}
export default App