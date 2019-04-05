import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import logo from '../logo.svg';
import './AlbumsListContainer.css'
import { connect } from 'react-redux';
import { helloWorld } from '../actions/test'
import { addAlbum } from '../actions/addAlbum'

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
    this.props.helloWorld('Alice', 'Seriously Alice')
    this.props.addAlbum(5, 'hi')
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

export default connect(null, { helloWorld, addAlbum })(AlbumsListContainer)