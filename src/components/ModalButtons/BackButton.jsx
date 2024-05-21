import { useLocation } from "react-router";
import { ButtonBack } from "./Buttons.styled";
import icons from "../../assets/icons.svg";

export const BackButton = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";
  return (
    <ButtonBack to={backLink}>
      <svg width="24" height="24">
        <use href={`${icons}#back-arrow`}></use>
      </svg>
    </ButtonBack>
  );
};
