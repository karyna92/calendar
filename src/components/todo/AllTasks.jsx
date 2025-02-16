import { useContext } from "react";
import { RiDeleteBackLine } from "react-icons/ri";
import { AddTaskModule } from "../../contexts/index";
import todo from "./todo.module.scss";

export default function AllTasks() {
  const { tasks, setTasks, setShowAllTasks } = useContext(AddTaskModule);

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <section className={`${todo.tasksContainer} ${todo.taskListItems}`}>
      <div className={todo.header}>
        <button
          onClick={() => {
            setShowAllTasks(false);
          }}
        >
          &lt; back
        </button>
        <h2>Tasks</h2>
      </div>
      <ul>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${todo.taskItem} ${task.checked ? todo.completed : ""}`}
          >
            <div className={todo.time}>
              <p> {task.dueDate}</p>
              <p> {task.dueTime}</p>
            </div>
            <div className={todo.text}>
              <h4>{task.title}</h4>
              <p>{task.notesMessage}</p>
            </div>
            <div className={todo.status}>
              <button
                onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
              >
                {" "}
                <RiDeleteBackLine />
              </button>
              <label className={todo.customCheckbox}>
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <span></span>
              </label>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}
