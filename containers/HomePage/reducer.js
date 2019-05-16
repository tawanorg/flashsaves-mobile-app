// import {} from './constants';

export const initialState = {
  isFetching: false,
  isFetched: false,
  isError: {
    status: false,
    message: '',
  },
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
