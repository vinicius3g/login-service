import bcrypt from 'bcrypt';
import { User } from '../models/userModel';
import { generateToken } from '../utils/auth';

const SALT_ROUNDS = 10;

interface CreateUserParams {
    username: string;
    email: string;
    password: string;
}

interface LoginUserParams {
    email: string;
    password: string;
}

export const createUser = async ({ username, email, password }: CreateUserParams) => {
    const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await User.create({
        username,
        email,
        password_hash
    });

    return newUser;
};

export const loginUser = async ({ email, password }: LoginUserParams) => {
    const user = await User.findOne({ where: { email } });

    if (!user || !await bcrypt.compare(password, user.password_hash)) {
        throw new Error('Credenciais inválidas');
    }
    

    const token = generateToken({ id: user.id, email: user.email });

    return token;
};