const controller = {
    index: (req, res) => {
        res.render('index');
    },
    userAccess: (req, res) => {
        res.render('dashboard', { user: req.user })
    }
}

module.exports = controller;