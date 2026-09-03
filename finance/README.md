# Finance Tracker — Frontend

Клиентская часть проекта [Finance Tracker](../README.md). React + TypeScript + Vite, состояние и работа с API — через Redux Toolkit / RTK Query.

Общее описание проекта, стек, запуск и структура репозитория — в [README корня репозитория](../README.md).

## Запуск

```bash
npm install
npm run dev
```

Приложение поднимется на `http://localhost:5173` и обращается к API на `http://localhost:4000` (см. [`server/README.md`](../server/README.md) для запуска бэкенда).

## Структура

```
src/
├── api/          # RTK Query API-слайс и обработка ошибок запросов
├── app/          # точка сборки App, типизированные хуки Redux
├── components/   # UI-блоки страницы (по одному на каждый визуальный блок)
│   └── common/   # переиспользуемые компоненты вне конкретного домена (QueryState)
├── features/     # доменная логика: слайсы, форма транзакции, утилиты форматирования
├── store/        # конфигурация Redux store
└── types/        # общие TypeScript-типы приложения
```

## Скрипты

| Команда | Что делает |
|---|---|
| `npm run dev` | Дев-сервер Vite |
| `npm run build` | Продакшн-сборка |
| `npm run lint` | Проверка ESLint |
| `npm run preview` | Просмотр продакшн-сборки локально |
