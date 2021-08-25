import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {forgotPassword} from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const ForgotPasswordToken = ({location, history}) => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const {msgSuccess, msg} = useSelector(state => state.userUpdate)
    
    const submitHandler = (e) => {
        e.preventDefault()

        // Dispatch ForgotPassword
        dispatch(forgotPassword(email))
    }

    useEffect(() => {
        if(msgSuccess === true && msg){
            alert('Check you email for reset password link');

            // Clear Fields
            setEmail('')
        } else if(msgSuccess === false) {
            alert('Please add a valid email');

            // Clear Fields
            setEmail('')
        }
    }, [msgSuccess])

    return( 
     <FormContainer>
        <h1>Forgot Password</h1>
        {/* {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />} */}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address </Form.Label>
                    <Form.Control type='email' placeholder='Enter email'
                        value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
            </Form.Group>
            <Button className='mt-3' type="submit" variant="primary">
                Submit
            </Button>
        </Form>
    </FormContainer>
    )
}

export default ForgotPasswordToken
