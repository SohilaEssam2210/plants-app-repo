import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { LabSection } from "./pages/LabSection";
import AnotherLab from "./pages/AnotherLab";
import { LabUnits } from "./pages/LabUnits";
import { ServicesCost } from "./pages/ServicesCost";
import SingleNews from "./pages/SingleNews";
import SinglePerson from "./pages/SinglePerson";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "labSection", element: <LabSection /> },
      { path: "anotherLab", element: <AnotherLab /> },
      { path: "labUnits", element: <LabUnits /> },
      { path: "serviceCost", element: <ServicesCost /> },
      { path: "singleNews", element: <SingleNews /> },
      { path: "singlePerson", element: <SinglePerson /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>;
    </AuthProvider>
  );
}

export default App;
