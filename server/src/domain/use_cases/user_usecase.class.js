import UserRepository from "../../data/repositories/user_repository.class.js";
import UserEntity from "../entities/user_entity.class.js";

class UserUsecase {
    constructor(userRepository = new UserRepository()) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        try {
            const users = await this.userRepository.getAllUsers();
            users.forEach(user => console.log(user));
            
            return users; 
        } catch (error) {
            console.error('Error in UserUsecase.getAllUsers:', error);
            throw error;
        }
    }

    async updateUserData(userEntity) {
        try {
            const userData = await this.userRepository.updateUserData(userEntity);
    
            if (!userData) {
                throw new Error('User not found');
            }
            const user = new UserEntity(userData.id, userData.username, null, userData.position);
            
            return user; 
        } catch (error) {
            console.error('Error in UserUsecase.updateUserData:', error);
            throw error;
        }
    }

    
    async deleteUserData(id) {
        try {
            return await this.userRepository.deleteUserData(id);
        } catch (error) {
            console.error('Error in UserUsecase.deleteUserData:', error);
            throw error;
        }
    }
}

export default UserUsecase;
