export default function UserInput({onChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input name="initialInvestment" type="number" onChange={onChange} defaultValue={10000}/>
        </div>
        <div>
          <label>Annual Investment</label>
          <input name="annualInvestment" type="number" onChange={onChange} defaultValue={100}/>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input name="expectedReturn" type="number" onChange={onChange} defaultValue={1}/>
        </div>
        <div>
          <label>Duration</label>
          <input name="duration" type="number" onChange={onChange} defaultValue={1}/>
        </div>
      </div>
    </section>
  );
}
