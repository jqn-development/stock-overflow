import React from 'react';
import SearchBarContainer from './searchbar_container';
import { Link, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $("#navbar-container").addClass("active");
      }
      else {
        $("#navbar-container").removeClass("active");
      }
    });

    return (
      <div className="navbar" id="navbar-container">
        <div className="navbar-left">
          <Link to="/home">
            <img
              src="https://raw.githubusercontent.com/avelasco920/stocks-overflow/master/app/assets/images/robinhood%20black%20logo.png"
              id="black-logo-small"/>
          </Link>
          <SearchBarContainer className="white-input" id="search-bar"/>
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/account" className="nav-link">Account</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
