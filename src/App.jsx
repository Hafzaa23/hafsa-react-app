import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Greeting name="Hafsa" surname="Ahmed" />
      <Counter />
    </div>
  );
}

export default App;
