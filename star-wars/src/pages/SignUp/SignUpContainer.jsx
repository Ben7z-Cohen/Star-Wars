import React from 'react'
import SignUpForm from './SignUpForm';


const SignUpContainer = () => {
    return (
        <article className="br3 ba b--black-10 mv4 mw6 shadow-5 center">
            <main className="pa4 black-80 ">
                <legend className="f2 fw6 ph0 mh0 center">Sign Up</legend>
                <SignUpForm/>
            </main>
        </article>
    )
}

export default SignUpContainer