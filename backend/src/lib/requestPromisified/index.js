import request from 'request';

// this function create the normal request object in a promise.
const requestPromisified = ({
  url,
  method,
  json,
  headers,
}) => new Promise((resolve, reject) => {
  request({
    url,
    method,
    json,
    headers,
  }, (error, response) => {
    if (error) {
      reject(error);
    } else {
      resolve(response);
    }
  });
});

export default requestPromisified;
