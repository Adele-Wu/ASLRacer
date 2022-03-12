import React, { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default Login