import React, {Component} from 'react';
import logo from './logo.svg';
class ListContact extends Component {
  render(){
    const {profiles ,users, movies} = this.props

  return (
    <div>
     <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Favorite Movies</h2>
        <ol>
          {profiles.map((profile)=>(<li key={profile.id}>
			<div>
             <strong> <span>{users[profile.userID]["name"]}</span></strong>
			  <span>'s favorite movie is </span>
			  <strong><span>{movies[profile.favoriteMovieID].name}</span></strong>
			</div>
			</li>)
 			)}
        </ol>
    </div>
  )
}
}
export default ListContact;