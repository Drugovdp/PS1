import './Tasks.css';

type TasksPropsType = {
    data: {
        title: string,
        tasks: Array<TasksType>,
        students: Array<string>
    }
}

type TasksType = {
    taskId: number,
    title: string,
    isDone: boolean
}

export const Tasks = (props: TasksPropsType) => {
    return (
        <div className="tasks_el">
            <h2>Главная страница</h2>
            <h3>{props.data.title}</h3>
            <ul>
                {props.data.students.map((el, k) => {
                    return (
                        <li className="task_lists">
                            <div className="task_lists-numlist">{k}:</div>
                            <div className="task_lists-namelist">{el}</div>
                            {props.data.tasks.map(e=> {
                               return(
                                   <div className="task_lists--valueChecbox">
                                       <input type="checkbox" checked={e.isDone}/><span>{e.title}</span>
                                   </div>
                               )
                            })}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}