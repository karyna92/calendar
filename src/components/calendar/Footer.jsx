import { useContext } from "react";
import {AddTaskModule} from "../../contexts/index";
import styles from "./styles.module.scss";
function Footer() {
  const { setShowAddTask, setShowAllTasks } = useContext(AddTaskModule);
  return (
    <footer>
      <button className={styles.todayBtn} onClick={()=>{setShowAddTask(false); setShowAllTasks(false)}}>Calendar</button>
      <button onClick={()=>setShowAllTasks(true)}>All tasks</button>
      <button
        onClick={() => {
          setShowAddTask(true);
        }}
      >
        +
      </button>
    </footer>
  );
}
export default Footer;
