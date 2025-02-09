import { useContext } from "react";
import{ addMonths, subMonths,} from 'date-fns';
import CurrentDateContext from "../../contexts/currentDate"
import styles from "./styles.module.scss";
function Header() {
  const { currentMonth, currentYear, setcurrentMonth } = useContext(CurrentDateContext);
   const prevMonth=()=>{
    setcurrentMonth(subMonths(currentMonth, 1))
   };
   const nextMonth=()=>{
    setcurrentMonth(addMonths(currentMonth, 1))
   }
  return (
    <header>
      <h2>{currentYear}</h2>
      <div className={styles.month}>
        <h3>{currentMonth}</h3>
        <div>
          <button onClick={prevMonth}>&lt;</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
