import { Outlet, useNavigate } from "react-router-dom";
import AdminNav from "../pages/AdminNav";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdminLayout = () => {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.AdminSlice.admin);
  // console.log(admin);
  useEffect(() => {
    if (!admin) {
      return navigate("/login");
    }
  }, []);

  return (
    <div className="flex">
      <AdminNav />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
