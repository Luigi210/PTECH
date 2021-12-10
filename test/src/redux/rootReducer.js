

const dataState = {
    cvc: "",
    expiry: "",
    name: "",
    number: ""
}

export default function rootReducer(state=dataState, action){
    switch (action.type){
        case 'CVC':
            return {
                ...state,
                cvc: action.value
            };
        case 'Expiry':
            return {
                ...state,
                expiry: action.value
            };
        case 'Name':
            return {
                ...state,
                name: action.value
            };
        case 'Number':
            return {
                ...state,
                number: action.value
            };
        default:
            return state
    }
}
