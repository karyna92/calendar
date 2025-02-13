import {useEffect} from 'react';
import { useContext } from "react";
import {AddTaskModule} from "../../contexts/index";
import todo from "./todo.module.scss"

 function AddTask() {
  const { setShowAddTask, title, setTitle, notesMessage, setNotesMessage, dueDate , setDueDate, dueTime, setDueTime,tasks, setTasks } = useContext(AddTaskModule);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask=()=>{ 
    if (title.trim() === "" || notesMessage.trim()==="" || !dueDate) return;
    const newTaskObj ={ id:Date.now() ,title, notesMessage, dueDate, dueTime};
    setTasks([...tasks, newTaskObj]);
    setTitle("");
    setNotesMessage("");
    setDueDate("");
    setDueTime("");
    setShowAddTask(false)
  }
  return (
<>
<section className={todo.tasksContainer}>
  <div className={todo.header}>
<button onClick={()=>{setShowAddTask(false)}}>Cancel</button>
    <h2>New</h2>
    <button onClick={handleAddTask}>Add</button>
</div>
<form className={todo.content}>
<label>
  <span>Title</span>
<input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>

</label>
<label>
  <span>Notes</span>
<textarea name="notes" id="notes" value={notesMessage} rows="4" onChange={(e)=>setNotesMessage(e.target.value)}></textarea>
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
  )
}
export default AddTask;
