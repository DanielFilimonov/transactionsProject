# Finance — фронтенд

Фронтенд приложения для учёта личных финансов. Работает поверх REST API из [`../server`](../server/README.md).

## Стек

- React 19 + TypeScript, Vite
- Redux Toolkit + RTK Query — запросы к API, кеширование, инвалидация тегов при изменении данных
- React Hook Form + Yup — форма добавления транзакции и её валидация
- ESLint

## Функционал

- Добавление транзакции (доход/расход) через модальную форму; для расходов дополнительно выбирается категория.
- Список последних транзакций (`LatestTransactionsBlock`) с датой, категорией и суммой.
- Сводка по балансу/доходам/расходам (`TotalAmountBlock`) — считается на сервере (`GET /api/stats`).
- Расходы по категориям с процентом от общей суммы расходов (`TotalAmountsCategoriesBlock`).
- Фильтр периода — месяц/полгода/год (`DateFiltersBlock`, `dateFiltersSlice`) — общий стейт, влияющий на все запросы к API.
- Toast-уведомления об успехе/ошибке добавления транзакции (`toastSlice`).
- Единообразная обработка состояний loading/error/empty для блоков, зависящих от API — компонент `QueryState`.

## Запуск

Перед запуском фронтенда должен быть поднят бэкенд (см. [`../server/README.md`](../server/README.md), по умолчанию `http://localhost:4000`).

```bash
cd finance
npm install
npm run dev       # http://localhost:5173
npm run build     # продакшн-сборка
npm run lint
```

## Структура

```
src/
  api/
    apiSlice.ts          # RTK Query: getTransactions, addTransaction, getStats
    apiError.ts          # разбор ошибок ответа API
  app/
    App.tsx
    hooks.ts             # типизированные useAppDispatch/useAppSelector
  components/            # презентационные компоненты (UI-блоки главной страницы)
  features/
    transactions/        # форма добавления транзакции, валидация, категории, утилиты форматирования
    dateFilters/          # dateFiltersSlice — период фильтрации (month/halfyear/year)
    toast/                # toastSlice — очередь toast-уведомлений
  store/
    store.ts             # конфигурация Redux store
  types/
    tsTypes.ts           # общие типы (Transaction, PeriodType и т.д.)
```
