import { useState } from 'react'
import './App.css'

function App() {

  const [sayi,setSayi] = useState(0)
  const [isim,setIsım] = useState("")
  const [not1,setNot1] = useState(70)
  const [not2,setNot2] = useState(80)
  const [final,setFinal] = useState(55)
  const [sonuc,setSonuc] = useState()
  const [sayac,setSayac] = useState(24)

  const ortalama =() =>{
    setSonuc ((not1 + not2 + final) /3) 
  }

  const Arttir =() =>{
    setSayi(sayi + 1)
  }

  const isimYazdır =()=>{
    setIsım ("Merhaba Ben Ege Aydın")
  }
  const Eksilt =() =>{
    setSayac(sayac - 1)
  }
  return (
    <>
      
      <button onClick={Arttir}>Artır {sayi}</button>
      <p>{isim}</p>
      <button onClick={isimYazdır}>Mesaj Yazdır</button>

      <p>{sonuc}</p>
      <button onClick={ortalama}>Not Yazdır</button>

      <button onClick={Eksilt}> Eksilt {sayac}</button>
    </>
  )
}

export default App
