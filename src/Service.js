import axios from 'axios'
import React from 'react'
import { useEffect, useState} from 'react'

function Service() {
    const[userList,setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async()=>{
        try {
            let userData = await axios.get("https://crmhack.herokuapp.com/service")
            setUserList(userData.data)
        } catch (error) {
            console.log('error')
        }
    }
   

    return (
        <>
            <div className="d-sm-flex align-items-flex-end justify-content-center mb-4">
                <h1 className="h3 mb-0 text-gray-800">SERVICE REQUEST</h1>
                
            </div>

          

            <div>
            <table class="table table-success">
                <tr>
                <th>Company</th>
                <th>Service Request</th>
                <th>Details</th>
                <th>Request Date</th>
                <th>Solved Date</th>
                
              
                </tr>
                <tbody>{
                    
                    userList.map((data)=>{
                        return <tr>
                        <td>{data.company}</td>
                        <td>{data.service}</td>
                        <td>{data.details}</td>
                        <td>{data.rdate}</td>
                        <td>{data.sdate}</td>

                        
                        
                    </tr>
                    })
                    }
                    
                   
                </tbody>
            </table>
            </div>

        </>
    )}

export default Service
