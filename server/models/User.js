// server/models/User.js

const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare hashed password with the provided password during login
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
