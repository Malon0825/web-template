import User from "../models/user_model.js";

/**
 * Add user in the database.
 * @returns {Promise<User>} - All user details (id, username, password, position).
 */
export const getAllUsersData = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

/**
 * Updates an existing user in the database.
 * @param {number} id - The ID of the user to update.
 * @param {string} username - The new username for the user.
 * @param {string} position - The new position for the user.
 * @returns {Promise<Object>} - The updated user details (id, username, position).
 */
export const updateUserData = async (id, username, position) => {
    try {
        const [updatedRowsCount, updatedUsers] = await User.update({
            username,
            position
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


/**
 * Deletes a user from the database.
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<Object>} - A message indicating success or failure.
 */
export const deleteUserData = async (id) => {
    try {
        const deletedRowsCount = await User.destroy({
            where: { id }
        });

        if (deletedRowsCount === 0) {
            throw new Error('User not found');
        }

        return { message: 'User successfully deleted' };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};