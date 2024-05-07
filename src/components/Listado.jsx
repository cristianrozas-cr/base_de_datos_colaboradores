import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

function Listado({ baseColaboradores, eliminarColab }){
    return(
        <>
        <h4>Lista de colaboradores</h4>
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
                    <td><span className='borrar' onClick={() => eliminarColab(elemento)}>Borrar</span></td>

                </tr>)}
            </tbody>
        </Table>
        </>
    )
}

Listado.propTypes = {
	baseColaboradores: PropTypes.array,
	eliminarColaborador: PropTypes.func,
};

export default Listado;