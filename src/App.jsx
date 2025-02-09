import { useState } from "react";
import Header from "./components/calendar/Header";
import Main from "./components/calendar/Main";
import Footer from "./components/calendar/Footer";
import CurrentDateContext from "./contexts/currentDate";
import "./index.scss";
import "./App.scss";

function App() {
  const currentDay = new Date().getDate();
  const [ currentMonth, setcurrentMonth ] = useState(new Date().getMonth());
  const [currentYear, setcurrentYear] = useState(new Date().getFullYear());

  return (
      <CurrentDateContext.Provider
        value={{ currentDay, currentMonth, setcurrentMonth, currentYear, setcurrentYear }}
      >
    <section>
      <Header />
    <Main />
    <Footer />
      </section>
       </CurrentDateContext.Provider>
  );
}

export default App;
