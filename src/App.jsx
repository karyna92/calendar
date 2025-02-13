import { useState } from "react";
import Header from "./components/calendar/Header";
import Main from "./components/calendar/Main";
import Footer from "./components/calendar/Footer";
import AddTask from "./components/todo/AddTask";
import AllTasks from "./components/todo/AllTasks";
import { CurrentDateContext, AddTaskModule } from "./contexts/index";
import "./index.scss";
import "./App.scss";

function App() {
  const currentDay = new Date();
  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [currentYear, setcurrentYear] = useState(new Date().getFullYear());
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [title, setTitle] = useState("");
  const [notesMessage, setNotesMessage] = useState("");
  const [dueDate , setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <CurrentDateContext.Provider
      value={{
        currentDay,
        currentMonth,
        setcurrentMonth,
        currentYear,
        setcurrentYear,
      }}
    >
      <AddTaskModule.Provider value={{ showAddTask, setShowAddTask,showAllTasks, setShowAllTasks, title, setTitle, notesMessage, setNotesMessage, dueDate , setDueDate, dueTime, setDueTime, tasks, setTasks}}>
        <section>
          <Header />
          <div className="mainContainer"> 
             <Main />
          {showAddTask && <AddTask />}
          {showAllTasks && <AllTasks />}
          </div>
          <Footer />
        </section>
      </AddTaskModule.Provider>
    </CurrentDateContext.Provider>
  );
}

export default App;
