# Finance Tracker

Приложение для учёта личных финансов: фронтенд на React + бэкенд на Express/Prisma.

## Структура репозитория

- [`finance/`](finance/README.md) — фронтенд (Vite + React + Redux Toolkit + RTK Query).
- [`server/`](server/README.md) — бэкенд (Express + Prisma + SQLite), REST API для транзакций и статистики.

## Быстрый старт

```bash
# 1. Бэкенд
cd server
npm install
npm run prisma:migrate
npm run prisma:seed
npm run dev              # http://localhost:4000

# 2. Фронтенд (в отдельном терминале)
cd finance
npm install
npm run dev              # http://localhost:5173
```

Подробный контракт API — в [`server/README.md`](server/README.md), детали фронтенда — в [`finance/README.md`](finance/README.md).
