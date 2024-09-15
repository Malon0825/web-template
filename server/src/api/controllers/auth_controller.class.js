import AuthUsecase from '../../domain/use_cases/auth_usecase.class.js';
import UserEntity from '../../domain/entities/user_entity.class.js';

class AuthController {
    constructor() {
        this.authUsecase = new AuthUsecase();
    }

    async findUserByCredentials(req, res) {
        try {
            const { username, password } = req.body;
    
            if (!username || !password) {
                return res.status(400).json({ message: 'Username and password are required' });
            }
            const loginData = new UserEntity(null, username, password, null);
            const user = await this.authUsecase.findUserByCredentials(loginData);
    
            return res.status(200).json(user);
        } catch (error) {
            console.error('Error in findUserByCredentialsController:', error);
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    
    async addUserData(req, res) {
        try {
            const { username, password, position } = req.body; 

            if (!username || !password || !position) {
                return res.status(400).json({ message: 'Username, password, and position are required' });
            }
            const userData = new UserEntity(null, username, password, position);
            const addedUserData = await this.authUsecase.addUserData(userData);
    
            return res.status(200).json(addedUserData);
        } catch (error) {
            console.error('Error in findUserByCredentialsController:', error);
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }
}

export default AuthController;


