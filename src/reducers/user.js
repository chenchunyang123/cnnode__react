function user(state = {
    data: {
        avatar_url: '',
        create_at: '',
        githubUsername: '',
        loginname: '',
        recent_replies: [],
        recent_topics: [],
        score: ''
    },
    loading: true
}, action) {
    switch(action.type) {
        case "USER_UPDATA":
            return {
                data: state.data,
                loading: true
            }
        case "USER_UPDATA_SUCCESS":
            return {
                data: action.data.data,
                loading: false
            }
        case "USER_UPDATA_ERROR":  
            return {
                data: {
                    avatar_url: '',
                    create_at: '',
                    githubUsername: '',
                    loginname: '',
                    recent_replies: [],
                    recent_topics: [],
                    score: ''
                },
                loading: false
            }
        default: 
            return state;
    }
}

export default user;