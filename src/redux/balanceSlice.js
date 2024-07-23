export const deposit = (value) => {
    return {
        type: 'balance/deposit',
        payload: value,
    }
}
export const withdraw = (value) => {
    return {
        type: 'balance/withdraw',
        payload: value, 
    }
}

export const reset = () => {
    return {
        type: 'balance/reset',
    }
}

export const balanceReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case 'balance/deposit':
            return {
                value: state.value + action.payload,
            }
        case 'balance/withdraw':
            return {
                value: state.value - action.payload,
            }
        case 'balance/reset':
            return {
                value: 0,
            }
        default:
            return state;
    }    
}