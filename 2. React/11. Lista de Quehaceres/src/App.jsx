import { useState } from 'react';
import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [toDoList, setToDoList] = useState([]);
    const [id, setID] = useState(1);

    const addTask = (task) => {
        let aux = { task: task, done: false, id: id}
        setID(id + 1);
        setToDoList([...toDoList, aux]);
    }

    const setCheck = (e, index) => {
        toDoList[index].done = e.target.checked;
        setToDoList([...toDoList])
    }

    const deleteTask = (index) => {
        let aux = toDoList.filter((item, i) => index !== i);
        setToDoList([...aux]);
    }

    return (
        <>
            <TaskForm addTask={addTask} />
            <ul>
                <TaskList toDoList={toDoList} setCheck={setCheck} deleteTask={deleteTask} />
            </ul>
        </>

    );
}
export default App;
