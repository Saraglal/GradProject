import React, { Component } from 'react';
import styles from './App.css';
import Login from './Components/login/login';
import { red } from '@mui/material/colors';





class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header>
            <Login />
        </header>
      </div>
    );
  }
}

export default App;
