import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MoreAboutUs from "./components/moreAboutUs/MoreAboutUs";
import OutSoruceServices from "./components/OutsourcingService/OutSoruceServices";
import NearShore from "./components/NearShore/NearShore";
import OffShore from "./components/OffShore/OffShore";
import Recruit from "./components/Recruit/Recruit";
import Application from "./components/Recruit/Application";
import Recruitment from "./components/Recruitment/Recruitment";
import Operating from "./components/OperatingAndMaintenance/Operating";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/more", element: <MoreAboutUs /> },
        { path: "/outsourceservice", element: <OutSoruceServices /> },
        { path: "/nearshore", element: <NearShore /> },
        { path: "/offshore", element: <OffShore /> },
        { path: "/recruit", element: <Recruit /> },
        { path: "/application", element: <Application /> },
        { path: "/recruitment", element: <Recruitment /> },
        { path: "/operating", element: <Operating /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
