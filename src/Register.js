import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                let userData = await axios.post("https://crmhack.herokuapp.com/register", values);
                window.localStorage.setItem("my_token", userData.data.token);
                alert("User Created");
            } catch (error) {
                console.error(error);
            }

            navigate("/");
        }
    })
    return (
        <>

            <div className='row justify-content-center align-items-center'>

                <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 rounded" style={{ backgroundColor: "#eee" }}>
                    <h3 className='text-center'>Registration Form - CRM</h3><hr />
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row ml-1'>
                            <div className='form-group col-lg-6'>
                                <label>First Name</label>
                                <input className='form-control'
                                    name='fname'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.fname}
                                ></input>
                            </div>
                            <div className='form-group col-lg-6'>
                                <label>Last Name</label>
                                <input className='form-control'
                                    name='lname'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.lname}
                                ></input>
                            </div>
                        </div>
                        <div className='form-group col-lg-12'>
                            <label>Email</label>
                            <input className='form-control'
                                name='email'
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter your Email'></input>
                        </div>
                        <div className='form-group col-lg-12'>
                            <label>ROLE</label>
                            <input className='form-control'
                                name='role'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.role}
                                placeholder='Admin / Manager / Employee'></input>
                        </div>
                    
                        <div className='form-group col-lg-12'>
                            <label>Password</label>
                            <input className='form-control'
                                name='password'
                                onChange={formik.handleChange}
                                type="password"
                                value={formik.values.password}
                                placeholder='Enter your password'></input>
                        </div>
                        <div className='form-group col-lg-12'>
                            <label>Phone Number</label>
                            <input className='form-control'
                                name='phone'
                                onChange={formik.handleChange}
                                type="number"
                                value={formik.values.phone}
                                placeholder='Enter your phone Number'></input>
                        </div>
                        <div className='form-group col-lg-12'>
                            <button type='submit' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center'>Submit</button>
                        </div><hr />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register