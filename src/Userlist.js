import axios from 'axios'
import React from 'react'
import { useEffect, useState} from 'react'
import {Link}from 'react-router-dom'

function UserList() {
    const[userList,setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async()=>{
        try {
            let userData = await axios.get("https://crmhack.herokuapp.com/userlist")
            setUserList(userData.data)
        } catch (error) {
            console.log('error')
        }
    }
    let handleDelete = async (_id) =>{
    try {
        await axios.delete(`https://crmhack.herokuapp.com/user/${_id}`)
        alert('userdeleted')
        fetchUsers()
    }
     catch (error) {
        console.log('error')
    }
    }

    return (
        <>
            <div className="d-sm-flex align-items-flex-end justify-content-center mb-4">
                <h1 className="h3 mb-0 text-gray-800">USER LIST</h1>
                
            </div>

           

            <div>
            <table class="table table-success">
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              
                </tr>
                <tbody>{
                    
                    userList.map((data)=>{
                        return <tr>
                        <td>{data.fname}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.role}</td>

                        <td><Link to={`/edit/${data._id}`}><button className='btn btn-primary'>Edit</button></Link></td>
                        <td><button onClick={()=>handleDelete(data._id)} className='btn btn-danger'>Delete</button></td> 
                        
                    </tr>
                    })
                    }
                    
                   
                </tbody>
            </table>
            </div>

        </>
    )
}

export default UserList
