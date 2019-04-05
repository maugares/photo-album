import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <AlbumsListContainer />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
