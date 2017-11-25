import { connect } from 'react-redux';

import {
  fetchCompanies,
  // stockIndexHasMounted
} from '../../actions/companies_actions';

import StockIndex from './stock_index';
import {
  selectInvestedCompanies,
  selectWatchingCompanies
} from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    companiesInvested: selectInvestedCompanies(state),
    loading: state.ui.loading.indexLoading,
    // stockIndexLoading: state.ui.loading.stockIndexLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  // stockIndexHasMounted: () => dispatch(stockIndexHasMounted())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockIndex);
