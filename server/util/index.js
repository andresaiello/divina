const errors = {
  needLogin: 'User not logged in',
  default: 'Missing required param',
};

module.exports = {
  missing: (error = 'default') => {
    throw new Error(errors[error]);
  },
  checkOwnership: (loggedUser, author) => {
    const authorId = author._id && author._id.toString();
    const loggedUserId = loggedUser._id && loggedUser._id.toString();
    if (!loggedUserId) throw new Error('Authentication needed');
    if (authorId !== loggedUserId) throw new Error("Post author and logged user don't match");
  },
};
