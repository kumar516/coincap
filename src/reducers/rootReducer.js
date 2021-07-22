import { GET_LIST } from "../actions/constants";

export default function Reducers(state = {}, action) {
    switch (action.type) {
        case GET_LIST:
            return ({ ...state, list: action.payload })
        default:
            return state;
    }
}