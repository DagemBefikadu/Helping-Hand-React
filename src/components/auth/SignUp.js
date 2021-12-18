// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = (props) => {
    const buttonStyle = {
		border: '#BCCCE0',
		color: 'white',
		backgroundColor: '#574B60'
	}

    const backgroundTextColor = {
		border: '#BCCCE0',
		color: '#3F334D',
	}
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] 
    = useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate()

	const onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, setUser } = props

        const credentials = {email, password, passwordConfirmation, name}

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
                // setName('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        <div className='row' style={backgroundTextColor}>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign Up</h3>
                <Form onSubmit={onSignUp}>
                <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            name='name'
                            value={name}
                            placeholder='Enter name'
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='passwordConfirmation'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Group>
                    <Button style={buttonStyle} type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )

}

export default SignUp