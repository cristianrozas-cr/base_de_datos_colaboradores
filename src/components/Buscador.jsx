import PropTypes from 'prop-types'

const Buscador = ({search, onChange}) => {
  return (
    <>
     <form className="d-flex justify-content-end" role="search">
        <input type="search" placeholder="Busca un colaborador en la lista" value={search} onChange={onChange} className="me-2 my-4 w-50" />
      </form>

    </>
  )
}
Buscador.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Buscador