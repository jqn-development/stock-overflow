import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartContainer from './chart_container';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content">
        <ChartContainer props={this.props.props} />
      </div>
    );
  }
}

export default MainContent;
