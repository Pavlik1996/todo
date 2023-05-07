import { api } from "./api/api";

const taskApi = api.injectEndpoints({
    endpoints: (build) => ({
        getTasks: build.query<any, string>({
            query: (todoListId) => `todo-lists/${todoListId}/tasks`,
            providesTags: ['Tasks']
        }),
        addTask: build.mutation<any, any>({
            query: ({ todoListId, title }) => {
                return {
                    url: `todo-lists/${todoListId}/tasks`,
                    method: 'POST',
                    body: { title }
                }
            },
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),
        updateTask: build.mutation<any, any>({
            query: ({ todoListId, taskId, newTitle }) => {
                return {
                    url: `todo-lists/${todoListId}/tasks/${taskId}`,
                    method: 'PUT',
                    body: { newTitle }
                }
            },
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),
        deleteTask: build.mutation<any, any>({
            query: ({ todoListId, taskId }) => {
                return {
                    url: `todo-lists/${todoListId}/tasks/${taskId}`,
                    method: 'DELETE',
                }
            },
            transformResponse: (response: { data: any }, meta, arg) => response.data
        })
    })
})

export const {
    useAddTaskMutation,
    useDeleteTaskMutation,
    useGetTasksQuery,
    useUpdateTaskMutation
} = taskApi