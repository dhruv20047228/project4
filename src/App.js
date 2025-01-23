import './App.css';
import CodePalette from './Components/CodePalette/CodePalette';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <CodePalette />
    </div>
  );
}

export default App;
