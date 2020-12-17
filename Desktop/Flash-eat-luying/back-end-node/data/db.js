const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ppcao363:ppcao363@cluster0.mktvq.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

module.exports = mongoose;
