'use client'
export default function ErrorPage({error, reset}) {
    return (
        <div>
            <p>We ran into an issue:</p>
            <p>Error message: {error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}