const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://graphqluser:IGJ7ldzXQGhzJ7wx@cluster0-ab55r.mongodb.net/graphql', {       
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;