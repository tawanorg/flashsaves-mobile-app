import { all } from 'redux-saga/effects'
import HomePage from 'containers/HomePage/saga';

function* root() {
  yield all([
    HomePage(),
  ])
}

export default root;