import PropTypes from 'prop-types'

//Props
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{backgroundColor: color }}
      className='btn'>{text}</button>
  )
}

Button.defaultProps = {
  color: '#24a0ed',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
