import { Router } from "express";
import { createEmployes, getEmployees } from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees',getEmployees)
router.post('/create/employee',createEmployes)

export default router