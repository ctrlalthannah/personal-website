import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { projectText } from './paragraphs/projectText';
import { aboutText } from './paragraphs/About';
import About from './components/About';

function App() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* About Section */}
      <div id="<about/>" style={{padding: '2rem' }}>
      <About />
      </div>





      {/* Footer */}
      <div style={{ width: '100%' }}>This is the footer</div>
    </div>
  );
}

export default App;