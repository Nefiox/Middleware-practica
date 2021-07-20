const userData = require('../data/userData.json')
function userAccess(req, res, next) {
    let userName = req.query.user;
    
    let userInQuery = userData.find(dbUser => dbUser.first_name === userName);
    
    req.user = userInQuery;

    next();    
};

module.exports = userAccess;