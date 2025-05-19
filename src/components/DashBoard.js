import React, { useEffect, useState } from 'react'
import { HiUserCircle } from "react-icons/hi";
import { BsEnvelope } from "react-icons/bs";
import { GetUserData } from '../data/GetUserData';
import {v4 as uuidv4} from 'uuid'

export default function DashBoard() {

  const [users, setUsers] = useState()

  
  useEffect(() => {
    const fetchData = async () => {
      setUsers(await GetUserData())
    }
    fetchData()
  }, [])
  
  
  console.log(users);

  
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>

      <div className="users">
        <h3>Users</h3>
        <ul>
        {users && users.sort().map(user => {
            return <li><div className="identity"><HiUserCircle/> <span>{user.name} {user.lastName}</span></div> <a className="contact" href={`mailto:${user.email}`}><BsEnvelope /></a></li>
        })}
        </ul>
      </div>
    </div>
  )
}
