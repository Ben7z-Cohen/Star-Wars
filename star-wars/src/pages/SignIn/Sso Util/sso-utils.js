import google from './icons/google.svg';
import { SignInWithGoogle } from '../../../firebase/firebase-utils'

export const ssoFactory = {
    Google: {
        name: 'Google',
        url: SignInWithGoogle,
        icon: google
    }
}