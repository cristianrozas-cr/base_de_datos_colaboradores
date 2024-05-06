import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

function Listado({ baseColaboradores, eliminarColab }){
    return(
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                </tr>
             </thead>
            <tbody>
                {baseColaboradores.map((elemento) => 
                <tr key={elemento.id}>
                    <td>{elemento.nombre}</td>
                    <td>{elemento.correo}</td>
                    <td>{elemento.edad}</td>
                    <td>{elemento.cargo}</td>
                    <td>{elemento.telefono}</td>
                    <td><span onClick={() => eliminarColab(elemento)}>Eliminar</span></td>
                </tr>)}
            </tbody>
        </Table>
        </>
    )
}

Listado.propTypes = {
	baseColaboradores: PropTypes.array.isRequired,
	eliminarColaborador: PropTypes.func.isRequired,
};

export default Listado;