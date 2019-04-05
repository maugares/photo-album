import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import logo from '../logo.svg';
import './AlbumsListContainer.css'
import { connect } from 'react-redux';

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
    this.props.dispatch({
      type: 'HELLO_WORLD',
      payload: {
        firstName: 'Alice',
        lastName: 'McDog',
      }
    })
  }

  render() {
    return this.state.albums ?
      <div className="album-container">
        <AlbumsList albums={this.state.albums} />
      </div> :
      <div className="album-container">
        <div class="loading">
          'Loading...' <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
  }
}

export default connect()(AlbumsListContainer)