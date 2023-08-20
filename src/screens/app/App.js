import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Album from "../album/album";
import Home from "../home/home";
import ReactDOM from "react-dom/client";
import About from "../about/about";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "../../components/signin/signIn";
import View from "../../components/view/view";
import AddUser from "../../components/addUser/addUser";
import MenuBar from "../../components/menu/menu";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import { useLoadData } from "../../hooks/use-load-data";
import Footer from "../../components/footer/footer";
import MyVolunteering from "../myVolunteering/myVolunteering";

const App = () => {
  const [activeItem, setActiveItem] = useState("home");
  const { loadKindVolunteersData, loadVolunteerings, loadUsers } =
    useLoadData();

  useEffect(() => {
    loadKindVolunteersData();
    loadVolunteerings();
    loadUsers();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div id="wrapper">
          <div id="content">
            <MenuBar activeItem={activeItem} setActiveItem={setActiveItem} />
            <Routes>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="volunteering" element={<Album />} />
              <Route
                path="signIn"
                element={<SignIn setActiveItem={setActiveItem} />}
              />
              <Route
                path="signUp"
                element={<AddUser setActiveItem={setActiveItem} />}
              />
              <Route path="about" element={<About />} />
              <Route path="myVolunteering" element={<MyVolunteering />} />
              <Route
                path="view"
                element={<View setActiveItem={setActiveItem} />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
