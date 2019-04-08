import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import logo from '../logo.svg';
import './AlbumsListContainer.css'
import { connect } from 'react-redux';
import { setAlbums } from '../actions/albums'

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.props.setAlbums(response.body))
  }

  render() {
    return this.props.albums ?
      <div className="album-container">
        <AlbumsList albums={this.props.albums} />
      </div> :
      <div className="album-container">
        <div class="loading">
          'Loading...' <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { setAlbums })(AlbumsListContainer)