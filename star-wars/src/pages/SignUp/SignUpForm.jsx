import React, { useState } from 'react'
import InputBox from '../../components/InputBox'
import SubmitButton from '../../components/SubmitButton';
import { useHistory } from "react-router-dom";
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils'

const SignUpForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayName, setName] = useState('')
    const history = useHistory()

    const handleSubmit = async event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("password doesn't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, { displayName })
        }
        catch (error) {
            alert(error) //Todo: handle error gracefully 
            return;
        }
        history.push('/sign-in')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                <div className="mv3">
                    <InputBox value={displayName} onChange={setName}
                        name='Name' typ='text' />
                </div>
                <div className="mv3">
                    <InputBox value={email} onChange={setEmail}
                        name='Email' type='email' />
                </div>
                <div className="mv3">
                    <InputBox name="Password" value={password}
                        onChange={setPassword} type='password' />
                </div>
                <div className="mv3">
                    <InputBox name='Confirm password' value={confirmPassword}
                        onChange={setConfirmPassword} type='password' />
                </div>
                <div className='flex justify-center'>
                    <SubmitButton name="Sign up" />
                </div>
            </fieldset>
        </form>
    )
}
export default SignUpForm;