import React from 'react';
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://github.com/restylianos">
            <img
              src="https://img.icons8.com/bubbles/200/000000/github.png"
              alt="Restylianos Github"
              width="40"
              height="20"
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
