import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.transaction.deleteMany();

	await prisma.transaction.createMany({
		data: [
			{
				amount: 500,
				type: "expense",
				category: "Еда",
				title: "Продукты",
				date: new Date(),
			},
			{
				amount: 500,
				type: "expense",
				category: "Еда",
				title: "Продукты",
				date: new Date("2026-01-05T11:27:18.429Z"),
			},
			{
				amount: 1000,
				type: "income",
				category: "подработка",
				title: "доход",
				date: new Date("2026-02-05T11:27:18.429Z"),
			},
			{
				amount: 120000,
				type: "income",
				category: "Зарплата",
				title: "доход",
				date: new Date(),
			},
			{
				amount: 1200,
				type: "expense",
				category: "Развлечения",
				title: "Кино",
				date: new Date(),
			},
			{
				amount: 3400,
				type: "expense",
				category: "Транспорт",
				title: "Такси",
				date: new Date(),
			},
		],
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
