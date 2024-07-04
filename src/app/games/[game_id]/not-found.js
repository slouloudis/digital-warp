import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <h2>That game doesn't exist. Why don't you make it?</h2>
            <p className="text-3xlg">(≧︿≦)</p>
            <Link href='/'>Go back home</Link>
        </div>
    )
}