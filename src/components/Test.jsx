"use client"

import { useState } from "react"
export default function Test({theText}) {
    const [greeting, setGreeting] = useState(theText ?? 'This is a fallback')
    return (
        <p>This was the prop passed: {greeting}</p>
    )
}