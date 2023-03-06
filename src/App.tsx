import React from 'react';
import './App.css';
import { NotificationsBoard } from './components/notifications-board';

function App() {
  return (
    <div className="App">
      <header></header>
      <nav></nav>
      <main>
        <NotificationsBoard />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
