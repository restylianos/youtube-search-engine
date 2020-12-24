import React from 'react';
class Navbar extends React.Component {
  state = { darkModeText: 'Dark Mode' };

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
        {/* <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-rounded"
                onClick={() => {
                  if (this.state.darkModeText === 'Dark Mode') {
                    this.setState({ darkModeText: 'Default Mode' });
                  } else {
                    this.setState({ darkModeText: 'Dark Mode' });
                  }
                }}
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                {this.state.darkModeText}
              </a>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Navbar;
