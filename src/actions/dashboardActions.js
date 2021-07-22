import { GET_LIST } from "./constants";

export const getData = () => {
    console.log("madhu")
    return (dispatch) => {
        fetch(`https://api.coincap.io/v2/assets`)
            .then(response => response.json())
            .then(state => dispatch({
                type: GET_LIST,
                payload: state.data
            }));
    }
}
