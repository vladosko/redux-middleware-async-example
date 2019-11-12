import { isPromise } from "../helpers/is-promise";

export const customPromise = ({dispatch}) => {
    return (next) => (action) => {
        next(action);
        return isPromise(action.payload)
            && action.payload
                .then(result => dispatch({ type: `${action.type}_SUCCESS`, payload: result }))
                .catch(error => {
                    dispatch({ type: `${action.type}_ERROR`, error });
                    return Promise.reject(error);
                })
    }
};
