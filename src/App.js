import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Panel from "./Panel";
import {useState} from "react";

const statuses = [ 'backlogs', 'todo', 'progress', 'review', 'done']

const initialTasks = [

];

function App() {

    const [tasks, setTasks] = useState(initialTasks);
    const [inputValue, setInputValue] = useState('');

    const nextStatus = (currentStatus) => {
        return statuses[statuses.indexOf(currentStatus) + 1]
    }
    const prevStatus = (currentStatus) => {
        return statuses[statuses.indexOf(currentStatus) - 1]
    }

    const left = (taskId) => {
        const updateTask = tasks.map(el => el.id === taskId ? {...el, status: prevStatus(el.status)} : el);
        setTasks(updateTask)
    }
    const right = (taskId) => {
        const updateTask = tasks.map(el => el.id === taskId ? {...el, status: nextStatus(el.status)} : el);
        setTasks(updateTask)
    }
    const addTask = () => {
        const newTask =
            {id: Math.random(), name: inputValue, status: statuses[0], priority: 2}

        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        setInputValue('')
    };

    const inputChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <div className="Container">
            <h1>Kanban</h1>
            <hr/>
            <input type="text" onChange={inputChange} value={inputValue}/>{' '}
            <button type="button" className="btn btn-primary" onClick={addTask}>Add New Task</button>
            <div className="container">
                <div className='row'>
                {statuses.map(status => <div key={status} className="col">
                    <Panel status={status}
                           tasks={tasks}
                           left={left}
                           right={right}/>
                </div>)}
                </div>
            </div>
        </div>
    );
}

export default App;
