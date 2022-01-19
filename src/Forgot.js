import React from 'react'
import { useFormik } from 'formik'

import axios from 'axios';
function Forgot() {
   // const navigate = useNavigate()
    
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: async (values) => {
            try {
                let userData = await axios.get("https://crmhack.herokuapp.com/maillist", values);
                window.localStorage.setItem("my_token", userData.data.token);
               if(userData == true){
                alert("got your email");
               }
               else{
                   alert('type your correct email')
               }
              
               // navigate("/userlist");
            } catch (error) {
                alert('invalid user/password')
                console.error(error);
            }

           
        }
    })
    return (
  
        <div class='forgotbackground'>
             <form onSubmit={formik.handleSubmit} >
                 <h3>Forgot Password</h3>
                        <div className='form-group col-md-5 justify-content-center align-items-center'>
                            <label>User Name</label>
                            <input className='form-control'
                                name='email'
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter your Email'></input>
                        </div>
                        <div className='form-group col-md-5 justify-content-center align-items-center'>
                            <button type='submit' className='btn btn-primary rounded col-md-5 justify-content-center mt-5 align-items-center'>Submit</button>
                        </div>
                        <hr />
                   
                   </form>
        </div>
    )
}

export default Forgot
