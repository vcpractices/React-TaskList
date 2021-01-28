import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Ingrese una Tarea')
      return
    }
    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Tareas</label>
        <input
          type='text'
          placeholder='Agregar Tarea'
          value={text}
          onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Día y Hora</label>
        <input
          type='text'
          placeholder='Agregar Día y la Hora'
          value={day}
          onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Marcar Recordatorio</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' value='Guardar Tarea' className='btn btn-block' />
    </form>
  )
}
 export default AddTask

