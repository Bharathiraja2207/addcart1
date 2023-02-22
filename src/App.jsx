import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

 
export default function App() {
  

  const[show,setshow]=useState(true)

  const[cart,setcart]=useState([]);


  return (
   
    <div className="App">
      <Navbar size={cart.length} setshow={setshow}/>
      {show ? <Amazon  cart={cart}  setcart={setcart} /> : <Cart cart={cart}  setcart={setcart}/>}
     
    </div>
   
  )
}


  

function Navbar({setshow,size}) {
  return (
    <div className='addtocart'>
      <div className='addchild1'>
        <div className='start'>
          <h3>start bootstrab</h3>
        </div>
        <div className='home'>
          <button onClick={()=>setshow(true)}>home</button>
          <button>about</button>
          <button>shop</button>
        </div>
      <div className='cart'>
        <button  onClick={()=>setshow(false)}>cart{size}</button>
        
      </div>
      </div>
      <div className="addchild2">
        <div><h1>shop in style</h1>
        <h3>with this shop homepage template</h3>
        </div>
      </div>
    </div>

  );
}

function Amazon({handleclick,cart,setcart}){
  const list=[{
    id:1 ,
    productname:"fancy product",
    cost:"$60.00"
},
{
  id:2 ,
  productname:"special item",
  cost:"$18.00",
  rating:"⭐⭐⭐⭐⭐"
},
{
  id:3 ,
  productname:"sale item",
  cost:"$25.00"
},
{ id:4 ,
  productname:"popular item",
  cost:"$40.00",
  rating:"⭐⭐⭐⭐⭐"
},
{ id:5 ,
  productname:"sale item",
  cost:"$25.00"
},
{ id:6 ,
  productname:"fancy product",
  cost:"$120.00-$280.00"
},
{ id:7 ,
  productname:"special item",
  cost:"$18.00",
  rating:"⭐⭐⭐⭐⭐"
},
{ id:8 ,
  productname:"popular item",
  cost:"$40.00",
  rating:"⭐⭐⭐⭐⭐"
}];

return(
  <section><div className='maincontent'>
    {list.map((item)=><Cards key={item.id} item={item}  cart={cart}  setcart={setcart}/>)}
    </div>
  </section>
)
}


function Cards({item,cart,setcart}){
  let [disable, setDisable] = useState(false);
  
const  handleclick=(item)=>{
  // let ispresent =false;
  cart.forEach((product)=>
   item.id === product.id
  //  ispresent =true;
 
  // setDisable(true);
  ) 
  // if(ispresent)
 setcart([...cart,item]);
  setDisable(true);
  // return;
  // setcart([...cart,item]);
  
   
 
 }
 
  
  const click=()=>handleclick(item)
 
  return(
   
    <div className="mincontent">
      <div className='align'>
      <img className="img" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
      
      <div className="productcontent">
          <h3>{item. productname}</h3>
          <lable>{item.rating}</lable>
          <p>{item.cost}</p>
          <br/>
          <div className='abut'>
          <button disabled={disable} onClick={click}>addcart</button>
          </div>
      </div>
      </div>
      
    </div>
    
  )
}     
function Cart({cart,setcart}){

  const handleRemove=(id)=>{
    const arr=cart.filter((item)=>item.id !== id);
    setcart(arr);
  setDisable(false)
  }
  return(
    <article className="maincontent">
      {cart?.map((item)=>( <div >
       <div   key={item.id}>
       <div  className="mincontent">
<img className='img' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
<div className="productcontent">
<p>{item. productname}</p>
      
        <button  onClick={()=>handleRemove(item.id)}>remove</button>
        
       </div>
       </div>
    </div> 
    </div>
    
    ) )}
   
    </article>
  )
}