import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'

import './App.css';

function App() {
    const [isLogged, setIsLogged] = useState(false)

    return (
        <div className="App">
            {
                isLogged ?
                    <Dashboard setIsLogged={setIsLogged}/>
                : 
                    <LoginPage setIsLogged={setIsLogged}/>
            }
        </div>
    );
}

export default App;
