import React from "react";
import Home from "./Components/Home";
import Dash from "./Components/Dash";
import Total from"./Components/Total";
import Decision from "./Components/Decision";
import Profile from "./Components/Profile";
import { BrowserRouter , Route, Routes, } from "react-router-dom";
import Innercircle from "./Components/Innercircle";
import Notification from "./Components/Notification";
import Add from "./Components/Add";
import Soft from "./Components/Soft";
import Skill from "./Components/Skill";
import Eye from "./Components/Eye";
import Pending from "./Components/Pending"
import Shared from "./Components/Shared"
import Show  from "./Components/Show"
import Check from "./Components/Check"
import Swoft from "./Components/Swoft"
import Link from "./Components/Link"
import Time from "./Components/Time"
import How from "./Components/How"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/Total" element={<Total />}></Route>
          <Route path="/Decision" element={<Decision />}></Route>
          <Route path="/Innercircle" element={<Innercircle />}></Route>
          <Route path="/Notification" element={<Notification />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Add" element={<Add />}></Route>
          <Route path="/Soft" element={<Soft />}></Route>
          <Route path="/Skill" element={<Skill />}></Route>
          <Route path="/Eye" element={<Eye />}></Route>
          <Route path="/Pending" element={<Pending />}></Route>
          <Route path="/Shared" element={<Shared />}></Route>
          <Route path="/Show" element={<Show />}></Route>
          <Route path="/Check" element={<Check />}></Route>
          <Route path="/Swoft" element={<Swoft />}></Route>
          <Route path="/Link" element={<Link />}></Route>
          <Route path="/Time" element={<Time />}></Route>
          <Route path="/How" element={<How/>}></Route>
        </Routes>
      </BrowserRouter>
      <div>
        {/* <Home /> */}
        {/* <Dash />  */}
      </div>
    </>
  );
}

export default App;
