import { Sequelize, DataTypes } from 'sequelize';
import config from '../../core/utilities/postgresql_connection.js';

const sequelize = new Sequelize(config.database);

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users', 
    schema: 'public', 
    timestamps: false
});

export default User;