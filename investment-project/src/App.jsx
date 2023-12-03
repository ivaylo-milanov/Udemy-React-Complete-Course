import { useState } from "react";
import Header from "./components/Header.jsx";
import Result from "./components/Result.jsx";
import UserInput from "./components/UserInput.jsx";
import { calculateInvestmentResults } from "./util/investment.js";

const INITIAL_USER_DATA = {
  initialInvestment: 10000,
  annualInvestment: 100,
  expectedReturn: 1,
  duration: 1
};

function App() {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);

  function handleUserDataChange(event) {
    setUserData(prevUserData => {
      const {name, value} = event.target;
      return {
        ...prevUserData,
        [name]: Number(value)
      }
    });
    console.log(userData);
  }

  const annualData = calculateInvestmentResults(userData);

  return (
    <main>
      <Header />
      <UserInput onChange={handleUserDataChange} />
      <Result annualData={annualData}/>
    </main>
  );
}

export default App;
