import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
   return (
    <>
      {tasks.map((task, index) => (
        <Task key={index}
              task={task}
              onDelete={onDelete}     //pasando la tarea como una Props
              onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks
