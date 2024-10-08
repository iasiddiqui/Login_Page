import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LogIn";
import "./App.css";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
