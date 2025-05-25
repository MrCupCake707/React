const BASE_URL = "http://localhost:3000"
export type PageinatedResult<T>={
    data: T[]
    first: number
    items: number
    last: number
    next: null|number
    pages: number
    prev: null|number
}
export type TodoDto = {
    id: string
    text: string
    done: boolean
}

export const todoListApi={
    getTodoList:(
        {page}:{page: number},
        {signal}: {signal: AbortSignal}
    )=> {
    return fetch(`${BASE_URL}/tasks?_page=${page}&_per_page=10`, {
        signal
    }).then(
        res => res.json() as Promise<PageinatedResult<TodoDto[]>>
        )
    }
}