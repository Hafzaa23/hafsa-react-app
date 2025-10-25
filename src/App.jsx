import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Greeting name="Hafsa" surname="Ahmed" />

      <Header />
      <Header />
      <Header />
    </div>
  );
}

export default App;
