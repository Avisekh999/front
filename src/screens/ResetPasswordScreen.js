import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {resetPassword} from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const ResetPasswordToken = ({location, history, match}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()

    const {resetMsgSuccess} = useSelector(state => state.userUpdate)
    
    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            alert('Passwords do not match!')
        } else if (resetMsgSuccess) {
            // Set Notification
            alert('Pasword successfully changed')
        } else {
            alert('Pasword successfully changed')
            dispatch(resetPassword(password, match.params.id))
        }

        // Clear Fields
        setPassword('')
        setConfirmPassword('')
    }

    return( 
     <FormContainer>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>New Password </Form.Label>
                    <Form.Control type='password' placeholder='Enter new Password'
                        value={password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>Confirm New Password </Form.Label>
                    <Form.Control type='password' placeholder='Enter new email'
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
            </Form.Group>
            <Button className='mt-3' type="submit" variant="primary">
                Update Password
            </Button>
        </Form>
    </FormContainer>
    )
}

export default ResetPasswordToken
