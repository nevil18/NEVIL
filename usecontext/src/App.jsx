import { createContext, useState } from 'react';
import './App.css';
import Childa from './component/Childa.jsx'; 
// Creating Theme Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id='id1' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <Childa />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
