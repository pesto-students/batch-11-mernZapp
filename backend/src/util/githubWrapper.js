// import request from 'request';

// // run create create
// const createHook = ({
//   owner,
//   repo,
//   events,
//   urlToDeliver,
//   token,
// }) => {
//   const url = 'https://api.github.com/repos/:owner/:repo/hooks'
//     .replace(':owner', owner)
//     .replace(':repo', repo);
//   const requestData = `{
//     "name": "web",
//     "active": true,
//     "events": ${events},
//     "config": {
//       "url": ${urlToDeliver},
//       "content_type": "json",
//       "insecure_ssl": "0"
//     }
//   }`;
//   request({
//     url,
//     method: 'POST',
//     json: requestData,
//     headers: {
//       'User-Agent': owner,
//       Authorization: `token ${token}`,
//     },
//   }, (error, response, body) => {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode);
//     // Print the response status code if a response was received
//     console.log('body:', body);
//   });
// };

// const listenToStarEvent = () => {
//   createHook({
//     owner: 'harish-aka-shivi',
//     repo: 'task-manager',
//     events: [
//       'star',
//     ],
//     urlToDeliver: 'https://3be9ce52.ngrok.io/github-hook-star',
//   });
// };
