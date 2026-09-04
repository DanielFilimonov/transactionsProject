# Finance — фронтенд

Фронтенд приложения для учёта личных финансов. В этой ветке (`main`) работает полностью на клиентском состоянии, без обращений к серверу — все транзакции и статистика хранятся и считаются в Redux-сторе.

## Стек

- React 19 + TypeScript, Vite
- Redux Toolkit (`createEntityAdapter`, `createSelector`) — хранение транзакций и вычисление статистики на клиенте
- React Hook Form + Yup — форма добавления транзакции и её валидация
- ESLint

## Функционал

- Добавление транзакции (доход/расход) через модальную форму; для расходов дополнительно выбирается категория.
- Список последних транзакций (`LatestTransactionsBlock`) с датой, категорией и суммой.
- Сводка по балансу/доходам/расходам (`TotalAmountBlock`) — считается селектором `getStats` из `statsSelectors.ts`.
- Расходы по категориям с процентом от общей суммы расходов (`TotalAmountsCategoriesBlock`, `getExpensesCategoriesToArr`).
- Фильтр периода — месяц/полгода/год (`DateFiltersBlock`, `dateFiltersSlice`) — общий стейт, по которому фильтруются транзакции (`getFiltredTransactions`).
- Toast-уведомления об успехе/ошибке добавления транзакции (`toastSlice`).

Серверная версия того же фронтенда (данные и статистика приходят по REST API через RTK Query) — в ветке `backend`.

## Запуск

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
  app/
    App.tsx
    hooks.ts             # типизированные useAppDispatch/useAppSelector
  components/            # презентационные компоненты (UI-блоки главной страницы)
  features/
    transactions/
      transactionsSlice.ts   # entity-адаптер, начальные тестовые данные, add/update/delete
      statsSelectors.ts       # вычисление баланса, сумм и расходов по категориям из стора
      transactionsForm/       # форма добавления транзакции, валидация, категории
      utils/                  # форматирование дат/сумм, расчёт периода фильтра
    dateFilters/          # dateFiltersSlice — период фильтрации (month/halfyear/year)
    toast/                # toastSlice — очередь toast-уведомлений
  store/
    store.ts             # конфигурация Redux store
  types/
    tsTypes.ts           # общие типы (Transaction, PeriodType и т.д.)
```
