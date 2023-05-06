//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecipes from "./components/AllRecipies.jsx"
import Add from "./components/Add.jsx";
import dummyData from "./data/data.json";
import axios from "axios";
function App() {
  const [view, setView] = useState('Home')
  const [data, setData] = useState(dummyData);
  const [one, setOne] = useState(data[0]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/recipe").then((res) => {
      setData(res.data);
    });
  }, []);
  let changeView = (view) => {
    setView(view);
  };
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView} />}
      {view === "AllRecipes" && (
        <AllRecipes changeView={changeView} setOne={setOne} data={data} />
      )}
      {view === "AddRecipe" && <Add one={one} />}
      {/* {view === "OneRecipe" && <OneRecipe one={one} />} */}
      <div></div>
    </div>
  );
}

export default App;
