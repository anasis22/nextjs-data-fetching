"use client"
import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  console.log("Hello world to the users")
  return (
    <div>
        <h2>Dashboard</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <h5>Hello, {name}</h5>
    </div>
  )
}
 