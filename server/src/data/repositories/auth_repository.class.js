import { findUserByCredentials, addUserData } from "../datasources/auth_datasource.js"
import User from '../models/user_model.js';
import { hash, compareHash } from "../../core/utilities/text_hashing.js";
class AuthRepository {


    /**
     * Find all users.
     * @returns {Promise<User>}
     */
    async findUserByCredentials(userEntity) {
        try {
            const { username, password } = userEntity;

            const user = await findUserByCredentials(username);
            const isPasswordValid = await compareHash(password, user.password);
            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }

            return user;
        } catch (error) {
            console.error('Error finding user:', error);
            throw error;
        }
    }

        /**
     * Find all users.
     * @returns {Promise<User>}
     */
        async addUserData(userEntity) {
            try {
                const { username, password, position } = userEntity;

                const hashPassword = await hash(password);
                return await addUserData(username, hashPassword, position);
            } catch (error) {
                console.error('Error finding user:', error);
                throw error;
            }
        }
}

export default AuthRepository;
