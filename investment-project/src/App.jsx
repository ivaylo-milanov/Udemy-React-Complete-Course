import { useState } from "react";
import Header from "./components/Header.jsx";
import Result from "./components/Result.jsx";
import UserInput from "./components/UserInput.jsx";

const INITIAL_USER_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);

  const inputIsValid = userData.duration >= 1;

  function handleUserDataChange(event) {
    setUserData(prevUserData => {
      const {name, value} = event.target;
      return {
        ...prevUserData,
        [name]: Number(value)
      }
    });
  }

  return (
    <main>
      <Header />
      <UserInput onChange={handleUserDataChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Result input={userData}/>}
    </main>
  );
}

export default App;
