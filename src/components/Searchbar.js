import React from 'react';
import Bulma from '../../node_modules/bulma/css/bulma.css';

class Searchbar extends React.Component {
  state = { textInput: '', searchFlag: false };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.textInput); //passback textInput to App
    this.setState({ searchFlag: true });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search for a video.."
                onChange={(e) => this.setState({ textInput: e.target.value })}
              ></input>
            </div>
          </div>
        </form>
        {this.state.searchFlag && this.state.textInput.length !== 0 && (
          <h4 className="subtitle has-text-centered">
            Searching for: <b>{this.state.textInput}</b>
          </h4>
        )}
      </div>
    );
  }
}

export default Searchbar;
