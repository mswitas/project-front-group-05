import { useState } from "react";
import css from "./Reports.module.css";
import icons from "../../assets/icons.svg";
import { Container, Box, IconButton, Text, Link } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ExpensesAndIncome = () => {
  const [expensesVisible, setExpensesVisible] = useState(true);
  const [incomeVisible, setIncomeVisible] = useState(false);
  const [expensesIconsVisible, setExpensesIconsVisible] = useState(true);
  const [incomeIconsVisible, setIncomeIconsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleHeader = () => {
    setExpensesVisible(!expensesVisible);
    setExpensesIconsVisible(!expensesIconsVisible);
    setIncomeVisible(!incomeVisible);
    setIncomeIconsVisible(!incomeIconsVisible);
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const iconsData = [
    { id: "food", label: "PRODUCTS", data: "Data for Products" },
    { id: "alcohol", label: "ALCOHOL", data: "Data for Alcohol" },
    {
      id: "entertiment",
      label: "ENTERTAINMENT",
      data: "Data for Entertainment",
    },
    { id: "health", label: "HEALTH", data: "Data for Health" },
    { id: "car", label: "TRANSPORT", data: "Data for Transport" },
    { id: "housing", label: "HOUSING", data: "Data for Housing" },
    { id: "technique", label: "TECHNIQUE", data: "Data for Technique" },
    {
      id: "commune",
      label: "COMMUNAL, COMMUNICATION",
      data: "Data for Communal, Communication",
    },
    {
      id: "hobbies",
      label: "SPORTS, HOBBIES",
      data: "Data for Sports, Hobbies",
    },
    { id: "education", label: "EDUCATION", data: "Data for Education" },
    { id: "other", label: "OTHER", data: "Data for Other" },
  ];

  const incomeIconsData = [
    { id: "full_salary", label: "SALARY", data: "Data for Salary" },
    { id: "salary", label: "ADD.INCOME", data: "Data for Additional Income" },
  ];

  const activeIconData =
    iconsData.find((icon) => icon.id === activeLink) ||
    incomeIconsData.find((icon) => icon.id === activeLink);

  return (
    <>
      <Box className={css.main_icons_container}>
        <Box className={css.switcher_box}>
          <IconButton
            onClick={toggleHeader}
            variant="link"
            colorScheme="orange"
            aria-label="Previous Month"
            icon={<ChevronLeftIcon />}
          />
          {expensesVisible && (
            <Text className={css.expense_text}>EXPENSES</Text>
          )}
          {incomeVisible && <Text className={css.income_text}>INCOME</Text>}
          <IconButton
            onClick={toggleHeader}
            variant="link"
            colorScheme="orange"
            aria-label="Next Month"
            icon={<ChevronRightIcon />}
          />
        </Box>
        {expensesIconsVisible && (
          <Container className={css.expenses_icon_container}>
            {iconsData.map((icon) => (
              <Box
                key={icon.id}
                className={`${css.icon_box} ${
                  activeLink === icon.id ? css.active : ""
                }`}
                onClick={() => handleLinkClick(icon.id)}
              >
                <Link
                  className={`${css.icon_link} ${
                    activeLink === icon.id ? css.active_link : ""
                  }`}
                >
                  <svg className={css.expenses_svg}>
                    <use href={`${icons}#${icon.id}`}></use>
                  </svg>
                </Link>
                <Text className={css.icon_text}>{icon.label}</Text>
              </Box>
            ))}
          </Container>
        )}
        {incomeIconsVisible && (
          <Container className={css.income_icon_container}>
            {incomeIconsData.map((icon) => (
              <Box
                key={icon.id}
                className={`${css.icon_box} ${
                  activeLink === icon.id ? css.active : ""
                }`}
                onClick={() => handleLinkClick(icon.id)}
              >
                <Link
                  className={`${css.icon_link} ${
                    activeLink === icon.id ? css.active_link : ""
                  }`}
                >
                  <svg className={css.income_svg}>
                    <use href={`${icons}#${icon.id}`}></use>
                  </svg>
                </Link>
                <Text className={css.icon_text}>{icon.label}</Text>
              </Box>
            ))}
          </Container>
        )}
        {activeLink && (
          <Box className={css.data_container}>
            <Text className={css.data_text}>{activeIconData?.data}</Text>
            <Text className={css.data_text}>{activeIconData?.data}</Text>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ExpensesAndIncome;
