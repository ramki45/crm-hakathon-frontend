import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';


function Contact() {
   
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://crmhack.herokuapp.com/contact", values);
                alert("contact created");
            } catch (error) {
                console.error('contact creation error');
            }
        }
    })
    return (
        <>

            <div className='row justify-content-center align-items-center'>

                <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 rounded" style={{ backgroundColor: "white" }}>
                    <h3 className='text-center'>Contact Form - CRM</h3><hr />
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
                        <div className='form-group col-lg-6'>
                            <label>Email</label>
                            <input className='form-control'
                                name='email'
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter your Email'></input>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Company Name</label>
                            <input className='form-control'
                                name='company'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.company}
                                placeholder='company name'></input>
                        </div>
                    
                        <div className='form-group col-lg-6'>
                            <label>Status</label>
                            <input className='form-control'
                                name='status'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.status}
                                placeholder='New|Qualified|Contacted'></input>
                        </div>
                        
                        
                        <div className='form-group col-lg-6'>
                            <label>Phone Number</label>
                            <input className='form-control'
                                name='phone'
                                onChange={formik.handleChange}
                                type="number"
                                value={formik.values.phone}
                                placeholder='Enter your phone Number'></input>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Social Channel</label>
                            <input className='form-control'
                                name='socialchannel'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.socialchannel}
                                placeholder='Twitter'></input>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Address</label>
                            <input className='form-control'
                                name='address'
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.address}
                                placeholder='postal,city'></input>
                        </div>
                        
                        <div className='form-group col-lg-12'>
                            <button type='submit' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center mt-2'>Submit</button>
                        </div><hr />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact