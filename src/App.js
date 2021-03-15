import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Panel from "./Panel";

function App() {

    const statuses = ['todo', 'progress', 'review', 'done']

    const tasks = [
        {
            name: 'Task 1',
            status: statuses[0],
            priority: 2
        },
        {
            name: 'Task 2',
            status: statuses[1],
            priority: 2
        },
        {
            name: 'Task 3',
            status: statuses[2],
            priority: 2
        },
        {
            name: 'Task 4',
            status: statuses[3],
            priority: 2
        }
    ]
    return (
        <div className="Container">
            <h1>Kanban</h1>
            <hr/>

            <div className="row align-items-start">
                {statuses.map(status => <div key={status} className="col">
                    <Panel status={status} tasks={tasks}/>
                </div>)}
            </div>
        </div>
    );
}

export default App;
