import AuthRepository from "../../data/repositories/auth_repository.class.js";
import UserEntity from "../entities/user_entity.class.js";

class AuthUsecase {
    constructor(authRepository = new AuthRepository()) {
        this.authRepository = authRepository;
    }
    async findUserByCredentials(userEntity) {
        try {

            const userData = await this.authRepository.findUserByCredentials(userEntity);
    
            if (!userData) {
                throw new Error('User not found');
            }
            const user = new UserEntity(userData.id, userData.username, null, userData.position);

            console.log(user);  
    
            return user; 
        } catch (error) {
            console.error('Error in AuthUsecase.findUserByCredentials:', error);
            throw error;
        }
    }    

    async addUserData(userEntity) {
        try {

            const userData = await this.authRepository.addUserData(userEntity);
    
            if (!userData) {
                throw new Error('User not added');
            }
            const user = new UserEntity(userData.id, userData.username, userData.password, userData.position);

            console.log(user);  
    
            return user; 
        } catch (error) {
            console.error('Error in AuthUsecase.addUserData:', error);
            throw error;
        }
    }   
    
    async updateUserPassword(userEntity) {
        try {
            const userData = await this.authRepository.updateUserPassword(userEntity);
    
            if (!userData) {
                throw new Error('Password updated failed');
            }
            const user = new UserEntity(null, null, userData.password, null);
            
            return user; 
        } catch (error) {
            console.error('Error in AuthUsecase.updateUserPassword:', error);
            throw error;
        }
    }
}

export default AuthUsecase;


