import * as React from 'react'
import './AlbumsList.css'

export default function AlbumsList(props) {
  return (
    <div>
      <h1>All Albums</h1>

      There are {props.albums.length} albums available

      <ul class="album-list">
        {props.albums.map(album => {
          // console.log(album)
          return <li key={album.id}>{album.title}</li>
        })
        }
      </ul>

    </div>
  )
}
