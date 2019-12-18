import React, { useEffect } from 'react';
import queryString from 'query-string';
import { REGISTER_GITHUB_OAUTH_TOKEN_URL, GITHUB_OAUTH_URL } from '../../utils/env';

const GithubOAuthPage = () => {
  const sendTokenToServer = async code => {
    try {
      const url = `${REGISTER_GITHUB_OAUTH_TOKEN_URL}/${code}`;
      const token = localStorage.getItem('token');
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await fetch(url, options);
      return res;
    } catch (err) {
      return err;
    }
  };

  const closeWindow = () => {
    window.open('', '_parent', '');
    window.close();
  };

  useEffect(() => {
    const parsedQuery = queryString.parse(window.location.search);
    const { code } = parsedQuery;
    if (!code) {
      const githubUrl = GITHUB_OAUTH_URL;
      window.location.replace(githubUrl);
    } else {
      sendTokenToServer(code)
        .then(response => response.json())
        .then(response => {
          if (response.accessToken) {
            closeWindow();
          }
        }).catch(err => console.log(err));
    }
  }, []);

  return (
    <div>
      Login in....
    </div>
  );
};

export default GithubOAuthPage;
