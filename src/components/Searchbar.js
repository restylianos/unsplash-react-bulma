import React from 'react';
import bulma from '../../node_modules/bulma/css/bulma.css';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      placeHolderText: this.props.placeHolderText,
      errorMsg: this.props.errorMsg,
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault(); //prevent default behavior so we do not refresh the whole DOM
    this.props.onSubmit(this.state.userInput);
    //pass back whatever user typed to our App component for further handling
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="field container">
            <div className="label">Search</div>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder={this.state.placeHolderText}
                onChange={(e) => this.setState({ userInput: e.target.value })}
              ></input>
              <p className="has-text-centered">Searching for: {this.state.userInput}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
