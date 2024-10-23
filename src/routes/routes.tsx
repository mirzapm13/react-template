import { createBrowserRouter, redirect } from "react-router-dom";
import DashboardLayout from "../components/templates/DashboardLayout";
import ChartPage from "../features/ChartPage";
import FormPage from "../features/FormPage/view";
import Login from "../features/Login/view";
import ModalPage from "../features/ModalPage/view/ModalPage.component";
import Overview from "../features/Overview/view";
import OverviewExtra from "../features/OverviewExtra/view";
import PDFPage from "../features/PDFPage/PDFPage.component";
import RoleNew from "../features/Role/components/RoleNew";
import Role from "../features/Role/view";
import TablePage from "../features/TablePage/view/TablePage.component";
import UserNew from "../features/User/components/UserNew";
import User from "../features/User/view";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        loader: async () => redirect("/overview"),
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/overview/extra",
        element: <OverviewExtra />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
      {
        path: "/table",
        element: <TablePage />,
      },
      {
        path: "/modal",
        element: <ModalPage />,
      },
      {
        path: "/pdf",
        element: <PDFPage />,
      },
      {
        path: "/charts",
        element: <ChartPage />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/user/new",
        element: <UserNew />,
      },
      {
        path: "/role",
        element: <Role />,
      },
      {
        path: "/role/new",
        element: <RoleNew />,
      },
    ],
  },
]);

export default router;
