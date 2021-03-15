

function Task(props) {

      return (

    <div className="card" >
        <div className="card-body">
            <h5 className="card-title">{props.task.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some action</p>

            {props.task.status !== 'todo' &&
            <button
                type="button"
                className="btn btn-link"
                onClick={() => props.left(props.task.id)}
            >Left</button>}
            {props.task.status !== 'done' &&
                <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => props.right(props.task.id)}
                >Right</button>}
        </div>
    </div>
  );
}

export default Task;
