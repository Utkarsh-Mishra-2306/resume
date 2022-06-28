 // Portfolio Website Basic Components

 // 1. NavBar
 // 2. HomePage
 // 3. Tech Stack
 // 4. Experience
 // 5. Projects 







import './App.css';
import Navbar from './Navbar/Navbar';
import HomePage from './Homepage/Homepage';
import TechStack from "./TechStack/TechStack";



function App() {
  return (
    <div className="app">
      <Navbar /> 
      <HomePage />
      <TechStack />
    </div>
  );
}

export default App;
