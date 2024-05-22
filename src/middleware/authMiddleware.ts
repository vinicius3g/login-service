import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/auth';

export interface AuthRequest extends Request {
    user?: any;
}

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            const user = verifyToken(token);
            req.user = user;
            next();
        } catch (error) {
            res.status(403).json({ error: 'Token inválido ou expirado' });
        }
    } else {
        res.status(401).json({ error: 'Token não fornecido' });
    }
};