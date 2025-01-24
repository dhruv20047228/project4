import './App.css';
import CodePalette from './Components/CodePalette/CodePalette';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
const App = () => {
  return (
    <div>
      <Navbar />
      <CodePalette />
      <Login />
      <ContactUs />
    </div>
  );
}

export default App;
