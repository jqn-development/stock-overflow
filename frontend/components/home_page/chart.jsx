import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartOverlay from './chart_overlay';

class Chart extends React.Component {
  componentWillMount() {
  }

  render() {
    const { user } = this.props;
    return (
      <div className="chart">
        <ChartOverlay user={user}/>
        <img
          src="https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/Screen%20Shot%202017-11-24%20at%203.30.55%20PM.png?raw=true"
          className="chart-placeholder"/>
      </div>
    );
  }
}

export default Chart;