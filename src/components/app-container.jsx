import React from 'react';
import Types from 'prop-types';
import satoriLogo from '../images/SatoriLogoWithText.svg';
import githubLogo from '../images/github.svg';

class AppContainer extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <div className="headerBar">
          <img src={satoriLogo} className="headerBar-logo" alt="Satori Logo" />
          <nav className="headerBar-nav">
            <a className="button-github" href="https://github.com/satori-com/chat">
              Go to GitHub
              <img className="github-icon" src={githubLogo} alt="GitHub" />
            </a>
            <a className="button-signup" href="https://developer.satori.com/#/signup">Sign up</a>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: Types.object,
};

export default AppContainer;
