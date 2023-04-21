import React, { Component } from 'react';
import styles from './App.css';
import Login from './Components/login/login'
import {BrowserRouter,Route,Routes} from 'react-router-dom';





class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
