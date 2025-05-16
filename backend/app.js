import express from "express";
const app = express();
import moviesRoutes from "./src/routes/movies.js"
import cookieParser from "cookie-parser";
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import employeesRoutes from "./src/routes/employees.js"
import registerCustomers from "./src/routes/registerCostumers.js"
import costumersRoutes from "./src/routes/costumers.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"


app.use(express.json());
app.use(cookieParser());



//Empieza CRUD
//1.definir rutas de funciones
app.use("/api/movies", moviesRoutes)

app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/employees", employeesRoutes);

app.use("/api/registerCustomers", registerCustomers)
app.use("/api/costumers", costumersRoutes);

app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);

app.use("/api/recoveryPassword", recoveryPasswordRoutes)







//antes de crud
export default app;