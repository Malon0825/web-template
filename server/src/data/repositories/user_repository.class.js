import { getAllUsersData, updateUserData, deleteUserData } from "../datasources/user_datasource.js"
import User from '../models/user_model.js';
import UserEntity from "../../domain/entities/user_entity.class.js";

class UserRepository {

    /**
     * Find all users.
     * @returns {Promise<User[]>}
     */
    async getAllUsers() {
        try {
            const usersData = await getAllUsersData();
            return usersData.map(user => new UserEntity(user.id, user.username, user.password, user.position));

        } catch (error) {
            console.error('Error finding all users:', error);
            throw error;
        }
    }

    /**
     * Find all users.
     * @returns {Promise<User[]>}
     */
    async updateUserData(userEntity) {
        try {
            const { id, username, position } = userEntity;
            return await updateUserData(id, username, position);

        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }

    /**
     * Delete a user.
     * @param {number} id - The ID of the user to delete.
     * @returns {Promise<Object>} - A message indicating success or failure.
     */
    async deleteUserData(id) {
        try {
            return await deleteUserData(id);
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
}

export default UserRepository;
