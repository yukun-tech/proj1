import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import gravatar from 'gravatar';

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    isAdmin: { type: Boolean, default: false }
}, {
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);//加密
    this.password = await bcrypt.hash(this.password, salt);//明文加密

    if (!this.avatar) {
        this.avatar = gravatar.url(this.email, { s: '200', r: 'pg', d: 'mm' });
    }
});


export default model('User', UserSchema);
