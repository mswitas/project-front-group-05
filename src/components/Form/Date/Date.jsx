import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Picker } from "./Date.styled";
import { ReactComponent as Calendar } from "../../../assets/icons.svg#calendar";

const Date = ({ startDate, setStartDate }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="example-custom-input datePicker"
      onClick={onClick}
      ref={ref}
    >
      <Calendar className="calendarIcon" />
      {value}
    </button>
  ));
  return (
    <Picker onClick={handleClick}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </Picker>
  );
};

export default Date;

Date.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func.isRequired,
};