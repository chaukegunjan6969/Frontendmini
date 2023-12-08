import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import Properties from "./components/Properties";
import Footer from "./components/footer";
import RegisterProp from "./components/RegisterProp";
import SimpleStorage from "./components/ContractInteraction";

function App() {
  const [Loggedin, SetLoggedin] = useState(false);

  

  return (

    <div className="bg-black h-auto">
      <Navbar Loggedin={Loggedin} SetLoggedin={SetLoggedin} />

      
        <Routes>
          <Route
            path="/"
            element={<Home SetLoggedin={SetLoggedin}></Home>}
          ></Route>
          <Route
            path="/login"
            element={<Login SetLoggedin={SetLoggedin}></Login>}
          ></Route>
          <Route
            path="/signup"
            element={<Signup SetLoggedin={SetLoggedin}></Signup>}
          ></Route>
          <Route
            path="/dashboard"
            element={<Dashboard SetLoggedin={SetLoggedin}></Dashboard>}
          ></Route>
          <Route
            path="/properties"
            element={<Properties></Properties>}
            SetLoggedin={SetLoggedin}
          ></Route>
          <Route
          path="/Register"
          element = {<RegisterProp></RegisterProp>}
          ></Route>
          <Route
           path="/status"
           element ={<SimpleStorage></SimpleStorage>}
          >
          </Route>
        </Routes>

        <Footer></Footer>
      
    </div>
  );
}

export default App;
