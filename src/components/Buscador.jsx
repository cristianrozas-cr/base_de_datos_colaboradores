import PropTypes from 'prop-types';

const Buscador = ({search, onChange}) => {
  return (
    <>
     <form className="d-flex text-white" role="search">
        <input
          className="me-2 my-4 w-50 d-flex justify-content-end"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          value={search}
          onChange={onChange}
        />
      </form>
    </>
  )
}
Buscador.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Buscador