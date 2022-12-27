import { useState } from "react";

const TaskForm = (props) => {
    const [task, setTask] = useState('');

    const sendForm = (e) => {
        e.preventDefault();
        props.addTask(task);
        setTask('');
    }


    const inputStyle = {
        margin: '10px',
        padding: '8px',
        fontSize: '24px'
    }

    const submitStyle = {
        margin: '10px',
        padding: '10px 24px',
        backgroundColor: 'blue',
        border: 'none',
        color: 'white',
        borderRadius: '5px',
        fontSize: '24px'
    }

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <form onSubmit={sendForm}>
                <input style={inputStyle} type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <input type="submit" value="Add" style={submitStyle}/>
            </form>
        </div>
    )
}

export default TaskForm