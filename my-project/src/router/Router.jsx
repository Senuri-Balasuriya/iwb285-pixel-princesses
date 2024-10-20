import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Aboutus from "../pages/Aboutus"; // Ensure this matches the file path and name
import Recipe from "../pages/Recipe";
import Tips from "../pages/Tips";
import Privacy from "../pages/privacy";
import Term from "../pages/term";
import Vision from "../pages/Vision";






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
        path: "/term",
        element: <Term />, 
      },
      {
        path: "/privacy", 
        element: <Privacy />, 
      },
      {
        path:"/Vision",
        element:<Vision/>
      }
    ],
  },
]);

export default router;

