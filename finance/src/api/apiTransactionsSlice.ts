import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Transaction } from "../features/tsTypes";

export const apiTransactionsSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  endpoints: builder => ({
    getTransactions: builder.query<Transaction[], string>({
      query: () => '/transactions'
    })
  }) 
})

export const { useGetTransactionsQuery } = apiTransactionsSlice;