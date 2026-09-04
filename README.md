# Finance Tracker

Приложение для учёта личных финансов на React.

## Структура репозитория

- [`finance/`](finance/README.md) — фронтенд (Vite + React + Redux Toolkit).

Бэкенд (Express + Prisma + SQLite) реализован в ветке `backend` (папка `server/`, с REST API для транзакций и статистики) — в этой ветке фронтенд работает на клиентском стейте без API.

## Быстрый старт

```bash
cd finance
npm install
npm run dev              # http://localhost:5173
```

Подробности — в [`finance/README.md`](finance/README.md).
