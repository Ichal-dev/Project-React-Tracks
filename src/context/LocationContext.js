import createDataContext from '../context/createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return {...state, currentLocation: action.payload};
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};

const stopRecording = dispatch => () => {};
const addLocation = dispatch => location => {
  console.log('Hi Three!');
  dispatch({type: 'add_current_location', payload: location});
};

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation},
  {recording: false, locations: [], currentLocation: null},
);
