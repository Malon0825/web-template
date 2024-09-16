import User from "../models/user_model.js";

/**
 * Adds a new user to the database.
 * @param {string} username - The username of the new user.
 * @returns {Promise<User>} - The newly created user.
 */
export const findUserByCredentials = async (username) => {
    try {
        const user = await User.findOne({
            where: {
                username: username  
            }
        });
        
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
};

/**
 * Adds a new user to the database.
 * @param {string} username - The username of the new user.
 * @param {string} password - The password of the new user (will be hashed).
 * @param {string} position - The position of the new user.
 * @returns {Promise<User>} - The newly created user.
 */
export const addUserData = async (username, password, position) => {
    try {

        const newUser = await User.create({
            username,
            password,
            position
        });
        return {
            id: newUser.id,
            username: newUser.username,
            position: newUser.position
        };
    } catch (error) {
        console.error('Error adding new user:', error);
        throw error;
    }
};

/**
 * Updates an existing user in the database.
 * @param {number} id - The ID of the user to update.
 * @param {string} password - The new password for the user.
 * @returns {Promise<Object>} - The updated user details (id, username, position).
 */
export const updateUserPassword = async (id, password) => {
    try {
        const [updatedRowsCount, updatedUsers] = await User.update({
            password
        }, {
            where: { id },
            returning: true 
        });

        if (updatedRowsCount === 0) {
            throw new Error('User not found or no changes made');
        }
        const updatedUser = updatedUsers[0];
        
        return {
            id: updatedUser.id,
            username: updatedUser.username,
            position: updatedUser.position
        };
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};




