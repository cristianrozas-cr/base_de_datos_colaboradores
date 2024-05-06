import { BaseColaboradores } from "./assets/BaseColaboradores"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import './App.css'

function App() {
  const [colaborador, setColaborador] = useState(BaseColaboradores)
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [alert, setAlert] = useState ("")

//Función para agregar un nuevo usuario a la lista (onSubmit)
  function agregarUsuario(e){
    e.preventDefault()
    const ultimoId = colaborador[colaborador.length - 1].id
    const nuevoUsuario = {id: ultimoId+1, nombre: nombre, correo: correo}
    if (nombre === "" || correo === ""){
      return setAlert("Debes completar todos los campos")
    }
    setColaborador([...colaborador, nuevoUsuario])
    setAlert("Usuario agregado con éxito")
    setNombre("")
    setCorreo("")
    console.log(colaborador)
  }
  return (

    <>
    <h1>Lista de colaboradores</h1>
    {<h2>{alert}</h2>}
    <form onSubmit={agregarUsuario}>
      <input type="text" placeholder="Ingrese el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      <input type="email" placeholder="Ingrese el correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
      <button type="submit">Agregar</button>
    </form>



    <section style={{display: "flex", gap: "20px"}}>
    {colaborador.map((elemento) => <article style={{border: "2px solid black"}}><h3>{elemento.id}</h3><h3>{elemento.nombre}</h3><h3>{elemento.correo}</h3></article>)}
    </section>

    <hr />
    <hr />
    <hr />
    <h1>Lista de Colaboradores</h1>
    <div className="flex">
    <Formulario />
    </div>
    
   </>
  )
}

export default App
