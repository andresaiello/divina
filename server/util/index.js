const errors = {
  needLogin: 'User not logged in',
  default: 'Missing required param',
};

module.exports = {
  missing: (error = 'default') => { throw new Error(errors[error]); },
};
