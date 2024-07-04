import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <h2>Oopsie woopsie we couldn't find that page! Our dev are running straights to their desks to fix the issue... (unless you just type in some random stuff. Then we won't fix that)</h2>
            <p className="text-3xlg">(≧︿≦)</p>
            <Link href='/'>Go back home</Link>
        </div>
    )
}