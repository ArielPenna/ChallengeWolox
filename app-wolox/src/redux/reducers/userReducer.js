import { CREATE_USER, GET_TECHS } from '../actions/constants';

const initialState = {
  user: {},
  techs: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };

    default:
      return state;
  }
}
// export const userGet = (state) => state.user;
// export const techsGet = (state) => state.techs;
