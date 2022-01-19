import axios from 'axios'
import React from 'react'
import { useEffect, useState} from 'react'
import {Link}from 'react-router-dom'

function Lead() {
    const[userList,setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async()=>{
        try {
            let userData = await axios.get("https://crmhack.herokuapp.com/contact")
            setUserList(userData.data)
        } catch (error) {
            console.log('error')
        }
    }
   

    return (
        <>
            <div className="d-sm-flex align-items-flex-end justify-content-center mb-4">
                <h1 className="h3 mb-0 text-gray-800">LEADS</h1>
                
            </div>

            <Link to={'/contact'}><button className='btn btn-primary text-right mb-3'>Create Contact</button> </Link>

            <div>
            <table class="table table-success">
                <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Address</th>
                <th>Status</th>
              
                </tr>
                <tbody>{
                    
                    userList.map((data)=>{
                        return <tr>
                        <td>{data.fname}</td>
                        <td>{data.company}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>
                        <td>{data.status}</td>

                        
                        
                    </tr>
                    })
                    }
                    
                   
                </tbody>
            </table>
            </div>

        </>
    )
}

export default Lead
