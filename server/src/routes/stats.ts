import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { getPeriodStart, isPeriodType } from "../dateRange.js";

const router = Router();

// GET /api/stats?period=month|halfyear|year
router.get("/", async (req, res) => {
	const { period } = req.query;

	const where =
		typeof period === "string" && isPeriodType(period)
			? { date: { gte: getPeriodStart(period) } }
			: {};

	const transactions = await prisma.transaction.findMany({ where });

	let incomeAmountSum = 0;
	let expenseAmountSum = 0;
	const expensesByCategory: Record<string, number> = {};

	for (const t of transactions) {
		if (t.type === "income") {
			incomeAmountSum += t.amount;
		} else if (t.type === "expense") {
			expenseAmountSum += t.amount;
			expensesByCategory[t.category] =
				(expensesByCategory[t.category] ?? 0) + t.amount;
		}
	}

	res.json({
		incomeAmountSum,
		expenseAmountSum,
		balanceAmount: incomeAmountSum - expenseAmountSum,
		expensesByCategory,
	});
});

export default router;
