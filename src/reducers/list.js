function list(state = {
    data: [],
    loading: true
}, action) {
    switch(action.type) {
        case "LIST_UPDATA_SUCCESS":
            return {
                loading: false,
                data: action.data
            }
        case "LIST_UPDATA_ERROR":
            return {
                loading: false,
                data: []
            }
        default: 
            return state;
    }
}

export default list;