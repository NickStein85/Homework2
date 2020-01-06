import React from "react";
import AuthPage from "./components/AuthPage/AuthPage";
import UserList from "./components/UserList/UserList";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/signup" component={AuthPage} />
        <Route path="/user-list" component={UserList} /> 
      </Router>
    </div>
  );
}

export default App;
