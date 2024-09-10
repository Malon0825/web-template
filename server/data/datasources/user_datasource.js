import { Sequelize, DataTypes } from 'sequelize';
import config from '/Software App/Projects/web-template/server/utilities/postgresql_connection.js';

const sequelize = new Sequelize(config.database);

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
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
    tableName: 'users',  // Explicitly specify the table name
    schema: 'public',    // Specify the schema if needed
    timestamps: false    // Disable timestamps if your table doesn't have them
});

const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        console.log(users);
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;  // Rethrow the error for handling in the calling function
    }
};

export default getAllUsers;