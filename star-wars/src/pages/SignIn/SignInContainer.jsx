import React from 'react';
import SignInForm from './SignInForm';
import Sso from './Sso';
import { ssoFactory } from './Sso Util/sso-utils';
import { Link } from 'react-router-dom';

const SignInContainer = () => {

    return (
        <article className="br3 ba b--black-10 mv4 mw6  shadow-5 center">
            <main className="pa4 black-80">
                <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
                <SignInForm />
                <div className="flex">
                    <Sso url={ssoFactory.Google.url} name={ssoFactory.Google.name}
                        icon={ssoFactory.Google.icon} />
                </div>
                <div className="flex justify-between">
                    <Link to={"/sign-up"} >
                        <a class="mt3 f6 link dim black db">Sign up</a>
                    </Link>
                </div>
            </main>
        </article>
    )
}

export default SignInContainer