import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios' // axios u import etme

function App() {
  const [users, setUsers] = useState([])
  const [product , setProduct] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      if(response.status == 200){
        setUsers(response.data)
       
      }
    })
    .catch((e)=>{
     console.log(e) 
    })
  },[])

useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
  .then((response)=>{
    if(response.status ==200){
      setProduct(response.data)
    }
  })
  .catch ((e)=>{
     console.log(e)
  })
},[])

  return (
   
    <div>
    
      {
        users.map((user,key)=>{
          return(
            <div key={key}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
          )
        })
      }

      {
        product.map((products,key)=>{
          return(
            <div key={key}>
                <div key={key} className='card'>
                <div className="Image">
                  <img src={products.image} alt={products.title} width={200}/>
 
               </div>
        <div className="baslik">
            <h2>{products.title}</h2>
        </div>
        <div className="article">
            <p>{products.category}</p>
        </div>
        <div className="price">
            <p>{products.price}$</p>
        </div>
        <div className="btn">
            <form action="">
                <button type="submit">Satın Al</button>
            </form>
        </div>
       
            </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default App
