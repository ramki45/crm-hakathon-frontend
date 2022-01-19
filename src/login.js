import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                let userData = await axios.post("https://crmhack.herokuapp.com/login", values);
                window.localStorage.setItem("my_token", userData.data.token);
                alert("Login Succes");
                navigate("/userlist");
            } catch (error) {
                alert('invalid user/password')
                console.error(error);
            }

           
        }
    })

    return (
        <>

            <div className='row justify-content-center align-items-center' >

                <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 mt-10 rounded" style={{ backgroundColor: "white" }}>
                    <h3 className='text-center'>CUSTOM RELATIONSHIP MANAGEMENT</h3><hr />
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group col-lg-12'>
                            <label>User Name</label>
                            <input className='form-control'
                                name='email'
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter your Email'></input>
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
                        <div className='form-group col-lg-12 '>
                            <button type='submit' className='btn btn-primary rounded col-lg-12 justify-content-center mt-5 align-items-center'>Log in</button>
                        </div><hr />
                        <div className='form-group col-lg-12 text-center'><p className='text-center'>Don't have account?</p>
                            <Link to={'/register'}> <button type='button' className='btn btn-primary rounded col-sm-5 justify-content-center text-center'>Sign Up</button></Link>
                        </div>                   
                             <p className='forgot-password text-end mt-2'>
                            <Link to={'/forgot'}>Forgot Password?</Link>
                            </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login