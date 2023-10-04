import { Router } from "express";
import { createEmployes, getEmployeeById, getEmployees } from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees',getEmployees)
router.post('/create/employee',createEmployes)
router.get('/get/employee/:id',getEmployeeById)
export default router