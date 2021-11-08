import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";


function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <h2>Let's get started!</h2>
    </React.Fragment>
  );
}

export default App;
