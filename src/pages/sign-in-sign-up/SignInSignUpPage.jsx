import React from "react";

import './SignInSignUpPage.scss';
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn/>
      <SignUp/>
    </div>

  );
}

export default SignInSignUpPage;