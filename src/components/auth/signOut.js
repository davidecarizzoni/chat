import React from 'react'
import {auth} from "../../boots/firebaseConfig";

export const SignOut = () => {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut
