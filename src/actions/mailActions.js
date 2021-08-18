import axios from 'axios'
import {
    MAIL_REQUEST,
    MAIL_SUCCESS,
    MAIL_FAIL,
} from "../constants/mailConstants"





export const mailTo = () => async (dispatch) => {
    try {
        dispatch({
            type:MAIL_REQUEST
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        const{data} = await axios.post('/api/mails',config)

        dispatch({
            type:MAIL_SUCCESS,
            payload: data
        })

     

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: MAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
        
    }
}

