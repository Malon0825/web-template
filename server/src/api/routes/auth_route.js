import { Router } from "express"; 
import AuthController from "../controllers/auth_controller.class.js";
const authRouter = Router();
//router.use(logger);

const authController = new AuthController();

authRouter.get('/login', authController.findUserByCredentials.bind(authController));

authRouter.post('/signup', authController.addUserData.bind(authController));

authRouter.post('/update-password', authController.updateUserPassword.bind(authController));

export default authRouter;
