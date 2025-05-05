import React from 'react'
import { HiUserCircle } from "react-icons/hi";

export default function DashBoard() {

  const users = [
    "Velma Harding",
    "Orlando Wagner",
    "Brian Thompson",
    "Annabella Trevino",
    "Penelope O'Reilly",
    "Yusra Bauer",
    "Siena Mejia",
    "Tessa Tate",
    "Luc Curtis",
    "Sami Livingston"
  ]


  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>

      <div className="users">
        <h3>Users</h3>
        <ul>
        {users.sort().map(user => {
            return <li><HiUserCircle/> <span>{user}</span></li>
        })}
        </ul>
      </div>
    </div>
  )
}
