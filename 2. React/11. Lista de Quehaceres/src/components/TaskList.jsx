import "./TaskList.css"

const TaskList = (props) => {
    return (
        <>
            {
                props.toDoList.map((task, index) => {
                    return (
                        <li key={task.id}>
                            <span>
                                {task.done? <del>{task.task}</del> : task.task}
                            </span>
                            <input type="checkbox" defaultChecked={task.done} onChange={(e) => props.setCheck(e, index)} />
                            <button onClick={() => props.deleteTask(index)}>Eliminar</button>
                        </li>
                    )

                })
            }
        </>
    )
}

export default TaskList