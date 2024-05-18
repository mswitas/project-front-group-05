import {
  Container,
  Box,
  Heading,
  IconButton,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { GoArrowLeft } from "react-icons/go";
import css from "./Reports.module.css";
import ExpensesAndIncome from "./ExpensesAndIncome";
import { useState } from "react";

const Reports = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentDate(prevMonth);
  };
  const currentPeriod = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Container className={css.first_container}>
        <Box className={css.button_box}>
          <Link className={css.back_icon_box}>
            <IconButton
              className={css.back_arrow}
              variant="link"
              colorScheme="orange"
              aria-label="Back to main page"
              icon={<Icon as={GoArrowLeft} />}
            ></IconButton>
            <Text className={css.back_to_main_text}>Main page</Text>
          </Link>
          <Box className={css.month_box}>
            <IconButton
              onClick={handlePrevMonth}
              variant="link"
              colorScheme="orange"
              aria-label="Previous Month"
              icon={<ChevronLeftIcon />}
            ></IconButton>
            <p className={css.period_paragraph}>
              Current period:{" "}
              <span className={css.month_span}>
                {currentPeriod.toUpperCase()}
              </span>
            </p>
            <IconButton
              onClick={handleNextMonth}
              variant="link"
              colorScheme="orange"
              aria-label="Previous Month"
              icon={<ChevronRightIcon />}
            ></IconButton>
          </Box>
          <Box className={css.textbox}>
            <Text className={css.first_box_header}>Balance: </Text>
            <Heading as="h6" size="xs" className={css.second_box_header}>
              00.00 PLN
            </Heading>
          </Box>
        </Box>
      </Container>
      <Box className={css.balance_box}>
        <Box className={css.expense_box}>
          <Text>Expenses: </Text>
          <Text className={css.expense_header}> -18 000.00 PLN</Text>
        </Box>
        <Box className={css.income_box}>
          <Text>Income: </Text>
          <Text className={css.income_header}> +45 000.00 PLN</Text>
        </Box>
      </Box>
      <Container className={css.chakra_container}>
        <ExpensesAndIncome />
      </Container>
    </>
  );
};

export default Reports;
