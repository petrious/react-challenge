import "./App.css";
import Words from "./components/Word";

function App() {
  return (
    <div className="App">
      <div className="CardContainer">
        <div className="CardWords">
          <Words />
        </div>
        <div className="InputContainer">
          <div className="InputContainerChildren">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" />
          </div>
          <div className="InputContainerChildren">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" />
          </div>
        </div>
        <button className="button-verde" type="submit">Breakify</button>
      </div>
    </div>
  );
}

export default App;
