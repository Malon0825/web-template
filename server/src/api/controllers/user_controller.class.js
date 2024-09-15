import UserUsecase from '../../domain/use_cases/user_usecase.class.js';
import UserEntity from '../../domain/entities/user_entity.class.js';

class UserController {
    constructor() {
        this.usersUsecase = new UserUsecase();
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.usersUsecase.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            console.error('Error in UserController.getAllUsers:', error);
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    async updateUserData(req, res) {
        try {
            const { id, username, position } = req.body;
    
            if (!username || !position) {
                return res.status(400).json({ message: 'Username and password are required' });
            }
            const userData = new UserEntity(id, username, null, position);
            const updatedUserData = await this.usersUsecase.updateUserData(userData);
            return res.status(200).json(updatedUserData);
        } catch (error) {
            console.error('Error in UserController.updateUserData:', error);
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    async deleteUserData(req, res) {
        try {
            const { id } = req.body;
            const updatedUserData = await this.usersUsecase.deleteUserData(id);
            return res.status(200).json(updatedUserData);
        } catch (error) {
            console.error('Error in UserController.deleteUserData:', error);
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }
}

export default UserController;

