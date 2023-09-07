// src/server.ts
import express from "express";
import cors from "cors";
import tripRoutes from "./routes/trip";
import authRoutes from "./routes/auth";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Trip routes
app.use("/api/trips", tripRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server ${port} is up and running`);
});
