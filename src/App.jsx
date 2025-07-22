import {  Route , createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";


import "remixicon/fonts/remixicon.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Sign from "./Components/Sign/Sign";
import Contact from "./Components/Contact/Contact";



function App() {
  const router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Sign" element={<Sign />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    )
  ); 
  return (
   <RouterProvider router={router} />
  );
}

export default App;
