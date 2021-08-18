import {
    MAIL_SUCCESS,
    MAIL_REQUEST,
    MAIL_FAIL
    
} from "../constants/mailConstants"





export const userMailReducers = (state={ },action) =>{
    switch(action.type){
        case MAIL_REQUEST:
            return {loading: true}
        case MAIL_SUCCESS:
            return {loading:false, userInfo: action.payload}
        case MAIL_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state

    }
}
