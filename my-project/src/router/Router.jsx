import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Aboutus from "../pages/Aboutus"; // Ensure this matches the file path and name
import Recipe from "../pages/Recipe";
import Tips from "../pages/Tips";
import Privacy from "../pages/privacy";
import term from "../pages/term";


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
        path: "/privacy", 
        element: <Privacy />, 
      },
      {
        path: "/term", 
        element: <term />, 
      }
    ],
  },
]);

export default router;

