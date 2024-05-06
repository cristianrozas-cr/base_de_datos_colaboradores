import { BaseColaboradores } from "./assets/BaseColaboradores"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import './App.css'

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ error: "", mensaje: "", color: "" });
  const [idCounter, setIdCounter] = useState(BaseColaboradores.length+1);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const eliminarColab = (colaborador) => {
    const listaFiltrada = baseColaboradores.filter(elemento => elemento.id !== colaborador.id);
    setBaseColaboradores(listaFiltrada);
  };
  const handleSubmit = (agregarColaborador) => {
    const colaboradorConId = {...agregarColaborador, id: idCounter};
    setBaseColaboradores([...baseColaboradores, colaboradorConId]);
    setIdCounter(idCounter + 1);
  };
  const filtrarColab = baseColaboradores.filter((colab) => {
    if (
      colab.nombre.includes(search) || colab.correo.includes(search) || colab.edad.includes(search) || colab.cargo.includes(search) || colab.telefono.includes(search)
    ) {
      return true;
    }
    return false;
  });
  
  return (

    <>
    <h1>Colaboradores</h1>
    <div className="container">
      <div>
        <Buscador onChange={handleChange} search={search}/>
        <Listado baseColaboradores={filtrarColab} eliminarColab={eliminarColab}/>
      </div>
      <div className="form-container">
        <Formulario setAlert={setAlert} onSubmit={handleSubmit} />
        {alert.mensaje && <Alert color={alert.color}>{alert.mensaje}</Alert>}
      </div>  
    </div>
    
   </>
  )
}

export default App
