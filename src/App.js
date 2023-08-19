import React, { useState } from "react";
import DemoForm from "./Components/UI/DemoForm";
import "./App.css";
import UserItem from "./Users/UserItem";

function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserHandler(uName, uAge) {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString },
      ];
    });
  }

  return (
    <div>
      <section id="user-form">
        <DemoForm onAddUser={addUserHandler} />
      </section>
      <UserItem users={usersList} />
    </div>
  );
}

export default App;
