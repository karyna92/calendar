import { createContext } from "react";
import PropTypes from 'prop-types';

const CurrentDateContext = createContext();

CurrentDateContext.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  currentYear: PropTypes.number.isRequired,
  setcurrentMonth: PropTypes.func.isRequired
};

export default CurrentDateContext;
