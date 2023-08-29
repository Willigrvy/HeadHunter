const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  console.log(req.session.user_type);
  if (!req.session.logged_in && req.session.user_type != 'headhunter') {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;