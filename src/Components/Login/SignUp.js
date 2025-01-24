import React from 'react'

export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1> 
      <h5>Name:  
        <input type="text" />
      </h5>
      <h5>Email Id:
        <input type="text" />
      </h5>
      <h5>Password: 
        <input type="password" />
      </h5>
      <h5>Confirm Password:
        <input type="password" />
      </h5>
      <button>Create an account</button>
      
    </div>
  )
}
