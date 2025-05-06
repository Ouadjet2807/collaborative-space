import React, { useState } from 'react'
import SignIn from './Authentification/SignIn';
import SignUp from './Authentification/SignUp';

export default function Account() {

  const [signChoice, setSignChoice] = useState("signIn")

  const renderSignChoice = () => {
    switch (signChoice) {
      case "signIn":
        return <SignIn />
      case "signUp":
        return <SignUp />

      default:
        return <SignIn />
    }
  }


  return (
    <div className='account'>
      <h1>Account</h1>

      <ul className="signChoices">
        <li id="signIn" onClick={(e) => setSignChoice(e.target.id)} className={signChoice === "signIn" ? "active" : ""}>Sign In</li>
        <li id="signUp" onClick={(e) => setSignChoice(e.target.id)} className={signChoice === "signUp" ? "active" : ""}>Sign Up</li>
      </ul>

    {renderSignChoice()}
    </div>
  )
}
