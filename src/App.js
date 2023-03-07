
import './App.css';

import Navbar from "./Components/Navbar"
import LoginForm from "./Components/LoginForm"

import Button from './Components/Button';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Navbar></Navbar>
      <LoginForm onClick={handleClick} label="submit"> </LoginForm>
    </div>
  );
};

export default App;
