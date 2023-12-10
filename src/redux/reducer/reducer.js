
let initialState= {
    contactList : [],
    keyword: ""
};

function reducer(state=initialState, action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contactList:[
                    ...state.contactList,
                    { 
                        name:action.payload.name,
                        phoneNumber:action.payload.phoneNumber
                    }
                ]
            }
        case "SEARCH_USERNAME": 
            return {
                ...state, keyword: action.payload.keyword
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;