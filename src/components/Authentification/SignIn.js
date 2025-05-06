import React from 'react'

export default function SignIn() {
  return (
    <div className='signIn'>
        <form>
                  <div className="inputBox">
                      <input type="text" name="name" id="input_name" placeholder="Your name" />
                  </div>
                  <div className="inputBox">
                      <input type="text" name="lastname" id="input_lastname" placeholder='Your lastname'/>
                  </div>
                  <div className="inputBox">
                      <input type="email" name="email" id="input_email" placeholder='Your email address'/>
                  </div>

                  <button type="submit">Sign In</button>
              </form>
    </div>
  )
}
