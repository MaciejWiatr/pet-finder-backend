import express from "express";
import advertRouter from "./routes/advert.router";
const app = express();

app.use("/v1/adverts", advertRouter);

export default app;
