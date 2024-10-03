import { Outlet } from "react-router-dom";
import Header from "../feature/header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
