import { upperFirst } from "lodash";
import Task from "./Task";


function Panel(props) {

    const colorMap = {
        todo: 'border-secondary',
        done: 'border-success',
        progress: 'border-primary',
        review: 'border-warning'
    }

  return (
      <div className=''>
      <h3 className={`border-bottom border-4 ${colorMap[props.status]} pb-2`}>
          {upperFirst(props.status)}</h3>
          {props.tasks.map(task => <Task/>)}
      </div>
  );
}

export default Panel;
