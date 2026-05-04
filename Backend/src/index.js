import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import UsersRoute from "./routes/users.routes.js";
import AuthRoute from "./routes/auth.routes.js";
import DailySalesRoute from "./routes/daily-sales.routes.js";
import DashboardRoute from "./routes/dashboard.routes.js";
import MonthlySalesRoute from "./routes/monthly-sales.routes.js";
import PredictRoute from "./routes/predict.routes.js";
import { errorHandler } from "./utils/errorHandler.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/dashboard", DashboardRoute);
app.use("/users", UsersRoute);
app.use("/auth", AuthRoute);
app.use("/sales/daily", DailySalesRoute);
app.use("/sales/monthly", MonthlySalesRoute);
app.use("/predict", PredictRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server sedang berjalan di PORT : ${PORT}`);
});
