import { connect } from 'react-redux';
import HomeScreen from 'screens/HomeScreen';
import {
  makeSelectDomain,
} from './selectors';

const mapStateToProps = state => ({
  homePage: makeSelectDomain(state),
})

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
}
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomeScreen);
