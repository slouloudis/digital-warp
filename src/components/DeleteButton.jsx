"use client"
import { handleDelete } from "@/utils/database_operations"
// has to be a client component because we're listening for a click event
// if you are going to use an event listener (like onClick or onChange, or your going to use ANY of the react hooks) the component has to be a client component.

export function DeleteButton({id}) {
    return <button onClick={() => {
        handleDelete(id)
    }}>X</button>
}