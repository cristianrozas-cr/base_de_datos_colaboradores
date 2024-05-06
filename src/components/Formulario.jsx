import { useState } from "react";
import { BaseColaboradores } from "../assets/BaseColaboradores";
import Table from 'react-bootstrap/Table';
import Alert from "./Alert"
import Button from 'react-bootstrap/Button';

function Formulario(){
    //Estados para cada elemento del objeto
    const [colaborador, setColaborador] = useState(BaseColaboradores)
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [edad, setEdad] = useState ("")
    const [cargo, setCargo] = useState ("")
    const [telefono, setTelefono] = useState ("")
    const [alert, setAlert] = useState ("")
  
  //Función para agregar un nuevo usuario a la lista (onSubmit)
    function agregarUsuario(e){
      e.preventDefault()
      const ultimoId = colaborador[colaborador.length - 1].id
      const nuevoUsuario = {id: ultimoId+1, nombre: nombre, correo: correo, edad: edad, cargo: cargo, telefono: telefono}
      if (nombre === "" || correo === "" || edad === "" || cargo === "" || telefono === ""){
        return setAlert("Debes completar todos los campos")
      }
      setColaborador([...colaborador, nuevoUsuario])
      setAlert("Usuario agregado con éxito")
      setNombre("")
      setCorreo("")
      console.log(colaborador)
    }
    return(
        <>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Teléfono</th>
                    <th>Teléfono</th>
                </tr>
             </thead>
            <tbody>
                {colaborador.map((elemento) => 
                <tr style={{border: "2px solid black"}}>
                    <td>{elemento.nombre}</td>
                    <td>{elemento.correo}</td>
                    <td>{elemento.edad}</td>
                    <td>{elemento.cargo}</td>
                    <td>{elemento.telefono}</td>
                </tr>)}
            </tbody>
        </Table>

        <form className="formulario" onSubmit={agregarUsuario}>
                <input className="entrada" type="text" placeholder="Ingrese el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <input className="entrada" type="email" placeholder="Ingrese el correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                <input className="entrada" type="text" placeholder="Ingrese la edad" value={edad} onChange={(e) => setEdad(e.target.value)}/>
                <input className="entrada" type="text" placeholder="Ingrese el cargo" value={cargo} onChange={(e) => setCargo(e.target.value)}/>
                <input className="entrada" type="text" placeholder="Ingrese el telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                <Button type="submit">Agregar Colaborador</Button>
                {<h5>{alert}</h5>}
        </form>
            <Alert alerta="" color="{}"/>
        </>
    )
}

export default Formulario;