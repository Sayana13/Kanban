import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Panel from "./Panel";
import {useState} from "react";

const statuses = ['todo', 'progress', 'review', 'done']

const initialTasks = [
    {
        id: 1,
        name: 'Task 1',
        status: statuses[0],
        priority: 2
    },
    {
        id: 2,
        name: 'Task 2',
        status: statuses[1],
        priority: 2
    },
    {
        id: 3,
        name: 'Task 3',
        status: statuses[2],
        priority: 2
    },
    {
        id: 4,
        name: 'Task 4',
        status: statuses[3],
        priority: 2
    }
]

function App() {

    const [tasks, setTasks] = useState(initialTasks)

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

    return (
        <div className="Container">
            <h1>Kanban</h1>
            <hr/>

            <div className="row align-items-start">
                {statuses.map(status => <div key={status} className="col">
                    <Panel status={status}
                           tasks={tasks}
                           left={left}
                           right={right}/>
                </div>)}
            </div>
        </div>
    );
}

export default App;
