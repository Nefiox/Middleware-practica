const controller = {
    index: (req, res) => {
        res.render('index');
    },
    userAccess: (req, res) => {
        res.send('ok')
    }
}

module.exports = controller;