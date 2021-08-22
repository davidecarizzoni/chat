import React from 'react';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./boots/firebaseConfig";

import ChatRoom from "./components/ChatRoom";
import SignOut from "./components/auth/signOut";
import SignIn from "./components/auth/signIn";



function App() {

    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header>
                <SignOut />
            </header>

            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>

        </div>
    );
}


export default App;
