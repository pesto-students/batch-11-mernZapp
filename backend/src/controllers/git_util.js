const gitIssueHandler = (req, res) => {
  res.status(201);
  const requestBody = req.body;
  res.send(JSON.stringify(requestBody));
  res.send('issues touched!');
};

export {
  gitIssueHandler,
};
