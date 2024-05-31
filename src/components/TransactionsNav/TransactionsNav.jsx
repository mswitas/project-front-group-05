import React from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledTabsMobile, StyledTabsDesktop } from "./TransactionsNav.styled";

export const TransactionsNavMobile = () => {
  return (
    <StyledTabsMobile>
      <Link to="/expenses" className="TabMobile">
        expenses
      </Link>
      <Link to="/income" className="TabMobile">
        income
      </Link>
    </StyledTabsMobile>
  );
};

export const TransactionsNavDesktop = () => {
  return (
    <StyledTabsDesktop>
      <NavLink to="/expenses" className="TabDesktop">
        expenses
      </NavLink>
      <NavLink to="/income" className="TabDesktop">
        income
      </NavLink>
    </StyledTabsDesktop>
  );
};
