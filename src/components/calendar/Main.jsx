import { useContext } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  format
} from 'date-fns';
import CurrentDateContext from '../../contexts/currentDate';
import WEEKDAYS from '../../constans';
import styles from './styles.module.scss';
function Main() {
  const { currentMonth, currentDay } = useContext(CurrentDateContext);
  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);
  const startWeek = startOfWeek(startMonth);
  const endWeek = endOfWeek(endMonth);

  const days = eachDayOfInterval({ start: startWeek, end: endWeek });

  return (
    <main>
      <div className={styles.weekdays}>
        {WEEKDAYS.map((day, index) => (
          <span className={styles.weekday} key={index}>{day}</span>
        ))}
      </div>
      <section className={styles.dates}>
        {days.map((date, index) => (
          <div
            key={`${new Date(date).getTime()} ${index}`}
            className={`${styles.date} ${
              !isSameMonth(date, currentMonth) ? styles.daysOfDiffMonths : '' 
            } ${isSameDay(date, currentDay) ? styles.today : ''}`}
          >
            {format(date, 'dd')}
          </div>
        ))}
      </section>
    </main>
  );
}
export default Main;
