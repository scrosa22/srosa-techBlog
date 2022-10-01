const withAuth = async (req, res, next) => {
    if (!req.session.logged_in) {
      res.render('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;