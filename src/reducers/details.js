function details(state = {
    data: {
        author: {
            loadingname: '',
            avatar_url: ''
        },
        replies: [],
        reply_count: 0,
        create_at: '',
        good: true
    },
    loading: true
}, action) {
    switch(action.type) {
        case "DETAILS_UPDATA":
            return {
                data: state.data,
                loading: true
            }
        case "DETAILS_UPDATA_SUCCESS":
            return {
                data: action.data.data,
                loading: false
            }
        case "DETAILS_UPDATA_ERROR":
            return {
                data: {
                    author: {
                        loadingname: '',
                        avatar_url: ''
                    },
                    replies: [],
                    reply_count: 0,
                    create_at: '',
                    good: true
                },
                loading: true
            }
        default: 
            return state;
    }
}

export default details;