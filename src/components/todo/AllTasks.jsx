import { useContext } from "react";
import { AddTaskModule } from "../../contexts/index";
import todo from "./todo.module.scss";

export default function AllTasks() {
  const { tasks, setShowAllTasks } = useContext(AddTaskModule);
  return (
    <section className={`${todo.tasksContainer} ${todo.taskListItems}`}>
      <div className={todo.header}>
        <button onClick={()=>{setShowAllTasks(false)}}>&lt; back</button>
        <h2>Tasks</h2>
      </div>
      <ul>
      {tasks.map((task) => (
        <div key={task.id} className={todo.taskItem}>
            <div className={todo.time}>
                <p> {task.dueDate}</p>
                <p> {task.dueTime}</p>
            </div>
            <div className={todo.text}>
            <h4>{task.title}</h4>
            <p>{task.notesMessage}</p>
            </div>
        </div>
      ))}
      </ul>
    </section>
  );
}
