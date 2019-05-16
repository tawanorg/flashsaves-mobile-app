import { createSelector } from 'reselect'
import { initialState } from './reducer';

const stateDomain = state => state.homePage || initialState;

export const makeSelectDomain = createSelector(
  stateDomain,
  (state) => state
)
 
export default stateDomain;
