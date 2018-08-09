const router = require("express").Router();
const Authentication = require('../../controllers/authenticationController');
const passportService = require('../../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

// module.exports = function(app) {
//     app.get('/', requireAuth, function(req, res) {
//         res.send({ hi: "there" });
//     });
//     app.post('/signin', requireSignin, Authentication.signin);
//     app.post('/signup', Authentication.signup);
// }
// maches with api/cafamAuth
router.route("/")
    .get(requireAuth, function(req, res) {
        res.send({ hi: "there" });
    });

router.route("/signin")
    .post(requireSignin, Authentication.signin);

router.route("/signup")
    .post(Authentication.signup);

module.exports = router;