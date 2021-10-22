import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';


function App() {
  const [formValid, setFormValid] = useState(true);
  const [users, setUsesrs] = useState([]);

  const handleInvalidForm = () => {
    console.log("oh no!");
    setFormValid(false);
  }

  const handleSuccessfulForm = (name, age) => {
    setUsesrs((prevUsers) => {
      return [{
        name: name,
        age: age,
        id: Math.random().toString(),
      }, ...prevUsers]
    })
  }

  return (
    <div>
      {!formValid && <ErrorModal title="Oh no" message="try again"></ErrorModal>}

      <AddUser onInvalidForm={handleInvalidForm} onSuccessfulForm={handleSuccessfulForm}></AddUser>

      <UsersList users={users}></UsersList>

    </div>
  );
}

export default App;
