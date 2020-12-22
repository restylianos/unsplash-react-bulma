import React from 'react';
import Searchbar from './Searchbar';
import ImageListViewer from './ImageListViewer';
import Navbar from './Navbar';
import Axios from 'axios';

class App extends React.Component {
  state = { fetchedImages: [], error: false };

  onFormSubmit = (userSearchTerm) => {
    const response = Axios.get('https://api.unsplash.com/search/photos', {
      params: { query: userSearchTerm },
      headers: {
        Authorization: 'Client-ID jALTnkzv9pITsufQwnvJXeCPbg1YWFrvTutrOJeYKqk',
      },
    })
      .then((response) => {
        this.setState({ fetchedImages: response.data.results });
      })
      .catch((error) => {
        this.setState({ error: true });
        console.log(error); //just in case...
      });
  };

  render() {
    if (this.state.error) {
      return <div class="notification is-danger">Something went wrong. Try again later..</div>;
    }
    return (
      <div>
        <Navbar />
        <Searchbar
          placeHolderText="Type something here.."
          errorMsg="You need to type something first"
          onSubmit={this.onFormSubmit}
        />
        <p className="has-text-centered">
          {this.state.fetchedImages.length > 0 && !this.state.error && (
            <b>Found {this.state.fetchedImages.length} images</b>
          )}
        </p>
        <ImageListViewer images={this.state.fetchedImages} />
      </div>
    );
  }
}

export default App;
