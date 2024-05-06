import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Formulario({onSubmit, setAlert}){

    const [colab, setColab] = useState({ nombre: "", correo: "", edad: "", cargo: "", telefono: ""})
    
  
    const handleChange = (event) => {
        setColab({ ...colab, [event.target.name]: event.target.value })
      }
    
      //Funcion para enviar el formulario
    
      const handleSubmit = (event) => {
        event.preventDefault()
        if (
          colab.nombre === "" || colab.correo === "" || colab.edad === "" || colab.cargo === "" || colab.telefono === "") {
          setAlert({
            error: true,
            mensaje: "Debes completar todos los campos",
            color: "warning",
          })
        return
        }
    
        onSubmit(colab)
        // Reinicia el formulario y muestra la alerta de éxito
        setColab({ nombre: "", correo: "", edad: "", cargo: "", telefono: ""})
        setAlert({error: false, mensaje: "Se agregó el colaborador", color: "primary"})
      }

    return(
        <>

        <form className="formulario" onSubmit={handleSubmit}>
                <input className="entrada" type="text" placeholder="Ingrese el nombre" name="nombre" value={colab.nombre} onChange={handleChange}/>
                <input className="entrada" type="email" placeholder="Ingrese el correo" name="correo" value={colab.correo} onChange={handleChange}/>
                <input className="entrada" type="text" placeholder="Ingrese la edad" name="edad" value={colab.edad} onChange={handleChange}/>
                <input className="entrada" type="text" placeholder="Ingrese el cargo" name="cargo" value={colab.cargo} onChange={handleChange}/>
                <input className="entrada" type="text" placeholder="Ingrese el telefono" name="telefono" value={colab.telefono} onChange={handleChange}/>
                <Button type="submit">Agregar Colaborador</Button>
        </form>
       </>
    )
}

export default Formulario;