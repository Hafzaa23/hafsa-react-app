import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { Tiriye } from "./components/Counter";
import ThemeToggle from "./components/Themeswicher";
import Clicker from "./components/Clicker";
import Inputer from "./components/inputer";
import WelcomeMessage from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";
import Userlist from "./components/UserList";
function App() {
  return (
    <>
      <ThemeToggle />
      <Userlist />
      <Header />
      <Notification hasNewMessages={true} />
      <Dashboard IsloggeIN={true} />
      <Inputer />
      <Greeting name="Hafsa" surname="Ahmed" />

      <WelcomeMessage isLoggedIn={true} />
      <Clicker />
      <Tiriye />
    </>
  );
}

export default App;
