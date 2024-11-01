import './App.css'
import axios  from 'axios'
import {useEffect,useState}
function App() {
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response))
  })

  return (
    
    <>
      
    </>
  )
}

export default App
