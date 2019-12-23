import React from 'react';
import Button from '@material-ui/core/Button';
import './index.css';
import { GH_TOKEN_URL } from '../../utils/env';

const SignInWithGithub = () => {
  const handleButtonClick = () => window.open(GH_TOKEN_URL, 'githubOuth');
  return (
    <>
      <Button
        type="button"
        onClick={handleButtonClick}
        className="signin-github"
        variant="outlined"
        color="secondary"
      >
       Sign in with github
      </Button>
    </>
  );
};

export default SignInWithGithub;
