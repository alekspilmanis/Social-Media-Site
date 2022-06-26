import './App.css';
import Navbar from "./components/Navbar.js";
import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm";

const books = [
  {
      id: 12334,
      title: "Interview With the Vampire"
  },
  {
      id: 34553,
      title: "The Lovely Bones"
  },
  {
      id: 55555,
      title: "On a Pale Horse"
  }
]


function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default App;
