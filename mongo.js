const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MedicationApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User


// const newUser = new User({
//     email: 'test@mail.com',
//     password: '1234',
// });

// newUser.save()
//     .then(() => console.log('User added to database'))
//     .catch((err) => console.error('Error adding user:', err));


// User.find()
//   .then((users) => console.log('All users:', users))
//   .catch((err) => console.error('Error fetching users:', err));


// User.findOne({ username: 'test' })
//   .then((user) => console.log('User found:', user))
//   .catch((err) => console.error('Error finding user:', err));

// const newUser = new User({
//     username: 'joe',
//     email: 'joe@email.com',
//     password: '321',
// }).save();
