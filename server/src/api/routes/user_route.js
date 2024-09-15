import { Router } from "express"; 
import logger from "../../core/middleware/logger.js";
import UserController from '../controllers/user_controller.class.js';

const userRouter = Router();
//router.use(logger);

const userController = new UserController();

userRouter.get('/', userController.getAllUsers.bind(userController));

userRouter.put('/', userController.updateUserData.bind(userController));

userRouter.delete('/', userController.deleteUserData.bind(userController));

export default userRouter;
