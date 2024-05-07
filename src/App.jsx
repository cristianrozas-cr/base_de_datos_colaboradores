import { BaseColaboradores } from "./assets/BaseColaboradores"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ error: "", mensaje: "", color: "" });
  const [contador, setContador] = useState(BaseColaboradores.length+1);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const eliminarColab = (colaborador) => {
    const listaFiltrada = baseColaboradores.filter(elemento => elemento.id !== colaborador.id);
    setBaseColaboradores(listaFiltrada);
  };
  const handleSubmit = (agregarColaborador) => {
    const nuevoId = {...agregarColaborador, id: contador};
    setBaseColaboradores([...baseColaboradores, nuevoId]);
    setContador(contador + 1);
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
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className="me-auto"><strong>Colaboradores</strong></Navbar.Brand>
        </Container>
      </Navbar>
    <div className="container-main">
      <div className="titulo">
        <h1></h1>
      </div>
      <div className="container">
        <div className="lista-container">
          <Buscador onChange={handleChange} search={search}/>
          <Listado baseColaboradores={filtrarColab} eliminarColab={eliminarColab}/>
        </div>
        <div className="form-container">
          <Formulario setAlert={setAlert} onSubmit={handleSubmit} />
          {alert.mensaje && <Alert color={alert.color}>{alert.mensaje}</Alert>}
        </div>  
      </div>
    </div>
    
   </>
  )
}

export default App
