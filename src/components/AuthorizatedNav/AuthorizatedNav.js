import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import logoutImg from "../../images/logout.svg";
import { getLogStatus, selectUser } from "../../redux/auth/selectors";
import {
  StyledAuthNav,
  StyledLoginLabel,
  StyledLoginName,
  StyledLogoutImg,
  StyledVerticalLine,
  StyledExitButton,
} from "./AuthNav.styled";
import { HeaderModalWindow } from "../HeaderModalWindow/HeaderModalWindow";

// Authorization bar
const AuthorizatedNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedIn = useSelector(getLogStatus);
  const userEmail = useSelector(selectUser);
  const dispatch = useDispatch();

  // Logout
  const handleClick = () => {
    dispatch(logout());
  };
  // Open modal window
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  // Close modal window
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    isLoggedIn && (
      <>
        <StyledAuthNav>
          {/* Round label with first letter of users email */}
          <StyledLoginLabel>{userEmail[0].toUpperCase()}</StyledLoginLabel>
          {/* Users email */}
          <StyledLoginName>{userEmail}</StyledLoginName>
          {/* Logout image. For mobile version only */}
          <StyledLogoutImg
            src={logoutImg}
            alt="logout"
            onClick={handleModalOpen}
          />
          <StyledVerticalLine></StyledVerticalLine>
          <StyledExitButton type="button" onClick={handleModalOpen}>
            Exit
          </StyledExitButton>
        </StyledAuthNav>
        {modalOpen && (
          <HeaderModalWindow
            closeModal={handleModalClose}
            dispatch={handleClick}
          >
            Do you really want to leave?
          </HeaderModalWindow>
        )}
      </>
    )
  );
};
export default AuthorizatedNav;
