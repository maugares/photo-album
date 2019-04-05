import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'

export default class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
  }

  render() {
    return this.state.albums ? <AlbumsList albums={this.state.albums} /> : 'Loading...'
  }
}