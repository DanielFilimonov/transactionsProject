import express from "express";
import cors from "cors";
import transactionsRouter from "./routes/transactions.js";
import statsRouter from "./routes/stats.js";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? "http://localhost:5173" }));
app.use(express.json());

app.use("/api/transactions", transactionsRouter);
app.use("/api/stats", statsRouter);

app.use((req, res) => {
	res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
	console.log(`API listening on http://localhost:${port}`);
});
