import './App.css'
import { useState } from 'react'

function App() {
const [sayi,setSayi] = useState (10)
const [isim,isimSet] = useState ("")

const yazdir = ()=>{
  setSayi(sayi+1)
}
const isimyaz =() => {
  isimSet("Ege Aydın")
}
  return (

    <>
     <button onClick={yazdir}>Sayiyi Arttır {sayi}</button>
      <p>{isim}</p>
      <button onClick={isimyaz}>isimYazdır</button>
    </>
  )
}

export default App
