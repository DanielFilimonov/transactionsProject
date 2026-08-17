# Finance API

Простой REST-бэкенд для проекта `finance`. Без авторизации — один общий список транзакций.

## Запуск

```bash
cd server
npm install
npm run prisma:migrate   # создаёт SQLite базу и таблицы (один раз, или после изменения schema.prisma)
npm run prisma:seed      # наполняет базу тестовыми транзакциями
npm run dev              # http://localhost:4000
```

БД — файл `server/prisma/dev.db` (SQLite), ничего дополнительно ставить не нужно.
CORS разрешён для `http://localhost:5173` (дефолтный порт Vite) — см. `.env`.

## Контракт API

### Transaction

```ts
interface Transaction {
	id: string;
	amount: number;
	type: "income" | "expense";
	category: string;
	title: string;
	date: string; // ISO 8601
}
```

### `GET /api/transactions`

Список транзакций, отсортирован по дате (новые первыми).

Query-параметры:
- `period` — `month` | `halfyear` | `year` (опционально). Если передан, возвращаются только транзакции с `date >= сейчас - период`, аналогично текущей клиентской фильтрации в `dateFiltersSlice`.

Ответ: `200 Transaction[]`

### `POST /api/transactions`

Body:
```ts
{
  amount: number;   // > 0, <= 100_000_000
  type: "income" | "expense";
  category: string; // непустая строка
  title: string;    // непустая строка, <= 50 символов
  date?: string;    // ISO 8601, по умолчанию — текущее время
}
```

Ответ: `201 Transaction` или `400 { error }` при невалидных данных.

### `PATCH /api/transactions/:id`

Body — любое подмножество полей из `POST`.

Ответ: `200 Transaction`, `400 { error }`, `404 { error }` если id не найден.

### `DELETE /api/transactions/:id`

Ответ: `204` без тела, `404 { error }` если id не найден.

### `GET /api/stats`

Query-параметры: `period` — как в `GET /api/transactions`.

Ответ:
```ts
{
  incomeAmountSum: number;
  expenseAmountSum: number;
  balanceAmount: number;
  expensesByCategory: Record<string, number>;
}
```

Это серверный аналог `getStats` / `getExpensesCategoriesToArr` из `statsSelectors.ts` — можно либо продолжать считать статистику на клиенте по списку транзакций, либо перейти на этот эндпоинт и упростить селекторы.

## Структура

```
server/
  prisma/
    schema.prisma   # модель Transaction
    seed.ts         # тестовые данные (те же, что были в transactionsSlice)
  src/
    routes/transactions.ts
    routes/stats.ts
    dateRange.ts     # тот же расчёт периода, что в dateUtils.ts на фронте
    index.ts         # express app
```
