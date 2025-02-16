import { useEffect, useState, useContext } from "react";
import { AddTaskModule } from "../../contexts/index";
import todo from "./todo.module.scss";
import * as Yup from "yup";

function AddTask() {
  const {
    setShowAddTask,
    title,
    setTitle,
    notesMessage,
    setNotesMessage,
    dueDate,
    setDueDate,
    dueTime,
    setDueTime,
    tasks,
    setTasks,
  } = useContext(AddTaskModule);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const taskSchema = Yup.object().shape({
    title: Yup.string()
      .matches(
        /^[a-zA-Z0-9 _-]{3,50}$/,
        "Must be 3-50 characters, only letters, numbers, spaces, hyphens, or underscores."
      )
      .required("Title is required"),
    notesMessage: Yup.string()
      .matches(
        /^[a-zA-Z0-9 .,!?'"-_]{5,500}$/,
        "Must be 5-500 characters and include only basic punctuation."
      )
      .required("Notes are required"),
  });

  const handleAddTask = () => {
    taskSchema
      .validate({ title, notesMessage, dueDate }, { abortEarly: false })
      .then(() => {
        const newTaskObj = {
          id: Date.now(),
          title,
          notesMessage,
          dueDate,
          dueTime,
        };
        setTasks([...tasks, newTaskObj]);
        setTitle("");
        setNotesMessage("");
        setDueDate("");
        setDueTime("");
        setShowAddTask(false);
        setErrors({});
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
          console.error(error)
        });
        setErrors(validationErrors);
      });
  };

  return (
    <>
      <section className={todo.tasksContainer}>
        <div className={todo.header}>
          <button
            onClick={() => {
              setShowAddTask(false);
            }}
          >
            Cancel
          </button>
          <h2>New</h2>
          <button onClick={handleAddTask}>Add</button>
        </div>
        <form className={todo.content}>
          <label>
            <span>Title</span>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              className={errors.title ? todo.invalid : title ? todo.valid : ""}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
          <label>
            <span>Notes</span>
            <textarea
              name="notes"
              id="notes"
              value={notesMessage}
              rows="4"
              className={
                errors.notesMessage ? todo.invalid : notesMessage ? todo.valid : ""
              }
              onChange={(e) => setNotesMessage(e.target.value)}
            ></textarea>
          </label>
          <label>
            <span>Date</span>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </label>
          <label>
            <span>Time</span>
            <input
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
            />
          </label>
        </form>
      </section>
    </>
  );
}
export default AddTask;
