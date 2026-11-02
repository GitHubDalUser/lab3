const VALID_STATUSES = ['Playing', 'Completed', 'Wishlist'];
const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;
const validateGame = (req, res, next) => {
  const { title, platform, status, rating } = req.body;
  let message = null;
  if (!isNonEmptyString(title)) {
    message = 'title is required and must be a non-empty string';
  } else if (!isNonEmptyString(platform)) {
    message = 'platform is required and must be a non-empty string';
  } else if (!VALID_STATUSES.includes(status)) {
    message = `status must be one of: ${VALID_STATUSES.join(', ')}`;
  } else if (typeof rating !== 'number' || Number.isNaN(rating)) {
    message = 'rating is required and must be a valid number';
  }
  if (message) {
    const err = new Error(message);
    err.status = 400;
    return next(err);
  }
  next();
};
export default validateGame;
