import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { AuthRequest } from '../middleware/authMiddleware';

export const createUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const newUser = await userService.createUser({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const token = await userService.loginUser({ email, password });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
};