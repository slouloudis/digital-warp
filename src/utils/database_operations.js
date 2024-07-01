"use server"
import { revalidatePath } from "next/cache"
import connect from "./connect"
import { redirect } from "next/navigation"

export async function handleDelete(id) {
    const db = connect()
    db.query(`DELETE FROM games WHERE id = $1`, [id])
    revalidatePath('/games')
    redirect('/games')
}