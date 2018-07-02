const Note = require('mongoose').model('Note');



module.exports = {
    index(request, response) {
        Note.find({})
            .then(notes => response.json(notes))
            .catch(console.log);
     },
    create(request, response) {
        Note.create(request.body)
            .then(note => response.json(note))
            .catch(error => {
                const errors = Object.keys(error.errors)
                    .map(key => error.errors[key].message);

                response.json(errors);
            });
     },
};