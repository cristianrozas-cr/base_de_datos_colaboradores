import Table from 'react-bootstrap/Table';
import { BaseColaboradores } from '../assets/BaseColaboradores';
import { useState } from 'react';


function Listado(){
    const [colaborador, setColaborador] = useState(BaseColaboradores)
    return(
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
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
        </>
    )
}

export default Listado;