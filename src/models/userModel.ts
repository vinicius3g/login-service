import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../database'

interface User {
    id: number
    username: string;
    email: string;
    password_hash: string;
    created_at: Date
    updated_at: Date
}

export function createUserModel(sequelize: Sequelize) {
    return sequelize.define<any, User>('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    });
}

export const User = createUserModel(sequelize);