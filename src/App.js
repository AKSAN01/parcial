import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import Login from './components/Login';
import RobotsPage from './components/RobotsPage';
import './App.css'; 
import messages_es from './lang/es.json';
import messages_en from './lang/en.json';


const messages = {
    'es': messages_es,
    'en': messages_en
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const language = navigator.language.split(/[-_]/)[0]; 
  const userMessages = messages[language] || messages.en; 

  const handleLogin = (username, password) => {
    if (username === 'usuario' && password === 'password') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <IntlProvider locale={language} messages={userMessages}>
      <div className="App">
        {isAuthenticated ? <RobotsPage /> : <Login onLogin={handleLogin} />}
      </div>
    </IntlProvider>
  );
}

export default App;