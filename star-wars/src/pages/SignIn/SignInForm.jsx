import React, { useState } from 'react'
import SubmitButton from '../../components/SubmitButton';
import InputBox from '../../components/InputBox'
import { auth } from '../../firebase/firebase-utils'
import { useHistory } from "react-router-dom";


const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } 
        catch (error) {
            alert(error) //Todo: handle error gracefully 
            return;
        }
        history.push('/user')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                    <InputBox value={email} onChange={setEmail} name='Email' type='email' />
                </div>
                <div className="mv3">
                    <InputBox name='Password' value={password} onChange={setPassword} type='password' />
                </div>
                <div className="flex justify-center">
                    <SubmitButton name='Sign in' />
                </div>
            </fieldset>
        </form>
    )
}
export default SignInForm