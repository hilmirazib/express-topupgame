const mongoose = require('mongoose');

let playerSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, 'email harus diisi'],
    },
    name: {
        type: String,
        require: [true, 'nama harus diisi'],
        maxlength: [225, 'panjang nama harus antara 3 - 225 karakter'],
        minlength: [3, 'panjang nama harus antara 3 - 225 karakter'],
    },
    username: {
        type: String,
        require: [true, 'nama harus diisi'],
        maxlength: [225, 'panjang username harus antara 3 - 225 karakter'],
        minlength: [3, 'panjang username harus antara 3 - 225 karakter'],
    },
    password: {
        type: String,
        require: [true, 'kata sandi harus diisi'],
        maxlength: [225, 'panjang password maksimal 225 karakter'],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y',
    },
    avatar: { type: String },
    fileName: { type: String },
    phoneNumber: {
        type: String,
        require: [true, 'nomor telpon harus diisi'],
        maxlength: [13, 'panjang nomor telpon harus antara 9 - 13 karakter'],
        minlength: [9, 'panjang nomor telpon harus antara 9 - 13 karakter'],
    },

    favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);