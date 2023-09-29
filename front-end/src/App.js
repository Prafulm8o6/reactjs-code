import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Register from "./Code/Q1/Register";
import TwoWayBinding from "./Code/Q2/TwoWayBinding";
import BillCounterUseState from "./Code/Q3/BillCounterUseState";
import { BillCounterContext } from "./Code/Q3/Context/BillCounterContext";
import BiilCounterContextAPI from "./Code/Q3/BiilCounterContextAPI";
import { useState } from "react";
import BiilCounterReducer from "./Code/Q3/BiilCounterReducer";
import BillCounterRedux from "./Code/Q3/BillCounterRedux";
import Home from "./Components/Home";
import SignUp from "./Code/Q4/SignUp";
import Login from "./Code/Q4/Login";
import CRUD from "./Code/Q4/CRUD";
import Update from "./Code/Q4/Update";
import PollSystem from "./Code/Q5/PollSystem";
import FileUpload from "./Code/Q7/FileUpload";
import BlogCRUD from "./Code/Q6/BlogCRUD";
import Blog from "./Code/Q6/Blog";

const initialState = {
  bargar_price: 99,
  pizza_price: 199,
  bargar_qty: 0,
  pizza_qty: 0,
  total_price: 0
}

function App() {

  // Start Context API 

  const [billInfo, setBillInfo] = useState(initialState);

  const addBargar = () => {
    setBillInfo({ ...billInfo, bargar_qty: billInfo.bargar_qty + 1, total_price: ((billInfo.bargar_qty * billInfo.bargar_price) + (billInfo.pizza_qty * billInfo.pizza_price)) })
  }
  const removeBargar = () => {
    setBillInfo({ ...billInfo, bargar_qty: billInfo.bargar_qty - 1, total_price: ((billInfo.bargar_qty * billInfo.bargar_price) + (billInfo.pizza_qty * billInfo.pizza_price)) })
  }
  const addPizza = () => {
    setBillInfo({ ...billInfo, pizza_qty: billInfo.pizza_qty + 1, total_price: ((billInfo.bargar_qty * billInfo.bargar_price) + (billInfo.pizza_qty * billInfo.pizza_price)) })
  }
  const removePizza = () => {
    setBillInfo({ ...billInfo, pizza_qty: billInfo.pizza_qty - 1, total_price: ((billInfo.bargar_qty * billInfo.bargar_price) + (billInfo.pizza_qty * billInfo.pizza_price)) })
  }

  // End Context API

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Code/Q1/Register */}
        <Route path="/register-form" element={<Register />} />
        {/* Code/Q2/TwoWayBinding */}
        <Route path="/two-way-binding" element={<TwoWayBinding />} />
        {/* Code/Q3/UseState */}
        <Route path="/bill-counter-usestate" element={<BillCounterUseState />} />
        {/* Code/Q3/Context-API */}
        <Route path="/bill-counter-context-api" element={
          <BillCounterContext.Provider value={{ billInfo, addBargar, addPizza, removeBargar, removePizza }}>
            <BiilCounterContextAPI />
          </BillCounterContext.Provider>
        } />
        {/* Code/Q3/Reducer */}
        <Route path="/bill-counter-reducer" element={<BiilCounterReducer />} />
        {/* Code/Q3/Redux */}
        <Route path="/bill-counter-redux" element={<BillCounterRedux />} />
        {/* Code/Q4/signup */}
        <Route path="/signup" element={<SignUp />} />
        {/* Code/Q4/login */}
        <Route path="/login" element={<Login />} />
        {/* Code/Q4/crud */}
        <Route path="/user/crud" element={<CRUD />} />
        {/* Code/Q4/update */}
        <Route path="/feedback/update/:id" element={<Update />} />
        {/* Code/Q5/poll-system */}
        <Route path="/poll-system" element={<PollSystem />} />
        {/* Code/Q6/blog */}
        <Route path="/manage-blog" element={<BlogCRUD />} />
        <Route path="/blogs" element={<Blog category={null} />} />
        <Route path="/html-blogs" element={<Blog category="html" />} />
        <Route path="/php-blogs" element={<Blog category="php" />} />
        <Route path="/aspdotnet-blogs" element={<Blog category="aspdotnet" />} />
        <Route path="/iot-blogs" element={<Blog category="iot" />} />
        {/* Code/Q7/file-upload */}
        <Route path="/file-upload" element={<FileUpload />} />
      </Routes>
    </>
  );
}

export default App;
