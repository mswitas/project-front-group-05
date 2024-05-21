import PropTypes from "prop-types";
import { StyledOrangeButton } from "./Buttons.styled";

// Shared button for modal windows
export const OrangeButton = ({
  children,
  dispatch,
  closeModal,
  changeBalance,
}) => {
  const handleClick = () => {
    if (children === "YES") {
      dispatch();
      closeModal();
    }
    if (changeBalance) {
      dispatch();
      closeModal();
    }
  };

  return (
    <StyledOrangeButton onClick={handleClick}>{children}</StyledOrangeButton>
  );
};
export default OrangeButton;

OrangeButton.propTypes = {
  children: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
  closeModal: PropTypes.func,
  changeBalance: PropTypes.func,
};
