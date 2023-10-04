import express from "express";
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employes.routes.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(port)
console.log(`Server running on port ${port} 👌`)