import React from 'react';
import './index.css';
import { GH_TOKEN_URL } from '../../utils/env';

const SignInWithGithub = () => {
  const handleButtonClick = () => window.open(GH_TOKEN_URL, 'githubOuth');
  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="signin-github"
    >
        Sign in with github
    </button>
  );
};

export default SignInWithGithub;
