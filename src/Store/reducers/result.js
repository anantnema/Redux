import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  if(action.type===actionTypes.STORE_RESULT){
    return {
      ...state,
      results: state.results.concat({id: new Date() ,value: action.result})
    }
  }
  else if(action.type===actionTypes.DELETE_RESULT){
    // const id=2;
    // const newArray = [...state.results];
    // newArray.splice(id,1);
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return {
      ...state,
      results: updatedArray
    }
  }
  return state;
}

export default reducer;
