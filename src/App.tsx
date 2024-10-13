import { useState } from 'react';
import './App.css';
import BackgroundRemover from 'react-selfie-ai-background-remover';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute(
      'data-theme',
      isDarkTheme ? 'light' : 'dark'
    );
  };

  return (
    <div className="wrapper">
      <header className="header">
        <h1>React Selfie Background Remover</h1>
        <button className="theme-switcher" onClick={toggleTheme}>
          Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
        </button>
      </header>

      <BackgroundRemover
        allowDownload={true}
      />

      <footer className="footer">
        <p>
          <a href="https://www.npmjs.com/package/react-selfie-ai-background-remover" target="_blank" rel="noopener noreferrer">
            NPM Package
          </a>
          {' | '}
          <a href="https://github.com/AleksPetrakov/react-selfie-ai-background-remover" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
          {' | '}
          <a href="https://www.linkedin.com/in/agpetrakov/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
