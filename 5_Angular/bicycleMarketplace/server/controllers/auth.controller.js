const User = require('mongoose').model('User');

module.exports = {
    login(request, response) {
        const { username, password } = request.body;
        User.findOne({ username })
            .then(user => {
                if(!user) {
                    throw Error();
                }
            return User.validatePassword(password, user.password).then(() => {
                console.log('found', username, 'attempting to log in user:', user);
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
    logout(request, response) {
        console.log('logging out...', request.session.user);
        //clear session
        request.session.destroy();
        console.log(request.session.user);
        //clear cookies
        response.clearCookie('userID');
        response.clearCookie('expiration');
        response.json(true);
    }
};

function completeLogin(request, response, user) {
    //save user to session
    request.session.user = user.toObject();
    console.log(request.session.user);
    //make sure password isn't saved in session
    delete request.session.user.password;

    //set cookies
    response.cookie('userID', user._id.toString());
    response.cookie('expiration', Date.now() + 86400 * 1000);

    response.json(user);
}
