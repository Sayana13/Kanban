

function Task(props) {

      return (
      <div className=''>
        <strong>{props.task.name}</strong> {' '}
          {props.task.status}
      </div>
  );
}

export default Task;
