import connect from "@/utils/connect"
import { DeleteButton } from "@/components/DeleteButton"
import { Suspense } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function Page({params}) {
    // 1
    // 20001
    // some-game-name
    let game;
    try {
        const db = connect()
        game = (await db.query(`SELECT * FROM games WHERE id=$1`, [params.game_id])).rows[0]
    } catch (err) {
        // error will be thrown if we try to query the id column with a string 
        // if the user visits (/games/this-is-a-string-not-an-id)
        notFound()
    }

    // if game is undefined (because that id isn't int our database)
    // make sure to import { notFound } from "next/navigation"
    // this will tell nextjs to show the not-found.js file instead of the page.
    if (!game) {
        notFound()
    }

    return (
        <div className="flex justify-center align-top flex-col w-80 text-center mx-auto">
          <Suspense fallback={<p>Loading..</p>}>
          <DeleteButton id={params.game_id}/>
            <Link href={`/games/${params.game_id}/edit`}>edit</Link>
            <h2 className="text-2xl">{game.title}</h2>
            <p>{game.description}</p>
            <div className="flex justify-center">
                <p>{game.year_released} | {game.genre}</p>
            </div>
            <div className="flex justify-center text-sm *:mx-4 m-2">
                <p>{game.score}</p>
                <p>available_on: {game.platform}</p>
                <p>developed_by: {game.developer}</p>
            </div>
          </Suspense>
        </div>
    )
}