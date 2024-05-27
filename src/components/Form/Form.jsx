import { useRef, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { OrangeButton } from "../ModalButtons/OrangeButton";
import { useMatchMedia } from "../../hooks/MediaQuery";
import {
  FormWrap,
  StyledForm,
  ButtonWrap,
  InputProduct,
  StyledAllInputsDiv,
  StyledWhiteButton,
} from "./Form.styled";

import Date from "./Date/Date";
import Category from "./Category/Category";
import Input from "./Input/Input";

import { addExpense, addIncome } from "../../redux/transactions/operations";

// Form to add incomes or expenses
const Form = () => {
  //Translate
  const translateBack = (name) => {
    switch (name.trim()) {
      case "Products":
        return "Продукты";
      case "ЗСУ":
        return "Алкоголь";
      case "Entertainment":
        return "Развлечения";
      case "Health":
        return "Здоровье";
      case "Transport":
        return "Транспорт";
      case "Housing":
        return "Всё для дома";
      case "Technics":
        return "Техника";
      case "Communal and communication":
        return "Коммуналка и связь";
      case "Sport and hobby":
        return "Спорт и хобби";
      case "Education":
        return "Образование";
      case "Other":
        return "Прочее";
      case "Salary":
        return "З/П";
      case "Additional income":
        return "Доп. доход";
      default:
        break;
    }
  };
  //Media
  const { isMobile } = useMatchMedia();

  // State
  const [elementCategory, setElementCategory] = useState("Category");
  const [startDate, setStartDate] = useState(new window.Date());
  // Location
  const location = useLocation();
  // Refs
  const form = useRef(null);
  // Dispatch
  const dispatch = useDispatch();
  // Check for device

  let categoryArray;
  let functionToDispatch;
  // Check location for submit incomes or expenses
  if (location.pathname === "/income" || location.pathname === "/income") {
    categoryArray = ["Salary", "Additional income"];
    functionToDispatch = addIncome;
  }
  if (location.pathname === "/expenses" || location.pathname === "/") {
    categoryArray = [
      "Products",
      "ЗСУ",
      "Entertainment",
      "Health",
      "Transport",
      "Housing",
      "Technics",
      "Communal and communication",
      "Sport and hobby",
      "Education",
      "Other",
    ];
    functionToDispatch = addExpense;
  }
  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const { descr, sum } = event.target.elements;
    let transValue = sum.value;
    // Checks for empty values
    if (descr.value.trim() === "") {
      alert("Please enter a description");
      return;
    }
    if (elementCategory === "Category") {
      alert("Please enter a category");
      return;
    }
    if (transValue.trim() === "") {
      alert("Please enter an amount");
      return;
    }
    if (transValue < 0) transValue = transValue * -1;

    // Prepare data for dispatch
    const dataToDispatch = {
      description: descr.value,
      amount: Number(transValue),
      date: startDate.toISOString().split("T")[0],
      category: translateBack(elementCategory),
    };
    // dispatch
    dispatch(functionToDispatch(dataToDispatch));
    event.target.reset();
    setElementCategory("Category");
  };
  // Reset Form
  const handleReset = () => {
    form.current.reset();
  };

  return (
    <>
      <FormWrap>
        {!isMobile && (
          <div className="tabletDatepicker">
            <Date startDate={startDate} setStartDate={setStartDate} />
          </div>
        )}
        {/* Form */}
        <StyledForm onSubmit={handleSubmit} ref={form}>
          {/* Div with inputs */}
          <StyledAllInputsDiv>
            {/* Product input */}
            <InputProduct placeholder="Product description" name="descr" />
            {/* Category input */}
            <Category
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            {/* Value input */}
            <Input name="sum" />
          </StyledAllInputsDiv>
          {/* Div with buttons */}
          <ButtonWrap>
            <OrangeButton type="submit">INPUT</OrangeButton>
            <StyledWhiteButton type="button" onClick={handleReset}>
              CLEAR
            </StyledWhiteButton>
          </ButtonWrap>
        </StyledForm>
      </FormWrap>
    </>
  );
};
export default Form;
