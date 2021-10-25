import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [users, setUsesrs] = useState([]);


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
    <React.Fragment>
      <AddUser onSuccessfulForm={handleSuccessfulForm} ></AddUser>

      <UsersList users={users}></UsersList>

    </React.Fragment>
  );
}

export default App;
