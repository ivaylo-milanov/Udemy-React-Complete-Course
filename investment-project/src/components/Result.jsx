import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
  const annualData = calculateInvestmentResults(input);
  
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {annualData.map(investment => {
          const totalInterest =
            investment.valueEndOfYear -
            investment.annualInvestment * investment.year -
            initialInvestment;
          const investedCapital = investment.valueEndOfYear - totalInterest;

          return (
            <tr key={investment.year}>
              <td>{investment.year}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
