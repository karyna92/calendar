import { useContext } from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay } from "date-fns";
import {CurrentDateContext} from "../../contexts/currentDate";
import WEEKDAYS from "../../constants";
import styles from './styles.module.scss';
function Main() {
    const { currentMonth,currentDay } = useContext(CurrentDateContext);
  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);
  const startWeek = startOfWeek(startMonth);
  const endWeek = endOfWeek(endMonth);

  const days = eachDayOfInterval({ start: startWeek, end: endWeek });  
    <main>
      <div className={styles.weekdays}>
       {WEEKDAYS.map(day=><span key={day}>{day}</span>)}
            </div>
      <section className={styles.days}>
        {days.map((day, index) => (
          <div key={index} className={`${styles.day} ${!isSameMonth(day, currentMonth)? 'styles.daysOfDiffMonths':''} ${isSameDay(day, currentDay)? 'styles.today': ''}`}>{day}</div>
        ))}
      </section>
    </main>
  );
}
export default Main;
