import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { getPeriodStart, isPeriodType } from "../dateRange.js";

const router = Router();

const transactionInput = z.object({
	amount: z.number().positive().max(100_000_000),
	type: z.enum(["income", "expense"]),
	category: z.string().trim().min(1),
	title: z.string().trim().min(1).max(50),
	date: z.string().datetime().optional(),
});

const serialize = (t: {
	id: string;
	amount: number;
	type: string;
	category: string;
	title: string;
	date: Date;
}) => ({
	id: t.id,
	amount: t.amount,
	type: t.type,
	category: t.category,
	title: t.title,
	date: t.date.toISOString(),
});

// GET /api/transactions?period=month|halfyear|year
router.get("/", async (req, res) => {
	const { period } = req.query;

	const where =
		typeof period === "string" && isPeriodType(period)
			? { date: { gte: getPeriodStart(period) } }
			: {};

	const transactions = await prisma.transaction.findMany({
		where,
		orderBy: { date: "desc" },
	});

	res.json(transactions.map(serialize));
});

// POST /api/transactions
router.post("/", async (req, res) => {
	const parsed = transactionInput.safeParse(req.body);
	if (!parsed.success) {
		return res.status(400).json({ error: parsed.error.flatten() });
	}

	const { amount, type, category, title, date } = parsed.data;

	const transaction = await prisma.transaction.create({
		data: {
			amount,
			type,
			category,
			title,
			date: date ? new Date(date) : new Date(),
		},
	});

	res.status(201).json(serialize(transaction));
});

// PATCH /api/transactions/:id
router.patch("/:id", async (req, res) => {
	const parsed = transactionInput.partial().safeParse(req.body);
	if (!parsed.success) {
		return res.status(400).json({ error: parsed.error.flatten() });
	}

	const { date, ...rest } = parsed.data;

	try {
		const transaction = await prisma.transaction.update({
			where: { id: req.params.id },
			data: { ...rest, ...(date ? { date: new Date(date) } : {}) },
		});
		res.json(serialize(transaction));
	} catch {
		res.status(404).json({ error: "Транзакция не найдена" });
	}
});

// DELETE /api/transactions/:id
router.delete("/:id", async (req, res) => {
	try {
		await prisma.transaction.delete({ where: { id: req.params.id } });
		res.status(204).send();
	} catch {
		res.status(404).json({ error: "Транзакция не найдена" });
	}
});

export default router;
