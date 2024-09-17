import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Param from "./components/Param";
import Course from "./components/Course";
import Test from "./components/Test";
import Report from "./components/Report";
import NotFound from "./components/NotFound";

// create routes --> array of route objects
const router = createBrowserRouter([
  // load this component on the given path
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    // to have multiple sub-paths to main parent route - NESTED ROUTES
    children: [
      {
        path: "courses",
        element: <Course />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "reports",
        element: <Report />,
      },
    ],
  },
  // Use path parameters/variables
  {
    path: "/student/:id", // marked by ":", set into variable afterwards
    element: (
      <div>
        <Navbar />
        <Param />
      </div>
    ),
  },

  // Handle error scenarios of 404 Not Found
  // This overrides teh default 404 Page
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="container">
      <h1>Routing</h1>
      <p>Create Dynamic, Nested routes</p>
      <p>
        We use <b>React Router DOM</b>
      </p>
      {/* Supply the router created above to the app context using Router provider */}
      {/* The use the paths to load the components */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
