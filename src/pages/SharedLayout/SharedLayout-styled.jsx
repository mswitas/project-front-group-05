import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <p>shared layout</p>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
