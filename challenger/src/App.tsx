import "./App.css";
import Form from "./components/Form";
import { CardContainer } from "./components/Style";
import Words from "./components/Word";

function App() {
  return (
    <div className="App">
      <CardContainer>
        <Words />
        <Form />
      </CardContainer>
    </div>
  );
}

export default App;
