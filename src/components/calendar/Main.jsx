import { useContext } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  format,
} from "date-fns";
import { AddTaskModule, CurrentDateContext } from "../../contexts/index";
import WEEKDAYS from "../../constans";
import styles from "./styles.module.scss";
function Main() {
  const { currentMonth, currentDay } = useContext(CurrentDateContext);
  const { tasks, setDueDate, setShowAllTasks, setSpecificDateTask } = useContext(AddTaskModule);
  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);
  const startWeek = startOfWeek(startMonth);
  const endWeek = endOfWeek(endMonth);

  const days = eachDayOfInterval({ start: startWeek, end: endWeek });

  const hasTask = (date) => {
    return tasks.some((task) => task.dueDate === format(date, "yyyy-MM-dd"));
  };

  const handleDateClick = (date) => {
    setDueDate(format(date, "yyyy-MM-dd"));
    setShowAllTasks(true)
    setSpecificDateTask(true)
  };
  return (
    <main>
      <div className={styles.weekdays}>
        {WEEKDAYS.map((day, index) => (
          <span className={styles.weekday} key={index}>
            {day}
          </span>
        ))}
      </div>
      <section className={styles.dates}>
        {days.map((date, index) => (
          <div
            key={`${new Date(date).getTime()} ${index}`}
            className={`${styles.date} ${
              !isSameMonth(date, currentMonth) ? styles.daysOfDiffMonths : ""
            } ${isSameDay(date, currentDay) ? styles.today : ""} ${
              hasTask(date) ? styles.hasTask : ""
            }`}
            onClick={() => handleDateClick(date)}
          >
            {format(date, "dd")}
          </div>
        ))}
      </section>
    </main>
  );
}
export default Main;
