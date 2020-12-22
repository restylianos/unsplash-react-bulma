import React from 'react';
import bulma from '../../node_modules/bulma/css/bulma.css';

class ImageListViewer extends React.Component {
  render() {
    const images = this.props.images.map(({ id, alt_description, urls }) => {
      //console.log(id, alt_description, urls.small);
      return (
        <div className="column  is-4" key={id}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-square">
                <img src={urls.small} alt={alt_description}></img>
              </figure>
            </div>
            <div className="media-content">
              <br></br>
              <p className="title is-5 has-text-centered">Description:</p>
            </div>
            <div className="content">{alt_description}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="columns is-multiline">{images}</div>
      </div>
    );
  }
}

export default ImageListViewer;
