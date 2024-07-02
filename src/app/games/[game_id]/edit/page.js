import connect from "@/utils/connect"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function Page({params}) {
    const db = connect()
    const game = (await db.query(`SELECT * FROM games WHERE id = $1`, [params.game_id])).rows[0]

    console.log(game)

    async function handleSubmit(formData) {
        "use server"
        // need to make a new db object to run the query on. The previous one is dead :(
        const db = connect()
        // making a normal object out of the formData
        const data = Object.fromEntries(formData)
        // destructuring each of the properties from the data object into their own varaibles.
        console.log(data)
        const {title, img_url, description, genre, year_released, score, platform, developer} = data
        db.query(`UPDATE games SET
            title = $1,
            img_url = $2,
            description = $3,
            genre = $4,
            year_released = $5,
            score = $6,
            platform = $7,
            developer = $8
            WHERE id = $9
            `, [title, img_url, description, genre, year_released, score, platform, developer, params.game_id])

            revalidatePath(`/games/${params.game_id}`)
            redirect(`/games/${params.game_id}`)
    } 

    return (
        <div>
            <form action={handleSubmit}style={{color: "black"}} className="flex flex-col w-60 m-auto    *:text-black">
                <input className="text-black" name="title" placeholder="title" defaultValue={game.title} />
                <input name="img_url" placeholder="img_url" defaultValue={game.img_url}/>
                <input name="description" placeholder="description" defaultValue={game.description}/>
                <input name="genre" placeholder="genre" defaultValue={game.description}/>
                <input name="year_released" placeholder=" year_released" defaultValue={game.year_released}/> 
                <input name="score" placeholder="score" defaultValue={game.score}/>
                <input name="platform" placeholder=" platform" defaultValue={game.platform}/>
                <input name="developer" placeholder=" developer" defaultValue={game.developer}/>
                <button type="submit" className="m-8 border-solid border-2 border-orange-700 hover:border-rose-600" style={{color: "tomato"}}>_submit</button>
            </form> 
        </div>
    )
}
