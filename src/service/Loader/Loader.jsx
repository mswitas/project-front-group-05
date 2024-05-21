import { ThreeCircles } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled.jsx";
export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        visible={true}
        height="96"
        width="96"
        color="#FB7C2F"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </LoaderWrapper>
  );
};
export default Loader;
