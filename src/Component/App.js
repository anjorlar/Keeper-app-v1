import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Note from './Note/Note';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Note topic='lorem4' content='lorem6' date='2020' />
      <Note topic='lorem1010' content='lorem' date='20298' />
      <Note topic='lorem4' content='lorem6' date='2020' />
      <Note topic='lore' content='lrem6' date='0o0' />
    </div>
  );
}

export default App;
