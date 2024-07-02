import Link from "next/link"
import { Logo } from "./icons/Logo"

import { SignInButton, UserButton, SignedIn, SignedOut} from "@clerk/nextjs"

import { auth } from "@clerk/nextjs/server"
import { currentUser } from "@clerk/nextjs/server"
export default async function NavigationBar() {
    const userInfo = await currentUser()
    console.log(userInfo)
    const user = auth()
    console.log(user)
    return (
        <ol className="flex sticky *:m-4 items-start h-1/6">
            <li><Link href='/'><Logo/></Link></li>
            <li><Link href='/games'>latest games</Link></li>
            <li><Link href='/games/submit-game'>submit a game</Link></li>
            <li><Link href='/forum'>forum</Link></li>
            <li>
                <SignedIn>
                    <UserButton />
                    {userInfo ? <p>Welcome back {userInfo.firstName}</p> : ''}
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </li>
        </ol>
    )
}