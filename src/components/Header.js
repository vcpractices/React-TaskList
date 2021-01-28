import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// props
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  //Events
 // const onClick = () => {
   // console.log('click')
 // }

// text={} cambiar el texto a una forma dinamica

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? '#bb2124' : '#24a0ed'}
          text={showAdd ? 'Cerrar' : 'Agregar'}
          onClick={onAdd}
        />
      )}
    </header>
   )
}

Header.defaultProps = {
  title: 'Rasteador de Tareas',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in JS
const headStyle = {
  color: 'black',
  backgroundColor: '#fff',
}

export default Header
