import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import { getMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get('/:id',protectRoute,getMessages);
router.post('/send/:id',protectRoute,sendMessage);//before sendMessage function executes the user should be authorised...i.e. protectRoute...used
//for authorization

export default router;

