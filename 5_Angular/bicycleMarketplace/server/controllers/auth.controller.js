const User = require('mongoose').model('User');

module.exports = {
    login(request, response) {
        const { email, password } = request.body;
        User.findOne({ email })
            .then(user => {
                if(!user) {
                    throw Error();
                }
            return User.validatePassword(password, user.password).then(() => {
                //handle login
                completeLogin(request, response, user);
            });
        })
            .catch(_error => {
                response.status(403).json({ error: 'user/password not found' });
        });  
    },
    register(request, response) {
        console.log('registering user', request.body);
        User.create(request.body)
            .then(user => {
                // handle login
                completeLogin(request, response, user);
            })
            .catch(console.log);
    },
    logout() {
        //clear session
        request.session.destroy();
        //clear cookies
        response.clearCookie('userID');
        response.clearCookie('expiration');
        response.json(true);
    }
};

function completeLogin(request, response, user) {
    //save user to session
    request.session.user = user.toObject();
    //make sure password isn't saved in session
    delete request.session.user.password;

    //set cookies
    response.cookie('userID', user._id.toString());
    response.cookie('expiration', Date.now() + 86400 * 1000);
    response.json(user);
}
