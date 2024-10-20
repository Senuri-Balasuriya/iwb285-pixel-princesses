import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Aboutus from "../pages/Aboutus"; 
import Recipe from "../pages/Recipe";
import Tips from "../pages/Tips";
import Contactus from "../pages/Contactus";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Aboutus", // Correct path
        element: <Aboutus />, // Ensure the component name matches the import
      },
      {
        path: "/Recipe", 
        element: <Recipe />, 
      },
      {
        path: "/Tips", 
        element: <Tips />, 
      },
      
      {
        path: "/Contactus", // Correct path
        element: <Contactus />, // Ensure the component name matches the import
      },
    ],
  },
]);

export default router;

