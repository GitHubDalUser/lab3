const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || 'Internal Server Error';
  if (err.type === 'entity.parse.failed') {
    status = 400;
    message = 'Malformed JSON in request body';
  }
  res.status(status).json({ error: { status, message } });
};
export default errorHandler;
