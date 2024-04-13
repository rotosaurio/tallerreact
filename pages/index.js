import React  from "react"
import Boton from "@/components/boton"
import Contador from "@/components/contador";
import Clima from "@/components/clima";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-black text-white	">
    <div className="text-center ">
      <h1 className="text-4xl text-white	">Ola</h1>
     <Contador></Contador>
      <Boton></Boton>
      <Clima></Clima>
    <br></br>
    </div>
  </main>
  )
}
