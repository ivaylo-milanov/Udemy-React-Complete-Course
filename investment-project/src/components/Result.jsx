import { formatter } from "../util/investment";

export default function Result({ annualData }) {
  function calculateTotalInterest(index) {
    return annualData.slice(0, index + 1).reduce((total, cur) => total + cur.interest, 0);
  }

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
        {annualData.map((investment, index) => {
          const totalInterest = calculateTotalInterest(index);
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
