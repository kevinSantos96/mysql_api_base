import { Router } from "express";
import { connection_mysql } from "../controllers/index.controller.js";

const router = Router()

router.get('/empleado',connection_mysql)

export default router