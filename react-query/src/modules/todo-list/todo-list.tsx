import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { todoListApi } from "./api"
import { useCallback, useRef, useState } from "react"

export function TodoList(){
    const [enabled, setEnabled] = useState (false)
    const {data: todoItems, 
        error, 
        isLoading, 
        isPlaceholderData,
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage
        } = useInfiniteQuery({
        queryKey: ["tasks", "list"], 
        ...todoListApi.getTodoListInfinityQueryOptions()
        enabled: enabled,
        })
        const cursorRef = useIntersection (()=> {
            fetchNextPage()
        })
        if (isLoading){
            return <div>Loading...</div>
        }
        if (error){
            return <div>error: {JSON.stringify(error)}</div>
        }
   
    return (
        <div className="p-5 mx-auto max-w [1200] mt-10">
            <h1 className="text-3xl font-bold underline mb-5">Todo List</h1>
            <button onClick={()=> setEnabled(e=> !e)}>Toggle enebled</button>

            <div>
                className={"flex flex-col gap-4" + (isPlaceholderData ? " opacity-50" : "")}
                {todoItems?.map(todo => (
                    <div className="border dorder-slate-300 rounded p-3" key={todo.id}>
                        {todo.text}
                    </div>
                ))}
            </div>
            <div className="flex gap-2 mt-4" ref={cursorRef}>
                {!hasNextPage && <div>Нет данных для загрузки </div>}
                {isFetchingNextPage && <div>...Loading</div>}
                </div>
        </div>
    )
    
}

export function useIntersection (onIntersect: () => void) {
    const unsubscribe = useRef(()=>{})
    return useCallback((el: HTMLDivElement | null)=>{
        const observer = new IntersectionObserver((enties)=>{
            enties.forEach(intersection => {
                if(intersection.isIntersecting){
                    onIntersect()
                }
            })
        })
        if (el){
            observer.observe(el)
            unsubscribe.current = () => observer.disconnect
        } else {
            unsubscribe.current()
        }
    }, [])
}