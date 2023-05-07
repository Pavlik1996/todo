import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://social-network.samuraijs.com/api/1.1'
    }),
    endpoints: () => ({})
})